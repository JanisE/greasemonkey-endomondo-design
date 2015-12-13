// ==UserScript==
// @name Greasemonkey EndomondoDesign
// @namespace https://github.com/JanisE
// @description Project URL: https://github.com/JanisE/greasemonkey-endomondo-design
// @include *www.endomondo.com/*
// @version 1
// @grant none
// ==/UserScript==

var css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = ".feedItem-footer .eoComments-post .eoAvatar-image {visibility: hidden} .eoFeedWorkout-right {display: none}";
document.head.appendChild(css);
