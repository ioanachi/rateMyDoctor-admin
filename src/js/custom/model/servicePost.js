import {
  app
} from '../main.js';

app.factory('httpPostService', ['generalService', '$http', function(generalService,$http) {
  return {
     logInn:function(param){
      return $http.post(generalService.requestLinks("/login"), param);
     }
  };
}]);
