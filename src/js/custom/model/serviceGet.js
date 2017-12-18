import {
  app
} from '../main.js';

app.factory('httpGetService', ['generalService', '$http', '$localStorage', function(generalService, $http, $localStorage) {
  return {
    getSpecialy: function() {
      return $http.get(generalService.requestLinks('/specialities?token=' + $localStorage.user.token));
    },
    getSpecialityById: function(id) {
      return $http.get(generalService.requestLinks('/speciality/' + id + '?token=' + $localStorage.user.token));
    },
    getHospital: function() {
      return $http.get(generalService.requestLinks('/hospitals?token=' + $localStorage.user.token));
    },
    getHospitalsById: function(id) {
      return $http.get(generalService.requestLinks('/hospital/' + id + '?token=' + $localStorage.user.token));
    },
    getDoctors: function() {
      return $http.get(generalService.requestLinks('/doctors?token=' + $localStorage.user.token));
    },
    getDoctorsById: function(id) {
      return $http.get(generalService.requestLinks('/doctor/' + id + '?token=' + $localStorage.user.token));
    },
    getRank: function() {
      return $http.get(generalService.requestLinks('/ranks?token=' + $localStorage.user.token));
    },
    getRankById: function(id) {
      return $http.get(generalService.requestLinks('/rank/' + id + '?token=' + $localStorage.user.token));
    },
    getSpecByHosp: function(id) {
      return $http.get(generalService.requestLinks('/front/specialitiesByHospital/' + id));
    },
    getFrontHosp: function() {
      return $http.get(generalService.requestLinks('/front/hospitals'));
    },
    getAllDr: function() {
      return $http.get(generalService.requestLinks('/front/doctors'));
    },
    getAllSpec: function() {
      return $http.get(generalService.requestLinks('/front/specialities'));
    },

  };
}]);
