<template lang="">
    <div style="width:100%;height:100%"  ref="dataviewfan">

    </div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'

export default {
    name: 'dataviewline',
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

    },
    watch: {
        option(val, oldval) {

            const getdata = () => {
                var newfan = echarts.init(dataviewfan.value)
                newfan.setOption(props.option)
            }
            console.log(val);
        }
    }

}
</script>
<style lang="">

</style>