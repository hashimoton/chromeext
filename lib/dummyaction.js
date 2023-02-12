// dummyaction.js

console.log('dummyaction.js');


const action1 = {

  prepare: function(options) {
    return {options: options};
  },

  action: function(request) {
    console.log(request);
    return request;
  },

  callback: function(response) {
    alert(response);
  }

};

const action2 = {

  prepare: function(options) {
    return {options: options};
  },

  action: function(request) {
    console.log(request);
    return request;
  },

  callback: function(response) {
    alert(response);
  }

};

export {action1, action2};

