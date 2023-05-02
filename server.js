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

var bodyParser = require('body-parser')     // "body-parser" : "~1.13.2"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//随机生成user数据
var Mock = require("mockjs");
var Random = Mock.Random;
var obj = []
for (var i = 0; i < 50; i++) {
    var user = {
        id: Random.id(), // 身份证号
        name: Random.cname(),
        sex: Random.integer(0,1),       //1男  0女
        // age: Random.integer(20, 50),birth: Random.datetime("yyyy-MM-dd HH:mm:ss"),  // 值是指定格式的日期字符串
        // addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
        age: Random.integer(20, 50),
        birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
        addr: `${Random.province()}-${Random.city()}`,
        // guid: Random.guid(),
        // asset: Random.float(200, 500000, 1, 6),
        // married: Random.boolean(),
        // birth2: new Date(Random.datetime("yyyy-MM-dd HH:mm:ss")),  // 值是 Date 类型
        // email: Random.email("qq.com"),
        // word: Random.cword(2, 5),
        // string: Random.string(),
        // title: Random.ctitle(10, 15),
        // senetence: Random.csentence(15, 20),
        // paragraph: Random.cparagraph(),
    };
//  console.log(user);
    obj.push(user)
}
console.log('用户的mock数据准备完毕')




app.get('/',(req, res)=>{
console.log('ok');
res.send("123")
})

//home页
app.get('/tableData',(req, res)=>{
    res.send([
        {name: '衣服',todayUse: 10,monthUse: 300,totalUse: 800},
        {name: '裤子',todayUse: 5,monthUse: 300,totalUse: 800},
        {name: '皮包',todayUse: 2,monthUse: 300,totalUse: 800},
        {name: '鞋子',todayUse: 7,monthUse: 300,totalUse: 800},
        {name: '腰带',todayUse: 3,monthUse: 300,totalUse: 800},
        {name: '手表',todayUse: 0,monthUse: 300,totalUse: 800}
    ])
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
app.get('/lineData',(req, res)=>{
    res.send([
        {name: '衣服',spring: 100,summer: 80,autumn: 120,winter: 120},
        {name: '裤子',spring: 20,summer: 70,autumn: 40,winter: 57},
        {name: '皮包',spring: 70,summer: 46,autumn: 22,winter: 70},
        {name: '鞋子',spring: 56,summer: 26,autumn: 82,winter: 12},
        {name: '腰带',spring: 78,summer: 57,autumn: 44,winter: 58},
        {name: '手表',spring: 10,summer: 58,autumn: 12,winter: 82}
    ])
})
app.get('/barData',(req, res)=>{
    res.send([
        {date: '周一',newUser: 5,activeUser: 200},
        {date: '周二',newUser: 10,activeUser: 500},
        {date: '周三',newUser: 12,activeUser: 550},
        {date: '周四',newUser: 60,activeUser: 800},
        {date: '周五',newUser: 65,activeUser: 550},
        {date: '周六',newUser: 53,activeUser: 770},
        {date: '周日',newUser: 33,activeUser: 170}
    ])
})

//user页
app.get('/userData',(req, res)=>{
    res.send(obj)
})

//测试post-req
app.post('/test1',(req, res)=>{
    console.log('--->> ',req.body)
    res.send('接到了')
})

app.listen(5001, (err)=>{   //此时启动服务器:  http://localhost:5001/
console.log('error: ',err)
})   