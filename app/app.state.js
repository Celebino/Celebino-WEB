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
        .state('aboutUs', {
            url: '/aboutUs',
            templateUrl: pathView + 'aboutUs/aboutUsView.html'
        })
        .state("login", {
            url: '/login',
            templateUrl: pathView + 'login/loginView.html'
        })
        .state("garden", {
            url: '/garden',
            templateUrl: pathView + 'garden/gardenView.html'
        })
        .state("form", {
            url: '/form',
            templateUrl: pathView + 'form/formView.html'
        })
        .state("charts", {
            url: '/charts',
            templateUrl: pathView + 'charts/chartsView.html'
        })
        .state("dashboard", {
          url: '/dashboard',
          templateUrl: pathView + 'dashboard/dashboardView.html'
        })

});
