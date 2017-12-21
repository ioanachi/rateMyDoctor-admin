import {
  app
} from '../main.js';
app.config(function($routeProvider, ) {


  $routeProvider
    .when("/", {
      templateUrl: "src/views/loginPage.html"
    })
    .when("/login", {
      templateUrl: "src/views/loginPage.html"
    })
    .when("/register", {
      templateUrl: "src/views/registerPage.html"
    })
    .when("/dashboard", {
      templateUrl: "src/views/dashboard.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/specialities", {
      templateUrl: "src/views/specialitiesList.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/specialities/add", {
      templateUrl: "src/views/specialitiesAddUpdate.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/specialities/edit/:id", {
      templateUrl: "src/views/specialitiesAddUpdate.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/hospitals", {
      templateUrl: "src/views/hospitalsList.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/hospitals/add", {
      templateUrl: "src/views/hospitalsAddUpdate.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/hospitals/edit/:id", {
      templateUrl: "src/views/hospitalsAddUpdate.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/doctors", {
      templateUrl: "src/views/doctorsList.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/doctors/add", {
      templateUrl: "src/views/doctorsAddUpdate.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/doctors/edit/:id", {
      templateUrl: "src/views/doctorsAddUpdate.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/rank", {
      templateUrl: "src/views/rankList.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/rank/add", {
      templateUrl: "src/views/rankAddUpdate.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/rank/edit/:id", {
      templateUrl: "src/views/rankAddUpdate.html",
      resolve: {
        check: function($localStorage,$location) {
          console.log();
          if (typeof $localStorage.user != 'undefined') {
            console.log('logged');
          } else  {
            $location.path('/login');
            console.log('not logged');

          }
        }
      }
    })
    .when("/front", {
      templateUrl: "src/views/frontPage.html",

    })
    .when("/frontHospitalsList", {
      templateUrl: "src/views/frontHospitalsList.html",

    })
    .when("/frontSpecialitiesList", {
      templateUrl: "src/views/frontSpecialitiesList.html",

    })
    .when("/frontDoctorsList", {
      templateUrl: "src/views/frontDoctorsList.html",

    })




    .when('/404', {
      templateUrl: "src/views/404.html"
    })
    .otherwise("/404");
});
