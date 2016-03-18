var apiKey = require('./../.env').apiKey;

exports.UserSearch = function(username, repos, descriptions) {
  this.username = username;
  this.repos = repos;
  this.descriptions = descriptions;
};

exports.UserSearch.prototype.getRepos = function() {
  $.get('https://api.github.com/users/'+this.username+'?access_token=' + apiKey).then(function(response){
  console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
