
    /*单行跑马灯*/

$(function () {
    $(".text-shan").ready(function(){
        setInterval(function () { abc(); }, 2000)

    });
    function abc(){
        $(".text-shan>li").animate({left:"-200px"},2247).animate({left:"200px"},0).animate({left:"0px"},2247)
    }
})

/*iframe高*/
    $(function () {
        var heig=$(document.body).outerHeight(true);
        $("#iframe").css("height",heig+"px")
    })
/*.left点击*/
    $(function () {
        $(".left1 ul>li").click(function () {
            $(".left1 ul>li").removeClass("active");
            $(this).addClass("active");
        })
    })