import {
  app
} from '../main.js';


app.controller("AddrankController", ['Notification', "httpPutService", "httpUpdateService", "$scope", "$routeParams", 'httpGetService', function(Notification, httpPutService, httpUpdateService, $scope, $routeParams, httpGetService) {
  var tThis = this;
  tThis.paramId = $routeParams.id;
  $scope.rankName;
  $scope.rankDescription;

  tThis.addEditRank = function() {
    console.log($scope.rankName, '$scope.hospName');

    if (typeof $scope.rankName != "undefined") {
      var _data = {
        "Name": $scope.rankName,
        "Description": $scope.rankDescription,
        "id": "src/img/DrDash"
      };

      if ($routeParams.id) {
        httpUpdateService.updateRank(tThis.paramId, _data).then(function(raspuns) {
          Notification.success("Rank Updated");
        });
      } else {
        httpPutService.addRank(_data).then(function(raspuns) {
          Notification.success("Rank added");
        });
      }
    } else {
      Notification.error({
        message: 'Could not add rank'
      });

    };
  };

  var resetDefaults = function() {
    httpGetService.getRankById(tThis.paramId).then(function(raspuns) {
      console.log(raspuns, "raspuns");

      var data = raspuns.data.result;
      $scope.rankName = data.Name;
      $scope.rankDescription = data.Description;
      tThis.rankBtn = "Update Rank";


    });
  };
  if ($routeParams.id) {
    resetDefaults();

  }
  tThis.rankBtn = "Add Rank";

}]);
