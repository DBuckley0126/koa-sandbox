const Koa = require('koa');
const KoaRouter = require('koa-router')
const json = require('koa-json')
const path = require('path')
const render = require('koa-ejs')
const koaBody = require('koa-body');

const app = new Koa();
const router = new KoaRouter();

const PORT = 5000;

// Json Prettier Middleware
app.use(json())

app.use(koaBody());


// app.use(async ctx => (ctx.body = {msg: 'Hello world'}));
router.post('/test', ctx => {
  console.log("hit test route")
  let blah = JSON.parse(ctx.request.body)
  ctx.response.status = 200
  ctx.response.body = {msg: 'Hello world'}
})

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


const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
