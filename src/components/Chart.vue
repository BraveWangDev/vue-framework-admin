<template>
  <div ref="chartDom">ECharts</div>
</template>

<script>
import echarts from "echarts";
// 消除resize抖动
import debounce from "lodash/debounce";
// 引入resize-detector中addListener, removeListener
import { addListener, removeListener } from "resize-detector";
export default {
  props: {
    chartData: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    // 设置300ms间隔
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.drawChart();
  },
  // 监听数据变化,重绘chart
  watch: {
    chartData() {
      this.chartData = this.chartData;
      console.log("watch-chartData", this.chartData);
      this.drawChart();
    }
  },
  methods: {
    drawChart() {
      this.chart = echarts.init(this.$refs.chartDom);
      // 注册事件监听
      addListener(this.$refs.chartDom, this.resize);
      var option = {
        tooltip: {},
        xAxis: {
          // axisLabel:{
          //     rotate:45,  // 旋转角度
          //     interval:0  // 间隔显示
          // },
          data: this.chartData.xAxisArr
        },
        yAxis: [
          {
            name: "数量",
            type: "value",
            show: true,
            // splitNumber: 10, //坐标轴的分割段数
            axisLabel: {
              fontSize: 14,
              color: "#333"
            },
            splitLine: {
              show: true
            }
          },
          {
            name: "金额",
            type: "value",
            min: "0",
            max: function(value) {
              return value.max;
            },
            axisLabel: {
              fontSize: 14,
              color: "#333"
              // formatter: '{value} %'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "数量",
            type: "bar",
            data: this.chartData.quantityArr,
            itemStyle: {
              normal: {
                color: "#009C82"
              }
            }
          },
          {
            name: "金额",
            type: "line",
            data: this.chartData.priceArr,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255, 204, 102)"
                  },
                  {
                    offset: 1,
                    color: "rgb(255, 153, 51)"
                  }
                ]),
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    fontSize: "14",
                    color: "rgb(255, 156, 54)"
                  }
                }
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
    },
    // 重绘chart实例
    resize() {
      console.log("chart-resize");
      this.chart.resize();
    }
  },
  beforeDestroy() {
    // 移除事件监听
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  }
};
</script>

<style></style>
