module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `
HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}

${body}
  `.trim();
};

// `createResponse` takes an object with `body`, `contentText`, and `status`. It should use
// that information to construct an HTTP response message. Make sure to set the:

// * status
// * Content-Length header
// * Content-Type header
// * HTTP body
