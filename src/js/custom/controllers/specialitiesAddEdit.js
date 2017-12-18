import {
  app
} from '../main.js';


console.log("efrejheruergygu");
app.controller("AddspecialityController", ['Notification', "httpPutService","httpUpdateService", "$scope", "$routeParams", 'httpGetService', function(Notification, httpPutService,httpUpdateService, $scope, $routeParams, httpGetService) {
  var tThis = this;
  tThis.paramId = $routeParams.id;
  $scope.specialityAdded;
  $scope.addSpecialDescription;
  tThis.addEditspec = function() {
    if (typeof $scope.specialityAdded != "undefined") {
      var _data = {
        "Code": "869754",
        "Name": $scope.specialityAdded,
        "Description": $scope.addSpecialDescription,
        "Picture": "src/img/DrDash",
      };
      if($routeParams.id){
        httpUpdateService.updateSpeciality(tThis.paramId,_data).then(function(raspuns) {
          console.log(raspuns, "raspuns");
          Notification.success("Speciality Updated");
        });
      }else{
        httpPutService.addSpeciality(_data).then(function(raspuns) {
          console.log(raspuns, "raspuns");
          $scope.specialityAdded = "";
          $scope.addSpecialDescription="";
          Notification.success("Speciality created");
        });
      }
    } else {
      console.log("errrrrrrrrrrrr");
      Notification.error({
        message: 'Could not add speciality'
      });

    };
  };
  var resetDefaults = function() {
    httpGetService.getSpecialityById(tThis.paramId).then(function(raspuns) {
      var data = raspuns.data.result;
      console.log(data,'data');
      $scope.specialityAdded = data.Name;
      $scope.addSpecialDescription=data.Description;
      tThis.specialBtn="Update Speciality";


      console.log(raspuns,"jghiyfutrdtuydtfughijogfgyhuij");
    });
  };
  if($routeParams.id){
    resetDefaults();

  }
tThis.specialBtn="Add Speciality";

}]);
