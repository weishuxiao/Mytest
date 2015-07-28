/*
 * 自定义jquery，实现对原有bootstrap UI控件的补充；
 */

$(document).ready(

		function() {
			// 设置chart变量作用域为整个函数内部
			var fluxspeed_Chart1 = null;
			var map, marker;
			// 初始化地图对象，加载地图
			map = new AMap.Map("mapContainer", {
				resizeEnable : true,
				// 二维地图显示视口
				view : new AMap.View2D({
					center : new AMap.LngLat(116.70501709, 39.52946654),// 地图中心点
					zoom : 9.5
				// 地图显示的缩放级别
				})
			});

			var lon = [ 116.69746399, 116.76544189, 116.77544189, 116.75944189,
					116.77544189, 116.84544189, 116.82544189, 116.81544189,
					116.73544189, 116.92544189, 116.91544189, 116.88544189 ];
			var lat = [ 39.54005789, 39.463234, 39.49005789, 39.473234,
					39.51005789, 39.513234, 39.52005789, 39.473234,
					39.55005789, 39.623234, 39.58005789, 39.343234 ];
			var LAC = [ 38214, 38274, 38274, 38274, 38295, 38295, 38295, 38295,
					38296, 38296, 38296, 38296, 38296 ];
			var CID = [ 58411, 58412, 58413, 58414, 58415, 58416, 58417, 58418,
					58419, 58410, 58426, 58427 ];
			var len = lon.length;
			var markerarr = new Array();
			for ( var i = 0; i < len; i++) {
				addMarker(i,lon[i], lat[i], LAC[i],CID[i]);
			}
			$("#basepicker_LAC").val(LAC[0]);
			$("#basepicker_CID").val(CID[0]);
			
			function addMarker( ID,lon,lat,LAC,CID) {
				markerarr[ID] = new AMap.Marker({
					icon : "http://webapi.amap.com/images/marker_sprite.png",
					position : new AMap.LngLat(lon, lat),
				});
				markerarr[ID].setExtData([ID,LAC,CID]), markerarr[ID].setMap(map); // 在地图上添加点
				markerarr[ID].setTitle('ID:'+ID+',LAC:'+LAC+',CID:'+CID);

				// 点击地图标记点，相应动作
				AMap.event.addListener(markerarr[ID], "click", function() {
					basediv(fluxspeed_Chart1);
					extradata=markerarr[ID].getExtData();
					$("#basepicker_LAC").val(extradata[1]);
					$("#basepicker_CID").val(extradata[2]);
					//alert('ID:'+extradata[0]+' LAC:'+extradata[1]+' CID:'+extradata[2]);
					
					// map.setCenter(markerarr[ID].getPosition());
				});
			}

			// 网络传输速度

			require.config({
				paths : {
					echarts : '/static/build/dist'
				}
			});

			// 使用
			require([ 'echarts', 'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
			'echarts/chart/line', 'echarts/chart/pie', 'echarts/chart/gauge' ],
					function(ec) {
						// 基于准备好的dom，初始化echarts图表,获取相关dom标签
						fluxspeed_Chart1 = ec.init(document
								.getElementById('baseplot'));

						/*
						 * 配置计划展示图形报表相关属性
						 */

						// 跳转到该页面是自动执行小区网速曲线
						basediv(fluxspeed_Chart1);

						/*
						 * 配置计划展示图形报表相关属性
						 */

						// 2.网速码表（曲线图）
						// 基于准备好的dom，初始化echarts图表,获取相关dom标签
						var basegauge_Chart2 = ec.init(document
								.getElementById('basegauge'));

						var basegauge_option = {
							tooltip : {
								formatter : "{a} <br/>{b} : {c}%"
							},
							title : {
								text : '实时平均速度统计',
								x : "center",
								y : "bottom"
							},
							series : [ {
								name : '个性化仪表盘',
								type : 'gauge',
								center : [ '50%', '50%' ], // 默认全局居中
								radius : [ 0, '75%' ],
								startAngle : 140,
								endAngle : -140,
								min : 0, // 最小值
								max : 300, // 最大值
								precision : 0, // 小数精度，默认为0，无小数点
								splitNumber : 10, // 分割段数，默认为5
								axisLine : { // 坐标轴线
									show : true, // 默认显示，属性show控制显示与否
									lineStyle : { // 属性lineStyle控制线条样式
										color : [ [ 0.1, '#FF0A0A' ],
												[ 0.2, '#FD5D0D' ],
												[ 0.3, '#FD9117' ],
												[ 0.4, '#FDBF17' ],
												[ 0.5, '#FDF408' ],
												[ 0.6, '#D4FD08' ],
												[ 0.7, '#A7FD08' ],
												[ 0.8, '#9FFD08' ],
												[ 0.9, '#76FD08' ],
												[ 1, '#00FF00' ], ],
										width : 30
									}
								},
								axisTick : { // 坐标轴小标记
									show : true, // 属性show控制显示与否，默认不显示
									splitNumber : 5, // 每份split细分多少段
									length : 20, // 属性length控制线长
									lineStyle : { // 属性lineStyle控制线条样式
										color : '#eee',
										width : 1,
										type : 'solid'
									}
								},
								axisLabel : { // 坐标轴文本标签，详见axis.axisLabel
									show : true,
									formatter : function(v) {
										switch (v + '') {
										case '60':
											return '超低';
										case '120':
											return '偏低';
										case '180':
											return '适中';
										case '240':
											return '良好';
										default:
											return '';
										}
									},
									textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
										fontWeight:'bold',
										fontSize:15,
										color : '#333'
									}
								},
								splitLine : { // 分隔线
									show : true, // 默认显示，属性show控制显示与否
									length : 30, // 属性length控制线长
									lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
										color : '#eee',
										width : 2,
										type : 'solid'
									}
								},
								pointer : {
									length : '80%',
									width : 8,
									color : 'auto'
								},
								title : {
									show : true,
									offsetCenter : [ '-65%', -10 ], // x, y，单位px
									textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
										color : '#333',
										fontSize : 15
									}
								},
								detail : {
									show : true,
									backgroundColor : 'rgba(0,0,0,0)',
									borderWidth : 0,
									borderColor : '#ccc',
									width : 100,
									height : 40,
									offsetCenter : [ '-60%', 10 ], // x, y，单位px
									formatter : '{value}Kbps',
									textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
										color : 'auto',
										fontSize : 30
									}
								},
								data : [ {
									value : 200,
								} ]
							} ]
						};
						basegauge_Chart2.setOption(basegauge_option, true);
						//设置gauge实时刷新数据
						timeTicket = setInterval(function() {
							basegauge_option.series[0].data[0].value = (Math
									.random() * 150 + 150).toFixed(2) - 0;
							basegauge_Chart2.setOption(basegauge_option, true);
						}, 100);

						// clearInterval(timeTicket);
					});
		});

