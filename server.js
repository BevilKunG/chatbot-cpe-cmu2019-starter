const express = require('express')
const middleware = require('@line/bot-sdk').middleware

const app = express()

const config = {
  channelAccessToken: 'lRblqeZcwCJwTsBMvthttPvho7nNcSvRAiMBJV9glHLMZ7TgswoqXMgHDmttLtl3Mlwp4Q2ZoJyYNyFVw31muBWqUE0LdCQNX5csq8iUTHMZjdyeDR1VFcL3gjyb86qGA6+Rx/u2GufkPELL0ux/IQdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'ebf509e8a936cf361ff769f4c561dcc6'
}


app.get('/', function (req, res) {
    res.send('Hello World!!')
})

app.post('/webhook', middleware(config), (req, res) => {
  console.log('webhook success')
})



app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})
