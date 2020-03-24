const path = require('path');
const fs = require('fs');

const data = require('./data.json');

// 自动生成图书编号
let maxBookCode = () => {
    let arr = [];
    data.forEach(item => {
        arr.push(item.id);
    });
    return Math.max.apply(null, arr);
};

// 把内存数据写入文件
let writeDataToFile = (res) => {
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.json({
                status: 500
            })
        }
        res.json({
            status: 200
        })
    })
};

// 验证图书名称是否存在
exports.checkName = (req, res) => {
    let name = req.params.name;
    data.some(item => {
        if (name === item.name) {
            res.json({
                status: 1
            });
        }
    });
    res.json({
        status: 2
    })
};

// 获取图书列表数据
exports.getAllBooks = (req, res) => {
    res.send(data);
};

// 添加图书
exports.addBook = (req, res) => {
    var book = {};
    book.id = (maxBookCode() + 1).toString();
    book.name = req.body.name;
    book.date = new Date().getTime();
    data.push(book);
    writeDataToFile(res);
};

// 编辑图书-根据 ID 查询图书信息
exports.toEditBook = (req, res) => {
    let id = req.params.id;
    var book = data.filter(item => {
        return id === item.id;
    });
    res.json(book[0]);
};

// 编辑图书-提交图书信息
exports.editBook = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    data.some(item => {
        if (id === item.id) {
            item.name = name;
            return true;
        }
    });
    writeDataToFile(res);
};

exports.deleteBook = (req, res) => {
    let id = req.params.id;
    var index = data.findIndex(item => {
        return id === item.id;
    });
    console.log(index);
    data.splice(index, 1);
    writeDataToFile(res);
};