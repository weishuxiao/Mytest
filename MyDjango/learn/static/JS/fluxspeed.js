/*
 * 自定义jquery，实现对原有bootstrap UI控件的补充；
 */
$(document).ready(function() {
	// 网络传输速度
	require.config({
		paths : {
			echarts : '/static/build/dist'
		}
	});

	// 使用
	require([ 'echarts', 'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
	'echarts/chart/line', 'echarts/chart/pie' ], function(ec) {
		// 基于准备好的dom，初始化echarts图表,获取相关dom标签
		var fluxspeed_Chart1 = ec.init(document.getElementById('fluxplot'));

		/*
		 * 配置计划展示图形报表相关属性
		 */

		// 1.网速（曲线图）
		var fluxspeed_option = {
			title : {
				text : '网速统计曲线（kbps）',
				//subtext : month,
				x:'center',
			},
			tooltip : {
				trigger : 'axis'
			},
			legend : {
				data : [ '上行网速', '下行网速', '总网速' ],
				y : '43px'
			},
			toolbox : {
				show : false,
				feature : {
					mark : {
						show : true
					},
					dataView : {
						show : true,
						readOnly : false
					},
					magicType : {
						show : true,
						type : [ 'stack', 'tiled' ]
					},
					restore : {
						show : true
					},
					saveAsImage : {
						show : true
					}
				}
			},
			calculable : true,
			dataZoom : {
				show : true,
				realtime : true,
				start : 0,
				end : 3
			},
			// 坐标轴配置
			xAxis : [ {
				type : 'category',
				boundaryGap : false,
				data : List[0]
			} ],
			yAxis : [ {
				type : 'value',
			} ],
			// y轴待展示项数组获取
			series : [ {
				name : '上行网速',
				type : 'line',
				smooth : true,
				data : List[1]
			}, {
				name : '下行网速',
				type : 'line',
				smooth : true,
				data : List[2]
			}, {
				name : '总网速',
				type : 'line',
				smooth : true,
				data : List[3]
			}, ]
		};
		// 为echarts对象加载数据
		fluxspeed_Chart1.setOption(fluxspeed_option);

		var fluxspeed_Chart2 = ec.init(document.getElementById('fluxbar'));
		var fluxbar_option = {
			title : {
				text : '流量统计柱状图（Gb）',
				//subtext : month,
				x:'center',
			},
			tooltip : {
				trigger : 'axis'
			},
			legend : {
				data : [ '上行网速', '下行网速'],
				y : '43px'
			},
			toolbox : {
				show : true,
				feature : {
					magicType : {
						show : true,
						type : ['stack', 'tiled' ]
					},
				}
			},
			calculable : true,

			// 坐标轴配置
			xAxis : [ {
				type : 'category',
				boundaryGap : false,
				data : List[0],
				boundaryGap:true
			} ],
			yAxis : [ {
				type : 'value',
			} ],
			// y轴待展示项数组获取
			series : [ {
				name : '上行网速',
				type : 'bar',
				smooth : true,
				// 是否展示面积
				// itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data : List[1]
			}, {
				name : '下行网速',
				type : 'bar',
				smooth : true,
				// itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data : List[2]
			}, ]
		};
		// 为echarts对象加载数据
		fluxspeed_Chart2.setOption(fluxbar_option);
		//charts之间相互关联
		fluxspeed_Chart1.connect([fluxspeed_Chart2]);
		//fluxspeed_Chart1.connect([fluxspeed_Chart2]);
	});
});
