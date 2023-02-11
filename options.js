import { log, load_options } from "./common.js"

console.log('options.js');

load_options();

const clear_button = document.getElementById('clear_options');
clear_button.addEventListener('click', function() {
  chrome.storage.sync.clear();
  load_options('Cleared options');
});


const option_buttons = document.querySelectorAll('button.option');
for(let i = 0; i < option_buttons.length; i++) {
  let option_button = option_buttons[i];
  
  option_button.addEventListener('click', function() {
    const options = {
      key: option_button.innerText
    };
    chrome.storage.sync.set(options);
    load_options('Stored options');
  });
}

