// define angular myApp which must be imported in every controller file

var app = angular.module('myApp',['ngRoute', 'ngMaterial', 'ngMessages', 'ui-notification', 'ngStorage']);
export {app};
