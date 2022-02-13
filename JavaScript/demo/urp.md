<!--
 * @?: *********************************************************************
 * @Author: Weidows
 * @Date: 2021-12-16 19:26:55
 * @LastEditors: Weidows
 * @LastEditTime: 2021-12-16 19:48:45
 * @FilePath: \Web\JavaScript\demo\urp.md
 * @Description:
 * @!: *********************************************************************
-->

# 教学评估快速选择

gist 链接: https://gist.fsou.cc/?c9bf8bc20bd4c014#DXsnotAxsvmaMPibX3wZr9uRmpYDCeMUJMT5x4caBd8

(默认是非常满意+主观评价为无),下面是步骤:

1. ![](https://s2.loli.net/2021/12/16/Nu3vHGpIREUYJSf.png)
2. ![](https://s2.loli.net/2021/12/16/nw9TDbs8vZtV2hr.png)
3. 把下面代码复制进 console 执行

```js
document.getElementsByTagName("textarea")[0].value = "无";
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].parentNode.childNodes[1] == inputs[i]) {
    inputs[i].checked = true;
  }
}
```
