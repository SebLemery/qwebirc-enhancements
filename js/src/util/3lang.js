
(function() {

    var types = {
        ERROR: 0,
        INFO: 1,
        SERVER: 2,
        CHAN: 3,
        MISC: 4,

        MESSAGE: 5
    };

    var message = function(msg, type) {
        return {
            message: msg,
            type: type
        };
    };

    //language specific stuff. right now just an object
    // can either be a message or array of messages
    _.extend(lang, {
        TYPES: types,
        message: message,

        loginMessages: [message("Hint #1! When you close a channel this one will be deleted from your favorites and won't come back on the next connection.", types.INFO),
                        message("Hint #2! To join a new channel type this command in the chat box: /j #channel", types.INFO)],
        joinAfterAuth: message("Waiting for login before joining channels...", types.INFO),
        authFailed: [message("Could not auth with IRC network - waited 5 seconds.", types.ERROR),
                    message("Otherwise reattempt authing by typing: \"/authserv AUTH <your username> <your password>\"", types.ERROR),
                    message("To ignore the error and join channels, unauthed, type: \"/autojoin\".", types.ERROR)],
        signOn: message("SIGNON", types.SERVER),
        joinChans: message("Joining channels...", types.INFO),
        noTopic: message("(No topic set.)", types.INFO),

        needOp: message("Sorry, you need to be a channel operator to change the topic!", types.ERROR),
        changeTopicConfirm: message("Change topic of {channel} to:", types.MISC),

        poorJoinFormat: message("Channel names begin with # (corrected automatically).", types.INFO),
        waitToJoin: message("You recently tried to join {channel}. To prevent join-flooding, please wait {time} seconds before reattempting or type /fjoin {channel} to ignore this warning...", types.ERROR),
        invalidCommand: message("Can't use this command in this window", types.ERROR),
        invalidChanTarget: message("Can't target a channel with this command.", types.ERROR),
        insufficentArgs: message("Insufficient arguments for command.", types.ERROR),

        loadingPage: "Loading . . .",
        fishSlap: "slaps {nick} with a large fishbot",

        copyright: [message("qwebirc v" + qwebirc.VERSION, types.INFO),
                    message("Copyright (C) 2008-2011 Chris Porter and the qwebirc project.", types.INFO),
                    message("Current version by Emanuel \"megawac\" Jackstare", types.INFO),
                    message("http://www.qwebirc.org", types.INFO),
                    message("Licensed under the GNU General Public License, Version 2.", types.INFO)],

        alertNotice: "Alert!",
        activityNotice: message("Activity!", types.MISC),
        partChan: message("Part", types.MESSAGE),
        logOut: message("Logged out", types.MESSAGE),
        quit: message("Page closed", types.MESSAGE),
        disconnected: message("Client has been disconnected", types.INFO),

        uncontrolledFlood: message("ERROR: uncontrolled flood detected -- disconnected.", types.ERROR),
        connError: message("An error occured: {1}", types.ERROR),
        connRetry: message("Connection lost: retrying in {next} secs", types.ERROR),
        connTimeOut: message("Error: connection closed after {retryAttempts} requests failed.", types.ERROR),
        connectionFail: message("Couldn't connect to remote server.", types.ERROR),

        closeTab: "Close tab",
        detachWindow: "Detach Window",

        invalidNick: "Your nickname was invalid and has been corrected; please check your altered nickname and press Connect again.",
        missingNick: "You must supply a nickname",
        missingPass: "You must supply a password.",
        missingAuthInfo: "You must supply your username and password in auth mode.",


        //options
        DEDICATED_MSG_WINDOW: "Send privmsgs to dedicated messages window",
        DEDICATED_NOTICE_WINDOW: "Send notices to dedicated message window",
        NICK_OV_STATUS: "Show status (@/+) before nicknames in channel lines",
        ACCEPT_SERVICE_INVITES: "Automatically join channels when invited",
        USE_HIDDENHOST: "Hide your hostmask when authed (+x)",
        LASTPOS_LINE: "Show a last position indicator for each window",
        NICK_COLOURS: "Automatically colour nicknames",
        HIDE_JOINPARTS: "Hide JOINS/PARTS/QUITS",
        STYLE_HUE: "Adjust user interface hue",
        QUERY_ON_NICK_CLICK: "Query on nickname click in channel",
        // SHOW_NICKLIST: "Show nickname list in channels",
        SHOW_TIMESTAMPS: "Show timestamps",
        FONT_SIZE: "Set font size",


        NOTIFY_ON_MENTION: "When nick mentioned:",
        NOTIFY_ON_PM: "When private messaged:",
        NOTIFY_ON_NOTICE: "When channel notice:",
        AUTO_OPEN_PM: "Automatically select window on private message:",
        FLASH: "flash",
        BEEP: "beep",
        MESSAGE_PLACEHOLDER: ' something ... ',
        NICK_PLACEHOLDER: ' someone ... ',
        DELETE_NOTICE: 'remove',
        ADD_NOTICE: 'Add notifier',
        USER_NOTICE: 'User:',
        MESSAGE_NOTICE: 'Message:',
        AUTOESCAPE: 'Escape text',
        HIGHLIGHT: 'Highlight',
        MENTIONED: 'Mentioned',
        ESCAPE_HINT: 'This text is transformed into a regular expressions - autoescaping will check for the exact text you entered',
        DESKTOP_NOTICES: 'Allow us to send desktop notifications if supported (on any notice with flash):',

        ENABLE: 'Enable',
        DISABLE: 'Disable'
    });


    // lang.IRC_COMMAND_HELPERS = {
    //     "JOIN": "/JOIN <channel>",
    //     "NICK": "/NICK <new nickname>",
    //     "PART": "/PART <channel>",
    //     "QUIT": "/QUIT <message>",
    //     "TOPIC": "/TOPIC <channel> <topic>",
    //     "AWAY": "/AWAY <message>",
    //     "ME": "/ME <message>",
    //     "NOTICE": "/NOTICE <message>",
    //     "MODE": "/MODE <target(chan/user)> <mode>",
    //     "AUTHSERV": "/AUTHSERV AUTH <account> <password>"
    // };


ui.UI_COMMANDS = [
        {
            text: "Options",
            value: "optionsWindow"//ui method
        },
        {
            text: "Add webchat to your site",
            value: "embeddedWindow"
        },
        {
            text: "Privacy policy",
            value: "privacyWindow"
        },
        {
            text: "Frequently asked questions",
            value: "faqWindow"
        },
        {
            text: "Submit feedback",
            value: "feedbackWindow"
        },
        {
            text: "About qwebirc",
            value: "aboutWindow"
        }];

})();