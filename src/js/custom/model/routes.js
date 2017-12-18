import {
  app
} from '../main.js';
app.config(function($routeProvider) {

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
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/specialities", {
      templateUrl: "src/views/specialitiesList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/specialities/add", {
      templateUrl: "src/views/specialitiesAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/specialities/edit/:id", {
      templateUrl: "src/views/specialitiesAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/hospitals", {
      templateUrl: "src/views/hospitalsList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/hospitals/add", {
      templateUrl: "src/views/hospitalsAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/hospitals/edit/:id", {
      templateUrl: "src/views/hospitalsAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/doctors", {
      templateUrl: "src/views/doctorsList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/doctors/add", {
      templateUrl: "src/views/doctorsAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/doctors/edit/:id", {
      templateUrl: "src/views/doctorsAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/rank", {
      templateUrl: "src/views/rankList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/rank/add", {
      templateUrl: "src/views/rankAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/rank/edit/:id", {
      templateUrl: "src/views/rankAddUpdate.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/front", {
      templateUrl: "src/views/frontPage.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/frontHospitalsList", {
      templateUrl: "src/views/frontHospitalsList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/frontSpecialitiesList", {
      templateUrl: "src/views/frontSpecialitiesList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })
    .when("/frontDoctorsList", {
      templateUrl: "src/views/frontDoctorsList.html",
      // resolve:{
      //   factoryResolve:function(generalService){
      //     return generalService.isLogged();
      //   },
      // }
    })




    .when('/404', {
      templateUrl: "src/views/404.html"
    })
    .otherwise("/404");
});
