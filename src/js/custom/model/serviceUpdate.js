import {
  app
} from '../main.js';

app.factory('httpUpdateService', ['generalService', '$http', '$localStorage', function(generalService, $http, $localStorage) {
  return {
    updateSpeciality: function(id, _data) {
      return $http.put(generalService.requestLinks('/speciality/' + id + '?token=' + $localStorage.user.token), _data);
    },
    updateHospitals: function(id, _data) {
      console.log(_data);
      return $http.put(generalService.requestLinks('/hospital/' + id + '?token=' + $localStorage.user.token), _data);
    },
    updateDoctors: function(id, _data) {
      return $http.put(generalService.requestLinks('/doctor/' + id + '?token=' + $localStorage.user.token), _data);
    },
    updateRank: function(id, _data) {
      return $http.put(generalService.requestLinks('/rank/' + id + '?token=' + $localStorage.user.token), _data);
    },


  };
}]);
