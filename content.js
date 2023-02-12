// content.js

console.log('content.js');

async function dispatch(request, callback) {
  let response = {};
  response.request = request;
  const src = chrome.runtime.getURL('lib/' + request.lib + '.js');
  lib = await import(src);
  response.data = lib[request.action].action(request);
  callback(response);
  return true;
}


chrome.runtime.onMessage.addListener(
  function(request, sender, callback) {
    console.log('content.js on message');
    console.log(request);
    dispatch(request, callback);
    return true;
  }
);


// EOF
