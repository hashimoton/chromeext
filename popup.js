// popup.js

alert('popup.js'); // Cannot use console.log() here.
let Popup = {};

import {log, load_options} from "./common.js";
load_options();


async function load_lib(lib_name) {
  log('Loading ' + lib_name);
  Popup[lib_name] = await import('./lib/' + lib_name + '.js');
};


function callback(response) {
  log(response);
  Popup[response.request.lib][response.request.action].callback(response);
}


// Activate actions
const action_buttons = document.querySelectorAll('.action');
for(let i = 0; i < action_buttons.length; i++) {
  let action_button = action_buttons[i];
  const lib = action_button.closest('.lib').dataset.lib;
  load_lib(lib);
  const action = action_button.dataset.action;

  action_button.addEventListener('click', async function() {
    const request = {
      lib: lib,
      action: action,
      options: document.getElementById('options').innerText
    };
    
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, request, callback);
    });
  });
}


// EOF
