const koa = require('koa')
const app = new koa()
const send = require('koa-send')
const path = require('path')

const pageRouter = require('./routers/dev-ssr')

const isDev = process.env.NODE_ENV === 'development'

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (error) {
    console.log(error);
    ctx.status = 500
    if (isDev) {
      ctx.body = error.message
    } else {
      ctx.body = 'please try again later'
    }
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, 'favicon.ico', { root: path.join(__dirname, '../') })
  } else {
    await next()
  }
})

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`);
})
