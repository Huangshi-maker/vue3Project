<template lang="">
    <div style="width:100%;height:100%"  ref="dataviewfan">

    </div>
</template>
<script>

import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'

export default {
    name: 'dataview',
    props: {
        option: ''
    },
    setup(props) {
        onMounted(() => {
            watch(
                () => props.option, (newval, oldval) => {
                    var newfan = echarts.init(dataviewfan.value)
                    newfan.setOption(newval)
                    console.log(newval);
                },
                { deep: true }
            )
        })
        const dataviewfan = ref()
        return {
            dataviewfan,

        }
    }

}
</script>
<style lang="">

</style>