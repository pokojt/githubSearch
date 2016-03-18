
var UserSearch = require('../js/user-search.js').UserSearch;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $(".userSearch").submit(function(event) {
    event.preventDefault();

    $(".header").addClass("searched");

    var inputtedUsername = $("input#username").val();
    console.log(inputtedUsername);
    var newUserSearch = new UserSearch(inputtedUsername);

    newUserSearch.getSummary();
    newUserSearch.getRepos();


    $("form.userSearch")[0].reset();
  });
});
