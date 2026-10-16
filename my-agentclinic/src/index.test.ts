import { afterAll, describe, expect, it } from 'vitest'
import { buildServer } from './index'

describe('GET /', () => {
  const app = buildServer()

  afterAll(async () => {
    await app.close()
  })

  it('returns 200 with the welcome page as HTML', async () => {
    const response = await app.inject({ method: 'GET', url: '/' })

    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toMatch(/^text\/html/)
    expect(response.body).toContain('<h1>AgentClinic</h1>')
    expect(response.body).toContain('AgentClinic is open for business.')
  })

  it('renders the header, main and footer and links the stylesheet', async () => {
    const response = await app.inject({ method: 'GET', url: '/' })

    expect(response.body).toContain('<header class="site-header">')
    expect(response.body).toContain('<main class="site-main">')
    expect(response.body).toContain('<footer class="site-footer">')
    expect(response.body).toContain('<link rel="stylesheet" href="/styles/main.css"/>')
  })
})

describe('GET /styles/main.css', () => {
  const app = buildServer()

  afterAll(async () => {
    await app.close()
  })

  it('serves the stylesheet', async () => {
    const response = await app.inject({ method: 'GET', url: '/styles/main.css' })

    expect(response.statusCode).toBe(200)
    expect(response.headers['content-type']).toMatch(/^text\/css/)
    expect(response.body).toContain('.site-header')
  })
})

describe('GET /health', () => {
  const app = buildServer()

  afterAll(async () => {
    await app.close()
  })

  it('returns 200 with status ok', async () => {
    const response = await app.inject({ method: 'GET', url: '/health' })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({ status: 'ok' })
  })
})
