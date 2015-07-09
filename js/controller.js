angular.module("gtms", ["ui.bootstrap", "ui.router", "ngWebsocket", "ngCookies"]);

angular.module("gtms").controller("MainController", function ($scope, $timeout) {

  console.log("init main controller")
  $scope.login_options = [
    {name: "google", href: "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=119663559605-1f0jdbpvf47gj97a10etrtksbfvvl3fe.apps.googleusercontent.com&redirect_uri=http://localhost:8088/oauth2callback&approval_prompt=force&scope=email profile&state=login"}
  ]
  $scope.system_name = "GTMS2"
 
  var postdata = "client_id=119663559605-1f0jdbpvf47gj97a10etrtksbfvvl3fe.apps.googleusercontent.com&client_secret=jGffjFN4BL-kF0UtF2ej_sky&redirect_uri=http://localhost:8088/oauth2callback&grant_type=authorization_code&code=4/VcZ1L-Kq8a8rHz1QbCDqvnV5ILKRx7Nhx447-qnhH58#"
});

