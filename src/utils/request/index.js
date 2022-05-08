const request = function(url, params) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.addEventListener('readystatechange', () => {
      if(req.readyState === 4) {
        console.log('@Request', req);
        let { response } = req;
        response = JSON.parse(response);
        console.log(response);
        if(req.status >= 300 || req.status< 200) {
          let e = new Error(response.ErrorMsg);
          reject(e);
        } else{
          let { code, msg, data } = response;
          if(code !== '200') {
            let e = new Error();
            e.response = msg;
            throw e;
          }
          resolve(data);
        }
      }
    });
    req.open('POST',  url);
    req.setRequestHeader('content-type', 'application/json');
    req.send(JSON.stringify(params));
  }).then((result) => {
    return result;
  }, (reason) => {
    console.log(reason);
    throw reason;
  });
};

export default request;