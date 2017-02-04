app.config(["$stateProvider", "$httpProvider", "$urlRouterProvider", "$locationProvider",
  function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/main.html'
      })


      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

    }]).run(["$rootScope", "$state", function($rootScope, $state) {
        $rootScope.$state = $state;
      }]);
