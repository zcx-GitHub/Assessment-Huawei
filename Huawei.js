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
    $(".huaweiWebsite-hide").onmouseover(function () {
        $("huaweiWebsite-hide>i").animate({left:'20px'});
    })
});