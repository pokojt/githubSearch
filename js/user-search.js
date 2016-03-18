var apiKey = require('./../.env').apiKey;

exports.UserSearch = function(username, repos, descriptions) {
  this.username = username;
  this.repos = repos;
  this.descriptions = descriptions;
};

exports.UserSearch.prototype.getSummary = function() {
  $.get('https://api.github.com/users/'+this.username+'?access_token=' + apiKey).then(function(response){

    console.log(response);
    $(".results").append('<div class="userItem">' +
                            '<img class="userPhoto" src="'+response.avatar_url+'">'+
                            '<h4>'+response.name+'</h4>'+
                            '<a href="https://github.com/'+this.username+'">'+response.login+'</a>'+
                          '</div>');

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

// exports.UserSearch.prototype.getRepos = function() {
//   $.get('https://api.github.com/users/'+this.username+'/repos?access_token=' + apiKey).then(function(response){
//
//     var name = response[]
//
//     console.log(response);
//     $(".results").append('<div class="userItem">' +
//                             '<h4>'+response.name+'</h4>'+
//                             '<a href="https://github.com/'+this.username+'">'+response.login+'</a>'+
//                             '<p>'+response.public_repos+'</p>' +
//                           '</div>');
//
//
//
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };
