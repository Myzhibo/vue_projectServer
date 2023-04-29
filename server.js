/*
1.  npm install express
npm install http-proxy-middleware

2.  run:  node server.js
*/
var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express();

app.use((request, response, next)=>{
console.log('有人请求, 请求的资源是: ', request.url)
// console.log('请求来着于: ', request.get('Host'))
next()
})

app.get('/',(req, res)=>{
console.log('ok');
res.send("123")
})

app.get('/countData',(req, res)=>{
    res.send([
        {name: "今日支付订单",value: 1234,icon: "success",color: "#2ec7c9"},
        {name: "今日收藏订单",value: 210,icon: "star-on",color: "#ffb980"},
        {name: "今日未支付订单",value: 1234,icon: "s-goods",color: "#51ADF3"},
        {name: "本月支付订单",value: 1234,icon: "success",color: "#2ec7c9"},
        {name: "本月收藏订单",value: 210,icon: "star-on",color: "#ffb980"},
        {name: "本月未支付订单",value: 1234,icon: "s-goods",color: "#51ADF3"}
        ])
})
app.get('/tableData',(req, res)=>{
    res.send([
        {name: '衣服',todayUse: 100,monthUse: 300,totalUse: 800},
        {name: '裤子',todayUse: 100,monthUse: 300,totalUse: 800},
        {name: '皮包',todayUse: 100,monthUse: 300,totalUse: 800},
        {name: '鞋子',todayUse: 100,monthUse: 300,totalUse: 800},
        {name: '腰带',todayUse: 100,monthUse: 300,totalUse: 800},
        {name: '手表',todayUse: 100,monthUse: 300,totalUse: 800}
    ])
})



app.listen(5001, (err)=>{   //此时启动服务器:  http://localhost:5001/
console.log('error: ',err)
})   