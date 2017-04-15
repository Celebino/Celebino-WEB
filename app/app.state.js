var pathView = "app/components/";

celebinoApp.config(function ($stateProvider, $urlRouterProvider) {

    // default route
    $urlRouterProvider.otherwise("/");

    // states
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: pathView + 'home/homeView.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: pathView + 'about/index.html'
        })
        .state("login", {
            url: '/login',
            templateUrl: pathView + 'login/loginView.html'
        })
        .state("acess", {
            url: '/acess',
            templateUrl: pathView + 'acess/acessView.html'
        })
        .state('garden', {
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


});
