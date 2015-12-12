 'use strict';

angular.module('asmaiamTailoringApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-asmaiamTailoringApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-asmaiamTailoringApp-params')});
                }
                return response;
            }
        };
    });
