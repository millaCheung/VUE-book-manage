# 1.图书管理后台接口文档
> 基准路径：http://localhost:4000/
## 1.1. 获取图书列表数据
- 路径：books
- 请求参数：无
- 响应结果

```json
[
  {
    "id": "4",
    "name": "红楼梦",
    "data": "1585018778250"
  },
  {
    "id": "5",
    "name": "三国演义",
    "data": "1585018778250"
  },
  {
    "id": "6",
    "name": "水浒传",
    "data": "1585018778250"
  },
  {
    "id": "7",
    "name": "西游记",
    "data": "1585018778250"
  }
]
```
## 1.2. 添加图书-提交图书信息
- 路径：books
- 请求参数
    - name：图书名称
- 响应结果

```js
{
    "status": 200  // (200表示成功；500表示失败)
}
```
## 1.3. 编辑图书-根据 ID 查询图书信息
- 路径：books/:id
- 请求参数：无
- 响应结果

```js
{
    "name": "西游记",
    "data": 1585018778250,
    "id": 7
}
```
## 1.4. 编辑图书-提交图书信息
- 路径：books/:id
- 请求参数
    - name：图书名称
- 响应结果

```js
{
    "status": 200  // (200表示成功；500表示失败)
}
```
## 1.5. 删除图书信息
- 路径：books/:id
- 请求参数：无
- 响应结果

```js
{
    "status": 200  // (200表示成功；500表示失败)
}
```
## 1.6. 验证图书名称是否存在
- 路径：books/book/:name
- 请求参数
    - name：图书名称
- 响应结果

```js
{
    "status": 1  // (1表示存在；2表示不存在)
}
```
