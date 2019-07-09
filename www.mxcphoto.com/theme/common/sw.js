 var swiper1 = new Swiper('.swiper1', {
        pagination: '.page1',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });
    $(".swiper1").mouseenter(function(){
    		swiper1.stopAutoplay();
    	}).mouseleave(function(){
    		swiper1.startAutoplay();
    	})
    	
 var swiper2 = new Swiper('.swiper2', {
        pagination: '.page2',
        nextButton: '.next2',
        prevButton: '.prev2',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 0,
        autoplayDisableOnInteraction: false
    });
    $(".swiper2").mouseenter(function(){
    		swiper2.stopAutoplay();
    	}).mouseleave(function(){
    		swiper2.startAutoplay();
    	})    	
//  var swiper3 = new Swiper('.swiper3', {
//      pagination: '.page3',
////      nextButton: '.swiper-button-next',
////      prevButton: '.swiper-button-prev',
//      paginationClickable: true,
//      spaceBetween: 30,
//      centeredSlides: true,
//      autoplay: 5000,
//      autoplayDisableOnInteraction: false
//  });

var swiper3 = new Swiper('.swiper3', {
        pagination: '.page3',
        paginationClickable: true,
        direction: 'vertical'
    });
 var swiper4 = new Swiper('.swiper4', {
        pagination: '.page4',
//      nextButton: '.swiper-button-next',
//      prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay:0,
        autoplayDisableOnInteraction: false
    });
    $(".swiper4").mouseenter(function(){
    		swiper4.stopAutoplay();
    	}).mouseleave(function(){
    		swiper4.startAutoplay();
    	})    
 var swiper5 = new Swiper('.swiper5', {
        pagination: '.page5',
//      nextButton: '.swiper-button-next',
//      prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay:5000,
        autoplayDisableOnInteraction: false
    });
    $(".swiper5").mouseenter(function(){
    		swiper5.stopAutoplay();
    	}).mouseleave(function(){
    		swiper5.startAutoplay();
    	})  
    	
 $(document).ready(function(){
			var timejg=5000;//轮播间隔时间
			var size = $('.boxx_img ul li').size();
//			for(var i=1;i<=size;i++){
//				$('.boxx_tab').append('<a href="javascript:(void)">'+i+'</a>')
//			}

			$('.boxx_img ul li').eq(0).show();
			$('.boxx_tab a').eq(0).addClass('active')
			$('.boxx_tab a').mouseover(function(){
				$(this).addClass('active').siblings().removeClass('active');
				var index = $(this).index();
				i=index;
				$('.boxx_img ul li').eq(index).stop().fadeIn(0).siblings().stop().fadeOut(0);
			});

			var i = 0;
			var time = setInterval(move,timejg);

			function move(){
				i++;
				if(i==size){
					i=0;
				}

				$('.boxx_tab a').eq(i).addClass('active').siblings().removeClass('active');
				$('.boxx_img ul li').eq(i).fadeIn(0).siblings().fadeOut(0);
			}

			$('.boxx').hover(function(){
				clearInterval(time);
			},function(){
				time = setInterval(move,timejg);
			});
		});
 
 
 
 
 
