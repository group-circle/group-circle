'use strict';

// Imports dependencies and set up http server
const request = require('request');
const postRepository= require("../src/PostRepository");
const categories = require("../src/Category")
const securityTokens = require("./securityTokens");
const metascraper = require('metascraper')
const got = require('got')

const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Don't forget to fill this before deploy to Heroku
const PAGE_ACCESS_TOKEN = securityTokens.PAGE_ACCESS_TOKEN
const VERIFY_TOKEN = securityTokens.VERIFY_TOKEN

console.log("PAGE_ACCESS_TOKEN", PAGE_ACCESS_TOKEN)
console.log("VERIFY_TOKEN", VERIFY_TOKEN)

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

const dialogContext = {}

function getUrlMetadata(targetUrl) {
  console.log("getUrlMetadata", targetUrl)
  return new Promise(async res => {
    const {body: html, url} = await got(targetUrl)
    const metadata = await metascraper({html, url})
    console.log(metadata)
    res(metadata)
  })
}

function getUserProfile(senderId) {
  return new Promise(res => {
    request({
      url: `https://graph.facebook.com/${senderId}`,
      qs: { 
        access_token: PAGE_ACCESS_TOKEN,
        fields: "first_name,last_name,profile_pic"
      },
      method: 'GET'
    }, function(error, response, body) {
      if (error) {
          console.log('Error sending message: ' + response.error);
      }
      const userProfile = JSON.parse(body.replace("\/", "/"))
      console.log("GOT USER profile Information", userProfile)
      res(userProfile)
    });
  })
}

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
    let body = req.body;
  
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED');

      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(async function(entry) {
        // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0]
        console.log("webhook_event", webhook_event)
        const senderId = webhook_event.sender && webhook_event.sender.id;
        const alreadyHaveURL = dialogContext[senderId] && dialogContext[senderId].url
        const alreadyHaveCategory = dialogContext[senderId] && dialogContext[senderId].category
        const isReceivedTextMessage = !!webhook_event.message
        const isReceivedURL =
          webhook_event.message && webhook_event.message.nlp && webhook_event.message.nlp.entities &&
          webhook_event.message.nlp.entities.url && webhook_event.message.nlp.entities.url.length > 0
          console.log("isReceivedURL", isReceivedURL)
          console.log("isReceivedTextMessage", isReceivedTextMessage)
          console.log("alreadyHaveURL", alreadyHaveURL)
          console.log("dialogContext", dialogContext)
        const isPostBack = webhook_event.postback && webhook_event.postback.payload

        if (isPostBack && isPostBack === "confirm submit") {
          receivedConfirm(webhook_event)
        } else if (isReceivedURL) {
          console.log("receivedURL")
          receivedURL(webhook_event)
        } else if (isReceivedTextMessage) {
          if (alreadyHaveURL) {
            if (alreadyHaveCategory) {
              // 아마 센더 메시지 가 적혀있을 것이다.
              console.log("receivedComment")
              receivedComment(webhook_event)
              
            } else {
              // 아마 카테고리 정보를 가지고 있을 것이다
              console.log("receivedCategory")
              receivedCategory(webhook_event)
            }
          } else {
            const userProfile = await getUserProfile(senderId)

            dialogContext[senderId] = {
              userProfile: userProfile
            }
            console.log("receivedText")
            receivedText(webhook_event)
          }
        }
      });
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  });

function receivedText(event) {
  var senderId = event.sender && event.sender.id;
  sendTextMessage(senderId, "Please provide the URL you would like to share.");
}

function receivedConfirm(event) {
  var senderId = event.sender && event.sender.id;
  postRepository.addPost(dialogContext[senderId])

  // 고맙다고 마무리 인사하기 
  sendTextMessage(senderId, 
    `Thank you for submission. I will let related group moderators check the article.`);

  // 세션 정보 지우기
  delete dialogContext[senderId]
}

