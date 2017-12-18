import {
  app
} from '../../main.js';
app.directive("pwCheck", function() {
  return {
    require: "ngModel",
    link: function(scope, elem, attrs, ctrl) {
      console.log(attrs, "attrs");
      var firstPassword = '#' + attrs.pwCheck;
      var firstPasswordObj = angular.element(document.querySelector(firstPassword));
      firstPasswordObj.on('keyup', function() {
        scope.$apply(function() {
          console.log(firstPasswordObj.val(), elem.val());
          ctrl.$setValidity('pwmatch', elem.val() === firstPasswordObj.val());
        });
      });
      elem.on('keyup', function() {
        scope.$apply(function() {
          ctrl.$setValidity('pwmatch', elem.val() === firstPasswordObj.val());
        });
      });

    },
  };
});
