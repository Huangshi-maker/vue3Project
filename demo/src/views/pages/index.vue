<template lang="">
    <div>
        <el-row :gutter="20">
            <el-col :span="24" >
                    <el-card >
                        <div class="headata">
                            <div style="background-color:#3cdb86">
                                <p>总人数</p>
                                <span v-if="!data" style="display:block;height:31px;width:30px"></span>
                                <span>{{data.totalPeople}}</span>
                            </div>
                            <div style="background-color:#4480f4">
                                <p>今日入境</p>
                                <span v-if="!data">&nbsp;</span>
                                <span>{{data.intoTheCountryToday}}</span>
                            </div>
                            <div style="background-color:#083045">
                                <p>今日出境</p>
                                <span v-if="!data">&nbsp;</span>
                                <span>{{data.outboundToday}}</span>
                            </div>
                            <div style="background-color:#f66932">
                                <p>管理员</p>
                                <span v-if="!data">&nbsp;</span>
                                <span>{{data.administrator}}</span>
                            </div>
                        </div>

                    </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="16" >
                <el-card style="margin-top:20px">
                    <div style="height:270px;">
                        <div class="title">
                            <span>常用功能导航</span>
                            <el-icon class="card-icon"><MoreFilled /></el-icon>
                        </div>
                        <div class="container">
                            <div>
                                <el-icon><Notebook /></el-icon>
                                <span>大事溥</span>
                            </div>
                            <div>
                                <el-icon><Search /></el-icon>
                                <span>人员查询</span>
                            </div>
                            <div>
                                <el-icon><EditPen /></el-icon>
                                <span>入境管理</span>
                            </div>
                            <div>
                                <el-icon><Refresh /></el-icon>
                                <span>数据重置</span>
                            </div>
                            <div>
                                <el-icon><Setting /></el-icon>
                                <span>货币管理</span>
                            </div>
                            <div>
                                <el-icon><Bell /></el-icon>
                                <span>操作日志</span>
                            </div>
                            <div>
                                <el-icon><CloseBold /></el-icon>
                                <span>分层管理</span>
                            </div>
                            <div>
                                <el-icon><Select /></el-icon>
                                <span>消息通知</span>
                            </div>
                            <div>
                                <el-icon><HelpFilled /></el-icon>
                                <span>资产管理</span>
                            </div>
                            <div>
                                <el-icon><View /></el-icon>
                                <span>员工管理</span>
                            </div>
                            <div>
                                <el-icon><Notebook /></el-icon>
                                <span>营销管理</span>
                            </div>
                            <div>
                                <el-icon><Flag /></el-icon>
                                <span>目标设置</span>
                            </div>
                        </div>

                    </div>
                </el-card>
                <el-card style="margin-top:20px">
                    <div style="height:270px;">
                        <div class="title">
                            <span>出入境人数</span>
                            <el-icon class="card-icon"><MoreFilled /></el-icon>
                        </div>
                        <mousecharts/>
                    </div>

                </el-card>
            </el-col>
            <el-col :span="8" >
                <el-card style="margin-top:20px">
                        <div style="height:270px;" class="todaywork">
                            <div class="title">
                                <span>今日待办</span>
                                <el-icon class="card-icon"><MoreFilled /></el-icon>
                            </div>
                            <div>
                                <p class="bigtitle"><span>AM 9:00</span>大事件审判</p>
                                <p class="s_content"><span>时间:</span><span>3029年2月29日</span></p>
                                <br>
                                <p class="s_content"><span>地点:</span><span>会议室2938</span></p>
                                <hr>
                                <p class="content"><span>PM 6:00</span>职工聚餐</p>
                                <p class="content"><span>PM 11:30</span>判官高级培训</p>
                            </div>

                        </div>
                    </el-card>
                    <el-card style="margin-top:20px">
                        <div style="height:270px;">
                            <div class="title">
                                <span>各层人数</span>
                                <el-icon class="card-icon"><MoreFilled /></el-icon>
                            </div>
                            <fanChart/>
                        </div>

                    </el-card>

                </el-col>
        </el-row>

    </div>
</template>
<script>
import mousecharts from '../../components/echarts/mousechart.vue'
import fanChart from '@/components/echarts/fan-chart'
import { getHeadData } from '@/until/api'
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'





export default {
    name: 'index',
    components: {
        mousecharts,
        fanChart

    },
    setup() {

        const store = useStore()
        const router = useRouter()

        const data = reactive({
            totalPeople: null,
            intoTheCountryToday: null,
            outboundToday: null,
            administrator: null

        })
        const getdata = () => {
            getHeadData().then(res => {

                if (res.meta.status == 200) {
                    console.log('asda')
                    data.totalPeople = res.data.totalPeople
                    data.intoTheCountryToday = res.data.intoTheCountryToday
                    data.outboundToday = res.data.outboundToday
                    data.administrator = res.data.administrator

                }
            })
        }
        getdata()
        const gotouserinfo = () => {
            if (!store.state.userInfo.name) {
                ElMessageBox.alert('当前个人信息不完整，快去完善吧', '消息提示', {

                    confirmButtonText: 'OK',
                    callback: () => {
                        router.push('./usercenter')
                    },
                })
            }
        }
        gotouserinfo()

        return {
            data
        }




    }



}
</script>
<style lang="less" scoped>
.headata {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;

    div {
        cursor: pointer;
        height: 150px;
        width: 20%;
        background-color: pink;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


        p {
            font-size: 16px;
            color: #fff;
        }

        span {
            font-size: 24px;
            margin-top: 25px;
            color: #fff;
        }
    }
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-weight: 600;
    }

    .card-icon {
        transform: rotate(90deg);
        cursor: pointer;
    }
}

.container {
    display: flex;
    flex-wrap: wrap;
    padding-top: 35px;

    div {
        width: 16%;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;

        >* {
            cursor: pointer;
        }

        .el-icon {
            width: 40px;
            height: 40px;
            border: 1px solid #e2e2e2;
            border-radius: 50%;
        }

        span {
            margin-top: 10px;
        }

    }
}

.todaywork {
    .bigtitle {
        background-color: #0099ff;
        color: #fff;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-top: 30px;

        span {
            margin-right: 10px;

        }

    }

    .s_content {
        margin-top: 5px;
        padding-left: 10px;

        span {
            margin-right: 30px;
        }
    }

    hr {
        margin-top: 10px;
    }

    .content {
        padding-left: 10px;
        margin-top: 20px;

        span {
            margin-right: 30px;
        }

    }
}
</style>