(function () {
    function routeConfig($stateProvider, $locationProvider, $urlRouterProvider, RouteHelperProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider$.otherwise('/page/404');
        $stateProvider.state('page404', {
            title:'Page Not Found',
            url: '/page/404',
            templateUrl: RouteHelperProvider.path('pages/404.html')
        });
    }
    routeConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelperProvider'];
    angular
        .module('app.routes')
        .config(routeConfig);

})();

(function(){
    'use strict';
    function RouteHelperProvider(APP_REQUIRES) {
        return {
            path,
            $get: () => path
        }

        function path(url){
            let date =  new Date();
            let time = date.getTime();
            return 'app/views'.concat(url, '?__time=', time);
        }

        function resolveFor(){
            let _args = Array.prototype.slice.call(arguments);
        }
    }
    RouteHelperProvider.$inject = ['APP_REQUIRES'];
    angular
        .module('app.routes')
        .provider('RouteHelper', RouteHelperProvider);
})()