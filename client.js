define([], function() {
    var commands = require("core/commands");
    var app = require("core/app");
    var dialogs = require("utils/dialogs");
    var settings = require("utils/settings");

    // Add settings page
    settings.add({
        'namespace': "videochat",
        'section': "main",
        'title': "Video Chat",
        'fields': {
            'state': {
                'label': "State",
                'type': "select",
                'help': "If offline, collaborators will not be able to call you.",
                'default': "online",
                'options': {
                    'online': 'Online',
                    'offline': 'Offline'
                }
            },
            'position': {
                'label': "Position",
                'type': "select",
                'help': "Position for the videos during a call.",
                'default': "right-bottom",
                'options': {
                    'right-bottom': 'Right Bottom',
                    'right-top': 'Right Top',
                    'left-bottom': 'Left Bottom',
                    'left-top': 'Left Top'
                }
            }
        }
    });

    // Add opening command
    commands.register("addons.videochat.open", {
        title: "Vieo Chat",
        icon: "video-camera"
    }, function() {
        //dialogs.open(GitDialog);
    });
});