<template lang="">
    <div ref="content" style="width: 100%; height: 100%; ">
    <!-- {{data.month}} -->

    </div>
</template>
<script>
import { onMounted, reactive, ref, } from 'vue'

import * as echarts from "echarts";
import { getcomeinData } from '@/until/api'







export default {
    name: 'mousechart',
    setup() {
        // const { proxy } = getCurrentInstance();
        const content = ref()

        const data = reactive({
            month: [],
            entrynums: [],
            exitnums: []


        })

        onMounted(() => {
            getdata()

        })

        const getdata = () => {
            getcomeinData().then(res => {
                res.data.forEach(item => {
                    data.month.push(item.month)
                    data.entrynums.push(item.entrynums)
                    data.exitnums.push(item.exitnums)
                })


                // console.log(data.month);

                //必须先获取数据，才能实例化图
                echartsDom.setOption(option1)

            })
            var echartsDom = echarts.init(content.value)
            // var echartsDom = echarts.init(proxy.$refs.content)
            var option1 = {

                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['出境', '入境']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },

                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    data: data.month,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 人'
                    }
                },
                series: [
                    {
                        name: '出境',
                        type: 'line',

                        smooth: 'true',
                        data: data.entrynums
                    },
                    {
                        name: '入境',
                        type: 'line',

                        smooth: 'true',
                        data: data.exitnums
                    },
                ]
            };

        }














        return {
            data,
            getdata,
            content
        }
    },

}


</script>
<style lang="">

</style>