$(function(){
	var ss=$(".page02 .swiper-slide").size();
	$('.page02 .next2').css({top:268+ss*31})
})
		
        String.prototype.Trim = function () {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        }

        function ReSult2() {
            var txtUname = document.getElementById("uname2").value;
            var txtPhone = document.getElementById("phone2").value;
            var regex = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
            if (txtUname.Trim() == "") {
                alert("请填写您的姓名!");
                return false;
            }
	    else if (txtUname.indexOf("<") != -1 || txtUname.indexOf(">") != -1) {
                alert("请正确填写您的姓名!")
                return false;
            }
            else if (!regex.test(txtPhone)) {
                alert("请填写正确的手机号码!")
                return false;
            }
            else {
                $.ajax({
                    type: "POST",
                    url: "http://www.sanmaophoto.com/ashx/Orders.ashx?ntype=1",
                    data: $("#form2").serialize(),
                    async: false,
                    success: function (data) {
                        if (data.indexOf("|True|") > -1) {
                            alert(data.replace("|True|", ""));
                            document.location.href = document.URL;
                        } else {
                            alert(data);
                        }
                    }
                });
                return false;
            }
    }
        


        function checkcoderandom(ckcod) {
            var date = new Date();
            random = date.getMilliseconds();
            //if (ckcod == "0") {
            //    ckcod = document.getElementById("imgValidateCode");
            //}
            ckcod = document.getElementById("imgValidateCode");
            ckcod.setAttribute("src", "/ValidateCode.aspx?ValidateCodeType=1&" + random);
        }

        function testcode() {
            $.ajaxSettings.async = false;
            var f = false;
            if ($("#txtValid").val() == "" || $("#txtValid").val() == null) {
            }
            else {
                $.ajax({
                    type: "POST",
                    url: "http://www.sanmaophoto.com/htmlcode/testcode.ashx",
                    data: { "ucode": $("#txtValid").val() },
                    async: false,
                    success: function (data) {
                        if (data == 1) {
                            f = true;
                        }
                        else {
                        }
                    }
                });
            }
            return f;
        }

        String.prototype.Trim = function () {
            return this.replace(/(^\s*)|(\s*$)/g, "");
        }

        function ReSult() {
            var txtUname = document.getElementById("uname").value;
            var txtPhone = document.getElementById("phone").value;
            var txtQQ = document.getElementById("qq").value;
            var txtValid = document.getElementById("txtValid").value;
            var RepRmbtype1 = document.getElementById("rmbtype1").value;
            var RepRmbtype2 = document.getElementById("rmbtype2").value;
            var regex = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
            if (txtUname.Trim() == "") {
                alert("请填写您的姓名!");
                return false;
            }
	    else if (txtUname.indexOf("<") != -1 || txtUname.indexOf(">") != -1) {
                alert("填写格式不对,请重新填写!")
                return false;
            }
            else if (!regex.test(txtPhone)) {
                alert("请填写正确的电话号码!")
                return false;
            }
            else if (txtQQ.Trim() == "") {
                alert("请填写QQ号码!")
                return false;
            }
            else if (RepRmbtype1 > RepRmbtype2) {
                alert("填写价格格式不对")
                return false;
            }
            else if (txtValid.Trim() == "") {
                alert("请填写验证码!");
                return false;
            }
            
            else if (testcode() == false) {
                alert("验证码错误!");
                return false;
            }
            else {
                $.ajax({
                    type: "POST",
                    url: "http://www.sanmaophoto.com/ashx/Orders.ashx",
                    data: $("#form1").serialize(),
                    async: false,
                    success: function (data) {
                        if (data.indexOf("|True|") > -1) {
                            alert(data.replace("|True|", ""));
                            document.location.href = document.URL;
                        } else {
                            alert(data);
                        }
                    }
                });
                return false;
            }
        }


$(document).ready(function(){	
var scrolpx=0;
var px=$(".nei_title").offset().top;
var bodyH=$(window).height()/3*2;
$(".about03 dl dt").css({opacity:0});
$(".about03 dl dd").css({opacity:0});

$(window).resize(function(){});

$(window).scroll(function() { 
scrolpx=$(window).scrollTop()

//console.log(scrolpx)
$(".about03 dl").each(function(){
    px=$(this).offset().top;
	if(scrolpx>=(px-bodyH)){
		$(this).find("dt").stop().animate({left:0,opacity:1},500,"easeOutBack");
		$(this).find("dd").stop().animate({right:0,opacity:1},500,"easeOutBack");
     }else{
		 $(this).find("dt").stop().animate({left:-200,opacity:0},500,"easeOutBack");
		$(this).find("dd").stop().animate({right:-800,opacity:0},500,"easeOutBack");
		 }
  // if(scrolpx>=(px-230)){
	//	$(this).find("dt").stop().animate({left:-200,opacity:0},800,"easeOutQuad");
		//$(this).find("dd").stop().animate({right:-800,opacity:0},800,"easeOutQuad");
     
	  //}
  });
  
  

});
	
});
 