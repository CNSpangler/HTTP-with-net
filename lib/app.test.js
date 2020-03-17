const request = require('supertest');
const app = require('./app');

describe('app routes', () => {
  it('retrieves the home html page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>You made it!</h1>
          </body>
        </html>`);
      });
  });

  it('posts to the echo page', () => {
    return request(app)
      .post('/echo')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>Hello, username!</h1>
          </body>
        </html>`);
      });
  });

  it('retrieves the red html page', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>This is red</h1>
          </body>
        </html>`);
      });
  });

  it('retrieves the blue html page', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>This is blue</h1>
          </body>
        </html>`);
      });
  });

  it('retrieves the green html page', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual(`
        <html>
          <body>
            <h1>This is green</h1>
          </body>
        </html>`);
      });
  });
});
