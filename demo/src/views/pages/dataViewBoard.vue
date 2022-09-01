<template lang="">
    <dv-full-screen-container style="height: 100vh;
    width: 100vw;display: flex;
    justify-content: center;
    align-items: center;
    background-color:#282c34;">
        <!-- <dv-loading>Loading...</dv-loading> -->
        <dv-border-box-10 style="height:95%;width:95%" :reverse="false">
            <div class="bigtitle">数据可视化</div>
            <el-row :gutter="20" style="height:90%">
                <el-col :span="7"><div class="grid-content ep-bg-purple"  />
                    <dv-border-box-12 class="left" style="height:100%">
                        <div class="userinfo" style="height:">
                            <div class="userimage">
                                <img src="@/assets/images/user.png" alt="">
                            </div>
                            <div class="usertext">
                                <span>Huangshi-maker</span>
                                <span>2021-01-12</span>
                                <span>加入github</span>
                            </div>
                        </div>
                        <div class="stars">
                            <p>仓库Stars详情</p>
                            <div style="height:80%">
                                <dataview :option="option"/>
                            </div>


                        </div>
                        <div class="languageClassification">
                            <p>仓库语言分类</p>
                            <div style="height:80%">
                                <dataview :option="option"/>
                            </div>

                        </div>
                    </dv-border-box-12>
                </el-col>
                <el-col :span="10"><div class="grid-content ep-bg-purple" />
                    <div class="centerbigbox">
                        <div class="center-top">

                            <div></div>
                            <div></div>
                        </div>

                        <div class="center-center">
                            <p>仓库数据</p>

                        </div>
                        <div class="center-bottom">
                            <dv-border-box-10>
                            <p>最近操作数据</p>

                            </dv-border-box-10>
                        </div>

                    </div>

                </el-col>
                <el-col :span="7"><div class="grid-content ep-bg-purple" />
                    <dv-border-box-12 class="rightTop" style="height:60%">
                        <div class="righttopmesbox">
                            <p>新增粉丝</p>

                        </div>
                        <div class="righttopmesbox">
                            <p>最近跟随</p>

                        </div>
                    </dv-border-box-12>
                    <dv-border-box-12 class="rightTop" style="height:40%">
                        <div class="rightbottommesbox">
                            <p>最近消息</p>

                        </div>

                    </dv-border-box-12>
                </el-col>
            </el-row>

        </dv-border-box-10>
    </dv-full-screen-container>
</template>
<script>
import dataview from '@/components/echarts/dataview-fan';

export default {
    components: {
        dataview
    },
    setup() {
        var option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                textStyle: {
                    color: '#fff'
                }
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return {
            option
        }
    }

}
</script>
<style lang="less" scoped>
.bigtitle {
    height: 5%;
    width: 100%;
    text-align: center;
}

/deep/ .border-box-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.userinfo {
    margin-left: 5%;
    display: flex;
    align-items: center;
    padding-top: 16px;
    height: 20%;

    .userimage {
        width: 152px;
        height: 152px;
        border: 1px solid #437feb;
        border-radius: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;

        img {
            display: block;
            width: 140px;
            height: 140px;
            border-radius: 50%;

        }
    }

    .usertext {
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 70%;

        &>span:nth-child(1) {
            font-size: 32px;
            line-height: 32px;
            color: #25f3e6
        }

        &>span:nth-child(2) {
            font-size: 20px;
            line-height: 20px;
            color: #f58a35
        }

        &>span:nth-child(3) {
            font-size: 14px;
            line-height: 14px;
            color: #fff
        }

    }
}

.stars {
    height: 35%;
    width: 100%;
    border: 1px solid black;
    padding: 0 20px;

    p {
        font-size: 20px;
        color: #5acaf1
    }

    div {
        margin-top: 6%;
    }
}

.languageClassification {
    height: 35%;
    width: 100%;
    border: 1px solid black;
    padding: 0 20px;

    p {
        font-size: 20px;
        color: #5acaf1
    }

    div {
        margin-top: 6%;
    }
}

.righttopmesbox {
    height: 45%;
    width: 100%;
    border: 1px solid black;
    padding: 0 20px;

    p {
        font-size: 20px;
        color: #5acaf1
    }

    // div {
    //     margin-top: 6%;
    // }
}

.rightbottommesbox {
    height: 90%;
    width: 100%;
    border: 1px solid black;
    padding: 0 20px;

    p {
        font-size: 20px;
        color: #5acaf1
    }

    // div {
    //     margin-top: 6%;
    // }


}

.centerbigbox {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;

    .center-top {
        height: 20%;
        width: 100%;
        border: 1px solid black;
    }

    .center-center {
        height: 40%;
        width: 100%;
        border: 1px solid black;

        p {
            font-size: 20px;
            color: #5acaf1
        }


    }

    .center-bottom {
        // margin-bottom: -27px;
        height: 35%;
        width: 100%;
        border: 1px solid black;

        p {
            font-size: 20px;
            color: #5acaf1
        }
    }
}
</style>