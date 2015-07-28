/*
 * 自定义jquery，实现对原有bootstrap UI控件的补充；
 */
$(document).ready(
		function() {

			// 网络传输速度
			require.config({
				paths : {
					echarts : '/static/build/dist'
				}
			});

			// 使用
			require([ 'echarts', 'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
			'echarts/chart/line', 'echarts/chart/pie' ], function(ec) {

				// 1. 不同网站访问量统计（竖向柱状图）
				var webcount_myChart = ec.init(document
						.getElementById('webcount_bar'));

				// 为了美观展示编写的假数据
				var dataarr = [ 9574, 2548, 5423, 3544, 8524, 3417, 5654, 4558,
						6241, 7511, 2140, 1952 ];
				// 对数组随机取指数
				dataarr = randomarray(dataarr, 0.985, 1.015);

				var webcount_option = {
					title : {
						x : 'center',
						text : '网站访问次数统计（万次）',
						subtext : month,
					},
					tooltip : {
						trigger : 'axis'
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
								type : [ 'line', 'bar' ]
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
					xAxis : [ {
						type : 'category',
						data : [ '百度', '新浪', '搜狐', '新浪微博', '腾讯', '优酷', '新华网',
								'凤凰网', '央视网', '网易', '天涯', '知乎' ],
						axisLabel : {
							show : true,
							interval : 'auto', // {number}
							rotate : 45,
							margin : 8,
							formatter : '{value}',
							textStyle : {
								fontSize : 13,
								fontWeight : 'bold',
								color : '#FF8247',
							}
						},
					} ],
					yAxis : [ {
						type : 'value'
					} ],
					series : [
							{
								name : '访问次数',
								type : 'bar',
								itemStyle : {
									normal : {
										color : function(params) {
											// build a color map
											// as your need.
											var colorList = [ '#C1232B',
													'#B5C334', '#FCCE10',
													'#E87C25', '#27727B',
													'#FE8463', '#9BCA63',
													'#FAD860', '#F3A43B',
													'#60C0DD', '#D7504B',
													'#C6E579', '#F4E001',
													'#F0805A', '#26C0C0' ];
											return colorList[params.dataIndex]
										},
										label : {
											show : true,
											position : 'top'
										},
									}
								},

								data : dataarr,
							}, ]
				};

				webcount_myChart.setOption(webcount_option);

				// 2. 浏览器统计（柱状图）
				var browser_bar_myChart = ec.init(document
						.getElementById('browser_bar'));

				// 为了美观展示编写的假数据
				var dataarr = [ 252154, 145125, 315451, 181442, 154545, 254512,
						125412, 95451, 78121, 89212, 47126, 35421 ];
				//对数组随机取指数
				dataarr=randomarray(dataarr,0.99,1.01);
				var browser_bar_option = {
					title : {
						x : 'center',
						text : '浏览器数量统计',
						subtext : month,
					},
					tooltip : {
						trigger : 'axis'
					},

					toolbox : {
						show : false,
						orient : 'vertical',
						x : 'right',
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
								type : [ 'line', 'bar' ]
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
					xAxis : [ {
						type : 'category',
						data : [ 'UC', '猎豹', 'safari', 'opera', 'baidu', 'QQ',
								'360', 'chrome', 'sogou' ],
						axisLabel : {
							show : true,
							interval : 'auto', // {number}
							rotate : 45,
							margin : 8,
							formatter : '{value}',
							textStyle : {
								fontFamily : 'sans-serif',
								fontSize : 13,
								fontStyle : 'italic',
								fontWeight : 'bold'
							}
						},
					} ],
					yAxis : [ {
						type : 'value'
					} ],
					series : [
							{
								name : '用户数量',
								type : 'bar',
								itemStyle : {
									normal : {
										color : function(params) {
											// build a color map
											// as your need.
											var colorList = [ '#C1232B',
													'#B5C334', '#FCCE10',
													'#E87C25', '#27727B',
													'#FE8463', '#9BCA63',
													'#FAD860', '#F3A43B',
													'#60C0DD', '#D7504B',
													'#C6E579', '#F4E001',
													'#F0805A', '#26C0C0' ];
											return colorList[params.dataIndex]
										},
										label : {
											show : true,
											position : 'top',
											formatter : '{c}'
										}
									}
								},
								data : dataarr
							}, ]
				};

				browser_bar_myChart.setOption(browser_bar_option);

				// 3.应用类型统计饼图
				var browser_pie_myChart = ec.init(document
						.getElementById('browser_pie'));
				// 为了美观展示编写的假数据
				var dataarr = [ 252154, 145125, 315451, 181442, 154545, 254512,
						125412, 95451 ];

				var browser_pie_option = {
					title : {
						x : 'center',
						text : '手机浏览器份额（%）',
						subtext : month,
						x : 'center'
					},
					tooltip : {
						trigger : 'item',
						formatter : "{a} <br/>{b} : {c} ({d}%)"
					},
					legend : {
						orient : 'vertical',
						x : '360px',
						data : [ 'UC', '猎豹', 'safari', 'opera', 'baidu', 'QQ',
								'360', '其它' ],
					},
					calculable : true,
					series : [ {
						name : '访问来源',
						type : 'pie',
						radius : '65%',
						center : [ '35%', '53%' ],
						data : [ {
							value : dataarr[0],
							name : 'UC'
						}, {
							value : dataarr[1],
							name : '猎豹'
						}, {
							value : dataarr[2],
							name : 'safari'
						}, {
							value : dataarr[3],
							name : 'opera'
						}, {
							value : dataarr[4],
							name : 'baidu'
						}, {
							value : dataarr[5],
							name : 'QQ'
						}, {
							value : dataarr[6],
							name : '360'
						}, {
							value : dataarr[7] * 1.3,
							name : '其它'
						}, ]
					} ]
				};

				browser_pie_myChart.setOption(browser_pie_option);
			});

		});
