// content.js

console.log('content.js');

let Content = {};

async function load_lib(lib_name) {
  const src = chrome.runtime.getURL('lib/' + lib_name + '.js');
  Content[lib_name] = await import(src);
};

// action libaries
load_lib('siteinfo');
load_lib('dummyaction');


console.log(Content);


chrome.runtime.onMessage.addListener(
  function(request, sender, callback) {
    console.log('content.js on message');
    console.log(request);
    console.log(Content[request.lib]);
    
    let response = {};
    response.request = request;
    response.data = Content[request.lib][request.action].action(request);
    callback(response);

    return true;
  }
);

