//!-test//

$(function() {
    $("#l1-1").hover(
        function() {
            $("#line1-pic-change").attr("src", "pic/line1-1.jpg");
            $(".line1-pic p").html("你确定不需要一杯现煮咖啡，来温习下昨晚欧冠的激动？")
        },
        function() {}
    );
    $("#l1-2").hover(
        function() {
            $("#line1-pic-change").attr("src", "pic/line1-2.jpg");
            $(".line1-pic p").html("离凌晨还有三个小时，Margarita还是金汤力？")
        },
        function() {}
    );
    $("#l1-3").hover(
        function() {
            $("#line1-pic-change").attr("src", "pic/line1-3.jpg");
            $(".line1-pic p").html("从古时起，面包已是欧洲的主食，面条、麦片亦常见于民间；常用调味料有浓酸果汁...")
        },
        function() {}
    );
    $("#l1-4").hover(
        function() {
            $("#line1-pic-change").attr("src", "pic/line1-4.jpg");
            $(".line1-pic p").html("三毛钱的冰棍和八尺杆头的蝉，当然还有奶奶做的酸梅汤")
        },
        function() {}
    );
    $("#l1-5").hover(
        function() {
            $("#line1-pic-change").attr("src", "pic/line1-5.jpg");
            $(".line1-pic p").html("上次正正经经吃完一盅两件已经是什么时候了？")
        },
        function() {}
    );
    $("#l1-6").hover(
        function() {
            $("#line1-pic-change").attr("src", "pic/line1-6.jpg");
            $(".line1-pic p").html("把酒架底下的啤酒瓶都扔到后巷去，今天我们来喝点成熟的玩意儿")
        },
        function() {}
    );
});
/*
                $("#l1-2").hover(
                function () {
                  $(".line1-pic").css( {"background":"url(pic/line1-2.jpg"} )
                },
                function (){}
                );

                $("#l1-3").hover(
                function () {
                  $(".line1-pic").css( {"background":"url(pic/line1-3.jpg"} )
                },
                function (){}
                );

                $("#l1-4").hover(
                function () {
                  $(".line1-pic").css( {"background":"url(pic/line1-4.jpg"} )
                },
                function (){}
                );

                $("#l1-5").hover(
                function () {
                  $(".line1-pic").css( {"background":"url(pic/line1-5.jpg"} )
                },
                function (){}
                );

                $("#l1-6").hover(
                function () {
                  $(".line1-pic").css( {"background":"url(pic/line1-6.jpg"} )
                },
                function (){}
                );
            });
/*
            $(function () {
                $("#l1-1").hover(
                function () {
                    $("#l1-pic").addClass("line1-pic2");
                },
                function () {
                    $("#l1-pic").removeClass("line1-pic2");
                })
            
*/
$(function() {

    $('#slip1').sliphover();
    $('#slip2').sliphover();
    $('#slip3').sliphover();

});
/*
$(function() {

    $("#test1").html(123)
});
*/