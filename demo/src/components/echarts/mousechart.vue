<template lang="">
    <div ref="content" style="width: 100%; height: 100%; ">

    </div>
</template>
<script>
import { onMounted, reactive, ref, toRefs } from 'vue'

import * as echarts from "echarts";
import { getcomeinData } from '@/until/api'






export default {
    name: 'mousechart',
    setup() {
        // const { proxy } = getCurrentInstance();
        const content = ref()

        const data = ref({
            month: [],
            entrynums: [],
            exitnums: []


        })

        onMounted(() => {
            getdata()

        })

        const getdata = () => {
            var echartsDom = echarts.init(content.value)
            // var echartsDom = echarts.init(proxy.$refs.content)
            const option1 = {

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
                        stack: 'Total',
                        smooth: 'true',
                        data: [2, 5, 7, 3, 8, 9, 10, 12, 15, 6, 3, 9]
                    },
                    {
                        name: '入境',
                        type: 'line',
                        stack: 'Total',
                        smooth: 'true',
                        data: [12, 15, 6, 3, 9, 14, 17, 8, 5, 7, 3, 8]
                    },
                ]
            };

            echartsDom.setOption(option1)

        }

        getcomeinData().then(res => {
            data.value.month = res.data

            res.data.map(item => {
                return data.value.month.push(item.month)
            })

        })
        console.log(data.value.month);








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