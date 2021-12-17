function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
var lens=$('#tempGrid>tbody').children("tr").length;
for (i = 1; i < lens; i++) {
    $(`#${i}`).click()
    await sleep(300)
    if (typeof($(':button[id=btn_xspj_tj]')[0])=='undefined'){
        console.log("jump")
        continue
    }
    if(typeof($(':button[id=btn_xspj_tj]')[0])=='object'){
        // $(':button[id=btn_xspj_tj]')[0].click()
        console.log("asd")
    }
}
