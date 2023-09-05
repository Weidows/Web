// ==UserScript==
// @name         自用集合-Weidows
// @description  1.度盘链接添加前缀(常见于B站 s/xxxx?pwd=xxxx 这样的) | 2.将steam偏好隐藏选项显示出来
// @namespace    https://github.com/Weidows/Web/raw/master/JavaScript/userscript/custom-scripts.user.js
// @homepage     https://greasyfork.org/zh-CN/scripts/469533
// @supportURL   https://github.com/Weidows/Web
// @version      0.2.0
// @author       Weidows
// @match        *://*.bilibili.com/*
// @match        *://store.steampowered.com/account/preferences/*
// @license      MIT
// @grant        none
// ==/UserScript==

/*
 * @!: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @Date: 2023-06-26 23:49:06
 * @LastEditTime: 2023-09-06 04:16:55
 * @FilePath: \Web\JavaScript\userscript\custom-scripts.user.js
 * @Description:
 * @?: *********************************************************************
 */

https: (function () {
  "use strict";
  if (window.location.host.includes("bilibili.com")) {
    handleBilibili();
  } else if (window.location.host.includes("steampowered.com")) {
    handleSteam();
  }
})();

function handleBilibili() {
  // Define a function to get the selected text
  function getSelectedText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
    }
    return text;
  }

  // Define a function to handle the selection change event
  function handleSelectionChange() {
    // Get the selected text
    var text = getSelectedText();
    if (text) {
      // console.log(text);
      let urls = text.match(/s\/.*?(\?pwd=\w+)/g);
      urls.forEach(function (url) {
        window.open("https://pan.baidu.com/" + url);
      });
    }
  }

  // Add an event listener to the document for the selection change event
  document.addEventListener("selectionchange", handleSelectionChange);
}

function handleSteam() {
  let hides = document.getElementsByClassName(
    "account_setting_not_customer_facing"
  );
  for (; hides.length != 0; ) {
    hides[0].classList.remove("account_setting_not_customer_facing");
  }
}
