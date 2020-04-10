const Koa = require('koa');
const KoaRouter = require('koa-router')
const json = require('koa-json')
const path = require('path')
const render = require('koa-ejs') 

const app = new Koa();
const router = new KoaRouter();

// Json Prettier Middleware
app.use(json())


// app.use(async ctx => (ctx.body = {msg: 'Hello world'}));
router.get('/test', ctx => (ctx.body = {msg: 'Hello world'}))

render(app, {
  root:path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cashe: false,
  debug: true
})

// Index
router.get('/', async ctx => {
  await ctx.render('index')
})


// Router Middleware
app.use(router.routes()).use(router.allowedMethods());


app.listen(3000, () => console.log('Server Starting...'))