/* global angular */
(function () {
    angular
        .module('projectApp', [
            'app.core',
            'app.settings',
            'app.routes'
        ]);
})();

(function () {
    angular
        .module('app.core', [
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'ui.router',
            'oc.lazyLoad',
            'ngSanitize',
            'ngResource'
        ]);
})();

(function () {
    angular
        .module('app.settings', []);
})();

(function () {
    angular
        .module('app.lazyLoad', [

        ]);
})();

(function () {
    angular
        .module('app.routes', [
            'app.lazyLoad'
        ]);
})();