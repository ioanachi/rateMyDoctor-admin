import {
  app
} from '../main.js';

app.controller("validationRegisterController", [ 'Notification', "$http","generalService", "httpPutService", "$location",  function( Notification, $http, generalService, httpPutService , $location) {
  var tThis = this;
  tThis.validateForm = function(formName) {

    if (formName.$valid) {
      var _data = {
        "username": tThis.username,
        "password": tThis.pw1,
        "email": tThis.email,
      };
      httpPutService.registerUser(_data).then(function(raspuns) {
        console.log(raspuns,"raspuns");
         Notification.success("User created");
        $location.path('/login');
      });

    } else {
      console.log("errrrrrrrrrrrr");
      Notification.error({message: 'Could not add user'});

    }
  };
}])
