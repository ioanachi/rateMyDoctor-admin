import {
  app
} from '../main.js';




app.controller("MainController", ["$localStorage", "$scope", "$location",  function($localStorage, $scope, $location) {
  var tThis = this;
  tThis.user = $localStorage.user;
  $scope.userData = function(param) {
    tThis.user = param;
  };

  tThis.activateLogout = function() {
    delete $localStorage.user;
    delete tThis.user;
    $location.path("/login");
  };
  $scope.addSpecialityobj=[{
    name:"",
    description:"",
    index:"",
    nrOfDr:"",
  },
  ];
}])
