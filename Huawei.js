$(function () {
    $("#websiteDown").click(function () {
        $(".huaweiWebsite-hide").slideToggle("slow");
        $(".selectWhere-hide").css("display","none");
        $(".huaweiWebsite-hide").css("display","block");
    });
    $(".selectWhere").click(function () {
        $(".selectWhere-hide").slideToggle("500");
        $(".huaweiWebsite-hide").css("display","none");
        $(".selectWhere-hide").css("display","block");
        $(".selectWhere>i").css("transform","rotate(180deg)");
    });
});
$(function () {
    $(".logoLeftIphone").hover(function () {
        $(".logoLeft-hide").css("display","block");
        $(".logoLeft-hideServe").css("display","none");
        $(".logoLeft-hideHide").mouseleave(function () {
            $(".logoLeft-hide").css("display","none");
        })
    });
});
$(function () {
    $(".logoLeftServe").hover(function () {
        $(".logoLeft-hideServe").css("display","block");
        $(".logoLeft-hide").css("display","none");
        $(".logoLeft-serve").mouseleave(function () {
            $(".logoLeft-hideServe").css("display","none");
        })
    });
});
$(function () {
    $(".logoSearch").click(function () {
        $(".huaweiLogo").css("display","none");
        $(".logoHideSearch").css("display","block");
    });
    $(".searchChange").click(function () {
        $(".logoHideSearch").css("display","none");
        $(".huaweiLogo").css("display","block");
    });
});
$(function () {
    $(".user").click(function () {
        $(".hideServe-content1").css("display","block");
        $(".hideServe-content2").css("display","none");
        $(".hideServe-content3").css("display","none");
    })
    $(".custom").click(function () {
        $(".hideServe-content2").css("display","block");
        $(".hideServe-content1").css("display","none");
        $(".hideServe-content3").css("display","none");
    })
    $(".sever").click(function () {
        $(".hideServe-content3").css("display","block");
        $(".hideServe-content2").css("display","none");
        $(".hideServe-content1").css("display","none");
    })
})
