const express= require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

// 静态资源配置
app.use(express.static('./public'));

// 配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // 跨域处理
// app.all("*",function (req,res,next) {
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     res.header("X-Powered-By",' 3.2.1');
//     next();
// });

// 配置路由
app.use(router);

// 监听端口
app.listen(4000, () => {
    console.log('running...');
});