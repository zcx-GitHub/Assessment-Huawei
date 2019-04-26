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
    var clone = $(".imgBanner .imgTransparent .imgChange").first().clone();//克隆第一张图片
    $(".imgBanner .imgTransparent").append(clone);                //复制到列表最后
    var size = $(".imgBanner .imgTransparent .imgChange").size();         //返回匹配元素的数量
    console.log(size);

    /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
    for (var j = 0; j < size-1; j++) {
        $(".imgBanner .num").append("<li></li>");
    }

    $(".imgBanner .num li").first().addClass("on");

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
    $(".imgBanner .num li").click(function () {
        var index = $(this).index();//获取当前索引值
        i = index;
        $(".imgBanner .imgTransparent").stop().animate({ left: -index * 1200}, 500);
        /*siblings()方法返回被选元素的所有同级元素，同级元素是共享相同父元素的元素*/
        $(this).addClass("on").siblings().removeClass("on");
    });

    /*向左按钮*/
    $(".imgBanner .btn_l").click(function () {
        i--;
        move();
    });
    /*向右按钮*/
    $(".imgBanner .btn_r").click(function () {
        i++;
        move();
    });

    /*移动事件*/
    function move() {
        if (i === size) {
            $(".imgBanner .imgTransparent").css({ left: 0 });
            i = 1;
        }
        if (i === -1) {
            $(".imgBanner .imgTransparent").css({ left: -(size - 1) * 1200 });
            i = size - 2;
        }
        $(".imgBanner .imgTransparent").stop().animate({ left: -i * 1200 }, 700);
        if (i === size - 1) {
            $(".imgBanner .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".imgBanner .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
});


/*未来影像左边鼠标碰触移动*/
$(function () {
    $(".movieLeft").mouseenter(function () {
        $(".knowMoreArrow").animate({marginLeft:'40px'});
        $(".moviePhone").animate({marginTop:'30px'});
        $(".moviePictureShadow").animate({marginTop:''});
    });
    $(".movieLeft").mouseleave(function () {
        $(".knowMoreArrow").animate({marginLeft:'10px'});
        $(".moviePhone").animate({marginTop:'50px'});
        $(".moviePictureShadow").animate({marginTop:'-35px'});
    });
});

/*未来影像右边立即购买箭头移动*/
$(function () {
    $(".movieRight").mouseenter(function () {
        $(".knowMoreArrow2").animate({marginLeft:'40px'});
    });
    $(".movieRight").mouseleave(function () {
        $(".knowMoreArrow2").animate({marginLeft:'10px'});
    });
});

/*前所未见了解更多箭头移动*/
$(function () {
    $(".neverSeeKnowMore").mouseenter(function () {
        $(".neverSeeArrow").animate({marginLeft:'30px'});
    });
    $(".neverSeeKnowMore").mouseleave(function () {
        $(".neverSeeArrow").animate({marginLeft:'15px'});
    })
});

/**/
$(function () {
    $(".activityLogoRight").mouseenter(function () {
        $(".activityLogoArrow").animate({marginLeft:'40px'});
    });
    $(".activityLogoRight").mouseleave(function () {
        $(".activityLogoArrow").animate({marginLeft:'20px'});

    })

});


/*展会活动轮播图*/
$(function () {
    var i = 0;
    var clone = $(".activityBanner .activityBannerChange .activityLiLeft").first().clone();//克隆第一张图片
    $(".activityBanner .activityBannerChange").append(clone);                //复制到列表最后
    var size = $(".activityBanner .activityBannerChange .activityLiLeft").size();         //返回匹配元素的数量
    console.log(size);

    /*循环图片容器的数量，并且向点点按钮的大容器添加几个子节点作为点点按钮*/
    for (var j = 0; j < size-1; j++) {
        $(".activityBanner .activityNum").append("<li></li>");
    }
    $(".activityBanner .activityNum li").first().addClass("on");

    /*自动轮播*/
    var t = setInterval(function () {
        i++;
        move();
    },4000);

    /*鼠标悬停事件*/
    $(".activityBanner").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    }, function () {
        t = setInterval(function () {
            i++;
            move();
        }, 4000); //鼠标移出时开始定时器
    });

    /*鼠标点击圆点事件*/
    $(".activityBanner .activityNum li").click(function () {
        var index = $(this).index();//获取当前索引值
        i = index;
        $(".activityBanner .activityBannerChange").stop().animate({ left: -index * 1100}, 500);
        /*siblings()方法返回被选元素的所有同级元素，同级元素是共享相同父元素的元素*/
        $(this).addClass("on").siblings().removeClass("on");
    });

    /*向左按钮*/
    $(".activityBanner .activityBtn_l").click(function () {
        i--;
        move();
    });
    /*向右按钮*/
    $(".activityBanner .activityBtn_r").click(function () {
        i++;
        move();
    });

    /*移动事件*/
    function move() {
        if (i === size) {
            $(".activityBanner .activityBannerChange").css({ left: 0 });
            i = 1;
        }
        if (i === -1) {
            $(".activityBanner .activityBannerChange").css({ left: -(size - 1) * 1100 });
            i = size - 2;
        }
        $(".activityBanner .activityBannerChange").stop().animate({ left: -i * 1100 }, 700);
        if (i === size - 1) {
            $(".activityBanner .activityNum li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".activityBanner .activityNum li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
});

/*成功故事导航栏 查看全部 箭头移动*/
$(function () {
    $(".successStoryLogoRight").mouseenter(function () {
        $(".successStoryLogoRight>i").animate({marginLeft:'30px'});
    });
    $(".successStoryLogoRight").mouseleave(function () {
        $(".successStoryLogoRight>i").animate({marginLeft:'10px'});
    })
});


$(function () {
    $(".successMore1").mouseenter(function () {
        $(".knowMoreArrow4").animate({marginLeft:'30px'});
    });
    $(".successMore1").mouseleave(function () {
        $(".knowMoreArrow4").animate({marginLeft:'10px'});
    });
});
$(function () {
    $(".successMore2").mouseenter(function () {
        $(".knowMoreArrow5").animate({marginLeft:'30px'});
    });
    $(".successMore2").mouseleave(function () {
        $(".knowMoreArrow5").animate({marginLeft:'10px'});
    });
});
$(function () {
    $(".successMore3").mouseenter(function () {
        $(".knowMoreArrow6").animate({marginLeft:'30px'});
    });
    $(".successMore3").mouseleave(function () {
        $(".knowMoreArrow6").animate({marginLeft:'10px'});
    });
});

/*成功故事图片移动*/


/*近期新闻*/
$(function () {
    $(".newsLogoRight").mouseenter(function () {
        $(".newsLogoRight>i").animate({marginLeft:'35px'});
    });
    $(".newsLogoRight").mouseleave(function () {
        $(".newsLogoRight>i").animate({marginLeft:'10px'});
    });
});

$(function () {
    $(".newsMore").mouseenter(function () {
        $(".newsMore>i").animate({marginLeft:'35px'});
    });
    $(".newsMore").mouseleave(function () {
        $(".newsMore>i").animate({marginLeft:'10px'});
    });
});

/*结尾箭头移动*/


