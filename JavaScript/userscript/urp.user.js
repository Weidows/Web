// ==UserScript==
// @name         Hebau-URP-教学评估快速选择
// @description  快速选择 (非常满意+主观评价为无)
// @namespace    https://github.com/Weidows/Web/raw/master/JavaScript/userscript/urp.user.js
// @homepage     https://greasyfork.org/zh-CN/scripts/457791
// @supportURL   https://github.com/Weidows/Web
// @version      0.2.0
// @author       Weidows
// @match        *://urp.hebau.edu.cn/*
// @match        *://urp.hebau.edu.cn:9001/*
// @license      MIT
// @grant        none
// ==/UserScript==

/*
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2023-01-07 15:39:40
 * @LastEditors: Weidows
 * @LastEditTime: 2023-01-07 17:48:20
 * @FilePath: \Web\JavaScript\userscript\urp.user.js
 * @Description:
 * @!: *********************************************************************
 */

(function () {
  "use strict";
  $(document).ready(function () {
    document.getElementsByTagName("textarea")[0].value = "无";
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].parentNode.childNodes[1] == inputs[i]) {
        inputs[i].checked = true;
      }
    }
  });
})();
