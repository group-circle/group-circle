'use strict';

// Imports dependencies and set up http server
const request = require('request');

const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server
  
require('dotenv').config();

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

const dialogContext = {}

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
    let body = req.body;
  
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
        // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0]
 
        const senderId = webhook_event.sender.id;
        const alreadyHaveURL = dialogContext[senderId] && dialogContext[senderId].url
        const isReceivedTextMessage = !!webhook_event.message
        const isReceivedURL =
          webhook_event.message && webhook_event.message.nlp.entities &&
          webhook_event.message.nlp.entities.url && webhook_event.message.nlp.entities.url.length > 0
        console.log("senderId", senderId)
        console.log("alreadyHaveURL", alreadyHaveURL)
        console.log("isReceivedURL", isReceivedURL)
        if (isReceivedURL) {
          receivedURL(webhook_event)
        } else if (isReceivedTextMessage) {
          if (alreadyHaveURL) {
            // 아마 카테고리 정보를 가지고 있을 것이다
            receivedCategory(webhook_event)
          } else {
            receivedText(webhook_event)
          }
        }
      });
  
      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED');
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  });

function receivedText(event) {
  var senderId = event.sender.id;
  sendTextMessage(senderId, "Please provide the URL you would like to share.");
}

function receivedCategory(event) {
  var senderId = event.sender.id;
  var category = event.message.text;

  // 파베에 링크와 카테고리 정보 쏘기 
  const url = dialogContext[senderId].url

  // 고맙다고 마무리 인사하기 
  sendTextMessage(senderId, 
    `Ok. This article is related to "${category}". Thank you for submission. I will let related group moderators check the article.`);

  // 세션 정보 지우기
  delete dialogContext[senderId]
}

function receivedURL(event) {
  const senderId = event.sender.id
  const url = event.message.nlp.entities.url[0].value
  
  // URL 받은 컨텍스트 저장
  dialogContext[senderId] = {url}

  askForCategory(senderId);
}

function askForCategory(recipientId) {
  const categories = [
    // "Local",
    // "Friends",
    // "Parenting",
    // "School and Education",
    // "Sports",
    // "Food",
    // "Photography",
    // "Buy and Sell",
    // "Professional Networking",
    // "Animals and Pets",
    // "Outdoor Activities",
    // "Business",
    // "Hobby and Leisure",
    // "Science and Tech",
    // "Health and Fitness",
    // "Funny",
    // "Arts and Culture",
    // "Games",
    // "Cars and Motorcycles",
    // "Neighborhood and Community",
    // "Support and Comfort",
    // "Home and Garden",
    "Style",
    "Travel and Places",
    "Spiritual and Inspirational",
    "Movies and TV",
    "Trending",
    "Suggested"
  ]
    
  request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: recipientId },
          message: {
            "text": "Please tell us what category of content you just give.",
            "quick_replies":categories.map(c => {
              return {content_type: "text", "title": c}
            })
          }
      }
  }, function(error, response, body) {
      if (error) {
          console.log('Error sending message: ' + response.error);
      }
  });
}


function sendTextMessage(recipientId, message) {
  request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: recipientId },
          message: { text: message }
      }
  }, function(error, response, body) {
      if (error) {
          console.log('Error sending message: ' + response.error);
      }
  });
}
function sendURLButton(recipientId, url) {
  request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: { access_token: process.env.PAGE_ACCESS_TOKEN },
      method: 'POST',
      json: {
          recipient: { id: recipientId },
          message: {
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"button",
                "text":"Try the URL button!",
                "buttons":[
                  {
                    "type":"web_url",
                    "url": url,
                    "title":"URL Button",
                    "webview_height_ratio": "full"
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

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = process.env.VERIFY_TOKEN
    
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
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