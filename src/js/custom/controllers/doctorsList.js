import {
  app
} from '../main.js';


app.controller("DoctorsListController", ["$scope", 'httpGetService', "httpDeleteService", '$mdDialog', '$location', function($scope, httpGetService, httpDeleteService, $mdDialog, $location) {
  var tThis = this;
  tThis.doctorsObj = [];
  tThis.rowIndex = -1;
  $scope.specSelectedUp;

  httpGetService.getDoctors().then(function(raspuns) {
    var result = raspuns.data.result;
    tThis.doctorsObj = result;

  });

  tThis.selectedRow = function(index) {
    tThis.rowIndex = index;
  };

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete doctor?')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Yes')
      .cancel('No');
    $mdDialog.show(confirm).then(function() {

      $scope.status = 'You decided to delete this doctor.';

      httpDeleteService.deleteDoctor(tThis.doctorsObj[tThis.rowIndex].dID).then(function(raspuns) {});
      tThis.doctorsObj.splice(tThis.rowIndex, 1);
      tThis.rowIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this hospital.';
    });
  };


  tThis.updateDoctor = function() {
    $location.path('/doctors/edit/' + tThis.doctorsObj[tThis.rowIndex].dID);
  };





}]);
