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


