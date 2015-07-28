/*
 * 自定义jquery，实现对原有bootstrap UI控件的补充；
 */
$(document)
		.ready(
				function() {

					// 网络传输速度
					require.config({
						paths : {
							echarts : '/static/build/dist'
						}
					});

					// 使用
					require(
							[ 'echarts', 'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
							'echarts/chart/line', 'echarts/chart/pie' ],
							function(ec) {

								// 2. 各类应用统计（横向柱状图）
								var apptype_bar_myChart = ec.init(document
										.getElementById('apptype_bar'));

								// 为了美观展示编写的假数据
								var dataarr_app = [ 18203, 23489, 29034, 304970,
										331744, 430230, 531744, 630230, 831744,
										930230 ];

								var apptype_bar_option = {
									title : {
										text : '各类应用统计',
										subtext : month,
										x : 'center'
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
										type : 'value',
										boundaryGap : [ 0, 0.01 ]
									} ],
									yAxis : [ {
										type : 'category',
										data : [ '其它', '音乐', '视频', '游戏',
												'天气客户端', '交通地图', '新闻客户端',
												'网上商城', '浏览器', '即时通讯' ],
										boundaryGap : true,
										axisLabel : {
											show : true,
											formatter : '{value}',
											textStyle : {
												fontSize : 10,
												fontWeight : 'bold',
												color : '#787878',
											}
										},
									} ],
									series : [
											{
												name : '2014年',
												type : 'bar',
												itemStyle : {
													normal : {
														color : function(params) {
															// build a color map
															// as your need.
															var colorList = [
																	'#C1232B',
																	'#B5C334',
																	'#FCCE10',
																	'#E87C25',
																	'#27727B',
																	'#FE8463',
																	'#9BCA63',
																	'#FAD860',
																	'#F3A43B',
																	'#60C0DD',
																	'#D7504B',
																	'#C6E579',
																	'#F4E001',
																	'#F0805A',
																	'#26C0C0' ];
															return colorList[params.dataIndex]
														},
														label : {
															show : true,
															position : 'right',
															formatter : '{c}'
														}
													}
												},
												data : randomarray(dataarr_app,0.99,1.01)
											}, ]
								};

								apptype_bar_myChart
										.setOption(apptype_bar_option);

								// 2.应用类型统计饼图
								var apptype_pie_myChart = ec.init(document
										.getElementById('apptype_pie'));
								var apptype_pie_option = {
									title : {
										text : '各类应用所占百分比（%）',
										x : 'center'
									},
									tooltip : {
										trigger : 'item',
										formatter : "{a} <br/>{b} : {c} ({d}%)"
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
												type : [ 'pie', 'funnel' ],
												option : {
													funnel : {
														x : '25%',
														width : '50%',
														funnelAlign : 'left',
														max : 1548
													}
												}
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
									series : [ {
										name : '访问来源',
										type : 'pie',
										radius : '61%',
										center : [ '50%', '50%' ],
										data : [ 
										    {value : dataarr_app[8],name : '即时通讯'}, 
											{value : dataarr_app[7],name : '浏览器'},
											{value : dataarr_app[6],name : '网上商城'}, 
											{value : dataarr_app[5],name : '新闻客户端'},
											{value : dataarr_app[4],name : '交通地图'},
											{value : dataarr_app[3],name : '游戏'},
											{value : dataarr_app[2],name : '视频'},
											{value : dataarr_app[1],name : '音乐'},
											{value : dataarr_app[0],name : '其它'},
											]
									} ]
								};

								apptype_pie_myChart
										.setOption(apptype_pie_option);

								// 3.各业务综合统计竖向向柱状统计图
								var apptype_date_bar_chart = ec.init(document
										.getElementById('apptype_date_bar'));
								var apptype_option = {
									title : {
										text : '主要APP活跃指数（每万人）',
										subtext : month,
										x : 'center'
									},
									tooltip : {
										trigger : 'axis',
										axisPointer : { // 坐标轴指示器，坐标轴触发有效
											type : 'shadow' // 默认为直线，可选为：'line'
										// | 'shadow'
										}
									},
									legend : {
										y : 'bottom',
										data : [ '微信', 'QQ', '陌陌', 'UC浏览器',
												'android浏览器', '猎豹浏览器',
												'Safari', '高德地图', '百度地图', '快的',
												'滴滴' ]
									},
									toolbox : {
										show : false,
										orient : 'vertical',
										x : 'right',
										y : 'center',
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
												type : [ 'line', 'bar',
														'stack', 'tiled' ]
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
										data : [ '周一', '周二', '周三', '周四', '周五',
												'周六', '周日' ],
										axisLabel : {
											show : true,
											formatter : '{value}',
											textStyle : {
												fontSize : 12,
												fontWeight : 'bold',
												color : '#787878',
											}
										},

									} ],
									yAxis : [ {
										type : 'value'
									} ],
									series : [
											{
												name : '微信',
												type : 'bar',
												stack : '社交软件',
												data : randomarray([ 320, 332, 301, 334,
														390, 330, 320 ],0.96,1.04)
											},
											{
												name : 'QQ',
												type : 'bar',
												stack : '社交软件',
												data : randomarray([ 120, 132, 101, 134,
														90, 230, 210 ],0.96,1.04)
											},
											{
												name : '陌陌',
												type : 'bar',
												stack : '社交软件',
												data : randomarray([ 120, 132, 101, 134,
														90, 230, 210 ],0.96,1.04)
											},

											{
												name : 'UC浏览器',
												type : 'bar',
												stack : '浏览器',
												data : randomarray([ 220, 182, 191, 234,
														290, 330, 310 ],0.96,1.04)
											},
											{
												name : 'android浏览器',
												type : 'bar',
												stack : '浏览器',
												data : randomarray([ 150, 232, 201, 154,
														190, 330, 410 ],0.96,1.04)
											},
											{
												name : '猎豹浏览器',
												type : 'bar',
												stack : '浏览器',
												data : randomarray([ 150, 232, 201, 154,
														190, 330, 410 ],0.96,1.04)
											},
											{
												name : 'Safari',
												type : 'bar',
												stack : '浏览器',
												data : randomarray([ 150, 232, 201, 154,
														190, 330, 410 ],0.96,1.04)
											},
											{
												name : '苹果浏览器',
												type : 'bar',
												stack : '浏览器',
												data : randomarray([ 150, 232, 201, 154,
														190, 330, 410 ],0.96,1.04)
											},

											{
												name : '高德地图',
												type : 'bar',
												stack : '地图',
												data : randomarray([ 150, 232, 201, 154,
														190, 330, 410 ],0.96,1.04)
											},

											{
												name : '百度地图',
												type : 'bar',
												stack : '地图',
												data : randomarray([ 150, 232, 201, 154,
														190, 330, 410 ],0.96,1.04)
											},
											{
												name : '快的',
												type : 'bar',
												stack : '打车软件',
												data : randomarray([ 150, 232, 201, 154,
														190, 330, 410 ],0.96,1.04)
											},
											{
												name : '滴滴',
												type : 'bar',
												stack : '打车软件',
												data : randomarray([ 150, 232, 201, 154,
														190, 330, 410 ],0.96,1.04)
											}, ]
								};
								apptype_date_bar_chart
										.setOption(apptype_option);

							});

				});

