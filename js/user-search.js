var apiKey = require('./../.env').apiKey;

exports.UserSearch = function(username, repos, descriptions) {
  this.username = username;
  this.repos = repos;
  this.descriptions = descriptions;
};

exports.UserSearch.prototype.getSummary = function() {
  $.get('https://api.github.com/users/'+this.username+'?access_token=' + apiKey).then(function(response){

    $(".results").append('<div class="searchItem">'+
                            '<div class="userHeader">' +
                              '<img class="userPhoto" src="'+response.avatar_url+'">'+
                              '<h4>'+response.name+'</h4>'+
                              '<a target="_blank" href="https://github.com/'+response.login+'">'+response.login+'</a>'+
                            '</div>' +
                            '<div class="repos"></div>' +
                          '</div>');

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.UserSearch.prototype.getRepos = function() {
  $.get('https://api.github.com/users/'+this.username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);

    for(var i=0; i < response.length; i++) {

      var projectName = response[i].name;
      var projectDescription = response[i].description;

      console.log(projectName, projectDescription);

      $(".repos").append('<div class="repoItem">' +
                            '<h5>'+projectName+'</h5>' +
                            '<p>Description: '+projectDescription+'</p>' +
                          '</div>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });











};
