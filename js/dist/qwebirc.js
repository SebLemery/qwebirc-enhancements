/*
Copyright (c) 2008-2009 the qwebirc project.
http://www.qwebirc.org/

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
version 2 as published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Though it is not required, we would appreciate public facing
instances leaving a mention of the original author(s) and the
project name and URL in the about dialog, thanks!
*/

; (function(undefined) {
    "use strict";

    //common globals
    var window = this,
        document = window.document,
        $ = document.id,
        $$ = document.getElements;


    /* qwebirc -- Copyright (C) 2008-2011 Chris Porter and the qwebirc project --- All rights reserved. */

    var QWEBIRC_BUILD="bbc577ad5cb78d946ac1";

    //global object
    var qwebirc = window.qwebirc = _.extend(window.qwebirc || {}, {
        irc: {},
        ui: {
            themes: {}
        },
        util: {
            crypto: {},
        },
        config: {},
        auth: {},
        sound: {},
        lang: {},
        templates: {},
        cookies: {
            "channels": "qweb-channels",
            "nickname": "qweb-nickname",
            "username": "qweb-account",
            "password": "qweb-password",
            "auth": "qweb-auth",
            "newb": "qweb-visit",
            "options": "qweb-options",
            "history": "qweb-hist"
        },
        BUILD: QWEBIRC_BUILD,
        FILE_SUFFIX: "-" + QWEBIRC_BUILD,
        VERSION: "0.93-dev"
    });

    var irc = qwebirc.irc,

        util = qwebirc.util,
        crypto = util.crypto,

        config = qwebirc.config,
        auth = qwebirc.auth,

        ui = qwebirc.ui,
        themes = ui.themes,
        style = ui.style,

        cookies = qwebirc.cookies,

        sound = qwebirc.sound,//,

        lang = qwebirc.lang,

        templates = qwebirc.templates;

this["qwebirc"] = this["qwebirc"] || {};
this["qwebirc"]["templates"] = this["qwebirc"]["templates"] || {};

this["qwebirc"]["templates"]["modifiablecss"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "\r\n"
    + "\r\n"
    + "\r\n"
    + "\r\n#ircui {\r\nheight: 100%;\r\nwidth: 100%;\r\noverflow: hidden;\r\nfont-family: Verdana, sans-serif;\r\n}\r\n\r\n.qui .hidden, .qui .invisible {\r\ndisplay: none;\r\n}\r\n\r\n.channel-name {\r\nbackground-color: rgb(255, 255, 191);\r\nborder: 1px solid #C8D1DB;\r\nborder-radius: 4px 4px 4px 4px;\r\ncolor: #000000;\r\ncursor: default;\r\nfont-size: 0.8em;\r\npadding: 2px;\r\ntext-decoration: none;\r\nwhite-space: nowrap;\r\nfloat: left;\r\nmargin: 1px 0px 0px 1px;\r\nfont-weight: bold;\r\n}\r\n\r\n.qui .widepanel {\r\nwidth: 100%;\r\n}\r\n\r\n.qui .bottompanel {\r\ncolor: red;\r\n}\r\n\r\n.qui .lines {\r\ncolor: black;\r\noverflow: auto;\r\nfont-size: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "font_size", 12, options) : helperMissing.call(depth0, "$css", "font_size", 12, options)))
    + "px;\r\nbackground: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "lines_background", "f2f0ff", "c", options) : helperMissing.call(depth0, "$css", "lines_background", "f2f0ff", "c", options)))
    + ";\r\n}\r\n\r\n.qui .lines .timestamp {\r\ndisplay: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "show_timestamps", "inline", "comp", "none", options) : helperMissing.call(depth0, "$css", "show_timestamps", "inline", "comp", "none", options)))
    + ";\r\n}\r\n\r\n.qui .ircwindow .lines {\r\nfont-family: Consolas, \"Lucida Console\", monospace;\r\ntext-indent: 10px;\r\npadding-left: 1em;\r\nword-wrap: break-word;\r\n}\r\n\r\n.qui .lines .highlight1 {\r\nbackground-color: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "lines_highlight1", "f6ff94", "c", options) : helperMissing.call(depth0, "$css", "lines_highlight1", "f6ff94", "c", options)))
    + ";\r\n}\r\n\r\n.qui .lines .highlight2 {\r\nbackground-color: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "lines_highlight2", "A4FCCA", "c", options) : helperMissing.call(depth0, "$css", "lines_highlight2", "A4FCCA", "c", options)))
    + ";\r\n}\r\n\r\n.qui .lines .highlight3 {\r\nbackground-color: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "lines_highlight3", "FAC3D5", "c", options) : helperMissing.call(depth0, "$css", "lines_highlight3", "FAC3D5", "c", options)))
    + ";\r\n}\r\n\r\n.qui .lines .mentioned {\r\nbackground-color: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "mentioned_colour", "E63772", "c", options) : helperMissing.call(depth0, "$css", "mentioned_colour", "E63772", "c", options)))
    + " !important;\r\n}\r\n\r\n.qui .properties {\r\nbackground-color: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "menu_background", "f2f0ff", "c", options) : helperMissing.call(depth0, "$css", "menu_background", "f2f0ff", "c", options)))
    + ";\r\nborder-top: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "menu_border", "c8d2dc", "c", options) : helperMissing.call(depth0, "$css", "menu_border", "c8d2dc", "c", options)))
    + ";\r\nheight: 25px;\r\n}\r\n\r\n.qui .topic .emptytopic {\r\ncolor: gray;\r\n}\r\n\r\n.qui .topic {\r\ncolor: gray;\r\npadding-left: 5px;\r\nfont-size: 0.7em;\r\ncursor: default;\r\nbackground-color: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "topic_background", "f2f0ff", "c", options) : helperMissing.call(depth0, "$css", "topic_background", "f2f0ff", "c", options)))
    + ";\r\nborder-bottom: 1px dashed ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "topic_border", "c8d2dc", "c", options) : helperMissing.call(depth0, "$css", "topic_border", "c8d2dc", "c", options)))
    + ";\r\n}\r\n\r\n/*tab stuff*/\r\n\r\n.qui .outertabbar {\r\nborder-bottom: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tabbar_border", "c3cee0", "c", options) : helperMissing.call(depth0, "$css", "tabbar_border", "c3cee0", "c", options)))
    + ";\r\nbackground: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tabbar_background", "e2ecf9", "c", options) : helperMissing.call(depth0, "$css", "tabbar_background", "e2ecf9", "c", options)))
    + ";\r\nheight: 26px;\r\nline-height: 20px;\r\npadding: 2px 0;\r\nvertical-align: middle;\r\n}\r\n\r\n.qui .tabbar {\r\ncolor: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tabbar_text", "000000", "c", options) : helperMissing.call(depth0, "$css", "tabbar_text", "000000", "c", options)))
    + ";\r\ndisplay: inline-block;\r\n/*overflow-x: hidden;*/\r\nmargin-left: 10px;\r\nfont-size: 13px;\r\nheight: 22px;\r\n}\r\n\r\n.qui .tabbar .tab {\r\npadding: 2px;\r\ncursor: default;\r\nmargin-right: 3px;\r\nwhite-space: nowrap;\r\nfont-weight: bold;\r\n\r\ncolor: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tab_text", "000000", "c", options) : helperMissing.call(depth0, "$css", "tab_text", "000000", "c", options)))
    + ";\r\nborder: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tab_border", "c8d2dc", "c", options) : helperMissing.call(depth0, "$css", "tab_border", "c8d2dc", "c", options)))
    + ";\r\nborder-radius: 4px;\r\n-moz-border-radius: 4px;\r\n-webkit-border-radius: 4px;\r\n}\r\n\r\n.qui .tabbar .tab:hover {\r\nbackground: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tab_hover", "ffffff", "c", options) : helperMissing.call(depth0, "$css", "tab_hover", "ffffff", "c", options)))
    + ";\r\nborder: 1px solid #c8d2dc;\r\n-moz-border-radius: 4px;\r\n-webkit-border-radius: 4px;\r\n}\r\n\r\n.qui .tabbar .hilight-activity.tab {\r\ncolor: #009900;\r\n}\r\n\r\n.qui .tabbar .hilight-speech.tab {\r\ncolor: #0000ff;\r\n}\r\n\r\n.qui .tabbar .hilight-us.tab {\r\ncolor: #ff0000;\r\nbackground: rgb(216, 216, 138);\r\n}\r\n\r\n.qui .tabbar .brouhaha {\r\npadding-left: 75px;\r\nbackground-image: -moz-linear-gradient(45deg, #666 25%, transparent 25%),\r\n-moz-linear-gradient(-45deg, #666 25%, transparent 25%),\r\n-moz-linear-gradient(45deg, transparent 75%, #666 75%),\r\n-moz-linear-gradient(-45deg, transparent 75%, #666 75%);\r\nbackground-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, #666), color-stop(.25, transparent)),\r\n-webkit-gradient(linear, 0 0, 100% 100%, color-stop(.25, #666), color-stop(.25, transparent)),\r\n-webkit-gradient(linear, 0 100%, 100% 0, color-stop(.75, transparent), color-stop(.75, #666)),\r\n-webkit-gradient(linear, 0 0, 100% 100%, color-stop(.75, transparent), color-stop(.75, #666));\r\nbackground-image: -webkit-linear-gradient(45deg, #666 25%, transparent 25%),\r\n-webkit-linear-gradient(-45deg, #666 25%, transparent 25%),\r\n-webkit-linear-gradient(45deg, transparent 75%, #666 75%),\r\n-webkit-linear-gradient(-45deg, transparent 75%, #666 75%);\r\nbackground-image: -o-linear-gradient(45deg, #666 25%, transparent 25%),\r\n-o-linear-gradient(-45deg, #666 25%, transparent 25%),\r\n-o-linear-gradient(45deg, transparent 75%, #666 75%),\r\n-o-linear-gradient(-45deg, transparent 75%, #666 75%);\r\nbackground-image: linear-gradient(45deg, #666 25%, transparent 25%),\r\nlinear-gradient(-45deg, #666 25%, transparent 25%),\r\nlinear-gradient(45deg, transparent 75%, #666 75%),\r\nlinear-gradient(-45deg, transparent 75%, #666 75%);\r\n-moz-background-size: 2px 2px;\r\nbackground-size: 2px 2px;\r\n-webkit-background-size: 2px 2.1px; /* override value for webkit */\r\nbackground-position: 0 0, 1px 0, 1px -1px, 0px 1px;\r\n}\r\n\r\n.qui .tabbar .brouhaha.selected {\r\n/* background: rgb(255,214,94); Old browsers\r\nbackground: -moz-radial-gradient(center, ellipse cover,  rgba(255,214,94,1) 0%, rgba(254,191,4,1) 100%); FF3.6+\r\nbackground: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,214,94,1)), color-stop(100%,rgba(254,191,4,1))); Chrome,Safari4+\r\nbackground: -webkit-radial-gradient(center, ellipse cover,  rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%); Chrome10+,Safari5.1+\r\nbackground: -o-radial-gradient(center, ellipse cover,  rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%); Opera 12+\r\nbackground: -ms-radial-gradient(center, ellipse cover,  rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%); IE10+\r\nbackground: radial-gradient(ellipse at center,  rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%); W3C\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffd65e', endColorstr='#febf04',GradientType=1 ); IE6-9 fallback on horizontal gradient */\r\n}\r\n\r\n.qui .tabbar .brouhaha.unselected {\r\n/* background-image: -moz-linear-gradient(45deg, #666 25%, transparent 25%),\r\n-moz-linear-gradient(-45deg, #666 25%, transparent 25%),\r\n-moz-linear-gradient(45deg, transparent 75%, #666 75%),\r\n-moz-linear-gradient(-45deg, transparent 75%, #666 75%);\r\nbackground-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, #666), color-stop(.25, transparent)),\r\n-webkit-gradient(linear, 0 0, 100% 100%, color-stop(.25, #666), color-stop(.25, transparent)),\r\n-webkit-gradient(linear, 0 100%, 100% 0, color-stop(.75, transparent), color-stop(.75, #666)),\r\n-webkit-gradient(linear, 0 0, 100% 100%, color-stop(.75, transparent), color-stop(.75, #666));\r\nbackground-image: -webkit-linear-gradient(45deg, #666 25%, transparent 25%),\r\n-webkit-linear-gradient(-45deg, #666 25%, transparent 25%),\r\n-webkit-linear-gradient(45deg, transparent 75%, #666 75%),\r\n-webkit-linear-gradient(-45deg, transparent 75%, #666 75%);\r\nbackground-image: -o-linear-gradient(45deg, #666 25%, transparent 25%),\r\n-o-linear-gradient(-45deg, #666 25%, transparent 25%),\r\n-o-linear-gradient(45deg, transparent 75%, #666 75%),\r\n-o-linear-gradient(-45deg, transparent 75%, #666 75%);\r\nbackground-image: linear-gradient(45deg, #666 25%, transparent 25%),\r\nlinear-gradient(-45deg, #666 25%, transparent 25%),\r\nlinear-gradient(45deg, transparent 75%, #666 75%),\r\nlinear-gradient(-45deg, transparent 75%, #666 75%);\r\n-moz-background-size: 2px 2px;\r\nbackground-size: 2px 2px;\r\n-webkit-background-size: 2px 2.1px; override value for webkit\r\nbackground-position: 0 0, 1px 0, 1px -1px, 0px 1px; */\r\n}\r\n\r\n\r\n.qui .tabbar .selected.tab {\r\nbackground: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tab_selected", "ffffff", "c", options) : helperMissing.call(depth0, "$css", "tab_selected", "ffffff", "c", options)))
    + ";\r\nborder: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tab_selected_border", "c8d2dc", "c", options) : helperMissing.call(depth0, "$css", "tab_selected_border", "c8d2dc", "c", options)))
    + ";\r\n-moz-border-radius: 4px;\r\n-webkit-border-radius: 4px;\r\ncolor: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "tab_selected_text", "333333", "c", options) : helperMissing.call(depth0, "$css", "tab_selected_text", "333333", "c", options)))
    + ";\r\n}\r\n\r\n.qui .buttons {\r\ndisplay: none;\r\n}\r\n\r\n.qui.signed-in .buttons {\r\ndisplay: inline-block;\r\ncursor: pointer;\r\n}\r\n\r\n.buttons span {\r\nvertical-align: middle;\r\ndisplay: inline-block;\r\n}\r\n\r\n/* tab stuff */\r\n\r\n/*irc input stuff*/\r\n.qui form.input {\r\nbackground-color: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "menu_background", "f2f0ff", "c", options) : helperMissing.call(depth0, "$css", "menu_background", "f2f0ff", "c", options)))
    + ";\r\nmargin: 0;\r\n}\r\n\r\n.qui .input div {\r\nborder-top: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "input_border", "c3cee0", "c", options) : helperMissing.call(depth0, "$css", "input_border", "c3cee0", "c", options)))
    + ";\r\npadding: 0 5px 1px;\r\nmargin: 0;\r\nwidth: 100%;\r\n}\r\n\r\n.qui .input div > .input-group-addon {\r\ncursor:pointer;cursor:hand;\r\npadding: 2px 5px;\r\n}\r\n\r\n.qui .input div > * {\r\nheight: 24px;\r\n}\r\n\r\n.qui .input .nickname {\r\ncolor: #524F50;\r\nfont-size: 14px;\r\n}\r\n\r\n.qui .input .nickname .status {\r\nborder-radius: 50%;\r\ndisplay: inline-block;\r\nmargin-right: 3px;\r\n}\r\n\r\n.qui .input .nickname:hover {\r\n\r\n}\r\n\r\n.qui .input .nickname .status.voice {\r\nwidth: 8px;\r\nheight: 8px;\r\nbackground-color: rgb(223, 187, 47);\r\nbackground-image: radial-gradient(45px 45px 45deg, circle, yellow 0%, orange 100%, red 95%);\r\nbackground-image: -moz-radial-gradient(45px 45px 45deg, circle, yellow 0%, orange 100%, red 95%);\r\nbackground-image: -o-radial-gradient(45px 45px 45deg, circle, yellow 0%, orange 100%, red 95%);\r\nbackground-image: -webkit-radial-gradient(45px 45px, circle, yellow, orange);\r\nanimation-name: spin;\r\nanimation-duration: 3s;\r\nanimation-iteration-count: infinite;\r\nanimation-timing-function: linear;\r\n-webkit-animation-name: spin;\r\n-webkit-animation-duration: 3s;\r\n-webkit-animation-iteration-count: infinite;\r\n-webkit-animation-timing-function: linear;\r\n-moz-animation-name: spin;\r\n-moz-animation-duration: 3s;\r\n-moz-animation-iteration-count: infinite;\r\n-moz-animation-timing-function: linear;\r\n-o-animation-name: spin;\r\n-o-animation-duration: 3s;\r\n-o-animation-iteration-count: infinite;\r\n-o-animation-timing-function: linear;\r\n}\r\n\r\n.qui .input .nickname .status.op {\r\nwidth: 8px;\r\nheight: 8px;\r\nbackground-color: #7AE60E;\r\nbackground-image: radial-gradient(45px 45px 45deg, circle, #5FFF4A 3%, #7AE60E 76%);\r\nbackground-image: -moz-radial-gradient(45px 45px 45deg, circle, #5FFF4A 3%, #7AE60E 76%);\r\nbackground-image: -o-radial-gradient(45px 45px, circle, #5FFF4A 3%, #7AE60E 76%);\r\nbackground-image: -webkit-radial-gradient(45px 45px, circle, #5FFF4A 3%, #7AE60E 76%);\r\nanimation-name: spin;\r\nanimation-duration: 3s;\r\nanimation-iteration-count: infinite;\r\nanimation-timing-function: linear;\r\n-webkit-animation-name: spin;\r\n-webkit-animation-duration: 3s;\r\n-webkit-animation-iteration-count: infinite;\r\n-webkit-animation-timing-function: linear;\r\n-moz-animation-name: spin;\r\n-moz-animation-duration: 3s;\r\n-moz-animation-iteration-count: infinite;\r\n-moz-animation-timing-function: linear;\r\n-o-animation-name: spin;\r\n-o-animation-duration: 3s;\r\n-o-animation-iteration-count: infinite;\r\n-o-animation-timing-function: linear;\r\n}\r\n\r\n.qui .input .input-field {\r\nborder: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "input_border", "c3cee0", "c", options) : helperMissing.call(depth0, "$css", "input_border", "c3cee0", "c", options)))
    + ";\r\npadding: 0;\r\nheight: 26px;\r\ntext-indent: 5px;\r\n}\r\n\r\n.qui .input .tt-hint {\r\nbackground-image: linear-gradient(bottom, rgb(235,235,232) 54%, rgb(247,250,240) 66%);\r\nbackground-image: -o-linear-gradient(bottom, rgb(235,235,232) 54%, rgb(247,250,240) 66%);\r\nbackground-image: -moz-linear-gradient(bottom, rgb(235,235,232) 54%, rgb(247,250,240) 66%);\r\nbackground-image: -webkit-linear-gradient(bottom, rgb(235,235,232) 54%, rgb(247,250,240) 66%);\r\nbackground-image: -ms-linear-gradient(bottom, rgb(235,235,232) 54%, rgb(247,250,240) 66%);\r\nbackground-image: -webkit-gradient(\r\nlinear,\r\nleft bottom,\r\nleft top,\r\ncolor-stop(0.54, rgb(235,235,232)),\r\ncolor-stop(0.66, rgb(247,250,240))\r\n);\r\npadding: 0;\r\nheight: 26px;\r\ntext-indent: 5px;\r\n}\r\n\r\n/*twitter typeahead inspired autocomplete using overlay input box*/\r\n.qui .tt-hint {\r\nposition: absolute;\r\ntop: 0px;\r\nleft: 0px;\r\nborder-color: transparent;\r\nbox-shadow: none;\r\ncolor: #BDBDBD;\r\n}\r\n\r\n.qui .tt-query {\r\nposition: relative;\r\nvertical-align: top;\r\nbackground-color: transparent;\r\n}\r\n/*typeahead*/\r\n\r\n.qui .input .btn.send {\r\ncolor: grey;\r\npadding: 2px 10px;\r\n}\r\n\r\n.qui .nicklist {\r\nborder-left: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "nicklist_border", "c8d2dc", "c", options) : helperMissing.call(depth0, "$css", "nicklist_border", "c8d2dc", "c", options)))
    + ";\r\nwidth: 140px;\r\noverflow: auto;\r\nbackground: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "nicklist_background", "f2f0ff", "c", options) : helperMissing.call(depth0, "$css", "nicklist_background", "f2f0ff", "c", options)))
    + ";\r\ncolor: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "nicklist_text", "000000", "c", options) : helperMissing.call(depth0, "$css", "nicklist_text", "000000", "c", options)))
    + ";\r\nfont-size: 0.7em;\r\n}\r\n\r\n.qui .nicklist .user, .qui .nicklist .menu span {\r\ndisplay: block;\r\ncolor: black;\r\ntext-decoration: none;\r\ncursor: default;\r\nborder-top: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "nicklist_background", "f2f0ff", "c", options) : helperMissing.call(depth0, "$css", "nicklist_background", "f2f0ff", "c", options)))
    + ";\r\nborder-bottom: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "nicklist_background", "f2f0ff", "c", options) : helperMissing.call(depth0, "$css", "nicklist_background", "f2f0ff", "c", options)))
    + ";\r\npadding-left: 1px;\r\n}\r\n\r\n.qui .nicklist .selected {\r\ndisplay: block;\r\ncolor: black;\r\nbackground: white;\r\ntext-decoration: none;\r\nborder-bottom: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "nicklist_selected_border", "c8d2dc", "c", options) : helperMissing.call(depth0, "$css", "nicklist_selected_border", "c8d2dc", "c", options)))
    + " 1px solid;\r\ncursor: default;\r\n}\r\n\r\n.qui .nicklist .selected-middle {\r\nborder-top: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "nicklist_selected_border", "c8d2dc", "c", options) : helperMissing.call(depth0, "$css", "nicklist_selected_border", "c8d2dc", "c", options)))
    + " 1px solid;\r\n}\r\n\r\n#noscript {\r\ntext-align: center;\r\nfont-weight: bold;\r\n}\r\n\r\n.qui .nicklist .menu {\r\nmargin: 0 0 0 5px;\r\n}\r\n\r\n.qui .nicklist .menu a {\r\nborder-bottom: 0;\r\nborder-top: 0;\r\n}\r\n\r\n.hyperlink-whois, .hyperlink-channel {\r\ncursor: pointer;\r\ncursor: hand;\r\n}\r\n\r\n.hyperlink-whois:hover, .hyperlink-channel:hover {\r\ntext-decoration: underline;\r\n}\r\n\r\n.qui .outertabbar .dropdown-tab {\r\ncursor: pointer; cursor: hand;\r\ndisplay: inline-block;\r\npadding-left: 4px;\r\nwidth: 30px;\r\n}\r\n\r\n.qui .dropdownmenu {\r\nz-index: 100;\r\nborder: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "menu_border", "c8d2dc", "c", options) : helperMissing.call(depth0, "$css", "menu_border", "c8d2dc", "c", options)))
    + ";\r\nbackground: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "menu_background", "f2f0ff", "c", options) : helperMissing.call(depth0, "$css", "menu_background", "f2f0ff", "c", options)))
    + ";\r\nlist-style: none;\r\npadding: 5px 10px;\r\nfont-size: 0.7em;\r\n}\r\n\r\n.qui .dropdownmenu a {\r\ncolor: black;\r\ncursor: pointer;\r\ncursor: hand;\r\npadding-top: 3px;\r\n}\r\n\r\n.qui .dropdownmenu a:hover {\r\nbackground: ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "menu_hover_background", "FFFE", "c", options) : helperMissing.call(depth0, "$css", "menu_hover_background", "FFFE", "c", options)))
    + ";\r\n}\r\n\r\n.qui .dropdownhint {\r\nposition: relative;\r\nleft: -500px;\r\nz-index: 10;\r\nwhite-space: nowrap;\r\nfont-size: 0.7em;\r\n}\r\n\r\n.qui .chanmenu {\r\nwidth: 150px;\r\n}\r\n\r\n.qui .chanmenu .hint {\r\nfloat: right;\r\nfont-size: 75%;\r\ncolor: grey;\r\n}\r\n\r\n.qui hr.lastpos {\r\nborder: none;\r\nborder-top: 1px solid ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.$css || depth0.$css),stack1 ? stack1.call(depth0, "lastpositionbar", "C8D2DC", "c", options) : helperMissing.call(depth0, "$css", "lastpositionbar", "C8D2DC", "c", options)))
    + ";\r\nmargin: .5em 3em;\r\n}\r\n\r\n.qwebirc-init-channels {\r\nfont-size: 95%;\r\ncolor: #928D8D;\r\ntext-align: center;\r\n}";
  return buffer;
  });

