import {
  app
} from '../main.js';

app.factory('httpPutService', ['generalService', '$http', '$localStorage', function(generalService, $http, $localStorage) {
  return {
    registerUser: function(_data) {
      return $http.put(generalService.requestLinks("/user"), _data);
    },
    addSpeciality: function(_data) {
      return $http.put(generalService.requestLinks("/speciality" + '?token=' + $localStorage.user.token), _data);
    },
    addHospital: function(_data) {
      return $http.put(generalService.requestLinks("/hospital" + '?token=' + $localStorage.user.token), _data);
    },
    addDoctor: function(_data) {
      console.log(_data);
      return $http.put(generalService.requestLinks("/doctor" + '?token=' + $localStorage.user.token), _data);
    },
    addRank: function(_data) {
      return $http.put(generalService.requestLinks("/rank" + '?token=' + $localStorage.user.token), _data);
    },
  };
}]);
