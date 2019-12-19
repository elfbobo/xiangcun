const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const cors = require('koa2-cors')
const app = new Koa()
const router = new Router({ prefix: '/sygc/xczx' })
app.use(cors())

const fileList = fs.readdirSync(__dirname).filter(file => file.endsWith('.json'))

for (let i = 0; i < fileList.length; i++) {
  const tempPath = path.join(__dirname, fileList[i])
  const jsonStr = JSON.parse(fs.readFileSync(tempPath).toString())
  const urlName = fileList[i].split('.')[0]
  router.get(`/${urlName}`, (ctx, next) => {
    const { month } = ctx.params
    if (month) {
      console.log(month)
    }
    ctx.body = jsonStr
  })
}

app.use(router.routes()).use(router.allowedMethods())
const port = 8081
app.listen(port, () => {
  console.log(`listening on ${port} ...`)
})
