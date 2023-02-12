// siteinfo.js

console.log('siteinfo.js');

function get_bookmark() {
    const title = document.title;
    const url = location.href;
    const bookmark = `${title}\n${url}`;
    return bookmark;
}

const bookmark = {

  prepare: function(options) {
    return {options: options};
  },

  action: function(request) {
    const bookmark_text = get_bookmark();
    return bookmark_text;
  },

  callback: function(response) {
    let result_elm = document.querySelector('.output');
    result_elm.value = response.data;
    navigator.clipboard.writeText(response.data);
  }

};

export {bookmark};

