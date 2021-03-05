const Koa = require('koa')
const https = require('https')
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello World';
})

const opts = {
    key: "/etc/letsencrypt/live/starshipnews.net/privkey.pem",
    cert: "/etc/letsencrypt/live/starshipnews.net/fullchain.pem",
    requestCert: false,
	rejectUnauthorized: false
}

const port = process.env.PORT || 4001

https.createServer(opts, app.callback()).listen(port, () => {
	console.log(`Server is listening on port ${port}`)
})

