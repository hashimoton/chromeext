// popup.js

alert('popup.js'); // Cannot use console.log() here.

import {log, load_options} from "./common.js";
load_options();

// Activate actions
const action_buttons = document.querySelectorAll('.action');
for(let i = 0; i < action_buttons.length; i++) {
  let action_button = action_buttons[i];
  const lib_name = action_button.closest('.lib').dataset.lib;
  const action = action_button.dataset.action;

  action_button.addEventListener('click', async function() {
    const options = document.getElementById('options').innerText;
    const lib = await import('./lib/' + lib_name + '.js');
    const request = {
      lib: lib_name,
      action: action,
      payload: lib[action].prepare(options)
    };
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, request, lib[action].callback);
    });
  });
}


// EOF
