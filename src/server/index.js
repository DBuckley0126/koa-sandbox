const Koa = require("koa");
const KoaBody = require("koa-body");
const Json = require("koa-json");

const indexRoutes = require("./routes/index");
const movieRoutes = require("./routes/movies");

const app = new Koa();
const PORT = process.env.PORT || 5000;

// Json Prettier Middleware
app.use(Json());
// Add koa-body middleware
app.use(KoaBody());

app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
