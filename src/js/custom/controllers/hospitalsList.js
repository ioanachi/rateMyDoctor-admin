import {
  app
} from '../main.js';


app.controller("HospitalsListController", ["$scope", 'httpGetService', "httpDeleteService", '$mdDialog', '$location', function($scope, httpGetService, httpDeleteService, $mdDialog, $location) {
  var tThis = this;
  tThis.hospitalsObj = [];
  tThis.rowIndex = -1;

  httpGetService.getHospital().then(function(raspuns) {
    var result = raspuns.data.result;
    console.log(raspuns.data.result);
    tThis.hospitalsObj = result;
  });

  tThis.selectedRow = function(index) {
    tThis.rowIndex = index;


  };

  $scope.showConfirm = function(ev) {

    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete hospital?')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Yes')
      .cancel('No');
    $mdDialog.show(confirm).then(function() {

      $scope.status = 'You decided to delete this hospital.';
      httpDeleteService.deleteHospital(tThis.hospitalsObj[tThis.rowIndex].hID).then(function(raspuns) {
      });
      tThis.hospitalsObj.splice(tThis.rowIndex, 1);
      tThis.rowIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this hospital.';
    });
  };


  tThis.updateHosp = function() {
      $location.path('/hospitals/edit/'+tThis.hospitalsObj[tThis.rowIndex].hID);
  };





}]);
