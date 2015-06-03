// JavaScript Document
$(function(){
		var web_img = $('.project .web img');
		var web_title = $('.project .box_title li');
		var web_main = $('.project .main_box li');
		var t
		
		//鼠标移动图片放大效果
		web_img.hover(function(){
			var web_hover = $(this);
			web_hover.css('position','relative');
				t = setTimeout(function(){
					web_hover.animate({width:300,right:25},1000);
					},200)
			},function(){
				clearTimeout(t);
				var web_hover = $(this);
				web_hover.animate({width:250,right:0},1000)
				})
				
		//选项卡切换效果
		web_main.eq(0).css('display','block').siblings().css('display','none');
		web_title.click(function(){
			var web_title_index = $(this).index();	
			web_main.eq(web_title_index).fadeIn(500).siblings().fadeOut(500);
			})
		
		
		//调用jquery.nav.js插件，导航连接页面各部分平滑移动	
		$('#nav').onePageNav();
		//调用jquery.sticky.js插件，页面下滑导航固定
		$('.nav').sticky({topSpacing : 0});
		var body_width = $(document.body).outerWidth(true);
		var topbar_height = body_width/(1920/615);
		$('.top_bar').css({marginBottom:topbar_height});
		//当尺寸发生改变
	    $(window).resize(function(){
		   var body_width = $(document.body).outerWidth(true);
		   var topbar_height = body_width/(1920/615);
		   $('.top_bar').css({marginBottom:topbar_height});
		   if(body_width <= 1005){		   		  
		   $('body').css({backgroundSize:'1430px auto'});
		   }
	    }); 
	})