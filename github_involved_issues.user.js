// ==UserScript==
// @name        GitHub: involved issues
// @namespace   https://akinori.org
// @description Make the Pulls and Issues links show your involved issues
// @license     2-clause BSDL
// @author      Akinori MUSHA
// @include     https://github.com/*
// @version     0.9.9
// @homepage    https://github.com/knu/userjs-github_involved_issues
// @grant       none

// ==/UserScript==
"use strict";
(function () {
    const meta = document.querySelector("meta[name=user-login]")

    if (!meta)
        return

    const user = meta.content
    const encode = function (decoded) {
        return encodeURIComponent(decoded).replace(/%20/g, "+")
    }

    const links = document.querySelectorAll(".header-nav-link")
    for (let i = 0; i < links.length; i++) {
        const href = links[i].getAttribute("href")
        switch (href) {
        case "/pulls":
            links[i].setAttribute("href", href + "?q=" + encode("is:open is:pr involves:" + user))
            break
        case "/issues":
            links[i].setAttribute("href", href + "?q=" + encode("is:open is:issue involves:" + user))
            break
        }
    }
})();