function randomarray_region(arr, n, upmin, upmax, downmin, downmax) {

	var arrindex = [];
	var uparrdata = [];
	var downarrdata = [];
	var sumarrdata = [];
	for ( var i = 0; i < n; i++) {
		arrindex[i] = i;
		uparrdata[i] = Math.floor(Math.random() * (upmax - upmin + 1) + upmin);
		downarrdata[i] = Math.floor(Math.random() * (downmax - downmin + 1)
				+ downmin);
		sumarrdata[i] = uparrdata[i] + downarrdata[i];

	}
	arr[0] = arrindex;
	arr[1] = uparrdata;
	arr[2] = downarrdata;
	arr[3] = sumarrdata;

	// alert(arr);
	return arr;
}

/*
 * 地图上点击基站标签，实现小区网路状况曲线变化
 */
function basediv(fluxspeed_Chart1) {
	// 1.网速（曲线图）
	// 为美观编造随机生成的数组
	var rawdataarr_region = [ [], [], [], [] ];
	var dataarr_region = randomarray_region(rawdataarr_region, 24, 50, 100,
			130, 300);
	var fluxspeed_option = {
		title : {
			text : '网速统计（kbps）',
			x : 'center'
		},
		tooltip : {
			trigger : 'axis'
		},
		legend : {
			data : [ '上行速度', '下行速度', '总速度' ],
			y : 'bottom'
		},
		calculable : true,
		xAxis : [ {
			type : 'category',
			boundaryGap : false,
			data : dataarr_region[0]
		} ],
		yAxis : [ {
			type : 'value',
			axisLabel : {
				formatter : '{value} '
			}
		} ],
		series : [ {
			name : '上行速度',
			type : 'line',
			data : dataarr_region[1],
		}, {
			name : '下行速度',
			type : 'line',
			data : dataarr_region[2],
		}, {
			name : '总速度',
			type : 'line',
			data : dataarr_region[3],
		} ]
	};

	// 为echarts对象加载数据
	fluxspeed_Chart1.setOption(fluxspeed_option);
}
