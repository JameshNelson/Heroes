angular.module('heroApp')
.service('mainService', function($http){

  this.getHeroes = function(){
    return $http({
      method: "GET",
      url: "http://localhost:3000/heroes"
    })
  }

  this.removeHero = function(name){
    console.log(name);
    var baseUrl = "http://localhost:3000/delete/" + name
    console.log(baseUrl);
    return $http ({
      method: "DELETE",
      url: baseUrl
    }).then(function(response){
      console.log(response);
    })

  }

  this.addHero = function(newHero){
    return $http.post("http://localhost:3000/heroes/add", {name: newHero.name, title: newHero.title, class: newHero.class, winpercent: newHero.winpercent}).then(function(response){
      console.log(response);
    })
  }

  this.changeHero = function(name, editedHero){
    return $http.put("http://localhost:3000/heroes/update/" + name, {name: editedHero.name, title: editedHero.title, class: editedHero.class, winpercent: editedHero.winpercent}).then(function(response){
      console.log(response); 
    })
  }

})
