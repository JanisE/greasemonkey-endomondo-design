// ==UserScript==
// @name Greasemonkey EndomondoDesign
// @namespace https://github.com/JanisE
// @include *www.endomondo.com/*
// @version 1
// @grant none
// ==/UserScript==

var css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = ".feedItem-footer .eoAvatar-image {visibility: hidden} .eoFeedWorkout-right {display: none}";
document.head.appendChild(css);
