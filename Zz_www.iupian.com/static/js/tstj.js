//百度推送
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
//CNZZ统计
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan id='cnzz_stat_icon_1274003904'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1274003904' type='text/javascript'%3E%3C/script%3E"));

//新轮播
/* 把最后一个放到第一个前面，然后通过外层ul{margin-left:-980px !important; }来显示第一个 */
		jQuery(".slider .bd li").first().before( jQuery(".slider .bd li").last() );
		/* 控制左右按钮显示 */
		jQuery(".slider").hover(function(){ jQuery(this).find(".arrow").stop(true,true).fadeIn(300) },function(){ jQuery(this).find(".arrow").fadeOut(300) });
		/* 调用SuperSlide */
		jQuery(".slider").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",  autoPlay:true, vis:3, autoPage:true, trigger:"click"});
		
//hot.tab
jQuery(".hot").slide({delayTime:0 });
