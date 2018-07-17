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

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
    let body = req.body;
  
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
  
      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
  
        // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0];
        if (webhook_event.message) {
          receivedMessage(webhook_event);
        }
        console.log(webhook_event);
        if(webhook_event.message && webhook_event.message.nlp.entities) {
          console.log(webhook_event.message.nlp.entities);
          if (webhook_event.message.nlp.entities.url && webhook_event.message.nlp.entities.url.length > 0) {
            receivedURL(webhook_event)
          } else {
            receivedMessage(webhook_event);
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

function receivedMessage(event) {
  var senderId = event.sender.id;
  var content = event.message.text;
  var echo_message = "ECHO : " + content;
  sendTextMessage(senderId, echo_message);
}
function receivedURL(event) {
  var senderId = event.sender.id;
  var url = event.message.nlp.entities.url[0].value
  sendURLButton(senderId, url);
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