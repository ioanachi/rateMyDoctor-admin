import {
  app
} from '../main.js';


app.controller("RankListController", ["$scope", 'httpGetService', "httpDeleteService", '$mdDialog', '$location', function($scope, httpGetService, httpDeleteService, $mdDialog, $location) {
  var tThis = this;
  tThis.rankObj = [];
  tThis.rowIndex = -1;

  httpGetService.getRank().then(function(raspuns) {
    console.log(raspuns, "raspuns");
    var result = raspuns.data.result;
    tThis.rankObj = result;
  });

  tThis.selectedRow = function(index) {
    tThis.rowIndex = index;
    console.log(index, "index");
  };

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete rank?')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Yes')
      .cancel('No');
    $mdDialog.show(confirm).then(function() {

      $scope.status = 'You decided to delete this rank.';

      httpDeleteService.deleteRank(tThis.rankObj[tThis.rowIndex].ID).then(function(raspuns) {
        console.log(raspuns);
      });
      tThis.rankObj.splice(tThis.rowIndex, 1);
      tThis.rowIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this rank.';
    });
  };


  tThis.updateRank = function() {
    console.log(tThis.rankObj[tThis.rowIndex].ID, "tThis.rankObj[tThis.rowIndex].ID");
      $location.path('/rank/edit/'+tThis.rankObj[tThis.rowIndex].ID);
  };





}]);
