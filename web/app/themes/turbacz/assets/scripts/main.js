window.TURBACZ = window.TURBACZ || {};
window.TURBACZ._submodules = window.TURBACZ._submodules || {};

(function($) {

    $(function() {
        var bodyClassName = document.body.className.replace(/-/g, '_');
        var bodyClasses = bodyClassName.split(/\s+/);

        var getSubmodule = function(name) {
            return function() {
                window.TURBACZ._submodules[name]($);
            };
        };

        $.each(['common'].concat(bodyClasses), function(i, module) {
            if ($.isFunction(window.TURBACZ[module])) {
                window.TURBACZ[module]($);
            }
        });
    });
    
}(jQuery));
