
var UserSearch = require('../js/user-search.js').UserSearch;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $("#clearSearch").hide();
  $(".userSearch").submit(function(event) {
    event.preventDefault();

    $(".header").addClass("searched");
    $("#clearSearch").show();

    var inputtedUsername = $("input#username").val();
    console.log(inputtedUsername);
    var newUserSearch = new UserSearch(inputtedUsername);

    newUserSearch.getSummary();
    newUserSearch.getRepos();


    $("form.userSearch")[0].reset();
  });

  $("button#clearSearch").click(function() {
    $('.header').removeClass('searched');
    $('.results').empty();
    $("button#clearSearch").hide();
  });

});
