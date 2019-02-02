const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const Client = require('@line/bot-sdk').Client;

const app = express()

const config = {
  channelAccessToken: 'lRblqeZcwCJwTsBMvthttPvho7nNcSvRAiMBJV9glHLMZ7TgswoqXMgHDmttLtl3Mlwp4Q2ZoJyYNyFVw31muBWqUE0LdCQNX5csq8iUTHMZjdyeDR1VFcL3gjyb86qGA6+Rx/u2GufkPELL0ux/IQdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'ebf509e8a936cf361ff769f4c561dcc6'
}

const client = new Client(config);



app.get('/', function (req, res) {
    res.send('Hello World!!')
})

app.post('/webhook', middleware(config), (req, res) => {
  const event = req.body.events[0];

  if (event.type === 'message') {
    const message = event.message;
    // if(message.type==='sticker'){
    //   client.replyMessage(event.replyToken, {
    //              type: 'sticker',
    //              packageId: message.packageId,
    //              stickerId:message.stickerId
    //            });
    // }else{
    //   client.replyMessage(event.replyToken, {

               // });
      // }
      client.replyMessage(event.replyToken,
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
            "type": "buttons",
            "thumbnailImageUrl": "http://www.animenewsnetwork.com/thumbnails/max400x400/cms/news/100167/kiminonawa01.jpg",
            "imageAspectRatio": "rectangle",
            "imageSize": "content",
            "imageBackgroundColor": "#FFFFFF",
            "title": "Benz",
            "text": "Parinya Pradit",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://google.com/"
            },
            "actions": [
                {
                  "type": "postback",
                  "label": "Buy",
                  "data": "action=buy&itemid=123"
                },
                {
                  "type": "message",
                  "label": "Add to cart",
                  "text": "no no no"
                },
                {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://google.com"
                }
            ]
        }
      })
    }

  res.send('Hel!!')

})



app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
