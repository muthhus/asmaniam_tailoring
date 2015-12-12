'use strict';

angular.module('asmaiamTailoringApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


