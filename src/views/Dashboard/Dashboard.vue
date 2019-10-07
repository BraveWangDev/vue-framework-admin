<template>
  <!-- <div>首页Dashboard仪表盘-单层路由,在菜单显示</div> -->
  <a-card title="首页Dashboard仪表盘-单层路由,在菜单显示">
    <Chart style="marginTop: 20px; height: 500px" :chartData="chartData" />
    <v-chart style="marginTop: 20px; height: 500px" :options="polar"/>
  </a-card>
</template>

<script>
import Chart from "../../components/Chart";
// vue-echarts
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

export default {
  components: {
    Chart,
    'v-chart': ECharts
  },
  name: "Dashboard",
  data() {
    let data = []
    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {
      chartData: {
        xAxisArr: ["SKU1001", "SKU1002", "SKU1003", "SKU1004", "SKU1005"],
        quantityArr: ["10000", "20000", "30000", "40000", "50000"],
        priceArr: ["100000", "200000", "300000", "400000", "500000"]
      },
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    };
  }
};
</script>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
/* .echarts {
  width: 100%;
  height: 100%;
} */
</style>
