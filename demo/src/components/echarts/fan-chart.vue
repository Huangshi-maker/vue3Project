<template lang="">
    <div style="width:100%;height:100%"  ref="fandata">

    </div>
</template>
<script>

import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'


export default {
    name: 'fanchart',
    setup() {
        const fandata = ref()

        onMounted(() => {
            getfandata()

        })



        const option2 = {

            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '各层人数',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 735, name: '1-4层' },
                        { value: 580, name: '5-8层' },
                        { value: 484, name: '9-12层' },
                        { value: 300, name: '13-18层' }
                    ]
                }
            ]
        }
        const getfandata = () => {
            var echartsfan = echarts.init(fandata.value)
            echartsfan.setOption(option2)
        }


        return {
            fandata,
            getfandata,
           
        }
    }
}
</script>
<style lang="">

</style>