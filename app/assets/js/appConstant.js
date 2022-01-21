(function () {
    angular
        .module('app.core')
        .constant('API', {
            url: '',
            crud_setting: {
                read: { method: 'GET' },
                update: { method: 'PUT' },
                create: { method: 'POST' },
                remove: { method: 'DELETE' },
                upadatePartial: { method: 'PATCH' },
                query: { method: 'GET', isArray: true },
            }
        });
    angular
        .module('app.lazyLoad')
        .constant('APP_REQUIRES', {
            scripts: {
                'notify': [
                    'app/services/NotifyService.js'
                ]
            },
            modules: [
                {
                    name: 'users',
                    files: [
                        'app/controller/admin/UserController.js',
                        'app/services/admin/UserServices.js'
                    ]
                }
            ]
        })

})();