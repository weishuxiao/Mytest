/*
 * 自定义jquery，实现对原有bootstrap UI控件的补充；
 */

// 点击选择后改变nav颜色
$(document).ready(function() {

	//初始化完成后直接展示，装样子
	$('#apptype_nav').addClass("active");
	month = '2014-01';
	$("#date_selector").val(month);
	itemname = '/apptype/';
	htmlobj = $.ajax({
		url : "/apptype/100",
		async : false
	});
	$("#showarea").html(htmlobj.responseText);

	
	//当ajax与后台进行数据传输时弹出等待图片
	$(document).ajaxStart(function() {
		$("#waitpic").show();
	}).ajaxStop(function() {
		$("#waitpic").hide();
	});

	$(".nav li").click(function() {
		$(".nav li").removeClass("active");
		$(this).addClass("active");
	});

	/*
	 * 采用的ajax实现对不同内容的展示，直接异步获取想要展示的html页面
	 */

	// 点击选择月份,获取相关的月份ajax无刷新
	var itemname = '/fluxspeed/';// 所选项目标识,初始值默认为fluxspeed

	$("#monbutton").click(function() {
		month = $("#date_selector").val();// 获取select的值
		htmlobj = $.ajax({
			url : itemname + month,
			async : false
		});
		$("#showarea").html(htmlobj.responseText);
		$("#date_selector").val(month);// 设置select的值
	});

	
	$("#homepage_nav").click(function() {
		location.reload();
	});

	
	// 异步获取网络传输速度相关html页面，插入主面板标签
	$("#fluxspeed_nav").click(function() {
		month = '2014-01';
		$("#date_selector").val(month);
		itemname = '/fluxspeed/';
		htmlobj = $.ajax({
			url : "/fluxspeed/2014-01",
			async : false
		});
		$("#showarea").html(htmlobj.responseText);
	});

	// 异步获取应用类型相关html页面，插入主面板标签
	$("#apptype_nav").click(function() {
		month = '2014-01';
		$("#date_selector").val(month);
		itemname = '/apptype/';
		htmlobj = $.ajax({
			url : "/apptype/100",
			async : false
		});
		$("#showarea").html(htmlobj.responseText);
	});

	// 异步获取终端类型相关html页面，插入主面板标签
	$("#mobiletype_nav").click(function() {
		month = '2014-01';
		$("#date_selector").val(month);
		itemname = '/mobiletype/';
		htmlobj = $.ajax({
			url : "/mobiletype/100",
			async : false
		});
		$("#showarea").html(htmlobj.responseText);
	});

	// 异步获取终端类型相关html页面，插入主面板标签
	$("#webcount_nav").click(function() {
		month = '2014-01';
		$("#date_selector").val(month);
		itemname = '/webcount/';
		htmlobj = $.ajax({
			url : "/webcount/100",
			async : false
		});
		$("#showarea").html(htmlobj.responseText);
	});

	// 异步获小区网速相关html页面，插入主面板标签
	$("#regioninfo_nav").click(function() {
		month = '2014-01';
		$("#date_selector").val(month);
		itemname = '/regioninfo/';
		htmlobj = $.ajax({
			url : "/regioninfo/100",
			async : false
		});
		$("#showarea").html(htmlobj.responseText);
	});

	// 异步获取用户操作界面，插入主面板标签
	$("#user_nav").click(function() {
		$("#date_selector").val(month);
		itemname = '/user/';
		htmlobj = $.ajax({
			url : "/user/100",
			async : false
		});
		$("#showarea").html(htmlobj.responseText);
	});
	
	$("#loginbtn").click(function() {
		$("#loginbox").css({
			"display" : "none"
		});
	});
});

/*
 * 以随机指数形式对原先数组当中的数进行处理，便于展示
 */
function randomarray(rawarr, min, max) {
	/**
	 * 对数组arr进行取指数，指数范围为min与max之间的随机数
	 */

	var newarr = [];
	for ( var i = 0; i < rawarr.length; i++) {
		newarr[i] = Math.floor(Math.pow(rawarr[i],
				(Math.random() * (max - min) + min)));
	}
	// alert(newarr);
	return newarr;
}
