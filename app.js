const Koa = require('koa');
const app = new Koa();
const json = require('koa-json')

app.use(json())

app.use(async ctx => (ctx.body = {msg: 'Hello world'}));

app.listen(3000, () => console.log('Server Starting...'))