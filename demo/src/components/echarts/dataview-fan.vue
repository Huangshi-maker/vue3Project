<template lang="">
    <div style="width:100%;height:100%"  ref="dataviewfan">

    </div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

export default {
    name: 'dataview',
    props: {
        option: ''
    },
    setup(props) {
        onMounted(() => {
            getdata()
        })


        const dataviewfan = ref()
        const getdata = () => {
            var newfan = echarts.init(dataviewfan.value)
            newfan.setOption(props.option)
        }



        return {
            dataviewfan,
            getdata
        }

    }

}
</script>
<style lang="">

</style>