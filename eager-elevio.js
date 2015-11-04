window.EagerSatisMeter = {
    init: function(options) {

        var _elev = window._elev || {};
        (function() {
            var i,e;
            i = document.createElement("script"),
                i.type = 'text/javascript';
            i.async = 1,
                i.src="https://static.elev.io/js/v3.js",
                e = document.getElementsByTagName("script")[0],
                e.parentNode.insertBefore(i,e);
        })();

        _elev.account_id = options.token;//'konami';

        var settings = {};
        settings.token = options.token;
        settings.preview = INSTALL_ID === 'preview';


        var user;

        if (options.automaticUser) {
            var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            for (var k in window) {
                if (k === 'frame' || k === 'frameElement' || k === 'parent' || k === 'opener' || k === 'top') {
                    continue;
                }

                if (window.hasOwnProperty(k)) {
                    try {
                        var val = window[k];
                        if (typeof v === 'object' && v.email && v.email && emailRegex.test(v.email)) {
                            user = {};
                            user.email = v.email;

                            user.id = v.id || v.ID || v.USER_ID || v.userId;
                            user.first_name = v.firstName;
                            user.last_name = v.lastName;
                            user.createdAt = v.createdAt || v.created_at || v.created || v.created_date || v.createdDate || v.CREATED_AT;
                        }
                    } catch (e) {}
                }
            }
        } else {
            try {
                user = window.eval(options.manuallySpecifiedUser);
            } catch (e) {}
        }

        user.via = 'eager';

        if (user && typeof user === 'object' && user.email) {
            _elev.user = user;
        } else {
            return;
        }

    }
};