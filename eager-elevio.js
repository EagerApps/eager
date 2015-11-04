window.EagerElevio = {
    init: function(options) {

        window._elev = window._elev || {};
        (function() {
            var i,e;
            i = document.createElement("script"),
                i.type = 'text/javascript';
            i.async = 1,
                i.src="https://static.elev.io/js/v3.js",
                e = document.getElementsByTagName("script")[0],
                e.parentNode.insertBefore(i,e);
        })();

        window._elev.account_id = options.token || 'preview';

        var user;

        if (options.docked_position) {
            window._elev.docked_position = options.docked_position;
        }
        if (options.side) {
            window._elev.side = options.side;
        }
        if (options.main_color) {
            window._elev.main_color = options.main_color;
        }

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


        if (user && typeof user === 'object' && user.email) {
            user.via = 'eager';
            window._elev.user = user;
        } else {
            return;
        }

    }
};