function receivedComment(event) {
  var senderId = event.sender.id;
  var comment = event.message.text;

  dialogContext[senderId].comment = comment

  // 모든 정보 합친 템플릿 레스폰스 보내고 컨펌 받기 
  const postInfo = dialogContext[senderId]
  
  sendConfirmTemplate(senderId, postInfo)

  // // 파베에 링크와 카테고리 정보 쏘기 
  // dialogContext[senderId].category = categories[category]
  // // TODO: 기록 완료 후에 응답 주면 더 안정적이고 좋을듯
  // postRepository.addPost(dialogContext[senderId])

  // // ask for sender comments 
  // sendTextMessage(senderId, 
  //   `Thanks. This article world most useful to "${category}" groups.
  //   Finally, leave a message for the group operator. It should be like why this post is helpful to the community or why you are sharing it.
  //   `);


  // // 고맙다고 마무리 인사하기 
  // sendTextMessage(senderId, 
  //   `Ok. This article is related to "${category}". Thank you for submission. I will let related group moderators check the article.`);

  // // 세션 정보 지우기
  // delete dialogContext[senderId]
}

function receivedCategory(event) {
  var senderId = event.sender.id;
  var category = event.message.text;

  // 파베에 링크와 카테고리 정보 쏘기 
  dialogContext[senderId].category = categories[category]

  // // TODO: 기록 완료 후에 응답 주면 더 안정적이고 좋을듯
  // postRepository.addPost(dialogContext[senderId])

  // ask for sender comments 
  sendTextMessage(senderId, 
`Thanks. This article world most useful to "${category}" groups.

Finally, leave a message for the group operator. It should be like why this post is helpful to the community or why you are sharing it.
`, [
      "It's Funny",
      "Fascinating Event",
      "Latest job posting",
      "Urgent question",
      "Latest research",
      "Viralable video",
      "Breaking news",
      "Eengaging topic",
      "Useful tip"
    ])



  // // 고맙다고 마무리 인사하기 
  // sendTextMessage(senderId, 
  //   `Ok. This article is related to "${category}". Thank you for submission. I will let related group moderators check the article.`);

  // // 세션 정보 지우기
  // delete dialogContext[senderId]
}

async function receivedURL(event) {
  const senderId = event.sender.id
  const url = event.message.nlp.entities.url[0].value
  const metadata = await getUrlMetadata(url)
  // URL 받은 컨텍스트 저장
  dialogContext[senderId].url = url
  dialogContext[senderId].metadata = metadata

  askForCategory(senderId);
}

function askForCategory(recipientId) {
  console.log("askForCategory", dialogContext[recipientId].url)
  // quickReplies 의 최대 표시가능 갯수는 11개이므로 
  const categoryKeys = Object.keys(categories).slice(1, 12)
  console.log("categoryKeys", categoryKeys)
  let quickReplies = categoryKeys.map(category => {
    return {
      "content_type": "text",
      "title": category,
      "payload": category
    };
  });
  console.log("quickReplies", quickReplies)

  request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: recipientId },
          message: {
            "text": "What category of a facebook group do you think this link is most beneficial to?",
            "quick_replies": quickReplies
          }
      }
  }, function(error, response, body) {
      if (error) {
          console.log('Error sending message: ' + response.error);
      }
  });
}

function sendTextMessage(recipientId, message, quickReplies) {

  const messagePayload = {
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: PAGE_ACCESS_TOKEN },
    method: 'POST',
    json: {
        recipient: { id: recipientId },
        message: { text: message }
    }
  }

  if (quickReplies) {
    messagePayload.json.message.quick_replies = quickReplies.map(v => {
      return {
        "content_type": "text",
        "title": v,
        "payload": v
      }
    })
  }
  console.log("sendTextMessage", recipientId, message)
  console.log("messagePayload", messagePayload)

  request(messagePayload, function(error, response, body) {
      if (error) {
          console.log('Error sending message: ' + response.error);
      }
  });
}

function sendConfirmTemplate(recipientId, postInfo) {
  console.log("sendConfirmTemplate", recipientId, postInfo)
  request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: recipientId },
          message: {
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"list",
                "top_element_style": "large",
                "elements":[
                  {
                    "title": postInfo.metadata.title,
                    "subtitle": postInfo.metadata.description,
                    "image_url": postInfo.metadata.image
                  },
                  {
                    "title": "Group Category: " + Object.keys(categories)[postInfo.category],
                    "subtitle": "Why Is This useful? \"" + postInfo.comment + "\"",
                  }
                ],
                "buttons": [
                  {
                    "title": "Submit",
                    "type": "postback",
                    "payload": "confirm submit"      
                  }
                ]
              }
            }
          }
      }
  }, function(error, response, body) {
      if (error) {
          console.log('Error sending message: ' + response.error);
      }
  });
}
  // Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
    console.log("mode", mode)
    console.log("verify_token", token)
    console.log("challenge", challenge)
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
      }
    }
  });