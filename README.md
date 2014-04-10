qwebirc-mods [![Build Status](https://travis-ci.org/megawac/qwebirc-enhancements.svg?branch=testing)](https://travis-ci.org/megawac/qwebirc-enhancements)
=============  

<img align="right" height="125" src="https://raw.github.com/megawac/qwebirc-enhancements/master/images/qwebircsmall.png">
Qwebirc is intended to be a simple, intuitive and feature rich IRC client that operates out of the browser. This spiritual *fork* of Chris Porter's [qwebirc](http://qwebirc.org/) is a complete rewrite of the project in order to introduce more customability, add features introduced with HTML5, improve the extensibility of the code and revamp the ui (still qui). I began this project when I became frustrated trying to create a plugin atop of Qwebirc; flexibility and extensibility are two of the main focuses of the changes. I have also added multiple features, made code quality improvements, bug fixes, etc. Here's a ([Screenshot](http://puu.sh/4ANPf.png) [Screenshot 2](http://i.imgur.com/9Cee1iO.jpg)) of a live instance.  

**This is undergoing active development - a RC build is being staged**
 
## Installation:  

- Install [node.js](http://nodejs.org)
- Configure the qwebirc instance settings as described in [configuration](#configuration)
- Install development build dependencies using `npm install` in the base folder (reads in package.json)
- Run `grunt` to build static files

#### Making changes
After making changes to source files run in the base directory and run `grunt` in the command line to recompile resources.

### Configuration
Most basic configuration can be done with the files in [/configure](https://github.com/megawac/qwebirc-enhancements/tree/master/configure). Making more specific changes may require changes to source files.

You can set any [application options](https://github.com/megawac/qwebirc-enhancements/blob/master/js/src/ui/Interface.js#L2), [client options](https://github.com/megawac/qwebirc-enhancements/blob/master/js/src/irc/ircclient.js#L5), [user options](https://github.com/megawac/qwebirc-enhancements/blob/master/js/src/config/options.js#L3), or [settings](https://github.com/megawac/qwebirc-enhancements/blob/master/js/src/config/settings.js#L6) in the call to `qwebirc.createInstance()`. `createInstance` also checks the query string to see if any valid settings are set in the query string. For example, `127.0.0.1:9090/?channels=chat,qwebirc&style_saturation=5` will append `'#chat,#qwebirc'` to channels and set the user option, `style_saturation` to `5`. (Almost) Equivalently these can be set in the [create instance](https://github.com/megawac/qwebirc-enhancements/blob/master/configure/config.js) call:

```
qwebirc.createInstance("irc", qwebirc.ui.UI, {
   "appTitle": "Freenode WebIRC",
    "networkName": "Freenode",
    "debug": false,
    "settings": {
        "channels": ['#chat', '#qwebirc']
    },
    uiOptions: {
        "style_saturation": 5
    },
    "client": {
        "networkServices": ["Services.Freenode.net"],
        "loginRegex": /You are now identified for/,
        "node": false
    }
});
```

You can set compile settings either in the gruntfile manually or using some of the presets in the [`package.json`](https://github.com/megawac/qwebirc-enhancements/blob/master/package.json#L33)
- build:
 * minify: minimize the file size by shortening variable names and reducing whitespace
 * concat: concatenate files into large files where applicable
 * "use cdn": load files from a cdn where applicable
  
####Done:  
* improved extendibility through modularization and refactoring
* ui client relationship event driven and moving important functions to utils. Makes implementing extensions much simpler
 * redid url parser to be easier to add patterns and more complete
* various new ui features and fixes (some mentioned below)
 * detachable windows and resizable components
 * fixed tab overflow not showing
 * stable scrolling implementation
 * image popovers
 * boostrapped
* code quality improvements (more dry and intuitive and less hacky)
 * join-flood detection
 * Rewrote ui using mv* style
* rewrote irc colouriser and moved to theme
* rewrote and improved urlifier and moved to theme + module
* moved modifiable css to a precompiled handlebars template
* fix some memory leaks
* moved all panes to seperate modules (havent rewritten the embed wizard)
* mocked up new input bar see screenshot above
* Localization (see [#7](https://github.com/megawac/qwebirc-enhancements/issues/7))
  
####TODOs: 
* (minor) Finish Drag.SplitPane module (issues with keeping relative pos with window resizes) {{link to repo}}
* (minor) Move `ui.Theme` methods to utils and `ui.IWindow`
* Add options for:
 * (mid) configure hotkeys
* (major) Refactor python compile code to call appropriate Grunt build and set app options
  
  
####KNOWN BUGS:  
* __ie7 isnt rendering__ the site according to webpagetest.org. please send help or maple syrup  

##DEMO:  

#### Twisted (or Iris)
I have an instance of the code running over twisted on the Geeks-IRC network at [geeks-irc.herokuapp.com](http://geeks-irc.herokuapp.com/)

(Outdated) Source code of the instance is on [this branch](https://github.com/megawac/iris/tree/Geeks-IRC)
