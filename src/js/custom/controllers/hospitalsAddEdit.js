import {
  app
} from '../main.js';


app.controller("AddhospitalController", ['Notification', "$http", "httpPutService", "httpUpdateService", "$scope", "$routeParams", 'httpGetService', function(Notification, $http, httpPutService, httpUpdateService, $scope, $routeParams, httpGetService) {
  var tThis = this;
  tThis.paramId = $routeParams.id;
  $scope.hospName;
  $scope.hospCounty;
  $scope.hospCity;
  $scope.hospStreet;
  $scope.hospWebsite;
  $scope.hospDescription;
  $scope.hospPhoto;
  $scope.hospCountry;
  tThis.country2 = [];
  
  $http.get('./src/js/custom/controllers/countries.txt').then(function(response) {
    var country = response.data;
    country = country.split("\n");
    country.forEach(function(item, index) {
      var countries = item.split("</li>");
      var countr = [];
      countr.push(countries[0]);
      countr.forEach(function(item2, i) {
        var countryies = {
          idunic: index,
          tara: item2.split("<li>")[1]
        };
        tThis.country2.push(countryies);
      });

      return tThis.country2;
    });

    return tThis.country2;

  });
  $scope.countrUnic;




  tThis.countries = ['Romania', "SUA", 'Italia'];




  tThis.addEdithosp = function() {

    if (typeof $scope.hospName != "undefined") {
      var _data = {
        "Name": $scope.hospName,
        "Description": $scope.hospDescription,
        "Country": $scope.countrUnic,
        "County": $scope.hospCounty,
        "City": $scope.hospCity,
        "Street": $scope.hospStreet,
        "Website": $scope.hospWebsite,
        "id": "src/img/DrDash",
      };

      if ($routeParams.id) {

        httpUpdateService.updateHospitals(tThis.paramId, _data).then(function(raspuns) {
          Notification.success("Hospital Updated");
        });
      } else {
        httpPutService.addHospital(_data).then(function(raspuns) {

          Notification.success("Hospital created");
          $scope.hospName = "";
          $scope.hospCounty = "";
          $scope.hospCity = "";
          $scope.hospStreet = "";
          $scope.hospWebsite = "";
          $scope.hospDescription = "";
          $scope.hospPhoto = "";
          $scope.hospCountry = "";

        });
      }
    } else {
      Notification.error({
        message: 'Could not add hospital'
      });

    };
  };

  var resetDefaults = function() {
    httpGetService.getHospitalsById(tThis.paramId).then(function(raspuns) {
      var data = raspuns.data.result;
      $scope.hospName = data.Name;
      $scope.hospCounty = data.County;
      $scope.hospCity = data.City;
      $scope.hospStreet = data.Street;
      $scope.hospWebsite = data.Website;
      $scope.hospDescription = data.Description;
      $scope.hospPhoto = data.Photo;
      $scope.hospCountry = data.Country;
      tThis.hospitalBtn = "Update Hospital";
    });
  };
  if ($routeParams.id) {
    resetDefaults();
  };
  tThis.hospitalBtn = "Add Hospital";
}]);
