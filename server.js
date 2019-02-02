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
      // client.replyMessage(event.replyToken,
      // {
      //   "type": "template",
      //   "altText": "This is a buttons template",
      //   "template": {
      //       "type": "buttons",
      //       "thumbnailImageUrl": "https://i.redd.it/6ap8zjrctai11.jpg",
      //       "imageAspectRatio": "rectangle",
      //       "imageSize": "contain",
      //       "imageBackgroundColor": "#ff7e75",
      //       "title": "Benz",
      //       "text": "Parinya Pradit",
      //       "defaultAction": {
      //           "type": "uri",
      //           "label": "View detail",
      //           "uri": "http://google.com/"
      //       },
      //       "actions": [
      //           {
      //             "type": "uri",
      //             "label": "Facebook",
      //             "uri": "https://www.facebook.com/prarinya.pradit"
      //           },
      //           {
      //             "type": "uri",
      //             "label": "Add to cart",
      //             "uri": "http://cpe.eng.cmu.ac.th/2013/"
      //           },
      //       ]
      //   }
      // })
      client.replyMessage(event.replyToken,
     {
       "type": "template",
       "altText": "this is a carousel template",
       "template": {
           "type": "carousel",
           "columns": [
               {
                 "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png/revision/latest?cb=20150808131630",
                 "imageBackgroundColor": "#FFFFFF",
                 "title": "this is menu",
                 "text": "description",
                 "actions": [
                     {
                         "type":"cameraRoll",
                         "label":"Camera roll"
                     },
                     {
                       "type":"location",
                       "label":"Location"
                    }
                 ]
               },
               {
                 "thumbnailImageUrl": "https://c.76.my/Malaysia/line-brown-bear-cute-pencil-case-ubiyo-1802-02-Ubiyo@6.jpg",
                 "imageBackgroundColor": "#000000",
                 "title": "this is menu",
                 "text": "description",
                 "actions": [
                   {
                     "type":"datetimepicker",
                     "label":"Select date",
                     "data":"storeId=12345",
                     "mode":"datetime",
                     "initial":"2017-12-25t00:00",
                     "max":"2018-01-24t23:59",
                     "min":"2017-12-25t00:00"
                   },
                   {
                     "type":"camera",
                     "label":"Camera"
                  }
               ]
               }
           ],
           "imageAspectRatio": "rectangle",
           "imageSize": "cover"
       }
     })


     
    }

  res.send('Hel!!')

})



app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
