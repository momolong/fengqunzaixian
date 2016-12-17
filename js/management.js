$(function(){
    $(".tab-bar>ul>li").click(function(){
        $(this).addClass("on")//当前li高亮
            .siblings().removeClass("on"); //其他同辈li取消高亮
        //获取当前元素的索引
        var index = $(this).index();
        //利用索引将li和div联系起来
        $(".tab-box").children("div").eq(index).show()  //对应的内容显示
            .siblings().hide(); //其他同辈div隐藏
    })
})