import {
  app
} from '../../main.js';
app.directive("gotoPath", ["$location", function($location) {
  return {
    restrictive: "A",
    link: function(scope, element, attrs) {
      element.on("click", function() {
        scope.$apply(function() {
          console.log(attrs.gotoPath, "attrs");
          $location.path(attrs.gotoPath);
        });
      });
    },
  }
}])
