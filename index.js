const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello World';
})

const port = 4001
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
