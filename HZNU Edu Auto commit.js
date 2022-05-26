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
        if (x>100){
            break
        }
    }
    $(':radio[data-dyf=100]').attr('checked',true);
    $(':radio[data-dyf=80]').eq(0).attr('checked',true);
    $(':button[id=btn_xspj_tj]').data("enter","1");
    $(':button[id=btn_xspj_tj]').click()
    $(':button[id=btn_ok]').click()
}