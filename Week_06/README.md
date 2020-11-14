# 第六周学习笔记

#### ISO OSI七层网络协议
1. Application  -> HTTP
2. Present      -> HTTP
3. Session      -> HTTP 
4. Transport    -> TCP
5. Network      -> Internet
6. Data Link    -> 4G / 5G / WiFi
7. Physical     -> 4G / 5G / WiFi

#### 9. HTTP请求 | 服务端环境准备
HTTP是一个文本型的协议
从使用去设计接口

#### 11. HTTP请求 | send函数的编写，了解response格式
HTTP response由以下三个结构构成
1. status line
   返回状态码 
2. headers
   设定response body的格式
3. body
   chunked body - Node.js的默认body格式，以一个HEX数字开始以一个HEX的0作为结尾
   
#### 在server.js中
需要增加以下代码
let enc = new TextEncoder();
for (let i = 0; i < body.length; i++) {
   body[i] = enc.encode(body[i]);
}
可以解决Node 12以上的版本的兼容问题
