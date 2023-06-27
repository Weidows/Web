// ==UserScript==
// @name         自用集合(1.处理选中文本)
// @description  度盘链接添加前缀(常见于B站 s/xxxx?pwd=xxxx 这样的)
// @namespace    https://github.com/Weidows/Web/raw/master/JavaScript/userscript/custom-scripts.user.js
// @homepage     https://greasyfork.org/zh-CN/scripts/469533
// @supportURL   https://github.com/Weidows/Web
// @version      0.1.1
// @author       Weidows
// @match        *://*.bilibili.com/*
// @license      MIT
// @grant        none
// ==/UserScript==

/*
 * @!: *********************************************************************
 * @Author: Weidows
 * @LastEditors: Weidows
 * @Date: 2023-06-26 23:49:06
 * @LastEditTime: 2023-06-27 13:16:40
 * @FilePath: \Web\JavaScript\userscript\custom-scripts.user.js
 * @Description:
 * @?: *********************************************************************
 */

https: (function () {
  "use strict";

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
})();
