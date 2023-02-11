function log(message){
  document.getElementById('message').innerText = JSON.stringify(message);
}

function load_options(message) {
  chrome.storage.sync.get(null,
    function(options) {
      document.getElementById('options').innerText = JSON.stringify(options);
      document.getElementById('options').dataset.options = options;
      log(message || 'Loaded options');
    }
  );
};

export {log, load_options};
