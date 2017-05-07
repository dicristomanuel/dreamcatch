// import supertest from 'supertest-as-promised'
import server from 'server-instance'
import { setRoutes, rootRouter } from 'server/router'

describe('Server API', function() {
  // helpers available from test/test.setup.js
  const app = helpers.cloneApp(server)

  before(()=> {
    app.use(async (ctx, next) => {
      setRoutes({
        javascript: {},
        styles: {},
      })
      await rootRouter.routes()(ctx, next)
    })
  })

  // it('should respond to ping route', (done)=> {
  //   const body = { test: 'body' }
  //   supertest(app.callback())
  //     .post('/api/ping')
  //     .send(body)
  //     .expect('content-type', /application\/json/)
  //     .expect({ pong: body })
  //     .end(done)
  // })
  //
  // it('should respond to the home route', (done)=> {
  //   supertest(app.callback())
  //     .get('/api/')
  //     .expect('content-type', /application\/json/)
  //     .expect({ home: [ 'bruce', 'willis', 'wet', 'himself' ] })
  //     .end(done)
  // })
})
