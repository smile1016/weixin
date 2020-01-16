const Koa = require('koa');
const app = new Koa()
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

server.listen(8080);

module.exports = io;