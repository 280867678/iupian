islogin=0;
function checkcookie(){
	if(document.cookie.indexOf('auth=')>=0){
		islogin=1;
		return true;
	}
	return false;
}
checkcookie();
$(function($){
    $.fn.changeList = function(options){	
        var defaults = {
                    tag : 'li', // tab name
                    subName : '.utilTabSub', // sub class name
                    eventType : 'click', // event type
                    num : 4,
                    showType : 'show' // show effect type
                },
                opts = $.extend({}, defaults, options),
                that = $(this),
                subUl = that.find(opts.subName),
                subItems = subUl.find('li'),
                size = subItems.length,
                liW = subItems.outerWidth(true),
                ulW = liW * size,
                page = size + 1,
                n = opts.num,
                randNum = 0,
                m = 0;

        if(size > n){
            that.find(opts.tag)[opts.eventType](function() {
                randNum = mathRand(n, size);
                subItems.hide();
                $.each(randNum, function (i, el) {
                    subItems.eq(el).fadeIn(800);
                });
            });
        }
    };
}(jQuery));
$(document).ready(function(){
			$(window).on('scroll',function(){
		var st = $(document).scrollTop();
		if( st>0 ){
			if( $('#main-container').length != 0  ){
				var w = $(window).width(),mw = $('#main-container').width();
				if( (w-mw)/2 > 70 )
					$('#index-top').css({'left':(w-mw)/2+mw+20});
				else{
					$('#index-top').css({'left':'auto'});
				}
			}
			$('#index-top').fadeIn(function(){
				$(this).removeClass('wmin');
			});
		}else{
			$('#index-top').fadeOut(function(){
				$(this).addClass('wmin');
			});
		}	
	});
	$('#index-top .top').on('click',function(){
		$('html,body').animate({'scrollTop':0},500);
	});
	$('#index-top .qrcode_box').hover(function(){
		$('#index-top .qrcode').removeClass('wmin');
	},function(){
		$('#index-top .qrcode').addClass('wmin');
	});					   
    var prevpage=$("#pre").attr("href"); 
    var nextpage=$("#next").attr("href"); 
    $("body").keydown(function(event){ 
      if(event.keyCode==37 && prevpage!=undefined) location=prevpage; 
      if(event.keyCode==39 && nextpage!=undefined) location=nextpage; 
    }); 
	$("#code").qrcode({
	render: "table", //table??????
	width: 150, //??????
	height:150, //??????
	text: Siteurl //????????????
    });	
	$("#ncode").qrcode({
	render: "table", //table??????
	width: 150, //??????
	height:150, //??????
	text: Mvodurl //????????????
    });	
	 timer2 = null;
   $(".qr-code-ico").hover(function(){
        clearTimeout(timer2);
        $(this).addClass("qr-code-ico-hover");
        $(".qr-code").show();
    },function(){
        $(this).removeClass("qr-code-ico-hover");
        timer2 = setTimeout($.proxy(function() {
            $(".qr-code").hide();
        }, this),100);
    });
	$(".qr-code").hover(function(){
		clearTimeout(timer2);
		$(this).show();
	},function(){
		$(this).hide();
	});	
	//??????????????????????????????
	$(".play-title ul li a").each(function(j,div){
			$(this).click(function(){
		//$("html,body").animate({scrollTop:$("#"+listid).offset().top}, 500); //????????????
		        if ($(this).parent().hasClass("current") ){
					return;
                }
				$(this).parent().nextAll().removeClass("current");
				$(this).parent().prevAll().removeClass("current");
				$(this).parent().addClass("current")
				$('.details-con2-body').hide().css("opacity",0);
				$('.details-con2-body:eq('+j+')').show().animate({"opacity":"1"});
	});		
	});
//????????????????????????
  $('.order a').click(function(){
		if($(this).hasClass('asc')){
			$(this).removeClass('asc').addClass('desc').text('??????');
		}else{
			$(this).removeClass('desc').addClass('asc').text('??????');
		}
		var a=$('.play-box:eq('+$(this).attr('data')+') .player_list');
		var b=$('.play-box:eq('+$(this).attr('data')+') .player_list a');
		a.html(b.get().reverse());
	});

$(".play-tool span.s1").click(function() {					 
		$html = $(this).html();
		try {
			if ($html == '??????') {
				$(this).html('??????')
			} else {
				$(this).html('??????')
			}
		} catch (e) {}
		$(".playopen").toggle(300);
		$(".play-tool").toggleClass("son");
		$(".player-box").toggleClass("top")
	});
	$(".play-tool span.s2").click(function() {
		$html = $(this).html();
		try {
			if ($html == '????????????') {
				$(this).html('????????????')
			} else {
				$(this).html('????????????')
			}
		} catch (e) {}
		$(".player-right").toggleClass("adon");
		$(".player-ff").toggleClass("playall");
		$(".player-ff").toggleClass("w900");
		$(this).toggleClass("son")
	});	
	$(".player-num .info").click(function() {	
		$html = $(this).html();
		$(".player-vinfo").toggle(300);
		$(".player-num a.info").toggleClass("on");
	});
	$(".els-ico a.s-btn").click(function() {	
		$html = $(this).html();
		$(".els-sharebox").toggle(300);
		$(".els-ico a.s-btn").toggleClass("on");
		if (window.clipboardData) {
	    $("#tips").hide();		
		}
	});
    //????????????
	$("#nav-looked").hover(function(){		
		$(this).find(".header_looked").show(300);
	},function(){
		$(this).find(".header_looked").hide(300);
	});	
	$(".close-his").click(function(){
		$(this).parents(".header_looked").hide();
	});
	//??????
   $("#loginbarx").hover(function(){
        clearTimeout(timer2);
        $(".drop-box").show();
    },function(){
        timer2 = setTimeout($.proxy(function() {
            $(".drop-box").hide();
        }, this),100);
    });
// ??????????????????
		if($("#downul").length > 0)
	{
		if($("#downul")[0].scrollHeight>305)
		{
			$("#downzk").show();
			$("#downul").height(230);
			$("#downzk").click(function(e){
			if($(this).hasClass('ss')){
			$(this).removeClass('ss').addClass('zk').text('????????????');
		}else{
			$(this).removeClass('zk').addClass('ss').text('????????????');
		}						
				if($("#downul").height()>305)
				{
					var h = $("#downul")[0].scrollHeight;
					$("#downul").height(230);
					
				}
				else
				{
					var h = $("#downul")[0].scrollHeight;
					$("#downul").height(h);
				}
				e.preventDefault(); 
			});
		}
	}
		$("#loginbarx").hover(function(){		
		$(this).find(".drop-box").show();
	},function(){
		$(this).find(".drop-box").hide();
	});	
	$("#login2").click(function(){								
		$.colorbox({
        inline: true,
        href: "#login-dialog",
        width: '570px',
		height: '415px'

    });});	
});
// ????????????????????????
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"current":"";
		con.style.display=i==cursel?"block":"none";
	}
}