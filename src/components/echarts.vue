<template>
	<div>
		 <div>
            <p>安装：npm install echarts -S</p>
            <p>引用：在 main.js 中写入：</p>
            <p>import echarts from 'echarts'</p>
            <p>Vue.prototype.$echarts = echarts </p>
        </div>
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
	</div>
</template>

<script type="text/javascript">
	export default {
	  name: 'hello',
	  data () {
	    return {
		    
	    }
	  },
	  mounted(){
	    this.drawLine();
	  },
	  methods: {
	    drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))
	        // 绘制图表
	        myChart.setOption({
	            title: { text: '在Vue中使用echarts' },
	            tooltip: {},
	            xAxis: {
	                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	            },
	            yAxis: {},
	            series: [{
	                name: '销量',
	                type: 'bar',
	                data: [5, 20, 36, 10, 10, 20]
	            }]
	        });
	    }
	  }
	}
</script>