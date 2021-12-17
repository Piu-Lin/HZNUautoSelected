# HZNU Edu Auto Selected

## 代码简介

此代码为《杭州师范大学**新**教务管理系统》专属配置

网页URL为 ：[教学管理信息服务平台 (hznu.edu.cn)](http://jwxt.hznu.edu.cn/jwglxt/xtgl/login_slogin.html)

## 使用方法

- 进入 教学评价=>学生评价 页面
- 阅读好通知后来到选择页面
- 摁下键盘上的 <kbd>f12</kbd> 或 <kbd>fn</kbd>+<kbd>f12</kbd> 进入开发者界面，具体按钮与不同计算机按键配置有关
- 将选项卡切换到 **控制台** 或 **Console**
- 贴入如下代码：

```js
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
var lens=$('#tempGrid>tbody').children("tr").length;
for (i = 1; i < lens; i++) {
    $(`#${i}`).click()
    var x=1
    while($(':radio[data-dyf=100]').length == 0 ){
        await sleep(10)
        x+=1
        if (x>500){
            alert("请检查网络连接");
            throw SyntaxError()
        }
    }
    $(':radio[data-dyf=100]').attr('checked',true);
    $(':radio[data-dyf=80]').eq(0).attr('checked',true);
    $(':button[id=btn_xspj_bc]').click()
}
$(':button[id=btn_ok]').click()
```

等待其评价保存成功弹出框自动消失。

## 注意事项

为保证用户有**修改评价**的机会。自动选择完成后需逐个自行单击提交。




## 开发者的话

由于每次单击选择按钮非常浪费时间，所以花了些时间编写了自动化代码。如果使用的人多的话，会考虑做成浏览器插件，目前的话能用就行：）

其中将第一个选项自动评为较好了，用户可自主手动修改。

如果有更多疑问或建议，欢迎通过 **issues** 或 直接 **PR** 上来。

