// var Constructor = require('../js/function-name.js').Constructor;
//
// $(document).ready(function() {
//
// var newConstructor = new Constructor();
//
//
// });

var UserSearch = require('../js/githubuser.js').UserSearch;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $(".userSearch").submit(function(event) {
    event.preventDefault();

    $(".header").addClass("searched");

    var inputtedUsername = $("input#username").val();
    console.log(inputtedUsername);



  });
});
