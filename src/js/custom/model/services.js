import {
  app
} from '../main.js';

app.factory('generalService', [ "$localStorage", function($localStorage) {

  return {
    requestLinks: function(routePath) {
      return 'http://rmdserver.ioanachichernea.com' + routePath;
    },
    isLogged:function(){
      if(typeof $localStorage.user == 'undefined'){
        console.log('does not exist');
        $location.path("/login");
      }
      console.log($localStorage.user);
      return $localStorage.user;
      return true;

    }
  };

}]);
