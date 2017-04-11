var pathView = "app/components/";

celebinoApp.config(function ($stateProvider, $urlRouterProvider) {

    // default route
    $urlRouterProvider.otherwise("/");

    // states
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: pathView + 'dashboard/dashboardView.html'
        })
        .state("login", {
            url: '/login',
            templateUrl: pathView + 'login/loginView.html'
        })
        .state("dashboard", {
          url: '/dashboard',
          templateUrl: pathView + 'dashboard/dashboardView.html'
        })

});
