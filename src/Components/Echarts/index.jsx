import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default function Echart() {
	const chartRef = useRef()

	let myChart = null
  
	const options = {
		title: {
			text: '测试表格-react-hook',
		},
		tooltip: {
			trigger: 'axis',
		},
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				type: 'bar',
				label: {
					show: true,
				},
				markPoint: {
					data: [
						{
							type: 'max',
							name: '最大值',
						},
						{
							type: 'min',
							name: '最小值',
						},
					],
				},
				markLine: {
					data: [
						{
							type: 'average',
							name: '平均值',
						},
					],
				},
				data: [820, 932, 901, 934, 1290, 1330, 1320],
			},
		],
	}

	function renderChart() {
		myChart = echarts.init(chartRef.current)
		myChart.setOption(options)
	}

	useEffect(() => {
		renderChart()
		console.log(chartRef, 'chartRef')

		return () => {
			myChart && myChart.dispose()
		}
	})

	return (
		<>
			<div
				style={{
					width: '600px',
					height: '400px',
					marginTop: '20px',
				}}
				ref={chartRef}
			/>
		</>
	)
}
