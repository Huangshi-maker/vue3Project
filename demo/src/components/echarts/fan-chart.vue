<template lang="">
    <div style="width:100%;height:100%"  ref="fandata">

    </div>
</template>
<script>


import * as echarts from 'echarts'
import { ref, onMounted, reactive } from 'vue'
import { getstratifiedManagementData } from '@/until/api'


export default {
    name: 'fanchart',
    setup() {
        const fandata = ref()
        var data = reactive([])
        onMounted(() => {
            getfandata()

        })
        const getfandata = () => {
            getstratifiedManagementData().then(res => {
                res.data.map(item => {
                    let obj = {
                        value: item.nums,
                        name: item.level
                    }
                    data.push(obj)
                })
                echartsfan.setOption(option2)
            })
            var echartsfan = echarts.init(fandata.value)
            var option2 = {

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
                        data: data
                    }
                ]
            }
            console.log(data);
        }
        return {
            data,
            fandata,
            getfandata,

        }
    }
}
</script>
<style lang="">

</style>