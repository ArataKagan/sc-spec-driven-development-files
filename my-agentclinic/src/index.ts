import path from 'node:path'
import fastifyStatic from '@fastify/static'
import Fastify from 'fastify'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Home } from './pages/Home'

const PORT = Number(process.env.PORT ?? 3000)
const HOST = process.env.HOST ?? 'localhost'

export function buildServer() {
  const app = Fastify()

  app.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'public'),
  })

  app.get('/', async (_request, reply) => {
    const html = '<!doctype html>' + renderToStaticMarkup(createElement(Home))
    return reply.type('text/html').send(html)
  })

  app.get('/health', async () => {
    return { status: 'ok' }
  })

  return app
}

async function start() {
  const app = buildServer()

  try {
    const address = await app.listen({ port: PORT, host: HOST })
    console.log(`Server listening at ${address}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

if (require.main === module) {
  start()
}
