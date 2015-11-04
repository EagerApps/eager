{
    "resources": {
        "body": [
            {
                "type": "script",
                "src": "./eager-elevio.js"
            },
            {
                "type": "script",
                "contents": "EagerElevio.init(INSTALL_OPTIONS)"
            }
        ]
    },
    "options": {
        "properties": {
            "token": {
                "order": 1,
                "title": "Elevio Account ID",
                "description": "Grab this from your  <a href=\"https://app.elev.io/settings\" target=\"_blank\" class=\"with-inherited-color more\"><strong>settings page</strong> on elev.io</a>",
                "type": "string",
                "placeholder": "youraccountid"
            },
            "automaticUser": {
                "order": 2,
                "title": "Automatically detect logged in user information",
                "description": "<strong>For developers:</strong> This works by iterating through all of the properties on the <code class=\"inline\">window</code> object, looking for any with an <code class=\"inline\">email</code> property. So for example, this detection would work if you had the following somewhere in your app’s code:<pre><code>window.user = {\n  id: 'a1b2c3d4',\n  email: 'user@email.com'\n  first_name: 'John'\n\n  last_name: 'Doe'\n};</code></pre>Uncheck this option to manually specify which exposed property to use.",
                "type": "boolean",
                "default": true
            },
            "manuallySpecifiedUser": {
                "order": 3,
                "showIf": {
                    "automaticUser": false
                },
                "title": "Global JavaScript expression which evaluates to the logged in users",
                "type": "string",
                "placeholder": "window.Eager.auth.currentUser"
            }
        }
    }
}