(function () {
    function coreConfig() {
    }

    angular
        .module('app.core')
        .config(coreConfig);
})();

(function () {
    function settingsRun() {
        const urlBase = window.location.origin;
        $rootScope.app = {
            url_base: urlBase.concat('/projectApp/'),
            title: 'Titulo do Projeto',
            description: 'Descrição do projeto',
            keywords: 'Angular Js, HTML, CSS, JS, Javascript, ECMAScript, Bootstrap',
            layout: {}
        };
    }

    settingsRun.$inject = ['$rootScope', '$localStorage', '$state', '$stateParams']
    angular
        .module('app.settings')
        .run(settingsRun);
})();

(function () {
    function lazyLoadConfig($ocLazyLoadProvider, APP_REQUIRES) {
        $ocLazyLoadProvider.config({
            debug: true,
            modules: APP_REQUIRES.modules
        });
    }
    lazyLoadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];
    angular
        .module('app.lazyLoad')
        .run(lazyLoadConfig);
})();