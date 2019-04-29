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
    $(".logoLeftServe").mouseenter(function () {
        $(".logoLeft-hideServe").css("display","block");
        $(".logoLeft-hide").css("display","none");
        $(".hideServe-content1").css("display","block");
        $(".hideServe-content2").css("display","none");
        $(".hideServe-content3").css("display","none");
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
    });
    $(".custom").click(function () {
        $(".hideServe-content2").css("display","block");
        $(".hideServe-content1").css("display","none");
        $(".hideServe-content3").css("display","none");
    });
    $(".sever").click(function () {
        $(".hideServe-content3").css("display","block");
        $(".hideServe-content2").css("display","none");
        $(".hideServe-content1").css("display","none");
    })
});

/*轮播图*/
$(function () {
    var i = 0;
    var clone = $(".imgChange").first().clone();//克隆第一张图片
    $(".imgTransparent").append(clone);                //复制到列表最后
    var size = $(".imgChange").size();         //返回匹配元素的数量
    console.log(size);

    /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
    for (var j = 0; j < size-1; j++) {
        $(".num").append("<li></li>");
    }

    $(".num li").first().addClass("on");

    /*自动轮播*/
    var t = setInterval(function () {
        i++;
        move();
    },4000);

    /*鼠标悬停事件*/
    $(".imgBanner").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    }, function () {
        t = setInterval(function () {
            i++;
            move();
        }, 4000); //鼠标移出时开始定时器
    });

    /*鼠标点击圆点事件*/
    $(".num li").click(function () {
        var index = $(this).index();//获取当前索引值
        i = index;
        $(".imgTransparent").stop().animate({ left: -index * 1200}, 500);
        /*siblings()方法返回被选元素的所有同级元素，同级元素是共享相同父元素的元素*/
        $(this).addClass("on").siblings().removeClass("on");
    });

    /*向左按钮*/
    $(".btn_l").click(function () {
        i--;
        move();
    });
    /*向右按钮*/
    $(".btn_r").click(function () {
        i++;
        move();
    });

    /*移动事件*/
    function move() {
        if (i === size) {
            $(".imgTransparent").css({ left: 0 });
            i = 1;
        }
        if (i === -1) {
            $(".imgTransparent").css({ left: -(size - 1) * 1200 });
            i = size - 2;
        }
        $(".imgTransparent").stop().animate({ left: -i * 1200 }, 700);
        if (i === size - 1) {
            $(".num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
});


/*展会活动轮播图*/
$(function () {
    var i = 0;
    var clone = $(".activityLiLeft").first().clone();
    $(".activityBannerChange").append(clone);
    var size = $(".activityLiLeft").size();
    console.log(size);

    for (var j = 0; j < size-1; j++) {
        $(".activityNum").append("<li></li>");
    }
    $(".activityNum li").first().addClass("on");

    var t = setInterval(function () {
        i++;
        move();
    },4000);

    $(".activityBanner").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(function () {
            i++;
            move();
        }, 4000);
    });

    $(".activityNum li").click(function () {
        var index = $(this).index();
        i = index;
        $(".activityBannerChange").stop().animate({ left: -index * 1100}, 500);
        $(this).addClass("on").siblings().removeClass("on");
    });


    $(".activityBtn_l").click(function () {
        i--;
        move();
    });
    $(".activityBtn_r").click(function () {
        i++;
        move();
    });

    function move() {
        if (i === size) {
            $(".activityBannerChange").css({ left: 0 });
            i = 1;
        }
        if (i === -1) {
            $(".activityBannerChange").css({ left: -(size - 1) * 1100 });
            i = size - 2;
        }
        $(".activityBannerChange").stop().animate({ left: -i * 1100 }, 700);
        if (i === size - 1) {
            $(".activityNum li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".activityNum li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
});




