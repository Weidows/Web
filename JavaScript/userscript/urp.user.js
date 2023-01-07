// ==UserScript==
// @name         Hebau-URP-教学评估快速选择
// @namespace    https://greasyfork.org/zh-CN/scripts/457791
// @version      0.1.0
// @description  快速选择 (非常满意+主观评价为无)
// @author       Weidows
// @match        *://urp.hebau.edu.cn/*
// @match        *://urp.hebau.edu.cn:9001/*
// @license      MIT
// @grant        none
// ==/UserScript==

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
