import {
  app
} from '../main.js';


app.controller("AdddoctorController", ['Notification', "httpPutService", "httpUpdateService", "$scope", "$routeParams", '$localStorage', 'httpGetService', function(Notification, httpPutService, httpUpdateService, $scope, $routeParams, $localStorage, httpGetService) {
  var tThis = this;
  tThis.paramId = $routeParams.id;
  $scope.doctorName;
  $scope.doctorPrivate;
  $scope.doctorDescription;
  $scope.doctorPicture;
  tThis.specialityDr;
  $scope.idSpeciality;
  tThis.hospitalDr;
  $scope.idHospital;
  tThis.rankDr;
  $scope.idRank;

  httpGetService.getSpecialy().then(function(raspuns) {

    var result = raspuns.data.result;
    tThis.specialityDr = result;
  });
  httpGetService.getHospital().then(function(date) {
    var result2 = date.data.result;
    tThis.hospitalDr = result2;

  });
  httpGetService.getRank().then(function(rezultat) {
    var result3 = rezultat.data.result;
    tThis.rankDr = result3;
  });


  tThis.addEditDr = function() {
    if (typeof $scope.doctorName != "undefined") {
      var _data = {
        "Name": $scope.doctorName,
        "Rank_ID": $scope.idRank,
        "Speciality_ID": $scope.idSpeciality,
        "Hospital_ID": $scope.idHospital,
        "PrivatePractice": $scope.doctorPrivate,
        "CV": $scope.doctorDescription,
        "Picture": $scope.doctorPicture
      };
      if ($routeParams.id) {
        httpUpdateService.updateDoctors(tThis.paramId, _data).then(function(raspuns) {
          Notification.success("Doctor Updated");
        });
      } else {
        httpPutService.addDoctor(_data).then(function(raspuns) {
          console.log(_data);
          
          $scope.doctorName = "";
          $scope.idRank = "";
          $scope.idSpeciality = "";
          $scope.idHospital = "";
          $scope.doctorPrivate = "";
          $scope.doctorDescription = "";
          $scope.doctorPicture = "";

          Notification.success("Doctor added");
        });
      }
    } else {
      Notification.error({
        message: 'Could not add doctor'
      });

    };
  };

  var resetDefaults = function() {
    httpGetService.getDoctorsById(tThis.paramId).then(function(raspuns) {

      var data = raspuns.data.result;
      $scope.doctorName = data.Name;
      $scope.idRank = data.Rank_ID;
      $scope.idSpeciality = data.Speciality_ID;
      $scope.idHospital = data.Hospital_ID;
      $scope.doctorPrivate = data.PrivatePractice;
      $scope.doctorDescription = data.CV;
      $scope.doctorPicture = data.Picture;

      tThis.doctorBtn = "Update Doctor";

    });
  };
  if ($routeParams.id) {
    resetDefaults();

  }
  tThis.doctorBtn = "Add Doctor";

}]);
