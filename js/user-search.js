var apiKey = require('./../.env').apiKey;

exports.UserSearch = function(username, repos, descriptions) {
  this.username = username;
  this.repos = repos;
  this.descriptions = descriptions;
};

exports.UserSearch.prototype.getSummary = function() {
  $.get('https://api.github.com/users/'+this.username+'?access_token=' + apiKey).then(function(response){
    console.log(response);

    $(".results").append('<div class="searchItem">'+
                            '<div class="userHeader">' +
                              '<img class="userPhoto" src="'+response.avatar_url+'">'+
                              '<div class="userText">'+
                                '<h2>'+response.name+'</h2>'+
                                '<a id="userLink" target="_blank" href="https://github.com/'+response.login+'">'+response.login+'</a>'+
                              '</div>' +
                            '</div>' +
                            '<div class="repos"></div>' +
                          '</div>');

  }).fail(function(error){
    console.log(error.responseJSON.message);
    $(".results").append("<h3 class='nope'>No Results. That username must not exist!</h3>")
  });
};

exports.UserSearch.prototype.getRepos = function() {
  $.get('https://api.github.com/users/'+this.username+'/repos?access_token=' + apiKey + '&per_page=1000').then(function(response){
    console.log(response);

    for(var i=0; i < response.length; i++) {

      var projectName = response[i].name;
      var projectDescription = response[i].description;

      console.log(projectName, projectDescription);

      $(".repos").append('<div class="repoItem">' +
                            '<a target="_blank" href="https://github.com/'+response[0].owner.login+'/'+projectName+'"><h5>'+projectName+'</h5></a>' +
                            '<p>'+projectDescription+'</p>' +
                          '</div>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });











};