this["qwebirc"]["templates"]["authpage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "hidden";
  }

  buffer += "<div class=\"container center\">\r\n<form id=\"login\">\r\n<h2>Connect to ";
  if (stack1 = helpers.network) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.network; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " IRC</h2>\r\n<div class=\"nick right\">\r\n<label class=\"control-label\" for=\"nickname\">Nickname:\r\n<input type=\"text\" name=\"basic\" id=\"nickname\" value=\"";
  if (stack1 = helpers.nickname) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nickname; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"Nickname\" />\r\n</label>\r\n</div>\r\n<div class=\"username right ";
  stack1 = helpers.unless.call(depth0, depth0.full, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n<label class=\"control-label\" for=\"username\">";
  if (stack1 = helpers.network) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.network; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " username:\r\n<input type=\"text\" name=\"full\" id=\"username\" value=\"";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"";
  if (stack1 = helpers.network) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.network; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " username\">\r\n</label>\r\n</div>\r\n<div class=\"password right ";
  stack1 = helpers.unless.call(depth0, depth0.full, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n<label class=\"control-label\" for=\"password\">Password:\r\n<input type=\"password\" name=\"full\" id=\"password\" value=\"";
  if (stack1 = helpers.password) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.password; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n</label>\r\n</div>\r\n<div class=\"authenticate\">\r\n<label for=\"authenticate\">Authenticate (optional)<input type=\"checkbox\" id=\"authenticate\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.check || depth0.check),stack1 ? stack1.call(depth0, depth0.full, options) : helperMissing.call(depth0, "check", depth0.full, options)))
    + "></label for=\"authenticate\">\r\n</div>\r\n<div><input type=\"submit\" value=\"Connect\" class=\"btn btn-primary btn-smaller\" /></div>\r\n</form>\r\n<div class=\"qwebirc-init-channels\"><span>";
  if (stack2 = helpers.channels) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.channels; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></div>\r\n</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["chanmenu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials.menuitem, 'menuitem', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<div class='chanmenu dropdownmenu'>\r\n";
  stack1 = helpers.each.call(depth0, depth0.channels, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["channelName"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div class='channel-name'>";
  if (stack1 = helpers.channel) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.channel; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["channellink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class='hyperlink-channel' data-chan='";
  if (stack1 = helpers.channel) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.channel; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.channel) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.channel; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });

this["qwebirc"]["templates"]["customNotice"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"controls custom-notice\" id=";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\r\n<label class=\"control-inline\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.USER_NOTICE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n<input type=\"text\" data-id=\"nick\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.NICK_PLACEHOLDER)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"";
  if (stack2 = helpers.nick) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.nick; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\r\n</label>\r\n<label class=\"control-inline\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.MESSAGE_NOTICE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n<input type=\"text\" data-id=\"msg\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.MESSAGE_PLACEHOLDER)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"";
  if (stack2 = helpers.msg) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.msg; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\r\n</label>\r\n<label class=\"checkbox-inline\" >"
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.BEEP)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n<input type=\"checkbox\" data-id=\"beep\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.check || depth0.check),stack1 ? stack1.call(depth0, depth0.beep, options) : helperMissing.call(depth0, "check", depth0.beep, options)))
    + ">\r\n</label>\r\n<label class=\"checkbox-inline\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.FLASH)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n<input type=\"checkbox\" data-id=\"flash\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.check || depth0.check),stack1 ? stack1.call(depth0, depth0.flash, options) : helperMissing.call(depth0, "check", depth0.flash, options)))
    + ">\r\n</label>\r\n<!-- <label class=\"checkbox-inline\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.HIGHLIGHT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n<input type=\"checkbox\" data-id=\"highlight\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.check || depth0.check),stack1 ? stack1.call(depth0, depth0.highlight, options) : helperMissing.call(depth0, "check", depth0.highlight, options)))
    + ">\r\n</label>\r\n<label class=\"checkbox-inline\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.MENTIONED)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n<input type=\"checkbox\" data-id=\"mentioned\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.check || depth0.check),stack1 ? stack1.call(depth0, depth0.mentioned, options) : helperMissing.call(depth0, "check", depth0.mentioned, options)))
    + ">\r\n</label> -->\r\n<label class=\"checkbox-inline\" title=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.ESCAPE_HINT)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.AUTOESCAPE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n<input type=\"checkbox\" data-id=\"autoescape\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.check || depth0.check),stack1 ? stack1.call(depth0, depth0.autoescape, options) : helperMissing.call(depth0, "check", depth0.autoescape, options)))
    + ">\r\n</label>\r\n<input type=\"button\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.lang),stack1 == null || stack1 === false ? stack1 : stack1.DELETE_NOTICE)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"remove-notice btn btn-danger btn-smaller\">\r\n</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["detachedWindow"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials.tabClose, 'tabClose', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<div class='detached-window'>\r\n<div class='header'>\r\n<span class='title'>";
  if (stack1 = helpers.channel) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.channel; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n";
  stack1 = helpers.unless.call(depth0, depth0.base, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.tabAttach, 'tabAttach', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["ircInput"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='input'>\r\n<div class='tt-ahead input-group'>\r\n<span class='input-group-addon nickname'><span class='status ";
  if (stack1 = helpers.status) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.status; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'></span>";
  if (stack1 = helpers.nick) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nick; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n"
    + "\r\n<input class='tt-hint' type='text' autocomplete='off' spellcheck='off' disabled>\r\n<input class='tt-query input-field form-control' type='text' autocomplete='off' spellcheck='off'>\r\n<span class='input-group-btn'>\r\n<button class='btn btn-default send' type='button'>&gt;</button>\r\n</span>\r\n</div>\r\n</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["ircMessage"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>";
  return buffer;
  });

this["qwebirc"]["templates"]["ircTab"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function";

function program1(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials.tabClose, 'tabClose', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<span class='tab'>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "&nbsp;";
  stack1 = self.invokePartial(partials.tabDetach, 'tabDetach', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, depth0.closable, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>";
  return buffer;
  });

this["qwebirc"]["templates"]["ircstyle"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"";
  if (stack1 = helpers.background) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.background; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.colour) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.colour; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.style) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.style; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>";
  return buffer;
  });

this["qwebirc"]["templates"]["mainmenu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials.menuitem, 'menuitem', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<div>\r\n<ul class='";
  if (stack1 = helpers.menuclass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.menuclass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " dropdownmenu'>\r\n";
  stack1 = helpers.each.call(depth0, depth0.menu, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["menubtn"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='dropdown-tab'>\r\n<img src='";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "' title='menu' alt='menu'>\r\n</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["menuitem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-value='";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span class='hint'>";
  if (stack1 = helpers.hint) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.hint; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  }

  buffer += "<a";
  stack1 = helpers['if'].call(depth0, depth0.value, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\r\n<li>\r\n<span>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n";
  stack1 = helpers['if'].call(depth0, depth0.hint, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</li>\r\n</a>";
  return buffer;
  });

this["qwebirc"]["templates"]["message"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='message ";
  if (stack1 = helpers['class']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['class']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'><span>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>";
  return buffer;
  });

this["qwebirc"]["templates"]["nickbtn"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='user'><span class='nick'>";
  if (stack1 = helpers.nick) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.nick; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>";
  return buffer;
  });

this["qwebirc"]["templates"]["nickmenubtn"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span>- ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });

this["qwebirc"]["templates"]["qweblink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class='hyperlink-page' data-page='";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });

this["qwebirc"]["templates"]["spanURL"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class='hyperlink-channel'>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });

this["qwebirc"]["templates"]["timestamp"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class='timestamp'>";
  if (stack1 = helpers.time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.time; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </span>";
  return buffer;
  });

this["qwebirc"]["templates"]["topicBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.topicText, 'topicText', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "&nbsp;\r\n";
  }

  buffer += "<div class='topic qui colourline'>\r\n";
  stack1 = helpers['if'].call(depth0, depth0.topic, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["qwebirc"]["templates"]["topicText"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "emptytopic";
  }

  buffer += "<span class='";
  stack1 = helpers['if'].call(depth0, depth0.empty, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>[<span>";
  if (stack1 = helpers.topic) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.topic; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>]</span>";
  return buffer;
  });

this["qwebirc"]["templates"]["userlink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class='hyperlink-whois' data-user='";
  if (stack1 = helpers.userid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>";
  return buffer;
  });

this["qwebirc"]["templates"]["window"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials.topicBar, 'topicBar', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n";
  stack1 = self.invokePartial(partials.verticalDivider, 'verticalDivider', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div class=\"qui rightpanel\"></div>\r\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = self.invokePartial(partials.ircInput, 'ircInput', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<div class=\"window qui\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-name=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\r\n";
  stack1 = helpers['if'].call(depth0, depth0.isChannel, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n<div class=\"qui content\">\r\n<div class=\"qui leftpanel lines\"></div>\r\n";
  stack1 = helpers['if'].call(depth0, depth0.isChannel, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<div class=\"qui properties\">\r\n";
  stack1 = self.invokePartial(partials.channelName, 'channelName', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<div class=\"qui bottompanel\">\r\n";
  stack1 = helpers['if'].call(depth0, depth0.needsInput, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n</div>";
  return buffer;
  });

ui.WINDOW = {
    status: 1,
    query: 2,
    channel: 4,
    custom: 8,
    connect: 16,
    messages: 32
};

ui.CUSTOM_CLIENT = "custom";

ui.HIGHLIGHT = {
    none: 0,
    activity: 1,
    speech: 2,
    us: 3
};


irc.PMODE_LIST = 0;
irc.PMODE_SET_UNSET = 1;
irc.PMODE_SET_ONLY = 2;
irc.PMODE_REGULAR_MODE = 3;


var BROUHAHA = '#brouhaha',
    CONNECTION_DETAILS = 'Connection details',
    STATUS = 'Status',
    OPTIONS = 'Options',
    ACTIVE = '\x09ACTIVE',


    BASE_WINDOWS = [BROUHAHA, CONNECTION_DETAILS, STATUS],
    CHANNEL_TYPES = [ui.WINDOW.channel, ui.WINDOW.query, ui.WINDOW.messages],
    INPUT_TYPES = [ui.WINDOW.status, ui.WINDOW.query, ui.WINDOW.channel, ui.WINDOW.messages];

var OPED = "+",
    DEOPED = "-",
    OPSTATUS = "@",
    VOICESTATUS = "+";

irc.IRCLowercaseTable = [ /* x00-x07 */ '\x00', '\x01', '\x02', '\x03', '\x04', '\x05', '\x06', '\x07',
    /* x08-x0f */
    '\x08', '\x09', '\x0a', '\x0b', '\x0c', '\x0d', '\x0e', '\x0f',
    /* x10-x17 */
    '\x10', '\x11', '\x12', '\x13', '\x14', '\x15', '\x16', '\x17',
    /* x18-x1f */
    '\x18', '\x19', '\x1a', '\x1b', '\x1c', '\x1d', '\x1e', '\x1f',
    /* ' '-x27 */
    ' ', '!', '"', '#', '$', '%', '&', '\x27',
    /* '('-'/' */
    '(', ')', '*', '+', ',', '-', '.', '/',
    /* '0'-'7' */
    '0', '1', '2', '3', '4', '5', '6', '7',
    /* '8'-'?' */
    '8', '9', ':', ';', '<', '=', '>', '?',
    /* '@'-'G' */
    '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
    /* 'H'-'O' */
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    /* 'P'-'W' */
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    /* 'X'-'_' */
    'x', 'y', 'z', '{', '|', '}', '~', '_',
    /* '`'-'g' */
    '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
    /* 'h'-'o' */
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    /* 'p'-'w' */
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
    /* 'x'-x7f */
    'x', 'y', 'z', '{', '|', '}', '~', '\x7f',
    /* x80-x87 */
    '\x80', '\x81', '\x82', '\x83', '\x84', '\x85', '\x86', '\x87',
    /* x88-x8f */
    '\x88', '\x89', '\x8a', '\x8b', '\x8c', '\x8d', '\x8e', '\x8f',
    /* x90-x97 */
    '\x90', '\x91', '\x92', '\x93', '\x94', '\x95', '\x96', '\x97',
    /* x98-x9f */
    '\x98', '\x99', '\x9a', '\x9b', '\x9c', '\x9d', '\x9e', '\x9f',
    /* xa0-xa7 */
    '\xa0', '\xa1', '\xa2', '\xa3', '\xa4', '\xa5', '\xa6', '\xa7',
    /* xa8-xaf */
    '\xa8', '\xa9', '\xaa', '\xab', '\xac', '\xad', '\xae', '\xaf',
    /* xb0-xb7 */
    '\xb0', '\xb1', '\xb2', '\xb3', '\xb4', '\xb5', '\xb6', '\xb7',
    /* xb8-xbf */
    '\xb8', '\xb9', '\xba', '\xbb', '\xbc', '\xbd', '\xbe', '\xbf',
    /* xc0-xc7 */
    '\xe0', '\xe1', '\xe2', '\xe3', '\xe4', '\xe5', '\xe6', '\xe7',
    /* xc8-xcf */
    '\xe8', '\xe9', '\xea', '\xeb', '\xec', '\xed', '\xee', '\xef',
    /* xd0-xd7 */
    '\xf0', '\xf1', '\xf2', '\xf3', '\xf4', '\xf5', '\xf6', '\xd7',
    /* xd8-xdf */
    '\xf8', '\xf9', '\xfa', '\xfb', '\xfc', '\xfd', '\xfe', '\xdf',
    /* xe0-xe7 */
    '\xe0', '\xe1', '\xe2', '\xe3', '\xe4', '\xe5', '\xe6', '\xe7',
    /* xe8-xef */
    '\xe8', '\xe9', '\xea', '\xeb', '\xec', '\xed', '\xee', '\xef',
    /* xf0-xf7 */
    '\xf0', '\xf1', '\xf2', '\xf3', '\xf4', '\xf5', '\xf6', '\xf7',
    /* xf8-xff */
    '\xf8', '\xf9', '\xfa', '\xfb', '\xfc', '\xfd', '\xfe', '\xff'
];

irc.styles = [
    {
        name: 'normal',
        style: '',
        key: '\x00'
    },
    {
        name: 'underline',
        style: 'underline',
        key: '\x1F',
        keyregex: /\x1F(.*?)\x1F/,
        bbcode: ['[u]', '[/u]']
    },
    {
        name: 'bold',
        style: 'bold',
        key: '\x02',
        keyregex: /\x02(.*?)\x02/,
        bbcode: ['[b]', '[/b]']
    },
    {
        name: 'italic',
        style: 'italic',
        key: '\x16',
        keyregex: /\x16(.*?)\x16/,
        bbcode: ['[i]', '[/i]']
    },
    {
        name: 'colour',
        style: '',//see below
        key: '\x03',
        fore_re: /^(\d{1,2})/,
        back_re: /^((\d{1,2})+,+(\d{1,2}))/,
        format: "\x03{f},{b}{t}\x03",
        bbcode: ['[colour fore={f} back={b}]', '[/colour]']
    }
];

//dirty but better than filtering every time?
irc.styles.special = _.reject(irc.styles, function(sty) { return sty.name == 'normal' ||  sty.name == 'colour' } );
irc.styles.colour = _.findWhere(irc.styles, {name: 'colour' } );
irc.styles.normal = _.findWhere(irc.styles, {name: 'normal' } );

irc.colours = [//http://www.mirc.com/colors.html
    {
        name: 'white',
        fore: 'col0',
        back: 'back0',
        key: 0
    },
    {
        name: 'black',
        fore: 'col1',
        back: 'back1',
        key: 1
    },
    {
        name: 'navy',
        fore: 'col2',
        back: 'back2',
        key: 2
    },
    {
        name: 'green',
        fore: 'col3',
        back: 'back3',
        key: 3
    },
    {
        name: 'red',
        fore: 'col4',
        back: 'back4',
        key: 4
    },
    {
        name: 'brown',
        fore: 'col5',
        back: 'back5',
        key: 5
    },
    {
        name: 'purple',
        fore: 'col6',
        back: 'back6',
        key: 6
    },
    {
        name: 'olive',
        fore: 'col7',
        back: 'back7',
        key: 7
    },
    {
        name: 'yellow',
        fore: 'col8',
        back: 'back8',
        key: 8,

    },
    {
        name: 'lightgreen',
        fore: 'col9',
        back: 'back9',
        key: 9
    },
    {
        name: 'teal',
        fore: 'col10',
        back: 'back10',
        key: 10
    },
    {
        name: 'cyan',
        fore: 'col11',
        back: 'back11',
        key: 11
    },
    {
        name: 'blue',
        fore: 'col12',
        back: 'back12',
        key: 12
    },
    {
        name: 'pink',
        fore: 'col13',
        back: 'back13',
        key: 13
    },
    {
        name: 'gray',
        fore: 'col14',
        back: 'back14',
        key: 14
    },
    {
        name: 'lightgrey',
        fore: 'col15',
        back: 'back15',
        key: 15
    }
];
irc.Numerics = {
    "001": "RPL_WELCOME",
    "004": "RPL_MYINFO",
    "005": "RPL_ISUPPORT",
    "353": "RPL_NAMREPLY",
    "366": "RPL_ENDOFNAMES",

    "331": "RPL_NOTOPIC",
    "332": "RPL_TOPIC",
    "333": "RPL_TOPICWHOTIME",

    "311": "RPL_WHOISUSER",
    "312": "RPL_WHOISSERVER",
    "313": "RPL_WHOISOPERATOR",
    "317": "RPL_WHOISIDLE",
    "671": "RPL_WHOISSECURE",
    "318": "RPL_ENDOFWHOIS",
    "319": "RPL_WHOISCHANNELS",
    "330": "RPL_WHOISACCOUNT",
    "338": "RPL_WHOISACTUALLY",
    "343": "RPL_WHOISOPERNAME",
    "320": "RPL_WHOISGENERICTEXT",
    "325": "RPL_WHOISWEBIRC",

    "301": "RPL_AWAY",
    "305": "RPL_UNAWAY",
    "306": "RPL_NOWAWAY",

    "324": "RPL_CHANNELMODEIS",
    "329": "RPL_CREATIONTIME",

    "433": "ERR_NICKNAMEINUSE",
    "401": "ERR_NOSUCHNICK",
    "404": "ERR_CANNOTSENDTOCHAN",
    "482": "ERR_CHANOPPRIVSNEEDED",

    "321": "RPL_LISTSTART",
    "322": "RPL_LIST",
    "323": "RPL_LISTEND"
};

irc.Numerics2 = { // from node-irc
    "001": {
        "name": "RPL_WELCOME",
        "type": "reply"
    },
    "004": {
        "name": "RPL_MYINFO",
        "type": "reply"
    },
    "005": {
        "name": "RPL_ISUPPORT",
        "type": "reply"
    },
    "200": {
        "name": "RPL_TRACELINK",
        "type": "reply"
    },
    "201": {
        "name": "RPL_TRACECONNECTING",
        "type": "reply"
    },
    "202": {
        "name": "RPL_TRACEHANDSHAKE",
        "type": "reply"
    },
    "203": {
        "name": "RPL_TRACEUNKNOWN",
        "type": "reply"
    },
    "204": {
        "name": "RPL_TRACEOPERATOR",
        "type": "reply"
    },
    "205": {
        "name": "RPL_TRACEUSER",
        "type": "reply"
    },
    "206": {
        "name": "RPL_TRACESERVER",
        "type": "reply"
    },
    "208": {
        "name": "RPL_TRACENEWTYPE",
        "type": "reply"
    },
    "211": {
        "name": "RPL_STATSLINKINFO",
        "type": "reply"
    },
    "212": {
        "name": "RPL_STATSCOMMANDS",
        "type": "reply"
    },
    "213": {
        "name": "RPL_STATSCLINE",
        "type": "reply"
    },
    "214": {
        "name": "RPL_STATSNLINE",
        "type": "reply"
    },
    "215": {
        "name": "RPL_STATSILINE",
        "type": "reply"
    },
    "216": {
        "name": "RPL_STATSKLINE",
        "type": "reply"
    },
    "218": {
        "name": "RPL_STATSYLINE",
        "type": "reply"
    },
    "219": {
        "name": "RPL_ENDOFSTATS",
        "type": "reply"
    },
    "221": {
        "name": "RPL_UMODEIS",
        "type": "reply"
    },
    "241": {
        "name": "RPL_STATSLLINE",
        "type": "reply"
    },
    "242": {
        "name": "RPL_STATSUPTIME",
        "type": "reply"
    },
    "243": {
        "name": "RPL_STATSOLINE",
        "type": "reply"
    },
    "244": {
        "name": "RPL_STATSHLINE",
        "type": "reply"
    },
    "250": {
        "name": "RPL_STATSCONN",
        "type": "reply"
    },
    "251": {
        "name": "RPL_LUSERCLIENT",
        "type": "reply"
    },
    "252": {
        "name": "RPL_LUSEROP",
        "type": "reply"
    },
    "253": {
        "name": "RPL_LUSERUNKNOWN",
        "type": "reply"
    },
    "254": {
        "name": "RPL_LUSERCHANNELS",
        "type": "reply"
    },
    "255": {
        "name": "RPL_LUSERME",
        "type": "reply"
    },
    "256": {
        "name": "RPL_ADMINME",
        "type": "reply"
    },
    "257": {
        "name": "RPL_ADMINLOC1",
        "type": "reply"
    },
    "258": {
        "name": "RPL_ADMINLOC2",
        "type": "reply"
    },
    "259": {
        "name": "RPL_ADMINEMAIL",
        "type": "reply"
    },
    "261": {
        "name": "RPL_TRACELOG",
        "type": "reply"
    },
    "265": {
        "name": "RPL_LOCALUSERS",
        "type": "reply"
    },
    "266": {
        "name": "RPL_GLOBALUSERS",
        "type": "reply"
    },
    "300": {
        "name": "RPL_NONE",
        "type": "reply"
    },
    "301": {
        "name": "RPL_AWAY",
        "type": "reply"
    },
    "302": {
        "name": "RPL_USERHOST",
        "type": "reply"
    },
    "303": {
        "name": "RPL_ISON",
        "type": "reply"
    },
    "305": {
        "name": "RPL_UNAWAY",
        "type": "reply"
    },
    "306": {
        "name": "RPL_NOWAWAY",
        "type": "reply"
    },
    "311": {
        "name": "RPL_WHOISUSER",
        "type": "reply"
    },
    "312": {
        "name": "RPL_WHOISSERVER",
        "type": "reply"
    },
    "313": {
        "name": "RPL_WHOISOPERATOR",
        "type": "reply"
    },
    "314": {
        "name": "RPL_WHOWASUSER",
        "type": "reply"
    },
    "315": {
        "name": "RPL_ENDOFWHO",
        "type": "reply"
    },
    "317": {
        "name": "RPL_WHOISIDLE",
        "type": "reply"
    },
    "318": {
        "name": "RPL_ENDOFWHOIS",
        "type": "reply"
    },
    "319": {
        "name": "RPL_WHOISCHANNELS",
        "type": "reply"
    },

    "320": {
        "name": "RPL_WHOISGENERICTEXT",
        "type": "reply"
    },
    "325": {
        "name": "RPL_WHOISWEBIRC",
        "type": "reply"
    },
    "330": {
        "name": "RPL_WHOISACCOUNT",
        "type": "reply"
    },
    "338": {
        "name": "RPL_WHOISACTUALLY",
        "type": "reply"
    },
    "343": {
        "name": "RPL_WHOISOPERNAME",
        "type": "reply"
    },
    "321": {
        "name": "RPL_LISTSTART",
        "type": "reply"
    },
    "322": {
        "name": "RPL_LIST",
        "type": "reply"
    },
    "323": {
        "name": "RPL_LISTEND",
        "type": "reply"
    },
    "324": {
        "name": "RPL_CHANNELMODEIS",
        "type": "reply"
    },
    "329": {
        "name": "RPL_CREATIONTIME",
        "type": "reply"
    },
    "331": {
        "name": "RPL_NOTOPIC",
        "type": "reply"
    },
    "332": {
        "name": "RPL_TOPIC",
        "type": "reply"
    },
    "333": {
        "name": "RPL_TOPICWHOTIME",
        "type": "reply"
    },
    "341": {
        "name": "RPL_INVITING",
        "type": "reply"
    },
    "342": {
        "name": "RPL_SUMMONING",
        "type": "reply"
    },
    "351": {
        "name": "RPL_VERSION",
        "type": "reply"
    },
    "352": {
        "name": "RPL_WHOREPLY",
        "type": "reply"
    },
    "353": {
        "name": "RPL_NAMREPLY",
        "type": "reply"
    },
    "364": {
        "name": "RPL_LINKS",
        "type": "reply"
    },
    "365": {
        "name": "RPL_ENDOFLINKS",
        "type": "reply"
    },
    "366": {
        "name": "RPL_ENDOFNAMES",
        "type": "reply"
    },
    "367": {
        "name": "RPL_BANLIST",
        "type": "reply"
    },
    "368": {
        "name": "RPL_ENDOFBANLIST",
        "type": "reply"
    },
    "369": {
        "name": "RPL_ENDOFWHOWAS",
        "type": "reply"
    },
    "371": {
        "name": "RPL_INFO",
        "type": "reply"
    },
    "372": {
        "name": "RPL_MOTD",
        "type": "reply"
    },
    "374": {
        "name": "RPL_ENDOFINFO",
        "type": "reply"
    },
    "375": {
        "name": "RPL_MOTDSTART",
        "type": "reply"
    },
    "376": {
        "name": "RPL_ENDOFMOTD",
        "type": "reply"
    },
    "381": {
        "name": "RPL_YOUREOPER",
        "type": "reply"
    },
    "382": {
        "name": "RPL_REHASHING",
        "type": "reply"
    },
    "391": {
        "name": "RPL_TIME",
        "type": "reply"
    },
    "392": {
        "name": "RPL_USERSSTART",
        "type": "reply"
    },
    "393": {
        "name": "RPL_USERS",
        "type": "reply"
    },
    "394": {
        "name": "RPL_ENDOFUSERS",
        "type": "reply"
    },
    "395": {
        "name": "RPL_NOUSERS",
        "type": "reply"
    },
    "401": {
        "name": "ERR_NOSUCHNICK",
        "type": "error"
    },
    "402": {
        "name": "ERR_NOSUCHSERVER",
        "type": "error"
    },
    "403": {
        "name": "ERR_NOSUCHCHANNEL",
        "type": "error"
    },
    "404": {
        "name": "ERR_CANNOTSENDTOCHAN",
        "type": "error"
    },
    "405": {
        "name": "ERR_TOOMANYCHANNELS",
        "type": "error"
    },
    "406": {
        "name": "ERR_WASNOSUCHNICK",
        "type": "error"
    },
    "407": {
        "name": "ERR_TOOMANYTARGETS",
        "type": "error"
    },
    "409": {
        "name": "ERR_NOORIGIN",
        "type": "error"
    },
    "411": {
        "name": "ERR_NORECIPIENT",
        "type": "error"
    },
    "412": {
        "name": "ERR_NOTEXTTOSEND",
        "type": "error"
    },
    "413": {
        "name": "ERR_NOTOPLEVEL",
        "type": "error"
    },
    "414": {
        "name": "ERR_WILDTOPLEVEL",
        "type": "error"
    },
    "421": {
        "name": "ERR_UNKNOWNCOMMAND",
        "type": "error"
    },
    "422": {
        "name": "ERR_NOMOTD",
        "type": "error"
    },
    "423": {
        "name": "ERR_NOADMININFO",
        "type": "error"
    },
    "424": {
        "name": "ERR_FILEERROR",
        "type": "error"
    },
    "431": {
        "name": "ERR_NONICKNAMEGIVEN",
        "type": "error"
    },
    "432": {
        "name": "ERR_ERRONEUSNICKNAME",
        "type": "error"
    },
    "433": {
        "name": "ERR_NICKNAMEINUSE",
        "type": "error"
    },
    "436": {
        "name": "ERR_NICKCOLLISION",
        "type": "error"
    },
    "441": {
        "name": "ERR_USERNOTINCHANNEL",
        "type": "error"
    },
    "442": {
        "name": "ERR_NOTONCHANNEL",
        "type": "error"
    },
    "443": {
        "name": "ERR_USERONCHANNEL",
        "type": "error"
    },
    "444": {
        "name": "ERR_NOLOGIN",
        "type": "error"
    },
    "445": {
        "name": "ERR_SUMMONDISABLED",
        "type": "error"
    },
    "446": {
        "name": "ERR_USERSDISABLED",
        "type": "error"
    },
    "451": {
        "name": "ERR_NOTREGISTERED",
        "type": "error"
    },
    "461": {
        "name": "ERR_NEEDMOREPARAMS",
        "type": "error"
    },
    "462": {
        "name": "ERR_ALREADYREGISTRED",
        "type": "error"
    },
    "463": {
        "name": "ERR_NOPERMFORHOST",
        "type": "error"
    },
    "464": {
        "name": "ERR_PASSWDMISMATCH",
        "type": "error"
    },
    "465": {
        "name": "ERR_YOUREBANNEDCREEP",
        "type": "error"
    },
    "467": {
        "name": "ERR_KEYSET",
        "type": "error"
    },
    "471": {
        "name": "ERR_CHANNELISFULL",
        "type": "error"
    },
    "472": {
        "name": "ERR_UNKNOWNMODE",
        "type": "error"
    },
    "473": {
        "name": "ERR_INVITEONLYCHAN",
        "type": "error"
    },
    "474": {
        "name": "ERR_BANNEDFROMCHAN",
        "type": "error"
    },
    "475": {
        "name": "ERR_BADCHANNELKEY",
        "type": "error"
    },
    "481": {
        "name": "ERR_NOPRIVILEGES",
        "type": "error"
    },
    "482": {
        "name": "ERR_CHANOPPRIVSNEEDED",
        "type": "error"
    },
    "483": {
        "name": "ERR_CANTKILLSERVER",
        "type": "error"
    },
    "491": {
        "name": "ERR_NOOPERHOST",
        "type": "error"
    },
    "501": {
        "name": "ERR_UMODEUNKNOWNFLAG",
        "type": "error"
    },
    "502": {
        "name": "ERR_USERSDONTMATCH",
        "type": "error"
    }
}
var whitespace = /\s/,
    notwhitespace = /\S+$/;

//my helper functions
//returns itself
var join = function(by, xs) {
        return xs.join(by);
    },

    split = function(by, str) {
        return str.split(by);
    },

    restRight = _.autoCurry(function(xs) {
        return xs.slice(0, xs.length - 1);
    }),

    test = _.autoCurry(function(reg, str) {
        return str.test(reg);
    }),

    replace = _.autoCurry(function(reg, rep, str) {
        return str.replace(reg, rep);
    }),

    startsWith = function(what, str) {
        return str.startsWith(what);
    },

    $identity = _.identity,

    splitBang = _.partial(split, "!"),

    joinBang = _.partial(join, "!"),

    joinEmpty = _.partial(join, ""),

    // splitEmpty = split(""),
    joinComma = util.joinChans = _.partial(join, ","),

    // splitComma = split(","),
    concatUnique = _.compose(_.uniq, Array.concat),

    concatSep = _.autoCurry(function(sep, s1, s2) {
        if (_.isArray(s1)) {
            s1 = s1.join(sep);
        }
        if (_.isArray(s2)) {
            s2 = s2.join(sep);
        }
        if (s1 !== "" && s2 !== "") {
            return s1 + sep + s2;
        } else {
            return s1 + s2;
        }
    }),

    concatSpace = concatSep(" ");

util.formatter = function(message, data) {
    return (message.message || message).substitute(data);
};

util.formatterSafe = function(str, object, regexp) { //if property not found string is not replaced
    return String(str).replace(regexp || (/\\?\{([^{}]+)\}/g), function(match, name) {
        if (match.charAt(0) == '\\') return match.slice(1);
        return (object[name] != null) ? object[name] : match;
    });
}

//String -> String
// megawac!~megawac@megawac.user.gamesurge -> megawac
util.hostToNick = _.compose(joinBang, restRight, splitBang);
//megawac!~megawac@megawac.user.gamesurge -> ~megawac@megawac.user.gamesurge
util.hostToHost = _.compose(Array.getLast, splitBang);


var isChannel = util.isChannel = _.and('.length > 1', _.partial(startsWith, '#')),

    formatChannel = util.formatChannel = function(chan) {
        if (chan.length >= 1 && !isChannel(chan)) {
            chan = '#' + chan;
        }
        return chan;
    },

    unformatChannel = util.unformatChannel = function(chan) {
        if (isChannel(chan)) {
            chan = chan.slice(1);
        }
        return chan;
    },

    appendChannel = function(chans, chan) {
        return $A(chans).concat(chan);
    },

    splitChan = util.splitChans = function(xs) {
        if (_.isArray(xs)) return xs.length > 0 ? xs : [""];
        return xs.split(",");
    },

    //function to determine if a string is one of the stock windows
    isBaseWindow = util.isBaseWindow = _.partial(_.contains, BASE_WINDOWS),

    isChannelType = util.isChannelType = _.partial(_.contains, CHANNEL_TYPES);


util.windowNeedsInput = _.partial(_.contains, INPUT_TYPES);

//String -> String
//formatChannelStrings("test,test2,#test3,#tes#t4,test5,test6") => "#test,#test2,#test3,#tes#t4,#test5,#test6"
util.formatChannelString = _.compose(joinComma, _.uniq, _.partial(_.func.map, formatChannel), splitChan);
util.unformatChannelString = _.compose(_.uniq, _.partial(_.func.map, unformatChannel), splitChan);

//appends a channel to the end of the list of channels
//string -> string
//could just call Array.include?
util.addChannel = _.compose( /*joinComma,*/ _.uniq, /* splitChan, */ appendChannel);
//adds channel to front of list of channels
util.prependChannel = _.compose( /*joinComma,*/ _.uniq, /* splitChan, */ _.flip(appendChannel));


//calls splits string by comma then calls array.erase on value
util.removeChannel = Array.erase;

(function() {
/*
 * taken from https://github.com/martynsmith/node-irc
 * parseMessage(line, stripColors)
 *
 * takes a raw "line" from the IRC server and turns it into an object with
 * useful keys
 * ":OCD!~OCD@76.72.16.142 PRIVMSG #tf2mix :mix servers are down. join mumble for an inhouse pug." => {"prefix":"OCD!~OCD@76.72.16.142","nick":"OCD","user":"~OCD","host":"76.72.16.142","command":"PRIVMSG","rawCommand":"PRIVMSG","commandType":"normal","args":["#tf2mix","mix servers are down. join mumble for an inhouse pug."]}
 */

var prefix_re = /^([_a-zA-Z0-9\[\]\\`^{}|-]*)(!([^@]+)@(.*))?$/,
    hasprefix_re = /^:([^ ]+) +/,
    colonrem_re = /^:[^ ]+ +/,
    command_re = /^([^ ]+) */,
    data_re = /^[^ ]+ +/;
util.parseIRCData = function(line/*, stripColors*/) { // {{{
    var message = {
        'raw': line,
        'prefix': ''
    };
    var match;

    /*if (stripColors) {
        line = line.replace(/[\x02\x1f\x16\x0f]|\x03\d{0,2}(?:,\d{0,2})?/g, "");
    }*/

    // Parse prefix
    if (match = line.match(hasprefix_re)) {
        message.prefix = match[1];
        line = line.replace(colonrem_re, '');
        if (match = message.prefix.match(prefix_re)) {
            message.nick = match[1];
            message.user = match[3];
            message.host = match[4];
        } else {
            message.server = message.prefix;
        }
    }

    // Parse command
    match = line.match(command_re);
    message.command = match[1].toUpperCase();
    message.rawCommand = match[1];
    message.commandType = 'normal';
    line = line.replace(data_re, '');

    if (irc.Numerics2[message.rawCommand]) {
        message.command = irc.Numerics2[message.rawCommand].name.toUpperCase();
        message.commandType = irc.Numerics2[message.rawCommand].type;
    }

    message.args = [];
    var middle, trailing;

    // Parse parameters
    if (line.search(/^:|\s+:/) != -1) {
        match = line.match(/(.*?)(?:^:|\s+:)(.*)/);
        middle = match[1].trimRight();
        trailing = match[2];
    } else {
        middle = line;
    }

    if (middle.length) message.args = middle.split(/ +/);

    if (typeof(trailing) != 'undefined' && trailing.length) message.args.push(trailing);

    return message;
};
})();

util.formatCommand = function(cmdline) {
    if (cmdline.startsWith("/")) {
        cmdline = cmdline.startsWith("//") ? "SAY /" + cmdline.slice(2) : cmdline.slice(1); //qweb issue #349
    } else {
        cmdline = "SAY " + cmdline; //default just say the msg
    }
    return cmdline.splitMax(" ", 2); //split command from the params
};
util.nickChanComparitor = function(client, nickHash) {
    var _prefixes = client.prefixes,
        _prefixNone = _prefixes.length,
        prefixWeight = function(pre) {
            return pre.length !== 0 ? _prefixes.indexOf(pre) : _prefixNone;
        },
        toLower = client.toIRCLower;
    //compares two nick names by channel status > lexigraphy
    return function(nick1, nick2) {
        var p1weight = prefixWeight(nickHash[nick1].prefixes),
            p2weight = prefixWeight(nickHash[nick2].prefixes);
        return (p1weight !== p2weight) ? (p1weight - p2weight) : toLower(nick1).localeCompare(toLower(nick2));
    };
};

util.nickPrefixer = function(nickHash) { //_.lambda('a -> b -> a[b].prefixes + b')
    return function(nick) {
        return nickHash[nick].prefixes + nick;
    };
};

util.validPrefix = _.contains;

util.addPrefix = function(nc, pref, prefs) {
    if (prefs && !util.validPrefix(prefs, pref)) return nc.prefixes;
    return nc.prefixes = concatUnique(nc.prefixes, pref).join("");
};

util.removePrefix = function(nc, pref) {
    return nc.prefixes = nc.prefixes.replaceAll(pref, "");
};

//if theres a prefix it gets returned
//i dont think its possible to have multiple prefixes
util.prefixOnNick = _.autoCurry(function(prefixes, nick) {
    var c = nick.charAt(0);
    return util.validPrefix(prefixes, c) ? [c, nick.slice(1)] : ['', nick];
});

util.getPrefix = _.compose(_.first, util.prefixOnNick);

util.stripPrefix = _.compose(_.lambda('x[1]'), util.prefixOnNick);

util.createNickRegex = _.memoize(function(nick) {
    return new RegExp('(^|[\\s\\.,;:])' + String.escapeRegExp(nick) + '([\\s\\.,;:]|$)', "i");
})

util.testForNick = function(nick, text) { //http://jsperf.com/new-regexp-vs-memoize/2
    return test(util.createNickRegex(nick), text);
};

util.toHSBColour = function(nick, client) {
    var lower = client.toIRCLower(util.stripPrefix(client.prefixes, nick));
    if (lower == client.lowerNickname) return null;

    var hash = 0;
    for (var i = 0; i < lower.length; i++)
    hash = 31 * hash + lower.charCodeAt(i);

    var hue = Math.abs(hash) % 360;

    return new Color([hue, 70, 60], "hsb");
};


//helper functions
var charIRCLower = _.compose(_.partial(_.item, irc.IRCLowercaseTable), _.lambda('x.charCodeAt(0)'));

//returns the lower case value of a RFC1459 string using the irc table
//called a fuck ton so memoization is incredible here
irc.RFC1459toIRCLower = _.memoize(_.compose(joinEmpty, _.partial(_.func.map, charIRCLower)));

//not really sure
//takes a irc client object and string and returns something
irc.toIRCCompletion = _.compose(replace(/[^\w]+/g, ""), _.partial(_.func.invoke, "toIRCLower"));

irc.ASCIItoIRCLower = String.toLowerCase;

util.getStyleByName = function(name) {
    return _.findWhere(irc.styles, {
        name: name
    });
};

util.getStyleByKey = function(key) {
    return _.findWhere(irc.styles, {
        key: _.toInt(key)
    });
};

util.getColourByName = function(name) {
    return _.findWhere(irc.colours, {
        name: name
    });
};

util.getColourByKey = function(key) {
    return _.findWhere(irc.colours, {
        key: _.toInt(key)
    });
};

// returns the arguments 
util.parseURI = function(uri) {
    var result = {};

    var start = uri.indexOf('?');
    if (start === -1) {
        return result;
    }

    var querystring = uri.substring(start + 1);

    var args = querystring.split("&");

    for (var i = 0; i < args.length; i++) {
        var part = args[i].splitMax("=", 2);
        if (part.length > 1) result[unescape(part[0])] = unescape(part[1]);
    }

    return result;
};

util.longtoduration = function(l) {
    var seconds = l % 60;
    var minutes = Math.floor((l % 3600) / 60);
    var hours = Math.floor((l % (3600 * 24)) / 3600);
    var days = Math.floor(l / (24 * 3600));

    return days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
};

//pads based on the ret of a condition
var pad = util.pad = _.autoCurry(function(cond, padding, str) {
    str = String(str);
    return cond(str) ? padding + str : str;
});

util.padzero = pad(_.lambda('.length<=1'), "0");
util.padspace = pad(_.lambda('.length!==0'), " ");


util.browserVersion = $lambda(navigator.userAgent);

util.getEnclosedWord = function(str, pos) {
    pos = pos >>> 0; //type safety coerce int
    // Search for the word's beginning and end.
    var left = str.slice(0, pos + 1).search(notwhitespace),
        right = str.slice(pos).search(whitespace),

        // The last word in the string is a special case.
        // Return the word, using the located bounds to extract it from the string.
        word = right < 0 ? str.slice(left) : str.slice(left, right + pos);

    return [left, word];
};

// NOT cryptographically secure! 
util.randHexString = function(numBytes) {
    var getByte = function() {
            return (((1 + Math.random()) * 0x100) | 0).toString(16).substring(1);
        };

    var l = [];
    for (var i = 0; i < numBytes; i++) {
        l.push(getByte());
    }
    return l.join("");
};


util.IRCTimestamp = function(date) {
    // return "[" + util.padzero(date.getHours()) + ":" + util.padzero(date.getMinutes()) + "]";
    return date.format("[%H:%M]");
};

util.IRCDate = function(date) {
    return date.format("%c");
};

irc.nickChanEntry = function(p, l) {
    return {
        prefixes: p || "",
        lastSpoke: l || 0
    };
};

util.noop = function() {};

Browser.isMobile = !(Browser.Platform.win || Browser.Platform.mac || Browser.Platform.linux);

util.generateID = (function() {
    var id = 0;
    return function() {
        return "qqa-" + id++;
    };
})();

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

Epitome.View.implement({
    template: function(data, template) {
        // refactored for handlebars
        template = template || this.options.template;
        return template(data);
    }
});


var storage = util.storage = new Storage({
    duration: 365,
    domain: '/',
    debug: true
}),

session = util.sessionStorage = new Storage({
    storageType: 'sessionStorage',
    duration: 1,
    debug: true,
    fallback: false
});

//simple wrapper class
//object.append breaks prototypes :/
var Storer = (function(name, storer) {
    this.name = name;
    // this.storage = storer || storage;
}.implement({
    get: function() {
        return /*this.*/storage.get(this.name);
    },
    set: function(val) {
        return /*this.*/storage.set(this.name, val);
    },
    dispose: function() {
        return /*this.*/storage.remove(this.name);
    }
}));
/*.alias({
    get: 'read',
    write: 'set',
    remove: 'dispose'
}));*/


ui.Behaviour = (function() {
    var behaviour = new Behavior();
    var delegator = new Delegator({
        getBehavior: function(){ return behaviour; }
    });
    return {
        apply: function($ele) {
            behaviour.apply($ele);
            delegator.attach($ele);
        }
    };
})();

var getTemplate = util.getTemplate = function(name, cb, options) {
    /*
        Loads a template. If its already on page call callback immediately otherwise load asyncronously
        Note: Should use deferred if available
        Still need to finish implementing this.
    */

    if(!_.isFunction(cb)) {
        cb = util.noop;
    }
    if(_.isFunction(name)) {
        cb(name);//assume identity
    }
    else if(_.has(templates, name)) {
        cb(_.lookup(templates, name));
    }
    else {
        var path = options && options.path || "js/templates/",
            file = options && options.file || name,
            type = options && options.type || ".js",
            $script;
        if(!path.endsWith("/")) path += "/";
        if(!type.startsWith(".")) type = "." + type;
        $script = Asset.javascript(path + file + type, {onLoad: function() {
            cb(_.lookup(templates, name));
            $script.dispose();
        }});
        //$script.addEvent("error", ..now what?)
    }
    //return deferred
};

ui.setTitle = function(title, options) {
    document.title = title;
};

util.setCaretPos = Element.setCaretPosition;

util.setAtEnd = function($el) {
    $el.setCaretPosition($el.value.length);
};

util.getCaretPos = Element.getCaretPosition;

util.wrapSelected = function($eles, wrap) {
    $eles = $$($eles);

    var start = Array.isArray(wrap) ? wrap[0] : wrap,
        end = Array.isArray(wrap) ? wrap[1] : wrap;

    $eles.each(function($ele) {
        var range = $ele.getSelectedRange();
        if(range.start != range.end) {
            var text = $ele.val();
            $ele.val(text.slice(0, range.start) + start + text.slice(range.start, range.end) + end + text.slice(range.end))
                .setCaretPosition(range.end + start.length + end.length);
        }
    });
}

util.percentToPixel= function(data, par) {
    par = par || document.body;
    var size = par.getSize();
    return {
        x: size.x * (data.x / 100),
        y: size.y * (data.y / 100)
    };
};

ui.decorateDropdown = function($btn, $ddm, options) {
    options = options || {};
    function hideMenu() {
        if(options.onHide)
            options.onHide.call(this, $ddm);
        return $ddm.hide();
    }
    function toggleMenu(state) {
        if(options.onShow)
            options.onShow.call(this, $ddm);

        if (state===true || !$ddm.isDisplayed()) {
            $ddm.show();
            document.addEvent("click:once", hideMenu);
        } else {
           hideMenu();
        }
        return $ddm;
    }

    $ddm.store("toggle", toggleMenu)
        .position.delay(50, $ddm, {
            relativeTo: $btn,
            position: {x: 'left', y: 'bottom'},
            edge: {x: 'left', y: 'top'}
        });

    if(options.btnlistener) {
        $btn.addEvent("click", function(e) {
            e.stop();
            toggleMenu();
        });
    }
    return options.autohide ? hideMenu() : $ddm;
};

//dirty function please help with css :(
//dir can be 'width' 'height'
util.fillContainer = function ($ele, options) {
    options = Object.append({style: ['width'], offset: 20}, options);

    var filler = function() {
        var size = $ele.getSize();

        Array.from( options.style ).each(function(style) {//wait a sec for potential style recalcs
            var method = style.contains('width') ? 'x' : 'y',
                offset = options.offset;

            $ele.getSiblings().each(function(sib) {
                offset += sib.getSize()[method];
            });

            $ele.setStyle(style, "calc(100% - " + offset + "px)");
        });
    }

    filler.delay(20);
    return $ele;
};

util.elementAtScrollPos = function($ele, pos, dir, offset) {
    dir = (dir || 'width').capitalize();
    offset = offset || 10;
    var $res = $ele.lastChild;
    Array.some($ele.childNodes, function($kid) {
        offset += $kid['get' + dir]();
        if(offset >= pos) {
            $res = $kid;
            return true;
        }
    });
    return $res;
};


(function() {

//welcome to my dirty corner. Here we welcome regexs and confusing loops

//Parses messages for url strings and creates hyperlinks
var urlifier = util.urlifier = new Urlerizer({
    target: '_blank'
});
var channame_re = /(#|>)[\s\S]*(?=\/)/,
    chan_re = /#|\/|\\/;

urlifier.leading_punctuation.include(/^([\x00-\x02]|\x016|\x1F)/).include(/^(\x03+(\d{1,2})(?:,\d{1,2})?)/);
urlifier.trailing_punctuation.include(/([\x00-\x03]|\x016|\x1F)$/);

urlifier.addPattern(/qwebirc:\/\/(.*)/, function(word) {
            //given "qwebirc://whois/rushey#tf2mix/"
            if(word.contains("qwebirc://")) {
                var parsed = this.parsePunctuation(word),
                    mid = parsed.mid;

                if(mid.startsWith("qwebirc://") && mid.endsWith("/") && mid.length > 11) {
                    var cmd = mid.slice(10);//remove qwebirc://
                    if(cmd.startsWith("whois/")) {
                        var chan_match = cmd.match(channame_re); //matches the chan or user to the dash
                        var chan = chan_match ? chan_match[0] : "";
                        var chanlen = chan_match ? chan_match.index : cmd.length - 1; //chan length or the len -1 to atleast remove the dash
                        var user = cmd.slice(6, chanlen);//whois to channel
                        cmd = templates.userlink({'userid': user, 'username': user + chan});
                    }
                    else if(cmd.startsWith("options") || cmd.startsWith("embedded")) {
                        cmd = cmd.match(/.*\//)[0];
                        cmd = cmd.slice(0, cmd.length);
                    }
                    word = parsed.lead + cmd + parsed.end;
                }
            }
            return word;

            //generates something like <span class="hyperlink-whois">Tristan#tf2mix</span>
        })
        .addPattern(/\B#+(?![\._#-+])/, function(word) {
            var parsed = this.parsePunctuation(word),
                res = parsed.mid;

            if(isChannel(res) && !res.startsWith("#mode") && !res.slice(1).test()) {
                res = templates.channellink({channel:util.formatChannel(res)});
            }

            return parsed.lead + res + parsed.end;
        });

var inputurl = util.inputParser = new Urlerizer({
    default_parser: false,
    autoescape: false
});

var bbmatch = /\[.+?\].+\[\/.+?\]/i;
var colour_re = /\[colo(u)?r+(.*?)\](.*?)\[\/colo(u)?r\b\]/ig;
inputurl.addPattern(bbmatch,//this pattern needs to be optimized
    function parsebb(_text) {//see http://patorjk.com/blog/2011/05/07/extendible-bbcode-parser-in-javascript/
        var stac = [],//for colours try somthing like "[b test=a]test[/b] test".match(/\[b+(.*?)\](.*?)\[\/b\b\]/)
            tag_re = /\[.+?\]/i,
            tag_m, col_m,
            tag,
            text = _text,

            bb, style, endTag_re, end_indx, inner;

        var colours = irc.styles.colour; //replacing colours [colour fore=red back=2]ya[/colour] => \x034,2ya\x03
        text = text.replace(colour_re, function(match, zZz, attributes, text) {
            var attrs = attributes.clean().split(" "), //will split into cey value pairs ["te=a", "b=a"]
                attrso = {},
                fore, bac;

            attrs.each(function(attr) { //map the obj
                if(attr.contains("=")) {
                    attr = attr.split("=")
                    attrso[attr[0]] = attr[1]; 
                }
            });

            if(attrso.fore || attrso.bac){
                fore = util.getColourByName(attrso.fore) || util.getColourByKey(attrso.fore) || util.getColourByName('black');
                bac = util.getColourByName(attrso.back) || util.getColourByKey(attrso.back) || util.getColourByName('white');
                return colours.format.substitute({
                    f: fore.key,
                    b: bac.key,
                    t: text
                })
            }
            return match;
        });

        while(tag_m = text.match(tag_re)) { //todo do the matching as above
            tag = tag_m[0];
            //assume everything before has been processed
            stac.push(text.slice(0, tag_m.index));
            text = text.slice(tag_m.index);

            style = _.find(irc.styles.special, function(sty) {
                return sty.bbcode[0] === tag;
            });
            if(style) {
                bb = style.bbcode;

                endTag_re = new RegExp(String.escapeRegExp(bb[1]), "i");
                end_indx = text.search(endTag_re);
                if(end_indx !== -1) {
                    inner = text.slice(tag.length, end_indx);
                    if(bbmatch.test(inner)) {//recurse
                        inner = parsebb(inner);
                    }
                    stac.push(style.key + inner + style.key);
                    text = text.slice(end_indx + bb[1].length);
                    continue;
                }
            }

            stac.push(tag);
            text = text.slice(tag.length);
        }

        return stac.join("") + text;
    }, true)

})()



irc.RegisteredCTCPs = {
    "VERSION": $lambda("qwebirc v" + qwebirc.VERSION + ", copyright (C) 2008-2011 Chris Porter and the qwebirc project -- " + qwebirc.util.browserVersion()),
    "USERINFO": $lambda("qwebirc"),
    "TIME": function(x) {
        return util.IRCDate(new Date());
    },
    "PING": $lambda,
    "CLIENTINFO": $lambda("PING VERSION TIME USERINFO CLIENTINFO WEBSITE"),
    "WEBSITE": $lambda(((window == window.top) ? "direct" : document.referrer))
};

irc.DummyNicknameValidator = new Class({
    validate: function(name) {
        return _.isString(name) && name.length > 1 && name;
    }
});

irc.NicknameValidator = new Class({
    initialize: function(options) {
        this.options = options;
    },
    validate: function(nick, permitDot) {
        if(!_.isString(nick)) return false;
        var self = this,
            generated = "",
            max = Math.min(self.options.maxLen, nick.length);

        max.times(function(indx) {
            var _char = nick[indx];

            var valid = (indx === 0) ? self.options.validFirstChar : self.options.validSubChars;

            generated += (valid.contains(_char) || permitDot && _char === ".") ? _char : "_";
        });

        return String.pad(generated, this.options.minLen, "_");
    }
});


config.OptionModel = new Class({
    Extends: Epitome.Model.Storage,
    options: {
        defaults: {
            "auto_open_pm": true,
            "nick_ov_status": true,
            "accept_service_invites": true,
            "use_hiddenhost": true,
            "lastpos_line": true,
            "nick_colours": false,
            "hide_joinparts": false,
            "query_on_nick_click": true,
            // "show_nicklist": true,
            "show_timestamps": true,
            "font_size": 12,
            "volume": 10, //0-10

            "dn_state": false,
            "dn_duration": 4000,

            "highlight": true,
            "highlight_mentioned": true,

            "style_hue": 210,
            "style_saturation": 0,
            "style_brightness": 0,

            "notices": {
                "on_mention": {flash:true, beep:true},
                "on_pm": {flash:true, beep:true},
                "on_notice": {flash:false, beep:true}
            },
            "custom_notices": [],
            "default_notice": function() {
                return {
                        nick: null,
                        msg: '',
                        flash: false,
                        beep: false,
                        id: String.uniqueID(),
                        autoescape: true
                    };
                }
        },
        key: cookies.options,
        minimize: true
    },

    save: function() {
        this.set("custom_notices", _.reject(this.get("custom_notices"), function(data) { return data.msg.trim() === "" }));//cleanup
        return this.parent();
    },

    set: function(key, data) {
        var props = key.split(".");
        if(props.length > 1) {
            var item = this.get(props[0]);
            return this.parent(props[0], _.assign(item, key, data));
        } else {
            this.parent(key, data);
        }
    }.overloadSetter()
});


ui.themes.ThemeControlCodeMap2 = {
    "C": irc.styles.colour.key,
    "B": util.getStyleByName('bold').key,
    "U": util.getStyleByName('underline').key,
    "O": irc.styles.colour.key,
    "D": irc.styles.normal.key,
    //little clever here
    "NN": templates.userlink({'userid':'{N}', 'username': '{N}'}),//nick name
    "CN": templates.userlink({'userid':'{newnick}', 'username': '{newnick}'}),// change nick
    "P": "{C}4=={O} "
};

ui.themes.Default2 = {
    "SIGNON": "{P}Signed on!",
    "CONNECT": "{P}Connected to server - establishing IRC connection",

    "INFO": "{m}",
    "RAW": "{P}{m}",
    "DISCONNECT": "{P}Disconnected from server: {m}",
    "ERROR": "{P}ERROR: {m}",

    "SERVERNOTICE": "{P}{m}",
    "OURTARGETEDNOTICE": "[notice({[}{t}{]})] {m}",
    "OURCHANNOTICE": "-{N}:{t}- {m}",
    "OURPRIVNOTICE": "-{N}- {m}",
    "CHANNOTICE": "-{D}{(}{N}{)}{D}:{c}- {m}",
    "PRIVNOTICE": "-{(}{N}{)}- {m}",

    "JOIN": "{P}{D}{N}{D} [{h}] has joined {c}",
    "OURJOIN": "{P}{D}{N}{D} [{h}] has joined {c}",
    "PART": "{P}{D}{N}{D} [{h}] has left {c} [{m}]",
    "KICK": "{P}{D}{kickee}{D} was kicked from {c} by {D}{kicker}{D} [{m}]",
    "MODE": "{P}mode/{c} gives [{m}] to {D}{N}{D}",
    "QUIT": "{P}{D}{N}{D} [{h}] has quit [{m}]",
    "NICK": "{P}{D}{n}{D} has changed nick to {CN}",
    "TOPIC": "{P}{D}{N}{D} changed the topic of {c} to: {m}",
    "UMODE": "Usermode change: {m}",
    "INVITE": "{N} invites you to join {c}",

    "HILIGHT": "{C}4",
    "HILIGHTEND": "{O}",

    "CHANMSG": "{D}<{@}{(}{N}>{)}{D} {m}",
    "PRIVMSG": "{(}<{N}>{)} {m}",

    "OURCHANMSG": "<{@}{N}> {m}",
    "OURPRIVMSG": "<{N}> {m}",
    "OURTARGETEDMSG": "*{[}{t}{]}* {m}",
    "OURCHANACTION": " * {N} {m}",
    "OURPRIVACTION": " * {N} {m}",

    "CHANACTION": " * {D}{(}{N}{)}{D} {m}",
    "PRIVACTION": " * {(}{N}{)} {m}",
    "CHANCTCP": "{N} [{h}] requested CTCP {data} from {c}: {m}",
    "PRIVCTCP": "{N} [{h}] requested CTCP {data} from {-}: {m}",
    "CTCPREPLY": "CTCP {x} reply from {N}: {m}",

    "OURCHANCTCP": "[ctcp({t})] {x} {m}",
    "OURPRIVCTCP": "[ctcp({t})] {x} {m}",
    "OURTARGETEDCTCP": "[ctcp({t})] {x} {m}",

    "WHOISUSER": "{P}{B}{N}{B} [{h}]",
    "WHOISREALNAME": "{P} realname : {m}",
    "WHOISCHANNELS": "{P} channels : {m}",
    "WHOISSERVER": "{P} server   : {x} [{m}]",
    "WHOISACCOUNT": "{P} account : m",
    "WHOISIDLE": "{P} idle     : {x} [connected: {m}]",
    "WHOISAWAY": "{P} away     : {m}",
    "WHOISOPER": "{P}          : {B}IRC Operator{B}",
    "WHOISOPERNAME": "{P} operedas : {m}",
    "WHOISACTUALLY": "{P} realhost : {m} [ip: {x}]",
    "WHOISGENERICTEXT": "{P} note  : {m}",
    "WHOISEND": "{P}End of WHOIS",

    "AWAY": "{P}{N} is away: {m}",
    "GENERICERROR": "{P}{m}: {t}",
    "GENERICMESSAGE": "{P}{m}",
    "WALLOPS": "{P}WALLOP {n}: {t}",
    "CHANNELCREATIONTIME": "{P}Channel {c} was created at: {m}",
    "CHANNELMODEIS": "{P}Channel modes on {c} are: {m}"
};

irc.CommandHistory = new Class({
    Extends: Epitome.Model.Storage,
    Implements: [Options],
    options: {
        lines: 20,
        minlen: 2,
        storage: {
            fallback: false//dont save on shit browsers
        },
        key: cookies.history
    },

    addLine: function(name, line) {
        var data = this.get(name);
        if(line.length > this.options.minlen && !data.contains(line)) {
            data.unshift(line);
            if (data.length > this.options.lines) {
                data.pop();
            }
            this.set(name, data);
            this.save();
        }
    },

    addChannel: function(name) {
        if(!this.get(name)) this.set(name, []);
    },

    removeChannel: function(name) {
        this.unset(name);
        this.save();
    },

    _filter: function(val) {
        return _.size(val) !== 0;
    }
});


ui.Interface = new Class({
    Implements: [Options, Events],
    options: {
        node: false,//use the node implementation with socket.io
        debug: false,

        dynamicBaseURL: "/",
        staticBaseURL: "/",
        searchURL: true,

        appTitle: "Freenode.net Web IRC",
        networkName: "Freenode",
        networkServices: [],

        initialNickname: "",
        minRejoinTime: [5, 20, 300], //array - secs between consecutive joins

        hue: null,
        saturation: null,
        lightness: null,

        theme: undefined,
        uiOptionsArg: null,

        sounds: {
            minSoundRepeatInterval: 5000
        },

        icons: {
            empty_favicon: "images/empty_favicon.ico",
            menuicon: "images/icon.png"
        },

        loginRegex: /I recogni[sz]e you\./,
        nickValidation: null
    },
    clients: [],

    initialize: function(element, UI, options) {
        this.setOptions(options);
        var self = this,
            opts = self.options;

        qwebirc.global = {
            baseURL: opts.dynamicBaseURL,
            staticURL: opts.staticBaseURL,
            nicknameValidator: opts.nickValidation ? new irc.NicknameValidator(opts.nickValidation) : new irc.DummyNicknameValidator()
        };

        opts.specialUserActions = [ //special actions to take when particular users speak
            function(user, msg, target, client) {
                var interested = opts.networkServices.contains(user);
                if(interested) {
                    if(opts.loginRegex.test(msg)) {
                        client.authEvent();
                    }
                    client.getActiveWindow().infoMessage(msg);
                }
                return interested;
            }
        ],

        window.addEvent("domready", function() {
            var inick = opts.initialNickname,
                ichans = storage.get(cookies.channels) || opts.initialChannels,
                autoConnect = false;

            if (opts.searchURL) {
                var args = util.parseURI(document.location.toString()),
                    url = args["url"],
                    chans,
                    nick = args["nick"],
                    canAutoConnect = false;
                opts.hue = self.getHueArg(args, "");
                opts.saturation = self.getSaturationArg(args, "");
                opts.lightness = self.getLightnessArg(args, "");

                opts.thue = self.getHueArg(args, "t");
                opts.tsaturation = self.getSaturationArg(args, "t");
                opts.tlightness = self.getLightnessArg(args, "t");

                if ($defined(args["uio"])) {
                    opts.uiOptionsArg = args["uio"];
                }

                if ($defined(url)) {
                    ichans = self.parseIRCURL(url);
                    if (!! chans) {
                        canAutoConnect = true;
                    }
                } else {
                    chans = args["channels"];

                    if (chans) {
                        var cdata = chans.split(" ");
                        cdata[0] = util.formatChannelString(cdata[0]);
                        ichans = cdata.join(" ");
                        canAutoConnect = true;
                    }
                }

                if ($defined(nick)) {
                    inick = self.randSub(nick);
                }

                if (args["randomnick"] && args["randomnick"] == 1) {
                    inick = opts.initialNickname;
                }
            }
            self.element = document.id(element);

            self.ui = new UI(self.element, new ui.Theme(opts.theme), opts); //unconventional naming scheme

            var usingAutoNick = true; //!$defined(nick);//stupid used out of scope
            //if(usingAutoNick && autoConnect) {
            inick = opts.initialNickname;
            //}

            var details = self.ui.loginBox(inick, ichans, autoConnect, usingAutoNick, opts.networkName);
            //cleans up old properties
            if(storage.get(cookies.newb) !== true) {
                self.welcome();
                storage.set(cookies.newb, true);
            }

            self.ui.addEvent("login:once", function(loginopts) {
                var ircopts = _.extend(Object.subset(opts, ['initialChannels', 'specialUserActions', 'minRejoinTime', 'networkServices', 'node']),
                                        loginopts);

                var client = self.IRCClient = new irc.IRCClient(ircopts, self.ui);
                client.connect();


                window.onbeforeunload = function(e) {
                    if (!client.disconnected) {
                        var message = "This action will close all active IRC connections.";
                        if ((e = e || window.event)) {
                            e.returnValue = message;
                        }
                        return message;
                    }
                };
                window.addEvent('unload', client.quit);

                if(!auth.enabled) {
                    self.ui.beep();
                }

                client.addEvent("auth:once", self.ui.beep);

                self.fireEvent("login", {
                    'IRCClient': client,
                    'parent': self
                });
            });
        });
    },
    welcome: function() {
        ui.WelcomePane.show(this.ui, {
            element: this.element,
            firstvisit: true
        });
    },
    getHueArg: function(args) {
        var hue = args["hue"];
        if (!$defined(hue)) return null;
        hue = parseInt(hue, 10);
        if (hue > 360 || hue < 0) return null;
        return hue;
    },
    getSaturationArg: function(args) {
        var saturation = args["saturation"];
        if (!$defined(saturation)) return null;
        saturation = parseInt(saturation, 10);
        if (saturation > 100 || saturation < -100) return null;
        return saturation;
    },
    getLightnessArg: function(args) {
        var lightness = args["lightness"];
        if (!$defined(lightness)) return null;
        lightness = parseInt(lightness,10);
        if (lightness > 100 || lightness < -100) return null;
        return lightness;
    },
    randSub: function(nick) {
        var getDigit = function() {
                return Math.floor(Math.random() * 10);
        };

        return nick.split("").map(function(v) {
            if (v == ".") {
                return getDigit();
            } else {
                return v;
            }
        }).join("");

    },
    parseIRCURL: function(url) {
        var schemeComponents, args,queryArgs,parts,pathComponents,channel,value,i;
        if (url.indexOf(":") === 0) {return;}
        schemeComponents = url.splitMax(":", 2);
        if (schemeComponents[0].toLowerCase() != "irc" && schemeComponents[0].toLowerCase() != "ircs") {
            alert("Bad IRC URL scheme.");
            return;
        }

        if (url.indexOf("/") === 0) { /* irc: */
            return;
        }

        pathComponents = url.splitMax("/", 4);
        if (pathComponents.length < 4 || !pathComponents[3]) { /* irc://abc */
            return;
        }

        if (pathComponents[3].indexOf("?") > -1) {
            queryArgs = util.parseURI(pathComponents[3]);
            args = pathComponents[3].splitMax("?", 2)[0];
        } else {
            args = pathComponents[3];
        }
        parts = args.split(",");

        channel = parts[0];
        if (channel.charAt(0) != "#") channel = "#" + channel;


        var not_supported = [],
            needkey = false,
            key;
        for (i = 1; i < parts.length; i++) {
            value = parts[i];
            if (value == "needkey") {
                needkey = true;
            } else {
                not_supported.push(value);
            }
        }

        if ($defined(queryArgs)) {
            Object.each(queryArgs, function(val_, key_) {
                if (key_ == "key") {
                    key = value;
                    needkey = true;
                } else {
                    not_supported.push(key_);
                }
            });
        }

        if (needkey) {
            if (!$defined(key)) {key = prompt("Please enter the password for channel " + channel + ":");}
            if ($defined(key)) {channel = channel + " " + key;}
        }

        if (not_supported.length > 0) alert("The following IRC URL components were not accepted: " + not_supported.join(", ") + ".");

        return channel;
    }
});


auth.loggedin = false;

auth.enabled = false;

auth.authed = false;

auth.signedIn = false; //when the channels are joined

auth.quakeNetAuth = $lambda(false);

auth.passAuth = $lambda(true);

auth.bouncerAuth = $lambda(false);

ui.AuthLogin = function(e) {
    var cookie = Cookie.write("redirect", document.location);
    document.location = qwebirc.global.dynamicBaseURL + "auth/";
    new Event(e).stop();
};


//base client should know absolutely nothing about the outside world- client will dictate ui interactions via events
irc.BaseIRCClient = new Class({
    Implements: [Options, Events],
    Binds: ["lostConnection", "send", "connected", "retry", "ndispatch", "tdispatch"],

    options: {
        nickname: "qwebirc",
        specialUserActions: []
    },
    __signedOn: false,
    channels: {},
    nextctcp: 0,
    pmodes: {
        b: irc.PMODE_LIST,
        l: irc.PMODE_SET_ONLY,
        k: irc.PMODE_SET_UNSET,
        o: irc.PMODE_SET_UNSET,
        v: irc.PMODE_SET_UNSET
    },

    toIRCLower: irc.RFC1459toIRCLower,//default text codec

    initialize: function(options) {
        var self = this;
        options = self.setOptions(options).options;

        self.nickname = options.nickname;
        self.lowerNickname = self.toIRCLower(self.nickname);

        if(options.node) {
            var conn = self.connection = new irc.NodeConnection({
                account: options.account,
                nickname: self.nickname,
                password: options.password,
                serverPassword: options.serverPassword
            });
            conn.addEvents({
                "recv": self.ndispatch,
                "quit": self.quit,
                "retry": self.retry,
                "connected": self.connected,
                "lostConnection": self.lostConnection
            });
        } else {
            self.connection = new irc.TwistedConnection({
                account: options.account,
                initialNickname: self.nickname,
                password: options.password,
                serverPassword: options.serverPassword
            });
            self.connection.addEvent("recv", self.tdispatch);
        }

        self.setupGenericErrors();
    },

    trigger: function(type, data) { //just a kind helper so i can get the type easily on the ui
        data["-"] = this.nickname;
        return this.fireEvent(type, [type, data]);
    },

    connected: function() {
    },

    connect: function() {
        return this.connection.connect();
    },

    disconnect: function() {
        return this.connection.disconnect();
    },

    retry: util.noop,

    lostConnection: function() {
    },

    send: function(data) {
        return this.connection.send(data);
    },

    ndispatch: function(data) {
        var fn = this["irc_" + data.command];

        if (!(fn && fn.call(this, data.prefix, data.args))) {//fn dne or does not return true
            this.rawNumeric(data.command, data.prefix, data.args);
        }
    },

    tdispatch: function(data) {
        var message = data[0];
        switch(message) {
            case "connect":
                this.connected();
            break;
            case "disconnect":
                if (data.length === 0) {
                    this.disconnected("No error!");
                } else {
                    this.disconnected(data[1]);
                }
                this.disconnect();
            break;
            case "c":
                var command = data[1].toUpperCase(),
                    prefix = data[2],
                    sl = data[3],

                    fn = this["irc_" + (irc.Numerics[command] || command)];

                if (fn) {
                    var result = fn.call(this, prefix, sl);
                    if (result) {
                        return;
                    }
                }
                this.rawNumeric(command, prefix, sl);
            break;
        }
    },


    supported: function(key, value) {
        var self = this;
        switch(key) {
            case "CASEMAPPING":
                if (value === "ascii") {
                    self.toIRCLower = irc.ASCIItoIRCLower;
                } else if (value === "rfc1459") {
                    //default
                } else {
                    // TODO: warn 
                    console.log('unsupported codec');
                }
                self.lowerNickname = self.toIRCLower(self.nickname); //why does self happen here
            break;
            case "CHANMODES":
                value.split(",").each(function(mode, inx) {
                    _.each(mode, function(letter) {
                        self.pmodes[letter] = inx;
                    });
                });
            break;
            case "PREFIX":
                var len = (value.length - 2) / 2,
                    modeprefixes = value.substr(1, len);
                _.each(modeprefixes, function(modeprefix) {
                    self.pmodes[modeprefix] = irc.PMODE_SET_UNSET;
                });
            break;
        }
    },

    __inChannel: function(name) {
        return this.channels.contains(name);
    },

    __killChannel: function(name) {
        return this.channels.erase(name);
    },

    processCTCP: function(message) {
        if (message.charAt(0) !== "\x01")
            return;

        if (Array.getLast(message) === "\x01") {
            message = message.substr(1, message.length - 2);
        } else {
            message = message.substr(1);
        }
        return message.splitMax(" ", 2);
    },

    //expected to be overriden
    getChannels: function() {
        return this.channels;
    },

    storeChannels: function(c) {
        this.channels = c;
        return c;
    },

    canJoinChannel: function(c) {
        return true;
    },

    irc_RPL_WELCOME: function(prefix, params) {
        var self = this;
        self.nickname = params[0];
        self.lowerNickname = self.toIRCLower(self.nickname);
        self.signedOn(self.nickname);
        (function() {
            self.__signedOn = true; //so auto join channels arent selected immediately - brouhaha window is
        }).delay(1000);
    },

    irc_ERR_NICKNAMEINUSE: function(prefix, params) {
        this.genericError(params[1], params.getLast().replace("in use.", "in use")); //................... fix the program not the 

        if (this.__signedOn) {
            return true;
        }

        var nick = params[1],
            newnick = nick + Number.random(1, 1000);

        this.send("NICK " + newnick);
        this.lastnick = newnick;
        return true;
    },

    irc_NICK: function(prefix, params) {
        var user = prefix,
            oldnick = util.hostToNick(user),
            newnick = params[0],
            wasus = this.nickname === oldnick;

        if (wasus) { //shouldnt this always be true?
            this.nickname = newnick;
            this.lowerNickname = this.toIRCLower(this.nickname);
        }

        this.nickChanged(user, newnick, wasus);

        return true;
    },

    irc_QUIT: function(prefix, params) {
        var user = prefix,
            message = params.getLast();

        this.userQuit(user, message);

        return true;
    },

    irc_PART: function(prefix, params) {
        var user = prefix,
            channel = params[0],
            message = params[1],

            nick = util.hostToNick(user);

        this.partHandler(nick, channel);
        this.userPart(user, channel, message);

        return true;
    },

    irc_KICK: function(prefix, params) {
        var kicker = prefix,
            channel = params[0],
            kickee = params[1],
            message = params[2];

        this.partHandler(kickee, channel);
        this.userKicked(kicker, channel, kickee, message);

        return true;
    },

    partHandler: function(nick, chan) {
        var wasus = nick === this.nickname;
        if(wasus && this.__inChannel(chan)) {
            this.__killChannel(chan);
        }
        return wasus;
    },

    irc_PING: function(prefix, params) {
        this.send("PONG :" + params.getLast());

        return true;
    },

    irc_JOIN: function(user, params) {
        var newchan = params[0],
            nick = util.hostToNick(user),
            wasus = (nick === this.nickname);

        if(wasus) {
            if(!isBaseWindow(newchan)) {
                this.storeChannels(util.addChannel(this.getChannels(), newchan));
            }
            if(this.__signedOn) {
                this.currentChannel = newchan;
            }
        }

        this.userJoined(user, newchan);

        return true;
    },


    irc_TOPIC: function(prefix, params) {
        var user = prefix,
            channel = params[0],
            topic = params.getLast();

        this.channelTopic(user, channel, topic);

        return true;
    },

    //todo buffer messages
    irc_PRIVMSG: function(prefix, params) {
        var user = prefix,
            target = params[0],
            message = params.getLast();

        var ctcp = this.processCTCP(message);
        if (ctcp) {
            var type = ctcp[0].toUpperCase();

            var replyfn = irc.RegisteredCTCPs[type];
            if (replyfn) {
                var t = Date.now() / 1000;
                if (t > this.nextctcp) { //too quick? why not just a buffer?
                    var repctcp = replyfn(ctcp[1]);
                    this.send("NOTICE " + util.hostToNick(user) + " :\x01" + type + " " + repctcp + "\x01");
                }
                this.nextctcp = t + 5;
            }

            if (target === this.nickname) {
                this.userCTCP(user, type, ctcp[1]);
            } else {
                this.channelCTCP(user, target, type, ctcp[1]);
            }
        } else {
            if (target === this.nickname) {
                this.userPrivmsg(user, message);
            } else {
                this.channelPrivmsg(user, target, message);
            }
        }
        return true;
    },

    irc_NOTICE: function(host, params) {
        var user = util.hostToNick(host),
            target = params[0],
            message = params.getLast();

        //call functions for particular users
        //expects only one per user     
        this.options.specialUserActions.some(function(fn) {
            fn.call(this, user, message, target, this);
        }, this);

        if ((user === "") || user.contains("!") || this.options.networkServices.contains(host)) {
            this.serverNotice(host, message, target);
        } else if (target === this.nickname) {
            var ctcp = this.processCTCP(message);
            if (ctcp) {
                this.userCTCPReply(host, ctcp[0], ctcp[1]);
            } else {
                this.userNotice(host, message);
            }
        } else {
            this.channelNotice(host, target, message);
        }

        return true;
    },

    irc_INVITE: function(prefix, params) {
        var user = prefix,
            channel = params.getLast();

        this.userInvite(user, channel);

        return true;
    },

    irc_ERROR: function(prefix, params) {
        var message = params.getLast();

        this.serverError(message);

        return true;
    },

    irc_MODE: function(prefix, params) {
        var user = prefix,
            target = params[0],
            args = params.slice(1);

        if (target == this.nickname) {
            this.userMode(args);

        } else {
            var modes = args[0].split(""),//dont really need to split here
                xargs = args.slice(1),

                argindx = 0, //go to hell
                cmode = OPED;

            var data = modes.filter(function(mode) { //alternatively just do the if in map and then clean()
                var dir = (mode === OPED) || (mode === DEOPED);
                if (dir) {
                    cmode = mode;
                }
                return !dir;
            }).map(function(mode) {
                var pmode = this.pmodes[mode],
                    m = (pmode === irc.PMODE_LIST || pmode === irc.PMODE_SET_UNSET/* || (cmode === OPED && pmode === irc.PMODE_SET_ONLY)*/) ?
                            [cmode, mode, xargs[argindx++]] :
                            [cmode, mode];
                return m;
            }, this);

            this.channelMode(user, target, data, args);
        }

        return true;
    },

    // irc_RPL_MOTD: function(prefix, params) {
    //     console.warn(arguments);
    // },

    irc_RPL_ISUPPORT: function(prefix, params) {
        var supported = params.slice(1, -1); //everything but nick and server msg
        var ms;

        if(supported.contains("CHANMODES") && supported.contains("PREFIX")) { //nasty hack - don't understand purpose 
            this.pmodes = {}; //evil might break things
        }

        supported.each(function(mode) {
            ms = mode.splitMax("=", 2);
            this.supported(ms[0], ms[1]);
        }, this);
    },

    irc_RPL_NAMREPLY: function(prefix, params) {
        var channel = params[2],
            names = params[3];

        this.channelNames(channel, names.split(" "));

        return true;
    },

    irc_RPL_ENDOFNAMES: function(prefix, params) {
        var channel = params[1];

        this.channelNames(channel, []);
        return true;
    },

    irc_RPL_NOTOPIC: function(prefix, params) {
        var channel = params[1];

        if (this.__inChannel(channel)) {
            this.initialTopic(channel, "");
            return true;
        }
    },

    irc_RPL_TOPIC: function(prefix, params) {
        var channel = params[1],
            topic = params.getLast();

        if (this.__inChannel(channel)) {
            this.initialTopic(channel, topic);
            return true;
        }
    },

    irc_RPL_TOPICWHOTIME: $lambda(true),/*function(prefix, params) {
        return true; //...
    },*/

    irc_RPL_WHOISUSER: function(prefix, params) {
        var nick = params[1];
        this.whoisNick = nick;

        return this.whois(nick, "user", {
            ident: params[2],
            hostname: params[3],
            realname: params.getLast()
        });
    },

    irc_RPL_WHOISSERVER: function(prefix, params) {
        var nick = params[1],
            server = params[2],
            serverdesc = params.getLast();

        return this.whois(nick, "server", {
            server: params[2],
            serverdesc: params.getLast()
        });
    },

    irc_RPL_WHOISOPERATOR: function(prefix, params) {
        var nick = params[1],
            text = params.getLast();

        return this.whois(nick, "oper", {
            opertext: params.getLast()
        });
    },

    irc_RPL_WHOISIDLE: function(prefix, params) {
        var nick = params[1];

        return this.whois(nick, "idle", {
            idle: params[2],
            connected: params[3]
        });
    },

    irc_RPL_WHOISCHANNELS: function(prefix, params) {
        var nick = params[1];

        return this.whois(nick, "channels", {
            channels: params.getLast()
        });
    },

    irc_RPL_WHOISACCOUNT: function(prefix, params) {
        var nick = params[1];

        return this.whois(nick, "account", {
            account: params[2]
        });
    },

    irc_RPL_WHOISACTUALLY: function(prefix, params) {
        var nick = params[1];

        return this.whois(nick, "actually", {
            hostmask: params[2],
            ip: params[3]
        });
    },

    irc_RPL_WHOISOPERNAME: function(prefix, params) {
        var nick = params[1],
            opername = params[2];

        return this.whois(nick, "opername", {
            opername: params[2]
        });
    },

    irc_RPL_WHOISGENERICTEXT: function(prefix, params) {
        var nick = params[1],
            text = params.getLast();

        return this.whois(nick, "generictext", {
            text: text
        });
    },

    irc_RPL_WHOISWEBIRC: function(prefix, params) {
        var nick = params[1],
            text = params.getLast();

        return this.whois(nick, "generictext", {
            text: text
        });
    },

    irc_RPL_WHOISSECURE: function(prefix, params) {
        var nick = params[1],
            text = params.getLast();

        return this.whois(nick, "generictext", {
            text: text
        });
    },

    irc_RPL_ENDOFWHOIS: function(prefix, params) {
        var nick = params[1],
            text = params.getLast();
        this.whoisNick = null;

        return this.whois(nick, "end", {});
    },

    irc_genericError: function(prefix, params) {
        var target = params[1],
            message = params.getLast();

        this.genericError(target, message);
        return true;
    },

    irc_genericQueryError: function(prefix, params) {
        var target = params[1],
            message = params.getLast();

        this.genericQueryError(target, message);
        return true;
    },

    setupGenericErrors: function() {
        this.irc_ERR_CHANOPPRIVSNEEDED = this.irc_ERR_CANNOTSENDTOCHAN = this.irc_genericError;
        this.irc_ERR_NOSUCHNICK = this.irc_genericQueryError;
        return true;
    },

    irc_RPL_AWAY: function(prefix, params) {
        var nick = params[1],
            text = params.getLast();

        if (this.whoisNick && (this.whoisNick == nick)) return this.whois(nick, "away", {
            "away": text
        });

        this.awayMessage(nick, text);
        return true;
    },

    irc_RPL_NOWAWAY: function(prefix, params) {
        this.awayStatus(true, params.getLast());
        return true;
    },

    irc_RPL_UNAWAY: function(prefix, params) {
        this.awayStatus(false, params.getLast());
        return true;
    },

    irc_WALLOPS: function(prefix, params) {
        var user = prefix,
            text = params.getLast();

        this.wallops(user, text);
        return true;
    },

    irc_RPL_CREATIONTIME: function(prefix, params) {
        var channel = params[1],
            time = params[2];

        this.channelCreationTime(channel, time);
        return true;
    },

    irc_RPL_CHANNELMODEIS: function(prefix, params) {
        var channel = params[1],
            modes = params.slice(2);

        this.channelModeIs(channel, modes);
        return true;
    },


    irc_RPL_LISTSTART: function() {
        this.listedChans = [];
        return !this.hidelistout;
    },

    irc_RPL_LIST: function(bot, args) {
        this.listedChans.push({
            channel: args[1],
            users: _.toInt(args[2]),
            topic: args[3]
        });
        return !this.hidelistout;
    },

    irc_RPL_LISTEND: function() {
        this.trigger("listend", this.listedChans);
        return !this.hidelistout;
    }

});



irc.BaseCommandParser = new Class({
    Binds: ["dispatch"],
    initialize: function(parentObject) {
        this.parentObject = parentObject;
        this.send = this.parentObject.send;
    },

    buildExtra: function(extra, target, message) {
        if (!extra) {
            extra = {};
        }

        extra["n"] = this.parentObject.nickname;
        extra["m"] = message;
        extra["t"] = target;
        return extra;
    },

    trigger: function(type, data) {
        return this.parentObject.trigger(type, data);
    },

    // routes all outputs with the server
    // this method will call functions in: Commands based on the this scope
    dispatch: function(line, chan) {
        var self = this,
            allargs = util.formatCommand(line),
            par = self.parentObject;

        //is it clearer to use a do-while? - anyway allargs var will change each loop
        for (var command, args, cmdopts, activewin, splitargs, minargs, fn, win; $defined(allargs); ) {
            command = allargs[0].toUpperCase();
            command = irc.commandAliases[command] || command;
            args = allargs[1];

            cmdopts = self["cmd_" + command];//comand handler

            if (!cmdopts) {
                self.send(command + util.padspace(args));
                break;
            }

            //props from on of the command arrays
            activewin = cmdopts[0];
            splitargs = cmdopts[1];
            minargs = cmdopts[2];
            fn = cmdopts[3];

           /* //errors in command
            win = chan ? par.windows[chan] : self.getActiveWindow();
            if (activewin && win && !util.isChannelType(win.type)) { //win.type !== ui.WINDOW_CHANNEL) && (win.type !== ui.WINDOW_QUERY) 
                par.writeMessages(lang.invalidCommand);
                break;
            }
            else */if (minargs && ((args && (minargs > args.length)) || (!args && (minargs > 0)))) {
                par.writeMessages(lang.insufficentArgs);
                break;
            }
            else if (splitargs && args) {
                args = args.splitMax(" ", splitargs);
            }

            allargs = fn.call(self, args, chan);
            // allargs = fn.run(Array.from(args), this);
        }
    }
});

//can probably out source a lot of these to constants and helpers
//placing arrays on the prototype looks really fucking weird
// maybe just make this a single dictionary?
irc.Commands = new Class({
    Extends: irc.BaseCommandParser,

    /* [require_active_window, splitintoXargs, minargs, function] */
    cmd_ME: [true, undefined, undefined, function(args, target) {
        args = args || "";

        target = target || this.getActiveWindow().currentChannel;
        if (!this.send("PRIVMSG " + target + " :\x01ACTION " + args + "\x01"))
            return;

        var nick = this.parentObject.nickname;
        this.trigger("privAction", {
            'nick': nick,
            'message': args,
            'target': target,
            'channel': target,
            "@": this.parentObject.getNickStatus(target, nick)
        });
    }],

    cmd_CTCP: [false, 3, 2, function(args) {
        var target = args[0],
            type = args[1].toUpperCase(),
            message = args[2] || "";

        if (this.send("PRIVMSG " + target + " :\x01" + type + " " + util.padspace(message) + "\x01")) {
            this.trigger("privCTCP", {
                'nick': this.parentObject.nickname,
                '_type': type,
                'message': message,
                'args': args,
                'type': 'CTCPReply'
            });
        }
    }],

    cmd_PRIVMSG: [false, 2, 2, function(args) {
        var target = args[0];
        var message = args[1];
        var parentObj = this.parentObject;
        var nick = parentObj.nickname;

        if (!util.isChannel(target)) {
            parentObj.pushLastNick(target);

            this.trigger("query", {
                'nick': nick,
                'channel': target,
                'message': message,
                'type': 'ourprivmsg'
            });
        }

        if (this.send("PRIVMSG " + target + " :" + message)){
            this.trigger("chanMessage", {
                'nick': nick,
                'channel': target,
                'message': message,
                'type': 'chanmsg',
                "@": parentObj.getNickStatus(target, nick)
            });
        }
    }],

    cmd_NOTICE: [false, 2, 2, function(args) {
        var target = args[0];
        var message = args[1];

        if (this.send("NOTICE " + target + " :" + message)) {
            this.trigger("chanNotice", {
                'nick': this.parentObject.nickname,
                'channel': target,
                'target': target,
                'message': message
            });
        }
    }],

    cmd_QUERY: [false, 2, 1, function(args) {
        var target = args[0],
            message = args[1];
        if (util.isChannel(target)) {
            return this.writeMessages(lang.invalidChanTarget);
        }

        // this.parentObject.newWindow(target, ui.WINDOW_QUERY, true);
        if(this.send("PRIVMSG " + target + " :" + message)) {
            this.trigger("query", {
                'nick': this.parentObject.nickname,
                'channel': target,
                'message': message,
                'type': 'privmsg'
            });
        }
    }],

    cmd_SAY: [true, undefined, undefined, function(msg, target) {
        return ["PRIVMSG", (target || this.getActiveWindow().currentChannel) + " " + (msg || "")];
    }],

    cmd_LOGOUT: [false, undefined, undefined, function(args) {
        this.parentObject.ui.logout();
    }],

    cmd_OPTIONS: [false, undefined, undefined, function(args) {
        this.trigger("openWindow", {
            'window': "optionsWindow",
            'type': ui.WINDOW.custom
        });
    }],

    cmd_EMBED: [false, undefined, undefined, function(args) {
        this.trigger("openWindow", {
            'window': "embeddedWindow",
            'type': ui.WINDOW.custom
        });
    }],

    cmd_PRIVACYPOLICY: [false, undefined, undefined, function(args) {
        this.trigger("openWindow", {
            'window': "privacyWindow",
            'type': ui.WINDOW.custom
        });
    }],

    cmd_ABOUT: [false, undefined, undefined, function(args) {
        this.trigger("openWindow", {
            'window': "aboutWindow",
            'type': ui.WINDOW.custom
        });
    }],

    cmd_QUOTE: [false, 1, 1, function(args) {
        this.send(args[0]);
    }],

    cmd_KICK: [true, 2, 1, function(args, channel) {
        channel = channel || this.getActiveWindow().currentChannel;

        var target = args[0];
        var message = args.length >= 2 ? args[1] : "";

        this.send("KICK " + channel + " " + target + " :" + message);
    }],

    automode: function(direction, mode, args, channel) {
        channel = channel || this.getActiveWindow().currentChannel;

        var modes = direction;

        args.length.times(function() {
            modes += mode;
        });

        this.send("MODE " + channel + " " + modes + " " + args.join(" "));
    },

    cmd_OP: [true, 6, 1, function(args) {
        this.automode("+", "o", args);
    }],
    cmd_DEOP: [true, 6, 1, function(args) {
        this.automode("-", "o", args);
    }],
    cmd_VOICE: [true, 6, 1, function(args) {
        this.automode("+", "v", args);
    }],
    cmd_DEVOICE: [true, 6, 1, function(args) {
        this.automode("-", "v", args);
    }],
    cmd_TOPIC: [true, 1, 1, function(args, channel) {
        this.send("TOPIC " + (channel || this.getActiveWindow().currentChannel) + " :" + args[0]);
    }],
    cmd_AWAY: [false, 1, 0, function(args) {
        this.send("AWAY :" + (args ? args[0] : ""));
    }],
    cmd_QUIT: [false, 1, 0, function(args) {
        this.parentObject.quit(args ? args[0] : "");
    }],
    cmd_CYCLE: [true, 1, 0, function(args, channel) {
        channel = channel || this.getActiveWindow().currentChannel;

        this.send("PART " + channel + " :" + (args ? args[0] : "rejoining. . ."));
        this.send("JOIN " + channel);
    }],
    cmd_FJOIN: [false, 2, 1, function(args) {
        if(args.length === 0)
            return;
        var channels = args.shift(),
            formatted = util.formatChannelString(channels);

        if (channels !== formatted) {
            this.parentObject.writeMessages(lang.poorJoinFormat);
        }
        if(formatted)
            this.send("JOIN " + formatted + " " + args.join(" "));
    }],
    cmd_JOIN: [false, 2, 1, function(args) {
        var channels = args.shift(),
            chans = util.splitChans(channels).filter(this.parentObject.canJoinChannel, this.parentObject);
            // formatted = util.formatChannelString(chans);

            // this.send("JOIN " + formatted + " " + args.join(" "));
        this.cmd_FJOIN[3].call(this, Array.from(util.joinChans(chans)).concat(args));//join channels into a single comma sep string then join
    }],
    cmd_UMODE: [false, 1, 0, function(args) {
        this.send("MODE " + this.parentObject.nickname + (args ? (" " + args[0]) : ""));
    }],
    cmd_BEEP: [false, undefined, undefined, function(args) {
        this.parentObject.ui.beep();
    }],
    cmd_AUTOJOIN: [false, undefined, undefined, function(args) {
        if(!auth.signedIn) {
            auth.signedIn = true;
            return ["JOIN", this.parentObject.options.autojoin.join(",")];
        }
    }],
    cmd_PART: [false, 2, 0, function(args) {
        args = Array.from(args);

        var msg = args[1] || lang.partChan.message,
            channel = args[0] || this.getActiveWindow().currentChannel;

        this.send("PART " + channel + " :" + msg);
    }]
});

irc.commandAliases = {
    "J": "JOIN",
    "P": "PART",
    "MESSAGE": "PRIVMSG",
    "M": "PRIVMSG",
    "MSG": "PRIVMSG",
    "PM": "PRIVMSG",
    "Q": "QUERY",
    "BACK": "AWAY",
    "PRIVACY": "PRIVACYPOLICY",
    "HOP": "CYCLE",
    "SLAP": "ME"
};

// //ircclient with added event support
irc.IRCClient = new Class({
    Extends: irc.BaseIRCClient,
    Binds: ["quit", "writeMessages", "newTargetOrActiveLine"],
    options: {
        nickname: "qwebirc",
        autojoin: "",
        prefixes: "@+", //heirarchy of prefixes - "@"(operator), "+"(voice)
        minRejoinTime: [0]
    },
    lastNicks: [],
    inviteChanList: [],
    activeTimers: {},
    windows: {},
    modeprefixes: "ov",

    initialize: function(options, ui) {
        var self = this;
        self.parent(options);

        self.ui = ui;

        self.prefixes = self.options.prefixes;
        self.commandparser = new irc.Commands(self);
        self.exec = self.commandparser.dispatch;

        /*self.statusWindow = */self.ui.newClient(self);

        self.tracker = new irc.IRCTracker(self);

        self.writeMessages(lang.copyright);
    },

    connected: function() {
        // this.newServerLine("CONNECT");
        this.trigger("connect", {});
        this.parent();
    },

    quit: function(message) {
        this.send("QUIT :" + (message || lang.quit.message), true);
        this.disconnect();
        this.trigger("quit", {message: message});
    },

    disconnect: function() {
        // for (var k in this.activeTimers) {
        //     this.activeTimers[k].cancel();
        // }
        _.each(this.activeTimers, $clear);
        this.activeTimers = {};
        this.writeMessages(lang.disconnected);
        this.trigger("disconnect", {message: lang.disconnected});

        this.parent();
    },

    disconnected: function(message) {
        _.each(this.windows, function(win) {
            if (util.isChannelType(win.type))
                win.close();
        });
        delete this.tracker;
        this.trigger("disconnect", {
            message: message
        });
    },

    retry: function(data) {
        this.trigger("retry", data);
        this.writeMessages(lang.connRetry, {
            next: (data.next/1000).round(1)
        });
    },

    //you dont even want to know
    updateNickList: function(channel) {
        var nickHash = this.tracker.getChannel(channel); //of nickChanEntry

        var names2 = $defined(nickHash) ? _.keys(nickHash) : []; //just return?
        var comparitor = util.nickChanComparitor(this, nickHash),
            prefixer = util.nickPrefixer(nickHash);

        //sorts nicks by status > lexigraphy
        //then add the prefix in front of the name
        var sorted = names2.sort(comparitor).map(prefixer);

        var win = this.ui.getWindow(this, channel);
        if (win) {
            win.updateNickList(sorted);
        }
    },

    //writes messages from an array of lang.message items
    writeMessages: function(messages, args, data) {
        data = _.extend({
            type: "info",
            colourClass: "",
            channel: STATUS,
            message: []
        }, data);
        var client = this,
            types = lang.TYPES;

        function write(message) {
            var msg = args ? util.formatter(message.message, args) :
                            message.message; //replaces values like {replaceme} if args has a key like that
            data.message.push(msg);

            switch (message.type) {
            case types.ERROR:
                data.colourClass = "warn";
                break;
            case types.INFO:
                data.colourClass = "info";
                break;
            }
        }

        if(_.isArray(messages))
            messages.each(write);
        else
            write(messages);
        this.trigger("info", data);
    },

    rawNumeric: function(numeric, prefix, params) {
        this.trigger("raw", {
            "numeric": numeric,
            "message": params.slice(1).join(" ")
        });
    },

    signedOn: function(nickname) {
        var options = this.options,
            channels,
            hash = window.location.hash;

        this.nickname = nickname;
        // this.newServerLine("SIGNON");
        this.writeMessages(lang.signOn);

        if (hash.length > 1) {
            options.autojoin = channels = hash.replace(/&/g, ',#');
            this.storeChannels(channels);
        } else {
            channels = this.getChannels();
            if (channels.length > 0) {
                options.autojoin = channels;
            } else { //if no stored channels join intial channels from interface options
                options.autojoin = channels = options.initialChannels;
                this.storeChannels(channels);
            }
        }
        // Sort the autojoin channels.
        channels = options.autojoin = util.prependChannel(channels, BROUHAHA);
        this.currentChannel = BROUHAHA;

        this.writeMessages(lang.loginMessages, {}, {channel: BROUHAHA});

        if (!auth.authed && auth.enabled) {
            this.attemptAuth();
        } else {
            this.exec("/AUTOJOIN");
        }

        this.trigger("logon", {
            'nickname': nickname,
            'channels': channels
        });
    },

    //probably a better way
    attemptAuth: function() {
        //only try to auth if its necessary
        if (!auth.authed && auth.enabled) {
            var test = this.send(util.formatter("AUTHSERV AUTH {account} {password}", this.options));

            // if the user is authed they will be set to +x... however as most users arent authed...
            //wait a hundreth of a second to see if the auth server authed you

            //this.writeMessages(lang.joinAfterAuth);
            this.writeMessages.delay(100, this, lang.joinAfterAuth);

            this.activeTimers.autojoin = (function() {
                if (!auth.authed) {
                    this.writeMessages(lang.authFailed);
                }
            }).delay(5000, this);
        }
    },

    authEvent: function() {
        auth.authed = true;
        this.exec("/UMODE +x");
        this.writeMessages(lang.joinChans);
        if (!auth.signedIn) {
            this.exec("/AUTOJOIN");
        }

        this.trigger("auth");
    },

    userJoined: function(user, channel) { //todo determine way to get brouhaha selected at start
        var nick = util.hostToNick(user),
            host = util.hostToHost(user),
            wasus = (nick === this.nickname),
            type = wasus ? "OURJOIN" : "JOIN",
            windowSelected = (channel === this.currentChannel || channel === BROUHAHA);

        // if (wasus) {//create or select
        //     this.newWindow(channel, qwebirc.ui.WINDOW_CHANNEL, windowSelected);
        // }


        this.tracker.addNickToChannel(nick, BROUHAHA);
        this.tracker.addNickToChannel(nick, channel);
        this.updateNickList(BROUHAHA);
        this.updateNickList(channel);

        this.trigger("userJoined", {
            'user': user,
            'nick': nick,
            'host': host,
            'channel': channel,
            'thisclient': wasus,
            'select': windowSelected
        });
    },


    userPart: function(user, channel, message) {
        var nick = util.hostToNick(user),
            host = util.hostToHost(user),
            wasus = (nick === this.nickname);

        if (wasus) {
            this.tracker.removeChannel(channel);
        } else {
            this.tracker.removeNickFromChannel(nick, BROUHAHA);
            this.tracker.removeNickFromChannel(nick, channel);
            this.updateNickList(BROUHAHA);
            this.updateNickList(channel);
        }

        this.trigger("part", {
            'user': user,
            'nick': nick,
            'host': host,
            'channel': channel,
            'message': message,
            'thisclient': wasus
        });
    },


    userKicked: function(kicker, channel, kickee, message) {
        var wasus = kickee === this.nickname;
        if (wasus) {
            this.tracker.removeChannel(channel);
        } else {
            this.tracker.removeNickFromChannel(kickee, channel);
            this.updateNickList(channel);
        }

        this.trigger("kick", {
            'kicker': kicker,
            'channel': channel,
            'kickee': kickee,
            'message': message,
            'thisclient': wasus
        });
    },

    userPrivmsg: function(user, message) {
        var nick = util.hostToNick(user),
            host = util.hostToHost(user);
        this.pushLastNick(nick);

        this.trigger("query", {
            'user': user,
            'nick': nick,
            'host': host,
            'channel': nick,
            'message': message,
            'type': 'privmsg'
        });
    },

    userInvite: function(user, channel) {
        var nick = util.hostToNick(user),
            host = util.hostToHost(user),
            accept = this.ui.uiOptions2.get("accept_service_invites") && this.isNetworkService(user);

        if (accept) {
            if (this.activeTimers.serviceInvite) {
                $clear(this.activeTimers.serviceInvite);
            }

            // we do this so we can batch the joins, i.e. instead of sending 5 JOIN comands we send 1 with 5 channels.
            this.activeTimers.serviceInvite = this.__joinInvited.delay(100, this);
            this.inviteChanList.push(channel);
        }

        this.trigger("invite", {
            'user': user,
            'channel': channel,
            'accept': accept,
            'nick': nick,
            'host': host
        });
    },

    userNotice: function(user, message) {
        var nick = util.hostToNick(user),
            host = util.hostToHost(user);

        this.trigger("privNotice", {
            'user': user,
            'message': message,
            'host': host,
            'nick': nick
        });
    },

    userQuit: function(user, message) {
        var self = this,
            nick = util.hostToNick(user),
            channels = self.tracker.getNick(nick);

        self.tracker.removeNick(nick);

        _.keys(channels).each(function(chan) {
            self.updateNickList(chan);
        });

        self.trigger("quit", {
            'user': user,
            'host': util.hostToHost(user),
            'nick': nick,
            'channels': channels,
            'message': message
        });
    },

    userMode: function(modes) {
        this.trigger("userMode", {
            'modes': modes,
            'message': modes.join(""),
            'type': "UMODE",
            'n': this.nickname
        });
    },

    nickChanged: function(user, newnick, wasus) {
        var self = this,
            oldnick = util.hostToNick(user);

        if (wasus) {
            self.nickname = newnick;
            storage.set(cookies.nickname, newnick);
        }

        self.tracker.renameNick(oldnick, newnick);

        var channels = self.tracker.getNick(newnick);
        var found = _.size(channels) > 0;

        _.each(channels, function(obj, chan) {
            self.updateNickList(chan);
        });

        self.trigger("nickChange", {
            'user': user,
            'nick': util.hostToNick(user),
            'newnick': newnick,
            'channels': channels,
            'thisclient': wasus,
            'type': 'nick'
        });
    },

    initialTopic: function(channel, topic) {
        this.trigger("chanTopic", {
            'channel': channel,
            'topic': topic,
            'initial': true
        });
    },

    channelTopic: function(user, channel, topic) {
        this.trigger("chanTopic", {
            'user': user,
            'nick': util.hostToNick(user),
            'channel': channel,
            'topic': topic
        });
    },

    channelPrivmsg: function(user, channel, message) {
        var self = this,
            nick = util.hostToNick(user);

        self.tracker.updateLastSpoke(nick, channel, Date.now());

        self.trigger("chanMessage", {
            'user': user,
            'nick': nick,
            'channel': channel,
            'message': message,
            'type': 'chanmsg',
            "@": self.getNickStatus(channel, nick)
        });
    },

    channelNotice: function(user, channel, message) {
        var nick = util.hostToNick(user);
        this.trigger("chanNotice", {
            'user': user,
            'nick': nick,
            'channel': channel,
            'message': message,
            "@": this.getNickStatus(channel, nick)
        });
    },

    channelMode: function(user, channel, modes, raw) {
        var self = this;
        _.each(modes, function(mo) {
            var direction = mo[0],
                mode = mo[1];

            var prefixindex = self.modeprefixes.indexOf(mode);
            if (prefixindex === -1) return;

            var nick = mo[2],
                prefixchar = self.prefixes.charAt(prefixindex),

                nc = self.tracker.getOrCreateNickOnChannel(nick, channel),
                oped = direction === OPED;

            prefixchar = oped ? util.addPrefix(nc, prefixchar, self.prefixes) :
                                util.removePrefix(nc, prefixchar);

            self.trigger("mode", {
                "added": oped,
                "prefix": prefixchar,
                "message": prefixchar,
                "nick": nick,
                "channel": channel,
                "thisclient": nick === self.nickname,
                "nickchan": nc
            });
        });

        // self.newChanLine(channel, "MODE", user, {
        //     "m": raw.join(" ")
        // });

        self.updateNickList(channel);
    },

    channelCTCP: function(user, channel, type, args) {
        if (!args) {
            args = "";
        }

        var nick = util.hostToNick(user);
        if (type == "ACTION") {
            this.tracker.updateLastSpoke(nick, channel, Date.now());
            this.trigger("chanAction", {
                'user': user,
                'nick': nick,
                'channel': channel,
                'message': args,
                "@": this.getNickStatus(channel, nick)
            });
        }
        else {
            this.trigger("chanCTCP", {
                'user': user,
                'message': args,
                'channel': channel,
                'data': type,
                'args': args,
                "@": this.getNickStatus(channel, nick)
            });
        }

    },

    userCTCP: function(user, type, args) {
        var nick = util.hostToNick(user),
            host = util.hostToHost(user);

        args = args || "";

        if (type == "ACTION") {
            this.newQueryWindow(nick, true);
            this.trigger("privAction", {
                'nick': nick,
                'host': host,
                'message': args,
                'data': type,
                'user': user
            });
        }
        else {
            this.trigger("privCTCP", {
                'user': user,
                'nick': nick,
                'type': type,
                'message': args,
                'data': type,
                'host': host
            });
        }

    },

    userCTCPReply: function(user, type, args) {
        var nick = util.hostToNick(user),
            host = util.hostToHost(user);

        if (!args) {
            args = "";
        }

        this.trigger("ctcpReply", {
            'user': user,
            'nick': nick,
            'host': host,
            '_type': type,
            'args': args
        });
    },

    serverNotice: function(user, message, target) {
        var data = {
            'user': user,
            'nick': util.hostToNick(user),
            'message': message
        };
        if(target) data.target = data.channel = target;
        this.trigger("serverNotice", data);
    },


    getNickStatus: function(channel, nick) {
        var nickchan = this.tracker.getNickOnChannel(nick, channel);
        if (!$defined(nickchan) || nickchan.prefixes.length === 0)
            return "";

        return nickchan.prefixes.charAt(0);
    },

    storeChannels: function(channels) {
        var store = _.uniq(channels);
        this.channels = channels;
        storage.set(cookies.channels, store);
    },

    getChannels: function() {
        var chans = this.channels = storage.get(cookies.channels) || [];
        return chans;
    },

    canJoinChannel: function(chan) {
        //check if already on channel
        if(chan === BROUHAHA) return true;
        else if(this.tracker.getChannel(chan)) return false;

        var chansets = session.get(chan) || [], //oldest -> newest
            currTime = Date.now(),
            rejoinT = this.options.minRejoinTime,
            minTime = Math.max.apply(null, rejoinT.slice(0, chansets.length)) * 1000;//max min applicable time
        chan = util.formatChannel(chan);

        var broken = chansets.filter(function(time) {
            return currTime - time <= minTime;
        });

        if(broken.length === 0) {
            chansets.push(currTime);
            var n = (chansets.length - rejoinT.length).limit(0, chansets.length);
            session.set(chan, chansets.slice(n));
        } else {
            var maxTime = Math.max.apply(null, chansets.map(function(time, i) {
                return ((minTime - (currTime - time))/1000).round(1); //to secs/10
            }));
            this.writeMessages(lang.waitToJoin, {channel: chan, time: maxTime});
        }

        return broken.length === 0;
    },

    isNetworkService: function(x) {
        return this.options.networkServices.contains(x);
    },

    __joinInvited: function() {
        this.exec("/JOIN " + this.inviteChanList.join(","));
        this.inviteChanList = [];
        delete this.activeTimers["serviceInvite"];
    },

    channelNames: function(channel, names) {
        if (names.length === 0) { //occurs on channel join
            this.updateNickList(channel);
            return;
        }
        var getPrefixes = util.prefixOnNick(this.prefixes);
        _.each(names, function(prenick) {
            var prefixNick = getPrefixes(prenick),
                prefixes = prefixNick[0],
                nick = prefixNick[1];

            if (channel !== BROUHAHA) {
                this.tracker.addNickToChannel(nick, BROUHAHA);
            }
            var nc = this.tracker.addNickToChannel(nick, channel);

            _.each(prefixes, function(p) {
                util.addPrefix(nc, p, this.prefixes);
            }, this);
        }, this);
    },


    nickOnChanHasPrefix: function(nick, channel, prefix) {
        var entry = this.tracker.getNickOnChannel(nick, channel);
        if (!$defined(entry)) return false; /* shouldn't happen */

        return (entry.prefixes).contains(prefix);
    },

    nickOnChanHasAtLeastPrefix: function(nick, channel, prefix) {
        var entry = this.tracker.getNickOnChannel(nick, channel);
        if (!$defined(entry))
            return false; /* shouldn't happen */

        /* this array is sorted */
        var pos = this.prefixes.indexOf(prefix);
        if (pos === -1) return false; /* shouldn't happen */

        var prefixes = this.prefixes.slice(0, pos + 1);

        //true if any of entry.prefix is part of prefixes string
        return _.some(entry.prefixes, function(prefix) {
            return util.validPrefix(prefixes, prefix);
        });
    },

    //needs an update
    supported: function(key, value) {
        if (key == "PREFIX") {
            var len = (value.length - 2) / 2;

            //get rid of these they are confusing
            this.modeprefixes = value.substr(1, len);
            this.prefixes = value.substr(len + 2, len);
        }

        this.parent(key, value);
    },

    awayMessage: function(nick, message) {
        this.trigger("away", {
            "nick": nick,
            "message": message
        })
    },

    whois: function(nick, type, data) {
        var ndata = {
            "n": nick,
            channel: ACTIVE,
            msgs: []
        };
        var mtype = type.toUpperCase();
        var msgs = ndata.msgs;

        switch(type.toLowerCase()) {
            case "user":
                msgs.push({
                    type: "WHOISUSER",
                    h: data.ident + "@" + data.hostname
                })

                msgs.push({
                    type: "WHOISREALNAME",
                    m: data.realname
                })
            break;
            case "server":
                msgs.push({
                    x: data.server,
                    message: data.serverdesc,
                    type: "WHOISSERVER"
                })
            break;
            case "channels":
                msgs.push({
                    message: data.channels,
                    type: "WHOISCHANNELS"
                })
            break;
            case "account":
                msgs.push({
                    message: data.account,
                    type: "WHOISACCOUNT"
                })
            break;
            case "away":
                msgs.push({
                    message: data.away,
                    type: "WHOISAWAY"
                })
            break;
            case "opername":
                msgs.push({
                    message: data.opername,
                    type: "WHOISOPERNAME"
                })
            break;
            case "actually":
                msgs.push({
                    message: data.hostname,
                    x: data.ip,
                    type: "WHOISACTUALLY"
                })
            break;
            case "generictext":
                msgs.push({
                    message: data.text,
                    type: "WHOISGENERICTEXT"
                })
            break;
            default:
                return false;
        }

        this.trigger("whois", ndata);
        return true;
    },

    serverError: function(message) {
        this.trigger("error", {
            message: message,
            type: "GENERICERROR"
        });
    },

    genericError: function(target, message) {
        this.trigger("error", {
            target: target,
            channel: target,
            message: message,
            type: "GENERICERROR"
        })
    },

    genericQueryError: function(target, message) {
        this.trigger("error", {
            target: target,
            channel: target,
            message: message,
            type: "GENERICERROR"
        })
    },

    awayStatus: function(state, message) {
        this.trigger("error", {
            state: state,
            message: message,
            type: "GENERICERROR"
        })
    },

    pushLastNick: function(nick) {
        var i = this.lastNicks.indexOf(nick);
        if (i != -1) {
            this.lastNicks.splice(i, 1);
        } /*else if (this.lastNicks.length == this.options.maxnicks) {
            this.lastNicks.pop();
        }*/
        this.lastNicks.unshift(nick);
    },

    wallops: function(user, text) {
        var nick = util.hostToNick(user);
        var host = util.hostToHost(user);

        this.trigger("wallops", {
            message: text,
            nick: nick,
            host: host
        });
    },

    channelModeIs: function(channel, modes) {
        this.trigger("serverMessage", {
            channel: channel || ACTIVE,
            message: modes.join(" "),
            type: "CHANNELMODEIS"
        });
    },

    channelCreationTime: function(channel, time) {
        this.trigger("serverMessage", {
            channel: channel || ACTIVE,
            message: util.IRCDate(new Date(time * 1000)),
            type: "CHANNELCREATIONTIME"
        });
    },

    getPopularChannels: function(cb, minUsers) {
        this.hidelistout = true;
        this.exec('/list >' + (minUsers || 75)); //request chans with more than 75 users
        this.addEvent("listend:once", function() {
            var chans = _.chain(this.listedChans)
                        .clone()
                        .sortBy(function(chan) {return -chan.users})//neg to sort max -> min
                        .value();
            cb(chans);
            this.hidelistout = false;
        })
    }
});

// /* This could do with a rewrite from scratch. */
//going to rewrite using socket.io commet.
// //COMMANDS = dict(p=push, n=newConnection, s=subscribe)
irc.TwistedConnection = new Class({
    Implements: [Events, Options],
    Binds: ["send","__completeRequest"],
    options: {
        initialNickname: "ircconnX",
        minTimeout: 45000,
        maxTimeout: 5 * 60000,
        timeoutIncrement: 10000,
        initialTimeout: 65000,
        floodInterval: 200,
        floodMax: 10,
        floodReset: 5000,
        errorAlert: true,
        maxRetries: 5,
        password: '',
        serverPassword: null
    },

    initialize: function(options) {
        var self = this;
        self.setOptions(options);
        self.counter = 0;
        self.disconnected = false;
        self.__floodLastRequest = 0;
        self.__floodCounter = 0;
        self.__floodLastFlood = 0;
        self.__retryAttempts = 0;
        self.__timeoutId = null;
        self.__timeout = self.options.initialTimeout;
        self.__lastActiveRequest = null;
        self.__activeRequest = null;
        self.__sendQueue = [];
        self.__sendQueueActive = false;
    },

    connect: function() {
        var self = this,
            request;
        self.cacheAvoidance = util.randHexString(16);
        request = self.newRequest("n");

        request.addEvent("complete", function(stream) {
            if (!stream) {
                self.disconnected = true;
                self.__error(lang.connectionFail);
                return;
            }
            else if (!stream[0]) {
                self.disconnect();
                self.__error(lang.connError, stream);
                return;
            }
            self.sessionid = stream[1];
            self.recv();
        });

        var postdata = "nick=" + encodeURIComponent(self.options.initialNickname);
        if ($defined(self.options.serverPassword)) {
            postdata += "&password=" + encodeURIComponent(self.options.serverPassword);
        }
        request.send(postdata);
    },

    disconnect: function() {
        this.disconnected = true;
        this.__cancelTimeout();
        this.__cancelRequests();
    },

    newRequest: function(url, floodProtection, synchronous) {
        var self = this;
        //check if request should proceed
        if (self.disconnected) {
            return null;
        } else if (floodProtection && !self.disconnected && self.__isFlooding()) {
            self.disconnect();
            self.__error(lang.uncontrolledFlood);
        }
        var request = new Request.JSON({
            url: qwebirc.global.dynamicBaseURL + "e/" + url + "?r=" + self.cacheAvoidance + "&t=" + self.counter++,
            async: !synchronous
        });

        // try to minimise the amount of headers 
        request.headers = {};

        //calls forEach on headers to be removed in the context of the request.xhr on readystatechange.
        //calls setXHRHeaders in the context of the request.xhr object
        request.addEvent("request", _.partial(irc.TwistedConnection.setXHRHeaders, request.xhr));
        if (Browser.ie && Browser.version < 8) {
            request.setHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
        }
        return request;
    },

    recv: function() {
        var self = this,
            request = self.newRequest("s", true);
        if (!$defined(request)) {
            return;
        }
        self.__activeRequest = request;
        request.__replaced = false;
        var onComplete = function(stream) {
            // replaced requests... 
            if (request.__replaced) {
                self.__lastActiveRequest = null;
                if (stream) {
                    self.__processData(stream);
                }
                return;
            }
            // the main request 
            self.__activeRequest = null;
            self.__cancelTimeout();
            if (!stream) {
                if (!self.disconnected && self.__checkRetries()) {
                    self.recv();
                }
                return;
            }
            else if (self.__processData(stream)) {
                self.recv();
            }
        };
        request.addEvent("complete", onComplete);
        self.__scheduleTimeout();
        request.send("s=" + self.sessionid);
    },

    send: function(data, synchronous) {
        if (this.disconnected) {
            return false;
        }
        if (synchronous) {
            this.__send(data, false);
        } else {
            this.__sendQueue.push(data);
            this.__processSendQueue();
        }
        return true;
    },

    __processSendQueue: function() {
        if (this.__sendQueueActive || this.__sendQueue.length === 0) {
            return;
        }
        this.sendQueueActive = true;
        this.__send(this.__sendQueue.shift(), true);
    },

    __send: function(data, async) {
        var request = this.newRequest("p", false, !async);
        if (request === null) {
            return;
        }
        request.addEvent("complete", _.partial(this.__completeRequest, async))
                .send("s=" + this.sessionid + "&c=" + encodeURIComponent(data));
    },

    __completeRequest: function(async, stream) {
        if (async) {
            this.__sendQueueActive = false;
        }
        if (!stream || (!stream[0])) {
            this.__sendQueue = [];
            if (!this.disconnected) {
                this.disconnected = true;
                this.__error(lang.connError, stream);
            }
            return false;
        }
        this.__processSendQueue();
    },

    __isFlooding: function() {
        var t = Date.now(),
            floodt = t - this.__floodLastRequest;
        if (floodt < this.options.floodInterval) {
            if (this.__floodLastFlood !== 0 && (floodt > this.options.floodReset)) {
                this.__floodCounter = 0;
            }
            this.__floodLastFlood = t;
            if (++this.__floodCounter > this.options.floodMax) {
                return true;
            }
        }
        this.__floodLastRequest = t;
        return false;
    },

    __checkRetries: function() { /* hmm, something went wrong! */
        if (++this.__retryAttempts > this.options.maxRetries && !this.disconnected) {
            this.disconnect();
            this.__error(lang.connTimeOut, {retryAttempts: this.__retryAttempts});
            return false;
        }
        var to = this.__timeout - this.options.timeoutIncrement;
        if (to >= this.options.minTimeout) {
            this.__timeout = to;
        }
        return true;
    },

    __cancelRequests: function() {
        if ($defined(this.__lastActiveRequest)) {
            this.__lastActiveRequest.cancel();
            this.__lastActiveRequest = null;
        }
        if ($defined(this.__activeRequest)) {
            this.__activeRequest.cancel();
            this.__activeRequest = null;
        }
    },

    __processData: function(o) {
        if (o[0] == false) {
            if (!this.disconnected) {
                this.disconnected = true;
                this.__error(lang.connError, o);
            }
            return false;
        }

        this.__retryAttempts = 0;
        o.each(function(x) {
            this.fireEvent("recv", [x]);
        }, this);

        return true;
    },


    __scheduleTimeout: function() {
        this.__timeoutId = this.__timeoutEvent.delay(this.__timeout, this);
    },

    __cancelTimeout: function() {
        if ($defined(this.__timeoutId)) {
            $clear(this.__timeoutId);
            this.__timeoutId = null;
        }
    },

    __timeoutEvent: function() {
        this.__timeoutId = null;
        if (!$defined(this.__activeRequest)) {
            return;
        } else if (this.__lastActiveRequest) {
            this.__lastActiveRequest.cancel();
        }
        this.fireEvent("timeout", {
            duration: this.__timeout
        });
        this.__activeRequest.__replaced = true;
        this.__lastActiveRequest = this.__activeRequest;
        var to = this.__timeout + this.options.timeoutIncrement;
        if (to <= this.options.maxTimeout) {
            this.__timeout = to;
        }
        this.recv();
    },

    __error: function(message, context) {
        var msg = context ? util.formatter(message.message, context) : message.message;
        this.fireEvent("error", msg);
        if (this.options.errorAlert) {
            alert(msg);
        }
        console.log('had error:' + msg);
    }
});

(function() {//http://blog.mibbit.com/?p=143
    //moved browser specific headers to be removed here so it doesnt have to be computed each connection.
    //header nullables are browser dependent
    //http://www.michael-noll.com/tutorials/cookie-monster-for-xmlhttprequest/
    var killBit = null;

    var kill = {
        "User-Agent": killBit,
        "Accept": killBit,
        "Accept-Language": killBit,
        "Content-Type": "M",
        "Connection": "keep-alive",
        "Keep-Alive": killBit
    };

    //removes a header from an xhr object (this instanceof xhr)

    function removeHeaders(val, header) {
        try {
            this.setRequestHeader(header, val);
        } catch (e) {console.log(header)}
    }



    //iteratres the headers to be removed with the removeHeaders function
    //expects a xhr object as the third param 
    // conn.setXHRHeaders = function(xhr) {
    //     kill.each(removeHeaders, xhr);
    //     //remove cookies from xhr
    //     // new CookieMonster(xhr);
    // };

    irc.TwistedConnection.setXHRHeaders = _.identity; //_.partial(_.each, kill, removeHeaders);

    // conn.setXHRHeaders = function(xhr) {
    //     kill.each(removeHeaders, xhr);
    // };
})();

irc.NodeConnection = new Class({
    Implements: [Options, Events],
    Binds: ["recv", "error", "_connected", "_disconnected"],
    options: {
        socket: {
            url: document.location.hostname
        },
        nickname: "ircconnX",
        password: '',
        serverPassword: null,
        autoConnect: true,
        autoRejoin: false,
        debug: true,
        floodProtection: false,
        /*server: xxx,
        nick: nick,
        password: null,
        userName: 'nodebot',
        realName: 'nodeJS IRC client',
        port: 6667,
        debug: false,
        showErrors: false,
        autoRejoin: true,
        autoConnect: true,
        channels: [],
        retryCount: null,
        retryDelay: 2000,
        secure: false,
        selfSigned: false,
        certExpired: false,
        floodProtection: false,
        floodProtectionDelay: 1000,
        stripColors: false,
        channelPrefixes: "&#",
        messageSplit: 512*/
        retryInterval: 5000,
        retryScalar: 2
    },
    connected: false,

    initialize: function(options) {
        var self = this;
        self.setOptions(options);
        var ip = util.formatter("{url}", self.options.socket);
        var socket = self.socket = io.connect(ip);

        var $evts = {
            "raw": self.recv,
            "echo": _.log,
            "connected": self._connected,
            "disconnect": self._disconnected,
            // "connected": _.log,
            "error": self.error
        };

        _.each($evts, function(fn, key) {
            if(fn) {
                socket.on(key, fn);
            }
            else {
                socket.on(key, function() {//pass
                    self.fireEvent(key);
                });
            }
        });

        self.connect();
    },

    connect: function() {
        this.socket.emit("irc", this.options);
    },

    //irc connection on server in
    _connected: function() {
        this.connected = true;
        this.fireEvent("connected");
        this.__retry = this.options.retryInterval;
    },

    disconnect: function() {
        this.emit("quit");
        this.socket.disconnect();
    },

    _disconnected: function() {
        this.connected = false;
        this.autoretry();
    },

    recv: function(data) {
        var processed = util.parseIRCData(data.raw);
        this.fireEvent("recv", processed);
    },

    send: function(data) {
        if(this.connected) {
            this.socket.emit("send", data);
            return true;
        }
        else {
            console.error("disconnected dude");
        }
    },

    error: function() {
        console.error(arguments);
        this.fireEvent("error");
    },

    autoretry: function() {
        if(this.connected) {return;}
        var next = this.__retry *= this.options.retryScalar;
        this.fireEvent("retry", {
            next: next
        });
        this.socket.emit("retry", "please");
        return _.delay(this.autoretry, next, this);
    }
});


irc.IRCTracker = new Class({
    channels: {},
    nicknames: {},
    initialize: function(owner) {
        this.owner = owner;
    },

    toIRCLower: function(value) {
        /* proxied because the method can change after we connect */

        return this.owner.toIRCLower(value);
    },

    getNick: function(nick) {
        return this.nicknames[nick];
    },

    getOrCreateNick: function(nick) {
        return this.getNick(nick) || (this.nicknames[nick] = {});
    },

    getChannel: function(channel) {
        return this.channels[this.toIRCLower(channel)];
    },

    getOrCreateChannel: function(channel) {
        return this.getChannel(channel) || (this.channels[this.toIRCLower(channel)] = {});
    },

    getOrCreateNickOnChannel: function(nick, channel) {
        var nc = this.getOrCreateNick(nick);

        return nc[this.toIRCLower(channel)] || this.addNickToChannel(nc, channel);
    },

    getNickOnChannel: function(nick, channel) {
        var nickchan = this.getNick(nick);
        if (!nickchan) {
            return;
        } else {
            return nickchan[this.toIRCLower(channel)];
        }
    },

    addNickToChannel: function(nick, channel) {
        var nc = irc.nickChanEntry();

        var nickchan = this.getOrCreateNick(nick);
        nickchan[this.toIRCLower(channel)] = nc;

        var chan = this.getOrCreateChannel(channel);
        chan[nick] = nc;

        return nc;
    },

    removeNick: function(nick) {
        var nickchan = this.getNick(nick);
        if (!nickchan)
            return;

        _.each(_.keys(nickchan), function(chan) {
            var lchannel = this.toIRCLower(chan),
                channel = this.channels[lchannel];

            delete channel[nick];
            if (_.size(channel) === 0) {
                delete this.channels[lchannel];
            }
        }, this);
        delete this.nicknames[nick];
    },

    removeChannel: function(channel) {
        var chan = this.getChannel(channel);
        if (!chan)
            return;

        var lchannel = this.toIRCLower(channel);


        _.each(_.keys(chan), function(nick) {
            var nc = this.nicknames[nick];
            delete nc[lchannel];
            if (_.size(nc) === 0) { //in no more channels
                delete this.nicknames[nick];
            }
        }, this);
        delete this.channels[lchannel];
    },

    removeNickFromChannel: function(nick, channel) {
        var lchannel = this.toIRCLower(channel);

        var nickchan = this.getNick(nick);
        var chan = this.getChannel(lchannel);
        if (!nickchan || !chan)
            return;

        delete nickchan[lchannel];
        delete chan[nick];

        if (_.size(nickchan) === 0) {
            delete this.nicknames[nick];
        }
        if (_.size(chan) === 0) {
            delete this.channels[lchannel];
        }
    },

    renameNick: function(oldnick, newnick) {
        var nickchans = this.getNick(oldnick);
        if (!nickchans)
            return;

        _.each(_.keys(nickchans), function(channel) {
            var lchannel = this.toIRCLower(channel);
            this.channels[lchannel][newnick] = this.channels[lchannel][oldnick];
            delete this.channels[lchannel][oldnick];
        }, this);

        this.nicknames[newnick] = this.nicknames[oldnick];
        delete this.nicknames[oldnick];
    },

    updateLastSpoke: function(nick, channel, time) {
        var nc = this.getNickOnChannel(nick, channel);
        if ($defined(nc)) {
            nc.lastSpoke = time;
        }
    },

    getSortedByLastSpoke: function(channel) {
        var chan = this.getChannel(channel);
        if (!chan)
            return;

        var sorter = function(key1, key2) {
            return chan[key2].lastSpoke - chan[key1].lastSpoke;
        };

        // var names = [];
        // Hash.each(chan, function(chan, name) {
        //     names.push([name, chan]);
        // });
        // var names = util.mapA(chan, function(c, n) {
        //     return [n, c];
        // });
        var sorted = Object.keys(chan).sort(sorter).map(function(key){
            return chan[key];
        });

        // var newnames = names.sort(sorter)
        //                     .map(prelude.first);

        return sorted;
    }
});


(function (engine) {

    //where to store these things
    var source = {},
        compiled = qwebirc.templates || {};

    source.messageLine = "<hr class='lastpos' />";
    // source.ircMessage = "<div class='{{styles}}'></div>";


    //portions:
    source.topPane = "<div class='toppanel outertabbar'></div>";
    // source.detachedPane = "<div class='detached'></div>";
    source.windowsPane = "<div class='windows'></div>";
    // source.windowPane = "<div class='window qui hidden'></div>";
    // source.topicPane = "<div class='qui topic'></div>";
    // source.contentPane = "<div class='qui content'></div>";
    // source.leftPane = "<div class='qui leftpanel lines'></div>";
    // source.nickPane = "<div class='qui rightpanel'></div>";
    // source.propertiesPane = "<div class='qui properties'></div>";
    // source.inputPane = "<div class='qui bottompanel'></div>";

    // source.detachedWindow = [
    // "<div class='detached-window'>",
    //     "<div class='header'>",
    //         "<span class='title'>{{channel}}</span>",
    //         "{{#unless base}}{{> tabClose}}{{/unless}}",//css bug
    //         "{{> tabAttach}}",
    //     "</div>",
    // "</div>"].join("");

    source.resizeHandle = "<div><span class='resize-handle ui-icon ui-icon-grip-diagonal-se'></span></div>";

    source.menuContainer = "<div class='menu'></div>";
    // source.menubtn = "<div class='dropdown-tab'><img src='{{icon}}' title='menu' alt='menu'></div>";
    source.menudrop = "<div class='main-menu dropdownmenu'></div>";
    // source.chanmenu = "<div class='chanmenu dropdownmenu'>{{#each channels}}{{> menuitem}}{{/each}}</div>";
    // source.menuitem = "<a{{#if value}} data-value='{{value}}'{{/if}}><span>{{text}}</span>{{#if hint}}<span class='hint'>{{hint}}</span>{{/if}}</a>";
    source.dropdownhint = "<div class='dropdownhint'>Click the icon for the main menu.</div>";

    source.tabbar = "<div class='tabbar'></div>";
    source.tabbarbtns = [
    "<div class='buttons'>",
        "<span class='ui-icon ui-icon-circle-triangle-w to-left hidden' name='tabscroll'></span>",
        "<span class='ui-icon ui-icon-circle-triangle-e to-right hidden' name='tabscroll'></span>",
        "<span class='add-chan ui-icon ui-icon-circle-plus' title='Join a channel'></span>",
    "</div>"].join("");
    // source.ircTab = "<a href='#' class='tab'>{{{name}}} {{> tabDetach}}</a>";
    source.tabDetach = "<span class='detach ui-icon ui-icon-newwin' title='" + lang.detachWindow + "'></span>";
    source.tabAttach = "<span class='attach ui-icon ui-icon-circle-minus'></span>";
    source.tabClose = "<span class='tab-close ui-icon ui-icon-circle-close' title='" + lang.closeTab + "'></span>";

	source.loadingPage = "<div class='loading'>" + lang.loadingPage + "</div>";


    source.verticalDivider = "<div class='ui-icon ui-icon-grip-solid-vertical handle vertical'></div>";
    source.horizontalDivider = "<div class='ui-icon ui-icon-grip-solid-horizontal handle horizontal'></div>";

    /************************
        HELPERS
    ***********************/
    engine.registerHelper('check', function(checked, s2){
        return checked ? 'checked' : '';
    });

    engine.registerHelper('enableDisable', function(x) {
        return x ? lang.DISABLE : lang.ENABLE;//if true shows disable
    });

    //f(property name, type of prop, default val)
    engine.registerHelper('$css', function(prop, def, type, default2) {//this refers to context
        if(type === "c") {//colour
            var x = new Color(def);
            var c = x.setHue(this.style_hue).setSaturation(x.hsb[1] + this.style_saturation).setBrightness(x.hsb[2] + this.style_brightness);
            if (Browser.ie && c == "255,255,255") c = "255,255,254";// IE confuses white with transparent... 
            
            return "rgb(" + c + ")";
        } 
        else if(type === "comp") {
            return this[prop] ? def : default2;
        }
        else {
            return this[prop] || def;
        }
    });

    /******************
        Compiliation
    *********************/

    function compileAll(source,compiled) {
        _.each(source, function(item, key) {
            try {
                // compiled[key] = engine.compile(item);
                compiled[key] = Function.from(item);
            } catch(err) {
                console.log(err);
            }
        });

        return compiled;
    }

    compileAll(source, compiled);

    //allows templates to reference eachother
    engine.partials = compiled;
})(Handlebars);


ui.BaseUI = new Class({
    Implements: [Options, Events],
    options: {

    },
    windows: {},
    customWindows: {},
    clients: {},
    windowArray: [],
    clientId: 0,

    initialize: function(parentElement, Window, uiName, options) {
        var self = this;
        self.setOptions(options);

        self.windows[ui.CUSTOM_CLIENT] = this.customWindows;
        self.Window = Window;
        self.parentElement = parentElement;
        parentElement.addClasses("qwebirc", "qwebirc-" + uiName);
        self.commandhistory = new irc.CommandHistory();

        getTemplate("topPane", function(template) {
            self.outerTabs = Element.from(template()).inject(parentElement);
        });
        getTemplate("windowsPane", function(template) {
            self.windowsPanel = Element.from(template()).inject(parentElement);
        });
    },
    newClient: function(client) {
        client.id = this.clientId++;

        var windows = this.windows[client.id] = {};
        this.clients[client.id] = client;
        var win = this.newWindow(client, ui.WINDOW.status, STATUS);
        this.selectWindow(win);

        this.clientEvents(client, windows);

        return win;
    },

    newWindow: function(client, type, name) {
        var win = this.getWindow(client, name);
        if (!$defined(win)) {
            if(util.windowNeedsInput(type)) {
                this.commandhistory.addChannel(name);
            }
            var wId = this.getWindowIdentifier(name);
            var $wrapper = new Element('div.hidden').inject(this.windowsPanel);//for delegation - this is not how i should do it
            win = this.windows[this.getClientId(client)][wId] = new this.Window(this, $wrapper, client, type, name, wId);
            this.windowArray.push(win);
        }

        return win;
    },

    clientEvents: function(client, windows) { // mi gusta xD
        if(! client instanceof irc.IRCClient) return;
        var self = this,
            broadcast_re = /MSG|TOPIC|(CHAN|PRIV)NOTICE/i;

        function formatChans(data) {
            var chans = data.channels;
            return chans && _.isObject(chans) ? _.keys(chans) : Array.from(chans || data.channel);
        }

        function formatData(type, _data) {
            var data = _.extend({
                c: _data.channel || STATUS,
                n: _data.nick,
                m: _data.message,
                h: _data.host,
                t: type,
                type: type
            }, _data);
            data.channel = data.c;
            if (!(self.uiOptions2.get("nick_ov_status"))){
                delete data["@"];
            }
            return data;
        }

        function lineParser(type, data) {
            data = formatData(type, data);
            
            _.each(formatChans(data), function(channel) {
                data.channel = data.c = channel;
                var win = (data.c === ACTIVE) ? self.getActiveWindow() : self.getWindow(client, channel);
                if(!win) return;
                if(_.isArray(data.message)) {
                    _.each(data.message, function(msg) {
                        data.message = data.m = msg;
                        parser(type, data, win);
                    });
                }
                else {
                    parser(type, data, win);
                }
            });
        }

        function parser(type, data, win, channel) {
            type = data.type || data.t || type;
            channel = data.channel || STATUS;

            win.addLine(data.type, data);

            if(!util.isBaseWindow(data.channel) && broadcast_re.test(type)) {
                var data2 = _.clone(data);
                var brouhaha = self.getWindow(client, BROUHAHA);
                data2.nick = data2.n = util.isChannel(data.c) ? data.n + data.c ://chanmsg
                                                                data.n + ">" + data.c;//pm
                brouhaha.addLine(data.type, data2);
            }
        }

        function updateTopic(type, data) {
            self.getWindow(client, data.channel).updateTopic(data.topic);
            if(!data.initial) {
                data.message = data.topic;
                lineParser("topic", data);
            }
        }

        function joinPart(type, data) {
            if ((data.thisclient && data.type != "PART" && data.type != "QUIT") ||
                    !(self.uiOptions2.get("hide_joinparts")) && !util.isBaseWindow(data.channel)) {
                lineParser(type, data);
            }
        }

        function partKick(type, data) {
            if(data.thisclient) {
                var win = self.getWindow(client, data.channel);
                if(win) win.close();
            } else {
                joinPart(type,data);
            }
        }

        client.addEvents({
            "connect": lineParser,
            "disconnect": lineParser,
            "error": lineParser,
            "info": lineParser,

            "chanAction": lineParser,
            "chanTopic": updateTopic,
            "chanMessage": lineParser,
            "chanNotice": lineParser,
            "chanCTCP": lineParser,

            "userJoined": function(type, data) {
                if(data.thisclient) {
                    var win = self.newWindow(client, ui.WINDOW.channel, data.channel);//this is client scope
                    if(data.select) {
                        win.select();
                    }
                }
                joinPart(data.thisclient ? "ourJoin" : "join", data);
            },

            openWindow: function(type, data) {//create? and select window
                var win = self.getWindow(data.window);
                if(!win) {
                    if(data.type === ui.WINDOW.custom) {
                        win = self[data.window]();
                    } else {
                        win = self.newWindow(client, data.type, data.window);
                    }
                }
                win.select();
            },

            "away": lineParser,
            "part": partKick,
            "quit": partKick,
            "kick": partKick,
            "invite": lineParser,
            "privAction": lineParser,
            "privCTCP": lineParser,
            "ctcpReply": lineParser,
            "userMode": lineParser,
            "nickChange": function(type, data) {
                self.nickChange(data);
                lineParser(type, data);
            },
            "privNotice": lineParser,

            "query": function(type, data) {//queries
                data = formatData(type, data);
                var win = self.newWindow(client, ui.WINDOW.query, data.channel); //get or create
                if(self.uiOptions2.get("auto_open_pm")) {
                    self.selectWindow(win);
                }
                parser(type, data, win);
            },

            "awayStatus": lineParser,
            "mode": function(type, data) {
                var win = self.getWindow(data.channel);
                if(win) {
                    win.updatePrefix(data);
                }
                lineParser(type, data);
            },
            "serverMessage": lineParser,
            "serverNotice": lineParser,
            "whois": function(type, data) {
                _.each(data.msgs, function(msg) {
                    lineParser(type, _.extend({}, data, msg));
                });
            },
            "wallops": lineParser,
            "raw": function(type, args) {
                lineParser(type, args);
            }
        });
    },

    getClientId: function(client) {
        return client === ui.CUSTOM_CLIENT ? ui.CUSTOM_CLIENT : client.id;
    },
    getWindowIdentifier: function(name) {
        return name.toLowerCase();
    },
    nickChange: util.noop,

    getWindow: function(client, name) {
        // if(_.isNumber(name)) {
        //     return _.findWhere(this.windowArray, {
        //         type: name
        //     });
        // }
        if(_.isString(client)) name = client;
        var wins = this.windows[this.getClientId(client)] || this.customWindows;
        if (_.isObject(wins)) 
            return wins[this.getWindowIdentifier(name)];
    },
    getActiveWindow: function() {
        return this.active;
    },
    getActiveIRCWindow: function(client) {
        if (!this.active || this.active.type == ui.WINDOW.custom) {
            return this.windows[this.getClientId(client)][this.getWindowIdentifier(STATUS)];
        } else {
            return this.active;
        }
    },
    selectWindow: function(win) {
        if(_.isNumber(win))
            win = this.windowArray[win];
        else if(_.isString(win))
            win = this.getWindow(win);
        if(win !== this.active) {
            if (this.active) {
                this.active.deselect();
                this.last = this.active;
            }
            if(!win.active) win.select();
            this.setWindow(win);
            this.updateTitle(win.name + " - " + this.options.appTitle);
        }
        return win;
    },
    setWindow: function(win) {
        this.active = win;
    },
    nextWindow: function(direction, fromWin) {
        var windows = this.windowArray,
            win = _.nextItem(windows, windows.indexOf(fromWin || this.active), direction); //get window from array
        if(win) win.select();

        return win;
    },
    prevWindow: function() {
        this.nextWindow(-1);
    },
    __closed: function(win) {
        var winarr = this.windowArray;
        if (win.active) {
            if(this.last) {//select last active window
                this.last.select();
            }
            else if (winarr.length !== 1) {
                var index = winarr.indexOf(win);
                if(index === -1) {
                    return;
                } else if (index === (winarr.length - 1)) {
                    this.prevWindow();
                } else {
                    this.nextWindow();
                }
            }
        }

        this.commandhistory.removeChannel(win.name);
        this.tabs.disown(win.tab);
        winarr = this.windowArray.erase(win);
        delete this.windows[this.getClientId(win.client)][win.identifier];
    },
/*
      this shouldn't be called by overriding classes!
      they should implement their own!
      some form of user input MUST be received before an
      IRC connection is made, else users are going to get
      tricked into getting themselves glined
    */
    loginBox: function(callback, initialNickname, initialChannels, autoConnect, autoNick, storage) {
        ui.GenericLoginBox(this.parentElement, callback, initialNickname, initialChannels, autoConnect, autoNick, this.options.networkName, storage);
    }
});


ui.StandardUI = new Class({
    Extends: ui.BaseUI,
    Binds: ["__handleHotkey", "optionsWindow", "embeddedWindow", "urlDispatcher", "resetTabComplete", "whoisURL", "updateStylesheet"],

    UICommands: ui.UI_COMMANDS,
    initialize: function(parentElement, theme, windowClass, uiName, options) {
        var self = this;
        self.parent(parentElement, windowClass, uiName, options);

        self.theme = theme;

        // self.uiOptions = new ui.DefaultOptionsClass(self, options.uiOptionsArg);
        self.uiOptions2 = new config.OptionModel({
            defaults: self.options.uiOptionsArg
        });

        function setCustomNotice(notices) {
            self.theme.customNotices = _.chain(notices).clone()
                .reject(function(data) {
                    return !(data.msg || data.msg.trim() === "") && (!data.nick || data.nick.trim() === "");
                })
                .map(function(notice) {
                    return {
                        msg: new RegExp(notice.autoescape ? String.escapeRegExp(notice.msg) : notice.msg),
                        beep: notice.beep,
                        flash: notice.flash
                    };
                })
                .value();
        }
        function setStandardNotice(notices) {
            _.each(self.theme.messageParsers, function(parser) {
                if( _.has(notices, parser.id) )
                    _.extend(parser, notices[parser.id]);
            });
        }

        self.uiOptions2.on({
            "change:style_hue": function(style_hue) {
                self.updateStylesheet();
            },
            "change:font_size": self.updateStylesheet,
            "change:custom_notices": setCustomNotice,
            "change:notices": setStandardNotice
        });
        setCustomNotice(self.uiOptions2.get("custom_notices"));
        setStandardNotice(self.uiOptions2.get("notices"));

        self.setModifiableStylesheet({
            style_hue: self.options.hue || self.uiOptions2.get("style_hue"),
            style_saturation: self.options.saturation || self.uiOptions2.get("style_saturation"),
            style_brightness: self.options.brightness || self.uiOptions2.get("style_brightness")
        });
    },

    newCustomWindow: function(name, select, type) {
        type = type || ui.WINDOW.custom;

        var win = this.newWindow(ui.CUSTOM_CLIENT, type, name);

        if (select) this.selectWindow(win);

        return win;
    },

    addCustomWindow: function(windowName, CustomView, cssClass, options) {
        var wid = this.getWindowIdentifier(windowName);
        if (_.has(this.customWindows, wid)) {
            return this.selectWindow(this.customWindows[wid]);
        }

        var win = this.newCustomWindow(windowName, true);
        this.customWindows[wid] = win;

        win.addEvent("destroy", function() {
            delete this.customWindows[wid];
        }.bind(this));

        if(_.isString(cssClass)) {
            win.lines.addClass(cssClass);
        }

        options = _.extend({
            element: win.lines
        }, options);
        new CustomView(options)
            .addEvent("close", win.close);


        return win;
    },
    optionsWindow: function() {
        var self = this;
        self.addCustomWindow("Options", ui.OptionView, "options", {
            model: self.uiOptions2,
            onNoticeTest: function() {
                self.flash({force:true});
            },
            getUI: function() {
                return self;
            }
        });
    },
    embeddedWindow: function() {
        return this.addCustomWindow("Add webchat to your site", ui.EmbedWizard, "embedded-wizard");
    },
    aboutWindow: function() {
        return this.addCustomWindow("About", ui.AboutPane, "about");
    },
    privacyWindow: function() {
        return this.addCustomWindow("Privacy policy", ui.PrivacyPolicyPane, "privacypolicy");
    },
    feedbackWindow: function() {
        return this.addCustomWindow("Feedback", ui.FeedbackPane, "feedback");
    },
    faqWindow: function() {
        return this.addCustomWindow("FAQ", ui.FAQPane, "faq");
    },
    urlDispatcher: function(name, window) {
        if (name == "embedded") {
            return ["a", this.embeddedWindow];
        }
        else if (name == "options"){
            return ["a", this.optionsWindow];
        }
        /* doesn't really belong here */
        else if (name === "whois") {
            var uiOptions2 = this.uiOptions2;
            ///this method is dumb
            return ["span", function(nick) {
                if (uiOptions2.QUERY_ON_NICK_CLICK) {
                    window.client.exec("/QUERY " + nick);
                } else {
                    if (isChannel(nick)) {
                        nick = util.unformatChannel(nick);
                    } else {
                        if (nick.search(window.client.nickname + '>') >= 0) {
                            nick = nick.substr(nick.search('>') + 1, nick.length);
                        } else {
                            nick = nick.substr(0, nick.search('>'));
                        }
                    }
                    // window.properties.text(nick);
                    window.client.exec("/WHOIS " + nick);
                }
            }];
        }
        else
            return null;
    },

    whoisURL: function(e, target) {
        var client = target.getParent('.window').retrieve('window').client,
            nick = target.get('data-user');
        if (this.uiOptions2.QUERY_ON_NICK_CLICK) {
            client.exec("/QUERY " + nick);
        } else {
            if (isChannel(nick)) {
                nick = util.unformatChannel(nick);
            } else if (nick.search(client.nickname + '>') >= 0) {
                nick = nick.substr(nick.search('>') + 1, nick.length);
            } 
            client.exec("/WHOIS " + nick);
        }
    },

    chanURL: function(e, target) {
        var client = target.getParent('.lines').retrieve('client'),
            chan = target.get('data-chan');
        if(util.isChannel(chan))
            client.exec("/JOIN " + chan);
    },

    setModifiableStylesheet: function(vals) {
        this.__styleSheet = new Element("style", {
                                type: "text/css",
                                media: "all"
                            }).inject(document.head);
        this.updateStylesheet(vals);
    },
    updateStylesheet: function(values) {//todo calculate all the values and just sub in
        var self = this;
        getTemplate("modifiablecss", function(template) {
            var styles = _.extend({}, Browser, self.uiOptions2.toJSON(), values);
            var stylesheet = template(styles);
            var node = self.__styleSheet;

            if (node.styleSheet) { /* ie */
                node.styleSheet.cssText = stylesheet;
            } else {
                node.empty()
                    .appendText(stylesheet);
            }
        });
    }
});



ui.NotificationUI = new Class({
    Extends: ui.StandardUI,

    Binds: ["beep", "flash", "cancelFlash"],

    options: {
        minSoundRepeatInterval: 1000,

        notificationOptions: {//https://github.com/ttsvetko/HTML5-Desktop-Notifications
            icon: "images/qwebircsmall.png",
            title: "IRC Alert",
            body: "New notification!"
        },

        sounds: {
            sounds: [{
                id: "beep",
                url: ['beep3.ogg', 'beep3.mp3']
            }]//files in sounds/
        },
        icons: {
            empty_favicon: "images/empty_favicon.ico"
        }
    },
    canFlash: false,
    lastSound: 0,
    titleText: document.title,

    initialize: function() {
        // this.parent(parentElement, windowClass, uiName, options);
        this.parent.apply(this, arguments);//pass

        this.soundInit();

        var favIcon = document.head.getElement("link[rel^='shortcut'][rel$='icon']");
        if (favIcon) {
            this.favIcons = {
                normal: favIcon,
                empty: new Element("link", {
                            rel: 'shortcut icon',
                            type: 'image/x-icon',
                            href: this.options.icons.empty_favicon
                        })
            };
            this.flashing = false;
            this.canFlash = true;
        }
    },
    setBeepOnMention: function(value) {
        if (value)
            this.soundInit();
    },
    updateTitle: function(text) {
        ui.setTitle(text);
    },
    beep: function() {
        this.playSound('beep');
    },
    playSound: function(alias) {
        if (this.soundPlayer.isReady() && (Date.now() - this.lastSound > this.options.sounds.minSoundRepeatInterval)) {
            this.lastSound = Date.now();
            this.soundPlayer.play(alias, {
                volume: this.uiOptions2.get("volume")
            });
        }
    },

    soundInit: function() {
        //used to have a bunch of flash checks. going to let the sm handle it
        if(!$defined(this.soundPlayer)) {
            this.soundPlayer = new sound.SoundPlayer(this.options.sounds);
        }
    },
    flash: function(options) {
        var self = this;
        if ((!options.force && document.hasFocus()) || !self.canFlash || self.flashing)
            return;

        self.titleText = document.title;

        var flash = function() {
            var vis = self.toggleFavIcon();
            ui.setTitle(vis ? self.titleText : lang.activityNotice.message);
        };

        if(self.uiOptions2.get("dn_state")) {
            var opts = _.extend({/*timeout: self.uiOptions2.get("dn_duration")*/}, self.options.notificationOptions, options);
            self.__notice = notify.createNotification(opts.title, opts);
            self.__notice.waiter = (function() { self.__notice.close(); self.__notice = null; }).delay(self.uiOptions2.get("dn_duration"));
        }

        self.flashing = true;
        // flashA();
        self.__flasher = _.periodical(flash, 750);
        window.addEvents({//whatever comes first
            "mousedown:once": self.cancelFlash,
            "keydown:once": self.cancelFlash,
            "focus:once": self.cancelFlash
        });
    },
    cancelFlash: function() {
        this.flashing = false;

        if(this.__flasher){
            $clear(this.__flasher);
            this.__flasher = null;
        }

        if(this.__notice) {
            $clear(this.__notice.waiter);
            this.__notice.close();
            this.__notice = null;
        }

        this.toggleFavIcon(true);
        ui.setTitle(this.titleText);
    },
    //not sure if changing the favicon is a good idea - messes with peoples bookmarks
    toggleFavIcon: function(state) {
        var icons = this.favIcons;
        var isNormalVis = !!icons.normal.getParent();
        var vis = _.isBoolean(state) ? state : !isNormalVis;
        if(vis && !isNormalVis) {
            icons.normal.replaces(icons.empty);
        }
        else if (!vis && isNormalVis) {
            icons.empty.replaces(icons.normal);
        }
        return vis;
    }
});


ui.StandardUI.implement({
    loginBox: function(initialNickname, initialChannels, autoConnect, autoNick, network) {
        this.postInitialize();
        var self = this;
        var win = this.newCustomWindow(CONNECTION_DETAILS, true, ui.WINDOW.connect);
        var callback = function(data) {
                win.close();
                self.fireEvent("login", data);
            };
        ui.GenericLoginBox(win.lines, callback, initialNickname, initialChannels, autoConnect, autoNick, network || this.options.networkName);
        return win;
    }
});


ui.GenericLoginBox = function(parentElement, callback, initialNickname, initialChannels, autoConnect, autoNick, networkName) {
    ui.LoginBox(parentElement, callback, initialNickname, initialChannels, networkName);
};

ui.LoginBox = function(parentElement, callback, initialNickname, initialChannels, networkName) {
    var Base64 = window.Base64;
    var _nick = new Storer(cookies.nickname),//initial nick
        _user = new Storer(cookies.username),//auth username
        _pass = new Storer(cookies.password),//auth password
        _auth = new Storer(cookies.auth);//enable full auth
    var nickname = _nick.get() || initialNickname,
        username = Base64.decode(_user.get()),
        password = Base64.decode(_pass.get()),
        eauth = auth.enabled || _auth.get();

    getTemplate("authpage", function(template) {
        var page = Element.from(template({
            'network': networkName,
            'nickname': nickname,
            'username': username,
            'password': password,
            'full': eauth, //whether to show the extra auth options (check the checkbox)
            'channels': initialChannels.join()
        })).inject(parentElement);

        var $form = page.getElement('#login'),
            $nickBox = page.getElement('#nickname'),
            $usernameBox = page.getElement('#username'),
            $passwordBox = page.getElement('#password'),
            $chkAddAuth = page.getElement('#authenticate');

        $chkAddAuth.addEvent('click', function () {
            $form.getElements('[name="full"]').getParent('div').toggle();
        });

        $form.addEvent("submit", function(e) {
            e.stop();

            var nickname = $nickBox.val();

            //validate nick
            if (!nickname) {
                new ui.Alert({
                    text: lang.missingNick,
                    onClose: $nickBox.focus.bind($nickBox)
                });
                return;
            }
            var stripped = qwebirc.global.nicknameValidator.validate(nickname);
            if (stripped !== nickname) {
                $nickBox.val(stripped);
                new ui.Alert({
                    text: lang.invalidNick,
                    onClose: $nickBox.focus.bind($nickBox)
                });
                return;
            }

            var data = {
                "nickname": nickname
            };

            _nick.set(nickname);// nicks valid

            if ($chkAddAuth.val() || auth.enabled) {
                data.username = username = $usernameBox.val();
                data.realname = username || "";
                data.password = password = $passwordBox.val();
                if (auth.bouncerAuth()) {
                    if (!$chk(password)) {
                        new ui.Alert({
                            text: lang.missingPass,
                            onClose: $passwordBox.focus.bind($passwordBox)
                        });
                        return;
                    }
                    data.serverPassword = password;
                }
                if (!username || !password) {
                    new ui.Alert({
                        text: lang.missingAuthInfo,
                        onClose: function() {
                            if (!$chk(username)) {
                                $usernameBox.focus();
                            } else {
                                $passwordBox.focus();
                            }
                        }
                    });                    
                    return;
                } else if(auth.passAuth()){
                    data.serverPassword = username + " " + password;
                }

                _user.set(Base64.encode(username));
                _pass.set(Base64.encode(password));
                _auth.set(true);
                auth.enabled = true;
            } else {
                _auth.dispose();
            }

            parentElement.empty();

            auth.loggedin = true;

            callback(data);
        });

        if (window === window.top) $nickBox.focus();

        ui.Behaviour.apply(page);
    });
};


ui.QuakeNetUI = new Class({
    Extends: ui.NotificationUI,
    logout: function() {
        if (!auth.loggedin)
            return;
        if (confirm("Log out?")) {
            _.each(this.clients, function(client) {
                client.quit(lang.logOut.message);
            });

            (function() {
                document.location = qwebirc.global.dynamicBaseURL + "auth?logout=1";
            }).delay(500);
        }
    }
});


ui.QUI = new Class({
    Extends: ui.QuakeNetUI,
    Binds: ["__createChannelMenu"],
    initialize: function(parentElement, theme, options) {
        this.parent(parentElement, theme, ui.QUI.Window, "qui", options);

        parentElement.addClass('qui')
                    .addClass('signed-out');
        this.setHotKeys();

        this.parentElement.addEvents({
            "click:relay(.lines .hyperlink-whois)": this.whoisURL,
            "click:relay(.lines .hyperlink-channel)": this.chanURL
        });
    },
    postInitialize: function() {
        var self = this;

        // qjsui.addEvent("reflow", function() {
        //     var win = self.getActiveWindow();
        //     if ($defined(win))
        //         win.onResize();
        // });

        var tabs = self.tabs = Element.from(templates.tabbar()),
            joinChan =  function(){
                var chan = prompt("Enter channel name:");
                if(chan && chan.trim() !== ""){
                    _.each(self.clients, function(client) {
                        client.exec("/JOIN " + chan);
                    });
                }
            },
            tabbtns = Element.from(templates.tabbarbtns()),
            addTab = tabbtns.getElement('.add-chan'),
            scrollers = tabbtns.getElements('[name="tabscroll"]'),
            scroller = new Fx.Scroll(tabs),
            resizeTabs = _.partial(util.fillContainer, tabs, {style: 'max-width'}),
            tabsResize = function() {
                var wid = tabs.getWidth(),
                    swid = tabs.getScrollWidth();

                if(swid > wid) {
                    scrollers.show();
                }
                else {
                    scrollers.hide();
                }

                resizeTabs();
            };

        window.addEvent('resize', tabsResize);
        tabs.addEvents({
            'adopt': tabsResize,
            'disown': tabsResize
        });

        scrollers.filter('.to-left')
            .addEvent('click', function(e) {
                e.stop();
                var pos = tabs.getScrollLeft(),
                    $ele = util.elementAtScrollPos(tabs, pos);

                scroller.toElement($ele, 'x');
                console.log($ele);
            });
        scrollers.filter('.to-right')
            .addEvent('click', function(e) {
                e.stop();
                var pos = tabs.getScrollLeft() + tabs.getWidth(),
                    $ele = util.elementAtScrollPos(tabs, pos);

                scroller.toElementEdge($ele, 'x');
                console.log($ele);
            });

        resizeTabs();
        addTab.addEvents({
            'dblclick': joinChan,
            'click': self.__createChannelMenu
        });

        //for scrolling tabs with mousewheel
        tabs.addEvent("mousewheel", function(evt) {
            evt.stop();
            if (evt.wheel > 0) {//mwup
                self.nextWindow();
            } else if (evt.wheel < 0) {
                self.prevWindow();
            }
        });


        //append menu and tabbar
        self.outerTabs.adopt(self.__createDropdownMenu(), tabs, tabbtns)
            .addEvents({
                "click:relay(.tab .tab-close)": function(e, target) {
                    e.stop();
                    target.getParent('.tab').retrieve('window').close();
                },
                "click:relay(.tab .detach)": function(e, target) {
                    e.stop();
                    target.getParent('.tab').retrieve('window').detach();
                },
                "focus:relay(.tab)": Element.prototype.blur,
                "click:relay(.tab)": function(e, target) {//can be called when tab is closed
                    self.selectTab(target);
                },
                "dblclick:relay(.tab)": function(e, target) {
                    e.stop();
                    target.retrieve('window').select();
                }
            });

        //delay for style recalc
        self.__createDropdownHint.delay(500, self);
    },

    selectTab: function(tab) {
        var active = this.active;
        var win = tab.retrieve("window");
        var isChannel = util.isChannelType(win.type);
        if(!active || !isChannel || (isChannel && active.name !== BROUHAHA)) {
            win.select();
        }
        if(!util.isBaseWindow(win.name) && isChannel) {//update brouhaha window attrs
            var brouhaha = this.windows.brouhaha;
            brouhaha.currentChannel = win.name;
            brouhaha.window.getElement('.channel-name').text(win.name);
            tab.addClass('selected');
        }
        tab.removeClasses("hilight-activity", "hilight-us", "hilight-speech")
            .getSiblings(".selected:not(.detached,.brouhaha)").removeClass("selected");//remove last selection
    },

    selectWindow: function(win) {
        win = this.parent(win);
        this.selectTab(win.tab);
    },

    newTab: function(win, name) {
        var self = this;
        var isBrouhaha = (name === BROUHAHA);
        var $tab = Element.from(templates.ircTab({
                'name': isBrouhaha ? '&nbsp;' : name,
                closable: !isBaseWindow(name)
            })).inject(self.tabs);

        if(isBrouhaha) {
            $tab.addClass('brouhaha');
            _.delay(function() {
                _.some(self.windowArray, function(otherwin) {
                    if(util.isChannelType(otherwin.type) && !util.isBaseWindow(otherwin.name)) {
                        win.properties.text(otherwin.name); //update current channel in brouhaha
                        win.currentChannel = otherwin.name;
                        return true;
                    }
                });
            }, 1000);
        }

        $tab.store("window", win);

        return $tab;
    },

    __createDropdownMenu: function() {
        var self = this,
            dropdownMenu = Element.from(templates.mainmenu({
                    menu: self.UICommands,
                    menuclass: "main-menu"
                })).inject(self.parentElement);

        dropdownMenu.addEvents({
            "click:relay(.main-menu a)": function(e, target) {//dont stop event so the menu closes automatically
                var method = target.get("data-value");
                self[method]();
            }
        });
        var dropdownbtn = Element.from(templates.menubtn({icon: self.options.icons.menuicon}));


        var dropdownEffect = new Fx.Tween(dropdownbtn, {
            duration: "long",
            property: "opacity",
            link: "chain"
        });

        dropdownEffect.start(0.25)
                    .start(1)
                    .start(0.33)
                    .start(1);

        ui.decorateDropdown(dropdownbtn, dropdownMenu, {
            onShow: function() {
                if(self.hideHint)
                    self.hideHint();
                delete self.hideHint;
            },
            btnlistener: true,
            autohide: true
        });
        return dropdownbtn;
        // return dropdownMenu;
    },

    hotkeys: {
        keyboard: {
            focusInput: {
                keys: 'space',
                description: '',
                handler: function(e) {
                    e.stop();
                    if(this.scope.active.$inputbox) this.scope.active.$inputbox.focus();
                }
            },
            nextWindow: {
                keys: 'right',
                description: '',
                handler: function() {
                    this.scope.nextWindow();
                }
            },
            prevWindow: {
                keys: 'left',
                description: '',
                handler: function() {
                    this.scope.prevWindow();
                }
            }
        },

        input: {
            bold: {
                keys: 'ctrl+b',
                description: '',
                handler: _.partial(util.wrapSelected, '.window:not(.hidden) .input .input-field', util.getStyleByName('bold').bbcode)
            },
            italic: {
                keys: 'ctrl+i',
                description: '',
                handler: _.partial(util.wrapSelected, '.window:not(.hidden) .input .input-field', util.getStyleByName('italic').bbcode)
            },
            underline: {
                keys: 'ctrl+u',
                description: '',
                handler: _.partial(util.wrapSelected, '.window:not(.hidden) .input .input-field', util.getStyleByName('underline').bbcode)
            },
            colour: {
                keys: 'ctrl+c',
                description: '',
                handler: _.partial(util.wrapSelected, '.window:not(.hidden) .input .input-field', util.getStyleByName('colour').bbcode)
            },
            submitInput: {
                keys: 'enter',
                description: '',
                handler: function(e) {
                    var $tar = e.target;
                    if($tar.hasClass('input-field'))  {
                        $tar.getParent('.window').retrieve('window').sendInput(e, $tar);
                    }
                }
            }
        }
    },

    setHotKeys: function () {
        var self = this, 
            keyboard = this.keyboard = new Keyboard({active: true}).addShortcuts(self.hotkeys.keyboard),
            inputKeyboard = new Keyboard({active: false}).addShortcuts(self.hotkeys.input);
            keyboard.scope = self;


        // document.addEvent("keydown", self.__handleHotkey);

        document.addEvents({
            "blur:relay(input)": function() {
                keyboard.activate();
            },
            "focus:relay(input)": function() {
                inputKeyboard.activate();
            },
            "keydown": function(e) { // pressing 1 2 3 4 etc will change tab
                if(keyboard.isActive() && !isNaN(e.key)) {
                    if(e.key <= self.windowArray.length)
                        self.selectWindow(e.key - 1);
                }
            }
        });
    },

    //the effect on page load
    __createDropdownHint: function() {
        var dropdownhint = Element.from(templates.dropdownhint());
        dropdownhint.inject(this.parentElement)
                    .position({
                        relativeTo: this.outerTabs,
                        position: {'y': 'bottom'},
                        offset: {y:10}
                    });

        new Fx.Morph(dropdownhint, {
            duration: "normal",
            transition: Fx.Transitions.Sine.easeOut
        }).start({
            left: [900, 5]
        });

        var hider = function() {
                new Fx.Morph(dropdownhint, {
                    duration: "long"
                }).start({
                    left: [5, -900]
                });
            }.delay(4000);

        var hider2 = this.hideHint = _.partial(Element.destroy, dropdownhint);

        hider2.delay(4000);

        document.addEvents({
            "mousedown:once": hider2,
            "keydown:once": hider2
        });
    },

    //todo use other dropdown menu code
    __createChannelMenu: function(e) {
        if(e) e.stop();
        var self = this,
            client = self.getActiveIRCWindow().client,

            $btn = self.outerTabs.getElement('.add-chan'),
            $oldmen = self.parentElement.getElement('.chanmenu.dropdownmenu');
        $oldmen = $oldmen && $oldmen.getParent();

        if(!$oldmen || Date.now() - $btn.retrieve('time') > 60000) {//getting pop channels is expensive dontif unnecc
            client.getPopularChannels(function(chans) {
                chans = _.chain(chans).take(self.options.maxChansMenu || 10)
                            .map(function(chan) {
                                return {
                                    text: chan.channel,
                                    value: chan.channel,
                                    hint: chan.users
                                };
                            })
                            .value();
                var $menu = Element.from(templates.chanmenu({
                        channels: chans
                    }));

                var wrapper = new Element('div').inject(self.parentElement)
                                                .adopt($menu);
                ui.decorateDropdown($btn, wrapper);
                wrapper.addEvent("click:relay(a)", function(e, target) {
                    var chan = target.get('data-value');
                    client.exec("/JOIN " + chan);
                });
                $btn.store('time', Date.now());//so we dont have to refresh maybe
            });
        } else if (!$oldmen.isDisplayed()) { //show old menu
            $oldmen.retrieve("toggle")();
            $oldmen.position({
                    relativeTo: $btn,
                    position: {x: 'left', y: 'bottom'},
                    edge: {x: 'left', y: 'top'}
                });
        }
    },

    newClient: function(client) {
        this.parentElement.swapClass('signed-out','signed-in');
        var status = this.parent(client);
        //load brouhaha window (b4 connecting)
        this.windows.brouhaha = this.newWindow(client, ui.WINDOW.channel, BROUHAHA);
        return status;
    },

    setWindow: function(win) {
        this.parent(win);
        win.element.getSiblings('.active:not(.detached)').hide().removeClass('active');
        win.element.show().addClass('active');
    },

    //called in context of irc client
    nickChange: function(data) {
        if(data.thisclient) {
            _.each(this.windows, function(win) {
                win.$nicklabel.set("text", data.newnick);
            });
        }
    }
});


ui.Theme = new Class({
    initialize: function(themeDict) {
        var self = this,
            defaults = _.extend({}, ui.themes.Default2, themeDict);
        
        var thememap = _.map(ui.themes.ThemeControlCodeMap2, function(str) {
            return util.formatterSafe(str, ui.themes.ThemeControlCodeMap2);
        });
        self.__theme = _.map(defaults, function(str) {
            return util.formatterSafe(str, thememap);
        });

        self.highlightClasses.channels = {};
    },

    //I'm under the assumption i dont need to strip tags as handlebars should escape them for me
    formatMessage: function($ele, type, _data, highlight) {
        var self = this,
            isobj = _.isObject(_data),
            data = isobj ? _.clone(_data) : _data, //sometimes an internal reference
            val;

        if(isobj) {

            if (data["n"]){
                data["N"] = "qwebirc://whois/" + data.n + "/";
            }
            //now all we have to do is format the data as desired and pass to theme
            _.each(["N", "m", "c"], function(key) {//urlerize message and nick
                val = data[key];
                if(val) {
                    if(_.isArray(val)) { //modes are given as an array so we need to fold
                        val = val.join("");
                    }
                    data[key] = self.urlerize(val);
                }
            });
        }

        var themed = type ? self.formatText(type, data, highlight) : data;
        var result = self.colourise(themed);
        $ele.addClass('colourline')
            .adopt(Elements.from(result));//insertAdjacentHTML may render escaped chars incorrectly
        return result;
    },

    formatElement: function(line, $ele) {
        var result = this.colourise(this.urlerize(line));
        $ele.addClass('colourline')
            .adopt(Elements.from(result));
        return result;
    },

    formatText: function(type, data, highlight) {
        // if(highlight) data = _.extend({}, data, this.__ccmaph)
        return util.formatter(this.__theme[type], data);//most formatting done on init
    },

    colourise: function(line) {//http://www.mirc.com/colors.html http://www.aviran.org/2011/12/stripremove-irc-client-control-characters/
        //regexs are cruel to parse this thing

        var result = line;

        var styles = irc.styles;

        var parseArr = result.split(styles.colour.key).filter( $chk );

        //crude mapper for matching the start of a colour string to its end token may be possible to do with reduce?
        var colouredarr = [[]]; //will be an array of subarrays for each coloured string

        _.each(parseArr, function(str) {//help
            if( isNaN(str.slice(0, 2).toInt()) ) { //^C...
                colouredarr.push([]);
            } else { //^C1***
                _.last(colouredarr).push(str);
            }
        });

        _.each(colouredarr, function(colourarr) {
            _.each(colourarr, function(str) {
                var colourMatch = str.match(styles.colour.fore_re),
                    backgroundMatch = str.match(styles.colour.back_re),
                    colour = util.getColourByKey(_.item(colourMatch, 0)),
                    background = util.getColourByKey(_.last(backgroundMatch));//num aft num + comma

                var html = templates.ircstyle({
                    'colour': (colour ? colour.fore : ""),
                    'background': (background ? background.back : ""),
                    'text': str.slice(backgroundMatch ? backgroundMatch[0].length : colourMatch ? colourMatch[0].length : 0)
                });


                result = result.replace(styles.colour.key + str, html);
            });
        });

        //matching styles (italics bold under)
        _.each(styles.special, function(style) {//i wish colours were this easy
            result = result.replace(style.keyregex, function(match, text) {
                return templates.ircstyle({
                    'style': style.style,
                    'text': text
                });
            });
        });

        return result;
    },

    urlerize: function(text) {
        return util.urlifier.parse(text);
    },

    messageParsers: [
        {
            type: /NOTICE$/,
            classes: '',
            flash: true,
            beep: true,
            id: 'on_notice',
            highlight: ui.HIGHLIGHT.speech
        },
        {
            type: /PRIVMSG$/,
            flash: true,
            beep: true,
            id: 'on_pm',
            highlight: ui.HIGHLIGHT.speech
        },
        {
            type: /^OUR/,
            classes: 'our-msg'
        },
        {//match bots
            nick: /(^tf2)|((serv|bot)$)/i,
            classes: 'bot',
            types: [ui.WINDOW.channel]
        },
        {
            msg: /^\!/,
            classes: 'command',
            types: [ui.WINDOW.channel]
        },
        {
            mentioned: true,
            highlight: 'mentioned',
            notus: true,
            tabhl: ui.HIGHLIGHT.us
        },
        {
            nick: /^((?!(^tf2|bot$|serv$)).)*$/i,
            mentioned: true,
            classes: '',
            beep: true,
            flash: true,
            notus: true,
            id: 'on_mention'//for filtering
        },
        {
            nick: /^((?!(^tf2|bot$|serv$)).)*$/i,
            msg: /^((?!(^\!)).)*$/, //dont hl commands
            classes: '',
            highlight: true,
            notus: true,
            id: 'highlighter',
            tabhl: ui.HIGHLIGHT.activity,
            types: [ui.WINDOW.channel]
        }
    ],

    highlightClasses: ['highlight1', 'highlight2'/*, 'highlight3'*/],

    highlightAndNotice: function(data, type, win, $ele) {
        var self = this,
            tabHighlight = ui.HIGHLIGHT.none,
            highlights = self.highlightClasses,
            notus = !(/^OUR/.test(type)),
            parsers = _.clone(self.messageParsers).concat(self.customNotices);

        if(data && type && /(NOTICE|ACTION|MSG)$/.test(type)) {
            if(data.m)
                $ele.addClass('message');
            _.each( parsers , function(parser) {
                //sorry little crazy :)
                if( (!parser.notus || notus) &&//implications - organized them by complexity
                    (!parser.types || parser.types.contains(win.type)) &&
                    (!parser.type || parser.type.test(type)) && 
                    (!parser.msg || parser.msg.test(data.m)) &&
                    (!parser.nick || parser.nick.test(data.n)) &&
                    (!parser.mentioned || util.testForNick(win.client.nickname, data.m)) )
                {
                    if((!win.active && win.name !== BROUHAHA) || (!document.hasFocus()) ) {
                        if(parser.flash) {
                            win.parentObject.flash({
                                body: util.formatter("{nick}{channel}: {message}", data)
                            });
                        }
                        if(parser.beep) {
                            win.parentObject.beep();
                        }
                    }   
                    if(parser.highlight) {
                        if(!highlights.channels[win.name]) highlights.channels[win.name] = 0;
                        $ele.addClass(_.isBoolean(parser.highlight) ? _.nextItem(highlights, highlights.channels[win.name]++) : parser.highlight);
                    }
                    if($chk(parser.classes)) {
                        $ele.addClass(parser.classes);
                    }
                    tabHighlight = Math.max(tabHighlight, parser.tabhl);
                }
            });
        }
        return tabHighlight;
    }
});


ui.MENU_ITEMS = (function() {
    function isOpped(nick) {
        var channel = this.name; /* window name */
        var myNick = this.client.nickname;

        return this.client.nickOnChanHasAtLeastPrefix(myNick, channel, "@");
    }

    function isVoiced(nick) {
        var channel = this.name;
        var myNick = this.client.nickname;

        return this.client.nickOnChanHasPrefix(myNick, channel, "+");
    }

    function targetOpped(nick) {
        var channel = this.name;
        return this.client.nickOnChanHasPrefix(nick, channel, "@");
    }

    function targetVoiced(nick) {
        var channel = this.name;
        return this.client.nickOnChanHasPrefix(nick, channel, "+");
    }

    function command(cmd) {
        return function(nick) {
            this.client.exec("/" + cmd + " " + nick);
        };
    }

    return [{
        text: "whois",
        fn: command("whois"),
        predicate: true
    }, {
        text: "query",
        fn: command("query"),
        predicate: true
    }, {
        text: "slap",
        fn: function(nick) {
            this.client.exec("/ME " + util.formatter(lang.fishSlap, {
                'nick': nick
            }));
        },
        predicate: true
    }, {
        text: "kick",
        /* TODO: disappear when we're deopped */
        fn: function(nick) {
            this.client.exec("/KICK " + nick + " wibble");
        },
        predicate: isOpped
    }, {
        text: "op",
        fn: command("op"),
        predicate: _.and(isOpped, _.not(targetOpped))
    }, {
        text: "deop",
        fn: command("deop"),
        predicate: _.and(isOpped, targetOpped)
    }, {
        text: "voice",
        fn: command("voice"),
        predicate: _.and(isOpped, _.not(targetVoiced))
    }, {
        text: "devoice",
        fn: command("devoice"),
        predicate: _.and(isOpped, targetVoiced)
    }];
})();

(function() {
    function checkKeys(fn, keys, type) {//or just use pseudos.keys
        keys = keys || [];
        var ret = {};
        ret[type || "keydown"] = function(e) {
            if(keys.contains(e.key)) {
                fn.apply(this, arguments);
            }
        };
        return ret;
    }

//http://anutron.github.io/mootools-bootstrap/#modals - changed closeOnEsc to closeOnKeys using Element.psuedo.keys
ui.Dialog = new Class({
    Extends: Bootstrap.Popup,
    options: {//mainly defaults
        popup_template: "popup-dialog",
        template: null,
        persist: false,
        closeOnEsc: 'esc',
        closeOnClickOut: false,
        focusOnShow: "input[type='text']",
        inputType: "input[type='text'",
        title: lang.alertNotice
    },
    initialize: function(options) {
        var self = this,
            $par = options.parent || document.body,
            $caller = self.$caller;
        options = self.setOptions(options).options;

        getTemplate(options.popup_template, function(popuptmpl) {
            if(options.template) {//expected to be loaded
                options.content = options.template(options);
            }
            var $pop = Element.from(popuptmpl(options));
            $par.adopt($pop);
            self.$caller = $caller;
            self.parent($pop, options);
            self.bound.submit = function() {
                var vals = self.$input.val();
                self.fireEvent("submit", {
                    value: vals[0],
                    values: vals
                });
                self.hide();
            };
            self.$input = $pop.getElements(options.inputType);
            $pop.addEvent("click:relay(.submit)", self.bound.submit);
            var listen = self.$listeners = checkKeys(self.bound.submit, ['enter']);
            document.addEvents(listen);
            ui.Behaviour.apply($pop);
        });
    },
    hide: function(evt, clicked) {
        if(evt) evt.stopPropagation();
        document.removeEvents(this.$listeners);
        return this.parent(evt, clicked);
    }
});

ui.Alert = new Class({
    Extends: Bootstrap.Popup,
    options: {
        popup_template: "popup-alert",
        persist: false,
        closeOnKeys: 'esc,enter',
        closeOnClickOut: true,
        focusOnShow: '[data-dismiss="modal"]',
        title: lang.alertNotice,
        text: ''
    },
    initialize: function(options) {
        var self = this,
            $par = options.parent || document.body,
            $caller = self.$caller;//dirty hack for async
        options = self.setOptions(options).options;

        if(!options.text) {
            throw "needs text";
        }

        getTemplate(options.popup_template, function(popuptmpl) {
            var $pop = Element.from(popuptmpl(options));
            $par.adopt($pop);
            self.$caller = $caller;
            self.parent($pop, options);
            var listen = self.$listeners = checkKeys(self.bound.hide, ['enter']);
            document.addEvents(listen);
            ui.Behaviour.apply($pop);
        });
    },
    hide: function(evt, clicked) {
        if(evt) evt.stopPropagation();
        document.removeEvents(this.$listeners);
        return this.parent(evt, clicked);
    }
});

})();


//http://indiegamr.com/the-state-of-audio-in-html5-games/

// sound.SoundPlayer = new Class({
//     Implements: [Options, Events],
//     options: {
//         soundManagersrc: "//cdnjs.cloudflare.com/ajax/libs/SoundJS/0.4.1/soundjs.min.js",
//         sounds: "/sound/",
//         beepsrc: "beep.mp3"
//     },
//     sounds: {},

//     initialize: function(options) {
//         this.setOptions(options);
//         this.loadingSM = false;
//     },
//     load: function() {
//         window.addEvent("domready", this.loadSoundManager.bind(this));
//         return this;
//     },
//     loadSoundManager: function() {
//         var self = this,
// 			opts = self.options;
//         if (self.loadingSM !== false)
//             return;
//         self.loadingSM = true;
//         if ($defined(self.sm)) { //... ugh
//             self.fireEvent("ready");
//             return;
//         }

//         var soundinit = function() {
// 			//var sm = self.sm = window.soundManager;
// 			var sm = self.sm = window.createjs.Sound;
//             sm.url = opts.sounds;

//             //load all sounds here
//             self.register("beep", opts.sounds + opts.beepsrc);
//             sm.addEventListener("fileload", self.fireEvent.bind(self, "ready"));
//             self.loadingSM = null;
//         };

// 		//load sound manager
//         Asset.javascript(opts.soundManagersrc, {onLoad: soundinit});
//     },
// 	register: function(alias,src) {
// 		this.sm.registerSound(src, alias);
// 		this.sounds[alias] = _.partial(this.sm.play, alias);
// 	},
//     play: function(src) {
//         this.sm.play(src);
//         return this;
//     },

//     isReady: function() {
//         return this.sm && this.sm.isReady();
//     }
// });

sound.SoundPlayer = new Class({
    Implements: [Options, Events],
    options: {
        soundManagersrc: "//cdn.jsdelivr.net/soundmanager2/2.97a.20130512/soundmanager2-nodebug-jsmin.js",
        soundsurl: "/sound/",//directory of sounds for sm
        swfurl: "/swf",
        flashVersion: 8,
        sounds: [],
        preferFlash: false//use html5 if possible
    },
    loadingSM: false,

    initialize: function(options) {
        this.setOptions(options);
        var self = this,
            opts = this.options;

        window.addEvent("domready", function() {//load soundmanager ->
            if (self.loadingSM !== false)
                return;
            self.loadingSM = true;
            if ($defined(self.sm)) {
                self.fireEvent("ready");
                return;
            }

            var soundinit = function() {
                var sm = self.sm = window.soundManager;
                //https://www.scirra.com/blog/44/on-html5-audio-formats-aac-and-ogg
                // var extension = self.extension = sm.hasHTML5 && (Browser.firefox || Browser.opera || Browser.chrome) ? ".ogg" : ".mp3";
                sm.setup({
                    url: opts.swfurl,
                    preferFlash: opts.preferFlash,
                    onready: function() {
                        _.each(opts.sounds, function(sound) {//load all sounds here
                            // self.register(sound.id, opts.soundsurl + sound.url + extension);
                            sound = _.clone(sound);
                            sound.url = _.map(sound.url, function(path) {
                                return path.contains('/') ? path : opts.soundsurl + path;
                            });
                            self.sm.createSound(sound);
                        })
                        self.loadingSM = false;
                        self.fireEvent("ready");
                    }
                }).beginDelayedInit();
                self.play = sm.play;
            };

            //load sound manager
            if(window.soundManager) {
                soundinit();
            }
            else {
                Asset.javascript(opts.soundManagersrc, {onLoad: soundinit});
            }
        });
    },
    register: function(alias,src) {
        this.sm.createSound(alias, src);
    },

    isReady: function() {
        return this.sm && this.loadingSM === false;
    }
});


(function() {
//class to be inheritted
var PanelView = new Class({
    Extends: Epitome.View,
    options: {
        pane: '',

        events: {
            'click:relay([data-event="close"])': '_close'
        },

        onReady: function() {
            return this.render();
        }
    },

    getData: function() {
        return this.model && this.model.toJSON() || this.options && this.options.data || {};
    },

    render: function() {
        var self = this.empty();
        var pane = self.options.pane;
        var $loader = Element.from(templates.loadingPage()).inject(self.element);

        getTemplate(pane, function(template) {
            var eles = Elements.from(template(self.getData()));
            self.element.adopt(eles);//not inject because it can have text nodes
            $loader.dispose();
            self.postRender();
        });
        return self.parent();
    },

    postRender: function() {
        ui.Behaviour.apply(this.element);
        return this;
    },

    empty: function() {
        return this.parent(true);
    },

    _close: function() {
        this.trigger('close');
        return this.destroy();
    }
});
//this must refer to a model
function toggleNotifications(model, state) {
    if(notify.permissionLevel() !== notify.PERMISSION_GRANTED) {
        notify.requestPermission(function() {
            model.set('dn_state', notify.permissionLevel() === notify.PERMISSION_GRANTED);
        });
    }
    else {
        model.set('dn_state', state || !model.get('dn_state'));
    }
}
ui.PrivacyPolicyPane = new Class({
    Extends: PanelView,
    options: {
        pane: 'privacypolicy'
    }
});
ui.AboutPane = new Class({
    Extends: PanelView,
    options: {
        pane: 'about',
        data: {
            version: qwebirc.VERSION
        }
    }
});
ui.FAQPane = new Class({
    Extends: PanelView,
    options: {
        pane: 'faq'
    }
});
ui.FeedbackPane = new Class({
    Extends: PanelView,
    options: {
        pane: 'feedback'
    }
});

ui.OptionView = new Class({
    Extends: PanelView,
    Binds: ['save', 'reset'],
    options: {
        pane: 'options',
        events: {
            'change:relay(#options input)': 'inputChange',
            'change:relay(#options #standard-notices input)': 'snoticeChange',
            'change:relay(#options #custom-notices input)': 'noticeChange',
            'click:relay(#options #add-notice)': 'addNotifier',
            'click:relay(#options #custom-notices .remove-notice)': 'removeNotifier',
            'click:relay(#options #dn_state)': 'dnToggle',
            'click:relay(#options #notice-test)': 'noticeTest'
        },

        onSnoticeChange: function(e, target) {
            e.stop();
            var notices = _.clone(this.model.get('notices'));
            _.assign(notices, target.get('id'), target.val());
            this.model.set('notices', notices);
        },

        onAddNotifier: function(e) {
            e.stop();
            this.addNotifier();
        },
        
        onDnToggle: function(e, target) {
            toggleNotifications(this.model);
            target.val(this.model.get('dn_state') ? lang.DISABLE : lang.ENABLE);
        },

        onReady: function() {
            return this.render();
        }

        //get ui
    },

    /*********LISTENERS**************/

    inputChange: function(e, target) {//set model values when inputs are clicked
        var id = target.get('id');

        //handle sub props
        if(id && $defined(this.model.get(id))) {
            this.model.set(id, target.val());
        }
    },

    addNotifier: function(data) {
        if(!data) {
            data = this.model.get("default_notice")();
            var n = _.clone(this.model.get("custom_notices"));
            n.push(data);
            this.model.set("custom_notices", n);
        }

        var parent = this.element.getElement('#custom-notices');

        var _data = _.clone(data);
        _data.lang = lang;

        var temp = templates.customNotice(_data);

        parent.insertAdjacentHTML('beforeend', temp);
    },

    removeNotifier: function(e, target) {
        e.stop();
        var par = target.getParent('.custom-notice').dispose();
        this.model.set('custom_notices', (_.reject(this.model.get('custom_notices'), function(xs) {return xs.id === par.id})));
    },

    noticeChange: function(e, target) {
        e.stop();
        var notices = _.clone(this.model.get('custom_notices'));
        var par = target.getParent('.custom-notice');
        _.findWhere(notices, {id: par.id})[target.get('data-id')] = target.val();
        this.model.set('custom_notices', notices);
    },
    /*********LISTENERS**************/

    postRender: function() {
        var model = this.model,
            options = this.options;

        _.each(model.get("custom_notices"), function(notice) {
            notice.lang = lang;
            this.addNotifier(notice);
        }, this);

        this.element.getElements(".slider").each(function(slider) {
            var id = slider.get('id'),
                knob = slider.getElement('.knob');
                new Slider(slider, knob, {
                    steps: 36,
                    range: [0, 369],
                    wheel: true
                }).addEvent("change", function(val) {
                    model.set(id, val);
                })
                .set(model.get(id));
        });

        this.element.getElement('#options').addEvents({ //default will fire before bubble
            'submit': this.save,
            'reset': this.reset
        });

        if(_.isFunction(options.getUI)) {
            ui.WelcomePane.show(options.getUI(), {
                element: this.element
            });
        }

        return this.parent();
    },

    getData: function() {
        var data = this.model.toJSON();
        data.lang = lang;
        return data;
    },

    save: function(e) {
        if(e) e.stop();
        this.model.save();
        this.destroy();
    },

    reset: function(e) {
        if(e) e.stop();
        this.model.sync();
        this.destroy();
    },

    destroy: function() {
        this.trigger('close');
        return this.parent();
    }
});
ui.WelcomePane = new Class({
    Extends: PanelView,
    options: {
        pane: 'welcome-pane',
        events: {
            'click:relay(.enable-notifications)': 'enableNotifications',
            'click:relay(.options)': 'openOptions'
        },
        onOpenOptions: function() {
            this.ui.optionsWindow();
            if(this.clicked) this._close();
        },
        onEnableNotifications: function() {
            toggleNotifications(this.ui.uiOptions2, true);
            this.clicked = true;
            if(!this.options.firstvisit) this._close();
        }
    },
    initialize: function(ui, options) {
        this.ui = ui;
        this.parent(options);
    },
    getData: function() {
        return _.extend({
            options: this.ui.options,
            Browser: window.Browser
        }, this.options);
    }
})
.extend({
    show: function(_ui, options) {//determines if needs to be shown and shows
        if(options.firstvisit || notify.permissionLevel() !== notify.PERMISSION_GRANTED) {
            options.element = new Element("div.welcome").inject(options.element);
            return new ui.WelcomePane(_ui, options);
        }
        return false;
    }
});
ui.EmbedWizard = new Class({
    Extends: PanelView,
    options: {
        pane: 'wizard'
    }
});
})();


ui.Window = new Class({
    Extends: Epitome.View,
    options: {
        events: {

        },

        onReady: function() {
            this.render();
        },
        maxLines: 1000
    },
    template: templates.window,

    active: false,
    lastSelected: null,
    closed: false,
    highlight: ui.HIGHLIGHT.none,
    lastNickHash: {},

    initialize: function(parentObject, $par, client, type, name, identifier) {
        this.parentObject = parentObject;
        this.type = type;
        this.currentChannel = this.name = name;
        this.client = client;
        this.identifier = identifier;
        this.history = this.parentObject.commandhistory;
        this.parent({
            element: $par
        });
    },

    close: function() {
        this.closed = true;
        this.parentObject.__closed(this);
        this.destroy();
        return this;
    },

    select: function() {
        if(this.active) return;
        this.active = true;
        this.parentObject.selectWindow(this);
        if (this.highlight)
            this.highlightTab(ui.HIGHLIGHT.none);

        this.fireEvent("selected");
        this.lastSelected = new Date();
    },

    deselect: function() {
        this.active = false;
    },


    /* A data is an object of the form:
    -: current nick
    @: opstatus
    c: channel
    f: origin channel
    h: ip of propogater
    m: msg
    n: nick
    */
    addLine: function(type, data, colour, $ele) {
        var self = this,
            uiobj = self.parentObject;
        var highlight = ui.HIGHLIGHT.none,
            hl_line = false;

        highlight = uiobj.theme.highlightAndNotice(data, type, self, $ele);

        if (!self.active && (highlight !== ui.HIGHLIGHT.none))
            self.highlightTab(highlight);

        var tsE = templates.timestamp({time:util.IRCTimestamp(new Date())});
        $ele.insertAdjacentHTML('afterbegin', tsE);

        var formatted = uiobj.theme.formatMessage($ele, type, data, hl_line);
        self.lines.adopt($ele)
                .maxChildren(this.options.maxLines);

        if(uiobj.uiOptions2.get("lastpos_line") && type.endsWith("CHANMSG")) {
            this.lastLine = (this.lastLine || Element.from(templates.messageLine())).inject(this.lines);
        }
    },
    errorMessage: function(message) {
        this.addLine("", message, "warn");
    },
    infoMessage: function(message) {
        this.addLine("", message, "info");
    },
    highlightTab: function(state) {
        if (state == ui.HIGHLIGHT.none || state >= this.highlight) {
            this.highlight = state;
        }
    },

    //holy shit i got this to actually make sense
    // takes nicks (sorted array)
    updateNickList: function(nicks) {
        var lnh = this.lastNickHash,
            oldnames = Object.keys(lnh),

            added = _.difference(nicks, oldnames),//users who joined
            left = _.difference(oldnames, nicks); //users who left

        _.each(left, function(nick) {
            var element = lnh[nick];
            this.nickListRemove(nick, element);
            delete lnh[nick];
        }, this)

        _.each(added, function(nick) {
            var index = nicks.indexOf(nick); //indx in sorted array
            lnh[nick] = this.nickListAdd(nick, index) || 1;
        }, this);
    },

    
    nickListAdd: function(nick, position) {
        var realNick = util.stripPrefix(this.client.prefixes, nick);

        var nickele = Element.from(templates.nickbtn({'nick': nick}));
        var span = nickele.getElement('span');
        nickele.store("nick", realNick);


        if (this.parentObject.uiOptions2.get("nick_colours")) {
            var colour = util.toHSBColour(realNick, this.client);
            if ($defined(colour))
                span.setStyle("color", colour.rgbToHex());
        }

        this.nicklist.insertAt(nickele, position);

        return nickele;
    },

    nickListRemove: function(nick, stored) {
        try {
            this.nicklist.removeChild(stored);
        } catch (e) {
        }
    },

    sendInput: function(e/*, $tar*/) {
        if(e) e.stop();
        // if(!$tar || !$tar.hasClass('input-field')) {
        var $tar = this.$input;
        //}
        var unparsed = $tar.val(),
            parsed = util.inputParser.parse(unparsed);
        if (parsed !== "") {
            this.history.addLine(this.name, unparsed || parsed);
            this.client.exec(parsed, this.currentChannel);
            $tar.val("");
        }
        $tar.focus();
    }
});


//mae view and qui and controller
ui.QUI.Window = new Class({
    Extends: ui.Window,
    Binds: ['close'],
    options: {
        events: {
            'click:relay(.input .send)': 'sendInput',
            'dblclick:relay(.input .nickname)': 'setNickname',
            'dblclick:relay(.topic)': 'editTopic',

            'click:relay(.nicklist .user .nick)': 'nickClick',
            'click:relay(.nicklist .menu span)': 'menuClick',

            'click:relay(.detached-window .attach)': 'attach',
            'click:relay(.detached-window .close)': 'close',
            'click:relay(.detached-window)': 'setActive'
        }
    },

    events: {
        client: {}
    },

    detached: false,

    initialize: function(parentObject, $par, client, type, name, identifier) {
        var self = this;
        self.parent.apply(self, arguments);

        self.tab = parentObject.newTab(self, name);

        self.nicksColoured = self.parentObject.uiOptions2.get("nick_colours");
    },


    render: function() {
        var self = this;
        var type = self.type;
        var hasInput = util.windowNeedsInput(type);
        self.element.empty()
            .html(self.template({
                mobile: Browser.isMobile,
                isChannel: util.isChannelType(self.type),
                channel: self.name,
                name: self.name,
                id: self.name.clean().replace(" ", "-"),
                topic: false,
                needsInput: hasInput,
                nick: self.client ? self.client.nickname : ""
            }))
        var $win = self.window = self.element.getElement('.window').store("window", self);

        var $content = self.content = $win.getElement('.content');
        var lines = self.lines = $content.getElement('.lines');
        lines.store("window", self);

        if (type !== ui.WINDOW.custom && type !== ui.WINDOW.connect) {
            $win.addClass('ircwindow');
            self.fxscroll = new Fx.AutoScroll(lines);
        }

        if (type === ui.WINDOW.channel) {
            $win.addClass('channel');

            self.updateTopic("");

            var $nicklist = self.nicklist = $win.getElement('.rightpanel');
            $nicklist.addClass("nicklist");
        }

        if(hasInput) {
            self.$input = $win.getElement('.input .input-field');
        }
        return self;
    },

    close: function(e) {
        if(e) e.stop();
        if (this.closed) return;

        if (isChannelType(this.type) && (!util.isBaseWindow(this.name))) {
            var client = this.client,
                channels = util.removeChannel(client.channels, this.name);

            client.exec("/PART " + this.name);
            client.storeChannels(channels);
        }
        if(this.client instanceof irc.IRCClient) 
            this.client.removeEvents(this.events.client);

        if(this.fxscroll)
            this.fxscroll.stop();
        if(this.resizable)
            this.resizable.detach().stop();
        if(this.drag)
            this.drag.detach().stop();
        if(this.completer)
            this.completer.detach();

        return this.parent();
    },

    attach: function(e) {
        var win = this.window,
            wrapper = this.wrapper,
            po = this.parentObject;

        this.detached = false;
        this.element.removeClass('detached');

        // wrapper.removeChild(win);
        win.replaces(wrapper);
        wrapper.destroy();

        this.drag.detach().stop();
        this.resizable.detach().stop();
        this.wrapper = this.resizable = this.drag = null;

        this.tab.show()
                .removeClass("detached");
        this.select();

        this.fireEvent('attached');
    },

    detach: function(e) {
        var self = this,
            win = self.window,
            po = self.parentObject,

            wrapper = self.wrapper = Element.from(templates.detachedWindow({
                                                    'channel': this.name,
                                                    'base': util.isBaseWindow(this.name)
                                                })),
            header = wrapper.getElement('.header'),

            resizeWrapper = Element.from(templates.resizeHandle()),
            resizeHandle = resizeWrapper.getElement('.resize-handle');
        self.element.addClass('detached');


        //change window if we're active
        if(self.active)
            po.nextWindow(1, self);

        var size = util.percentToPixel({x:40, y:60}, win.getParent('qwebirc'));
        wrapper.setStyles({
                "width": size.x,
                "height": size.y
            })
            .wraps(win) //*** adds wrapper to dom
            .adopt(resizeWrapper);
        win.show()
            .addEvent("mousedown", function(e) {
                var tag = e.target.tagName.toLowerCase();
                if(!(tag == "div" || tag == "form"))//prevent dragging if not on container
                    e.stopPropagation();
            });
        self.setActive();

        self.resizable = wrapper.makeResizable({
                                limit: {//min/max
                                    x: [400, null],
                                    y: [200, null]
                                },
                                handle: resizeHandle,
                                stopPropagation: true
                            });
        self.drag = wrapper.makeDraggable({
                                handle: wrapper,
                                includeMargins: true
                            });


        self._selectUpdates();

        wrapper.position();

        self.detached = true;
        self.active = false;

        //keeps order
        self.tab.hide()
                .addClass("detached");

        self.fireEvent('detached');
    },

    setActive: function(e) {
        if(this.detached) {
            this.element.addClass('active')
                        .getSiblings('.detached').removeClass('active');
        } else {
            this.select();
        }
    },

    // selectTab: function(e) {
    //     var self = this;
    //     if(self.name !== BROUHAHA) {
    //         _.each(self.parentObject.windowArray, function(win) {
    //             if(!win.detached && (!e || e.type !== "click" || win.name !== BROUHAHA)) {//keep brouhaha selected if its from a single click
    //                 win.tab.removeClass("selected");
    //             }
    //             if(win.name === BROUHAHA) {
    //                 if(util.isChannelType(self.type)) {
    //                     win.window.getElement('.channel-name').text(self.name); //update current channel in brouhaha
    //                     win.currentChannel = self.name;
    //                 }
    //             }
    //         });
    //     }
    //     irc.activeChannel = self.name;
    //     self.tab.removeClasses("hilight-activity", "hilight-us", "hilight-speech")
    //             .addClass("selected");
    // },

    select: function() {//change window elements
        if(this.active) return;
        this.parent();

        this.tab.addClass("selected");
        this._selectUpdates();
        this.fireEvent("selected");
    },

    //styles and ui things to update
    _selectUpdates: function() {
        var self = this,
            parentObject = self.parentObject;

        if(self.nicklist && !self.split) {
            _.delay(function() { //wait a sec for the styles to be calculated
                self.split = new Drag.SplitPane(self.window.getElement('.content .handle'), {
                    // store: new Storage('__panelwidth'),
                    limits: {
                        min: 0,
                        max: 0
                    }
                });
            }, 50);
        }

        if(self.fxscroll) {//scroll to bottom
            self.fxscroll.autoScroll();
        }
        if(!self.completer && util.windowNeedsInput(self.type)) {
            self.completer = new Completer(self.window.getElement('.input .tt-ahead'), self.history.get(self.name));
        }

        if(util.isChannelType(self.type)) {
            var colour = parentObject.uiOptions2.get("nick_colours");
            if (self.nicksColoured !== colour) {
                self.nicksColoured = colour;
                var nodes = self.nicklist.childNodes;
                if (colour) {
                    _.each(nodes, function(node) {
                        var colour = util.toHSBColour(node.retrieve("nick"), self.client);
                        if ($defined(colour))
                            node.firstChild.setStyle("color", colour.rgbToHex());
                    });
                } else {
                    _.each(nodes, function(node) {
                        node.firstChild.setStyle("color", null);
                    });
                }
            }

            self.updatePrefix();
        }

    },

    deselect: function() {
        this.tab.removeClass("selected");
        this.parent();
    },

    editTopic: function() {
        var self = this;
        if (!self.client.nickOnChanHasPrefix(self.client.nickname, self.name, "@")) {
            new ui.Alert({
                text: lang.needOp.message
            });
        } else {
            new ui.Dialog({
                title: "Set Topic",
                text: util.formatter(lang.changeTopicConfirm.message, {channel: self.name}),
                value: self.topic,
                onSubmit: function(data) {
                    var topic = data.value;
                    if (_.isString(topic)) {
                        self.client.exec("/TOPIC " + topic);
                    }
                }
            });
        }
    },

    setNickname: function() {
        var self = this;
        new ui.Dialog({
            title: "Set nickname",
            text: "Enter a new nickname",
            value: self.nickname,
            onSubmit: function(data) {
                var nick = qwebirc.global.nicknameValidator.validate(data.value);
                if(nick) {
                    self.client.exec("/nick " + nick);
                }
            }
        });
    },

    updatePrefix: function (data) {
        var prefix;
        if(data) {
            if(!data.thisclient || data.channel !== this.name)
                return;
            else
                prefix = data.prefix;
        } else {
            prefix = this.client.getNickStatus(this.name, this.client.nickname);
        }
        this.window.getElement('.input .nickname .status')
                        .removeClasses('op', 'voice')
                        .addClass((prefix === OPSTATUS) ? "op" : (prefix === VOICESTATUS) ? "voice" : "");
    },

    nickClick: function(evt, $tar) { //delegation to nick items
        var $par = $tar.getParent('.user').toggleClass("selected");
        var $menu = $par.getElement('.menu'),
            self = this;

        this.removePrevMenu($par);

        if($menu) {
            $menu.toggle();
        } else {
            $menu = Element.from(templates.menuContainer()).inject($par)
            _.each(ui.MENU_ITEMS, function(item) {
                if(_.isFunction(item.predicate) ? item.predicate.call(self, $par.retrieve('nick')) : !!item.predicate) {
                    Element.from(templates.nickmenubtn(item))
                            .store("action", item.fn)//could also just do _.find to get the action but still need to store the name somewhere
                            .inject($menu);
                }
            });
        }
    },

    menuClick: function(e, target) {
        e.stop();
        var fn = target.retrieve("action");
        var selected = target.getParent('.user');
        fn.call(this, selected.retrieve("nick"));
        this.removePrevMenu();
    },

    removePrevMenu: function($tar) {
        var $sel = $tar ? $tar.getSiblings('.selected') : this.nicklist.getElements('.selected');
        $sel.removeClass("selected")
            .getElement('.menu').each(Element.dispose);
    },

    updateTopic: function(topic) {
        var $topic = this.window.getElement('.topic').empty();
        this.topic = topic;
        if (topic) {
            var $top = Element.from(templates.topicText({empty:false})).inject($topic);
            this.parentObject.theme.formatElement(topic, $top.getElement('span'));
        } else {
            $topic.html(templates.topicText({topic:lang.noTopic.message, empty:true}));
        }
    },

    addLine: function(type, data, colourClass) {
        var $msg = Element.from(templates.ircMessage({ type: type.hyphenate() }));

        if(colourClass)
            $msg.addClass(colourClass);
        if(data.colourClass)
            $msg.addClass(data.colourClass);

        this.parent(type.toUpperCase(), data, colourClass, $msg);
    },
    highlightTab: function(state) {
        if (state != this.highlight) {
            this.tab.removeClasses("hilight-activity", "hilight-us", "hilight-speech");

            switch (state) {
            case ui.HIGHLIGHT.us:
                this.tab.addClass("hilight-us");
                break;
            case ui.HIGHLIGHT.speech:
                this.tab.addClass("hilight-speech");
                break;
            case ui.HIGHLIGHT.activity:
                this.tab.addClass("hilight-activity");
                break;
            }
            this.parent(state);
        }
    }
});

//close the iife and call with this
}).call(this);
