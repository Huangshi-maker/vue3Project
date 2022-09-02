<template lang="">
    <dv-full-screen-container  style="height: 100vh;
    width: 100vw;display: flex;
    justify-content: center;
    align-items: center;
    background-color:#282c34;">
        <!-- <dv-loading>Loading...</dv-loading> -->
        <dv-border-box-10 v-if="userinfo.login" style="height:95%;width:95%" :reverse="false">
            <div class="bigtitle">数据可视化</div>
            <el-row :gutter="20" style="height:90%">
                <el-col :span="7"><div class="grid-content ep-bg-purple"  />
                    <dv-border-box-12 class="left" style="height:100%">
                        <div class="userinfo" style="height:">
                            <div class="userimage">
                                <img :src="userinfo.avatar_url" alt="">
                            </div>
                            <div class="usertext">
                                <span>{{userinfo.login}}</span>
                                <span>{{userinfo.created_at}}</span>
                                <span>加入github</span>
                            </div>
                        </div>
                        <div class="stars">
                            <p>仓库Stars详情</p>
                            <div style="height:80%">
                                <dataview :option="option1"/>
                            </div>


                        </div>
                        <div class="languageClassification">
                            <p>仓库语言分类</p>
                            <div style="height:80%">
                                <dataview :option="option1"/>
                            </div>

                        </div>
                    </dv-border-box-12>
                </el-col>
                <el-col :span="10"><div class="grid-content ep-bg-purple" />
                    <div class="centerbigbox">
                        <div class="center-top">
                            <div class="center-top-box">
                                <el-icon><Coin /></el-icon>
                                <div>
                                    <p>公开仓库数</p>
                                    <p>{{userinfo.public_repos}}</p>
                                </div>

                            </div>
                            <div class="center-top-box">
                                <el-icon><CircleCheckFilled /></el-icon>
                                <div>
                                    <p>粉丝</p>
                                    <p>{{userinfo.followers}}</p>
                                </div>
                            </div>
                            <div class="center-top-box">
                                <el-icon><Finished /></el-icon>
                                <div>
                                    <p>跟随</p>
                                    <p>{{userinfo.following}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="center-center">
                            <p>仓库数据</p>
                            <div style="height:80%">
                                <dataviewline :option="option2"/>
                            </div>


                        </div>
                        <div class="center-bottom">
                            <dv-border-box-12>
                            <p>最近操作数据</p>
                            <div style="height:80%">
                                <el-table :data="tableData" border :cell-style="{borderColor:'#017da8'}"  :row-style="rowStyle" :header-cell-style="headerCellStyle" style="width: 100%;height:98%;background-color:#282c34;border:1px solid #017da8" >
                                    <el-table-column  prop="date" label="操作时间" align='center'  />
                                    <el-table-column prop="name" label="类型" align='center' />
                                    <el-table-column prop="state" label="操作的仓库" align='center' />
                                    <el-table-column prop="city" label="备注" align='center' />
                                </el-table>
                            </div>

                            </dv-border-box-12>
                        </div>

                    </div>

                </el-col>
                <el-col :span="7"><div class="grid-content ep-bg-purple" />
                    <dv-border-box-12 class="rightTop" style="height:60%">
                        <div class="righttopmesbox">
                            <p>新增粉丝</p>
                            <div class="followers_list">
                                <div v-for="item in userinfo.followers_list" class="followersinfo">
                                    <img :src="item.avatar_url" alt="">
                                    <p :title="item.login">{{item.login}}</p>
                                </div>

                            </div>

                        </div>
                        <div class="righttopmesbox">
                            <p>最近跟随</p>
                            <div class="followers_list  followers_list">
                                <div v-for="item in userinfo.following_list" class="followersinfo">
                                    <img :src="item.avatar_url" alt="">
                                    <p>{{item.login}}</p>
                                </div>

                            </div>
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
        <dv-loading v-else>Loading...</dv-loading>
    </dv-full-screen-container>

</template>
<script>
import dataview from '@/components/echarts/dataview-fan';
import dataviewline from '@/components/echarts/dataview-line.vue';
import { getGithubuserinfo, getGithubfollowers, getGithubfollowing, getGithubreposdata } from '@/until/apiforGithub'
import { computed, onMounted, reactive } from 'vue';

export default {
    components: {
        dataview,
        dataviewline
    },
    setup() {

        const userinfo = reactive({
            login: '',   //登录的用户名
            created_at: '',  //加入github时间
            avatar_url: '',  //用户头像url
            public_repos: '', //公开仓库数量
            following: '',     //跟随者数量
            following_list: [],//跟随着列表
            followers: '', //关注者数量
            followers_list: [{
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }, {
                avatar_url: 'https://avatars.githubusercontent.com/u/77331529?v=4',
                login: 'huangshi'
            }]      //关注者列表

        })
        const Githubreposdata = reactive({
            reposName: [],
            reposSize: [],
            reposForks: []
        })

        onMounted(() => {

            getdata()

        })
        const getdata = () => {
            getGithubuserinfo().then(res => {
                console.log(res);
                userinfo.login = res.login;
                userinfo.created_at = res.created_at;
                userinfo.avatar_url = res.avatar_url;
                userinfo.public_repos = res.public_repos;
                userinfo.followers = res.followers;
                userinfo.following = res.following;
            })

            getGithubfollowers().then(res => {

                res.forEach(item => {
                    var obj = {}
                    obj.login = item.login
                    obj.avatar_url = item.avatar_url
                    userinfo.followers_list.unshift(obj)
                })

                userinfo.followers_list = userinfo.followers_list.slice(0, 10)


            })

            getGithubfollowing().then(res => {
                res.forEach(item => {
                    var obj = {}
                    obj.login = item.login
                    obj.avatar_url = item.avatar_url
                    userinfo.following_list.unshift(obj)
                })

                userinfo.followers_list = userinfo.followers_list.slice(0, 10)
            })


            getGithubreposdata().then(res => {
                console.log(res);
                res.forEach(item => {
                    Githubreposdata.reposName.push(item.name)
                    Githubreposdata.reposSize.push(item.size)
                    Githubreposdata.reposForks.push(item.forks)
                })

            })


        }
        computed(() => {
            Githubreposdata.reposName.forEach(item => {
                option2.yAxis.data.push(item)
            })
        })


        var option1 = {
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
        var option2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                textStyle: {
                    color: '#fff'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],

                axisLabel: {
                    color: '#fff'
                },
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    color: '#fff'
                },
                data: Githubreposdata.reposName
            },
            series: [
                {
                    name: 'size',
                    type: 'bar',
                    data: Githubreposdata.reposSize
                },
                {
                    name: 'forks',
                    type: 'bar',
                    data: [3, 1]
                }
            ]
        };
        const tableData = [
            {
                date: '2016-05-03',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-08',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-06',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-07',
                name: 'Tom',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
            },
        ]
        const rowStyle = ({ row, rowIndex }) => {
            if (row) {
                return {
                    backgroundColor: '#282c34',
                    color: '#2785db',
                    borderColor: '#017da8'
                }
            }

        }

        const headerCellStyle = ({ row, rowIndex }) => {
            if (row) {
                return {
                    backgroundColor: '#053a98',
                    color: '#fff',
                    borderColor: '#017da8'
                }
            }
        }
        console.log(option2.yAxis.data);
        // alert('请将电脑分辨率吧缩放比例调整至100%，浏览器缩放比例至100%，以达到最佳显示效果')
        return {
            option1,
            option2,
            tableData,
            rowStyle,
            headerCellStyle,
            userinfo,
            Githubreposdata
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

    .followers_list {
        width: 100%;
        height: 90%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
        flex-grow: 1;
        cursor: pointer;

        .followersinfo {
            width: 80px;
            height: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 18px;


            img {
                width: 80%;
                height: 80%;
                border-radius: 50%;
            }

            p {
                width: 80px;
                font-size: 12px;
                text-align: center;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }

        &>.followersinfo:nth-child(5n) {
            margin-right: 0;
        }

    }
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
        display: flex;
        justify-content: space-between;
        align-items: center;

        &>.center-top-box:nth-child(1) {
            width: 30%;
            height: 70%;
            background-color: #152f54;
            display: flex;
            justify-content: space-evenly;
            align-items: center;


            .el-icon {
                font-size: 4rem;
                color: #ffff43;
            }

            div {
                &>p:nth-child(1) {
                    color: #fff;
                    margin-bottom: 8px;
                }

                &>p:nth-child(2) {
                    color: #ffff43;
                    font-size: 2rem;
                }
            }
        }

        &>.center-top-box:nth-child(2) {
            width: 30%;
            height: 70%;
            background-color: #152f54;
            display: flex;
            justify-content: space-evenly;
            align-items: center;


            .el-icon {
                font-size: 4rem;
                color: #25f3e6;
            }

            div {
                &>p:nth-child(1) {
                    color: #fff;
                    margin-bottom: 8px;
                }

                &>p:nth-child(2) {
                    color: #25f3e6;
                    font-size: 2rem;
                }
            }


        }

        &>.center-top-box:nth-child(3) {
            width: 30%;
            height: 70%;
            background-color: #152f54;
            display: flex;
            justify-content: space-evenly;
            align-items: center;


            .el-icon {
                font-size: 4rem;
                color: #f84a4a;
            }

            div {
                &>p:nth-child(1) {
                    color: #fff;
                    margin-bottom: 8px;
                }

                &>p:nth-child(2) {
                    color: #f84a4a;
                    font-size: 2rem;
                }
            }


        }

    }

    .center-center {
        height: 40%;
        width: 100%;
        border: 1px solid black;
        padding: 0px 8px;

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

        .dv-border-box-12 {
            padding: 0px 8px;

            .border-box-content {
                p {
                    font-size: 20px;
                    color: #5acaf1
                }
            }

        }

        /deep/ .el-table {
            --el-table-border-color: #5acaf1;
        }

    }


}
</style>