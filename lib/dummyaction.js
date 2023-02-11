// dummyaction.js

console.log('dummyaction.js');


const action1 = {

  action: function(request) {
    console.log(request);
    return request;
  },

  callback: function(response) {
    alert(response);
  }

};

const action2 = {

  action: function(request) {
    console.log(request);
    return request;
  },

  callback: function(response) {
    alert(response);
  }

};

export {action1, action2};

