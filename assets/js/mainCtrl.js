angular.module('heroApp')
.controller('mainCtrl', function($scope, mainService){
  $scope.test = 'This is a test'
  $scope.newName = "";
  $scope.newtitle = "";
  $scope.newClass = "";
  $scope.newWinPercent = 0;
  $scope.classes = ['Warrior', 'Specialist', 'Support', 'Assassin']


  $scope.getHeroes = function(){
    mainService.getHeroes().then(function(response){
      console.log(response);
      $scope.heroes = response.data;
    })
  }

$scope.getHeroes();

$scope.deleteHero = function(name){
  mainService.removeHero(name)
}


$scope.addHero = function(name, title, spec, winPercent){
  var newHero = {
    name: name,
    title: title,
    class: spec,
    winpercent: parseFloat(winPercent)
  }
  if(newHero.name === undefined || newHero.title === undefined || newHero.class === undefined || newHero.winpercent === NaN){
    alert("Fill out fields")
  }
  else mainService.addHero(newHero);




}

$scope.editHero = function(oldName, name, title, spec, winPercent){
  var editedHero = {
    name: name,
    title: title,
    class: spec,
    winpercent: parseFloat(winPercent)
  }

  if(editedHero.name === undefined || editedHero.title === undefined || editedHero.class === undefined || editedHero.winpercent === NaN){
    alert("Fill out fields")
  }

  else mainService.changeHero(oldName, editedHero)
}


});
