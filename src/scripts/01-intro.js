(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(root.angular);
    }
}(window.angular || null, function(angular) {
    'use strict';
