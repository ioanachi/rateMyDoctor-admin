import {
  app
} from '../main.js';

app.factory('httpDeleteService', ['generalService', '$http', '$localStorage', function(generalService,$http, $localStorage) {
  return {
     deleteSpeciality:function(id){
      return $http.delete(generalService.requestLinks('/speciality/'+id+'?token='+$localStorage.user.token));
    },
     deleteHospital:function(id){
      return $http.delete(generalService.requestLinks('/hospital/'+id+'?token='+$localStorage.user.token));
    },
    deleteDoctor:function(id){
     return $http.delete(generalService.requestLinks('/doctor/'+id+'?token='+$localStorage.user.token));
   },
   deleteRank:function(id){
    return $http.delete(generalService.requestLinks('/rank/'+id+'?token='+$localStorage.user.token));
  },
  };
}]);
