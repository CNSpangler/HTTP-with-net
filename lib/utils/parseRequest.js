module.exports = rawRequest => {
  const pattern = /(?<method>\w+)\s(?<path>\/\w*)/;
  
  const {
    method,
    path
  } = rawRequest.match(pattern).groups;
  
  const body = rawRequest.split('\r\n\r\n')[1];
  
  return {
    method,
    path,
    body
  };
};

// destructure method and path off of match(pattern).groups
// return an object with method, path, body inside
// to get body, \r\n\r\n
// string.split('\r\n\r\n') (returns array w 2 strings])