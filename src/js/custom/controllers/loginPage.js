import {
  app
} from '../main.js';



app.controller("LogvalidateController", ['Notification', "$http", "generalService", "httpPostService","$location", "$localStorage", "$scope", function(Notification, $http, generalService, httpPostService, $location, $localStorage, $scope) {
  var tThis = this;

  tThis.validateLogin = function(formName) {
    if (formName.$valid) {
      var _data = {
        "username": tThis.username,
        "password": tThis.password,
      };
      httpPostService.logInn(_data).then(function(raspuns) {
          var data = raspuns.data;
          Notification.success("Login successfull");
          $localStorage.user = {
            username: tThis.username,
            token: data.token,
          };
          $scope.userData($localStorage.user);


          $location.path('/dashboard');
        },
        function(err) {
          Notification.error({
            message: 'Could not find user'
          });
        });

    } else {
      Notification.error({
        message: 'Form not valid'
      });
    }
  };
}])
