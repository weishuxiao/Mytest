
/*
 * 自定义jquery，实现对原有bootstrap UI控件的补充；
 */
$(document).ready(function() {

	//网络传输速度
	require.config({
		paths : {
			echarts : '/static/build/dist'
		}
	});

	// 使用
	require(
			[ 'echarts', 
			  'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
			  'echarts/chart/line',
			  'echarts/chart/pie'
			  ],
	function(ec) {
	
		// 1. 终端类型统计（柱状图）
		var mobiletype_myChart = ec.init(document.getElementById('mobiletype_bar'));
		//编造数据，便于展示
		var dataarr=[ 89000, 95501, 76903, 64574, 28224, 27641, 45782, 12457, 5841, 15787, 9812 ];
		//对数组随机取指数
		dataarr=randomarray(dataarr,0.98,1.02);
		var mobiletype_option = {
			title : {
				x : 'center',
				text : '各品牌终端数量统计',
				subtext : month,
				link : 'http://echarts.baidu.com/doc/example.html'
			},
			tooltip : {
				trigger : 'item'
			},
			toolbox : {
				show : true,
				feature : {
					dataView : {
						show : true,
						readOnly : false
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
			grid : {
				borderWidth : 0,
				y : 80,
				y2 : 60
			},
			xAxis : [ {
				type : 'category',
				show : false,
				data : [ '小米', '苹果', '华为', '三星', '中兴', '魅族', '联想',
						'LG', 'sony', '诺基亚', 'HTC' ]
			} ],
			yAxis : [ {
				type : 'value',
				show : false
			} ],
			series : [ {
				name : '终端数量统计',
				type : 'bar',
				itemStyle : {
					normal : {
						color : function(params) {
							// build a color map as your need.
							var colorList = [ '#C1232B', '#B5C334', '#FCCE10',
									'#E87C25', '#27727B', '#FE8463', '#9BCA63',
									'#FAD860', '#F3A43B', '#60C0DD', '#D7504B',
									'#C6E579', '#F4E001', '#F0805A', '#26C0C0' ];
							return colorList[params.dataIndex]
						},
						label : {
							show : true,
							position : 'top',
							formatter : '{b}\n{c}'
						}
					}
				},
				data : dataarr
			} ]
		};

		mobiletype_myChart.setOption(mobiletype_option);

		// 2.终端类型百分比
		var mobiletype_myChart = ec.init(document.getElementById('mobiletype_pie'));
		var mobiletype_option = {

				title : {
					orient : 'horizontal',
					x:"center",
					text : '各品牌手机所占百分比（%）',
				},
				tooltip : {
					trigger : 'item',
					formatter : "{a} <br/>{b} : {c} ({d}%)"
				},
				legend : {
					orient : 'vertical',
					x:"150px",
					y:"50px",
					data : [ '小米', '苹果', '华为', '三星', '中兴', '魅族', '联想',
								'LG', '其它' ]
				},
			
				series : [ {
					type : 'pie',
					center : [ '50%', '55%' ],
					radius : '70%',
		
					data : [
			                {value:dataarr[0], name:'小米'},
			                {value:dataarr[1], name:'苹果'},
			                {value:dataarr[2], name:'华为'},
			                {value:dataarr[3], name:'三星'},
			                {value:dataarr[4], name:'中兴'},
			                {value:dataarr[5], name:'魅族'},
			                {value:dataarr[6], name:'联想'},
			                {value:dataarr[6], name:'LG'},
			                {value:dataarr[7]*1.3, name:'其它'},
					        ]
				} ]
			
		};

		mobiletype_myChart.setOption(mobiletype_option);
	});


});
