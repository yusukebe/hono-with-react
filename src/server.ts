import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'

const app = new Hono()
app.use('*', serveStatic({ root: './' }))

const api = app.route('/api')

api.get('/', (c) => {
  return c.json({ message: 'This is Hono!' })
})

app.fire()
