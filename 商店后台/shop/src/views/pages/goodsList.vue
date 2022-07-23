<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="page-content">
            <div class="flex">
                <div class="input-box">
                    <el-input v-model="searchParams.query" placeholder="输入关键字" class="input-with-select">
                        <template #append>
                            <el-button @click="getGoodsList">
                                <el-icon>
                                    <Search />
                                </el-icon>
                            </el-button>
                        </template>
                    </el-input>
                </div>
            </div>
            <el-table :data="goodsList" style="width: 100%" height="60vh">
                <el-table-column prop="goods_name" label="商品名"  />
                <el-table-column prop="goods_number" label="商品数量" />
                <el-table-column prop="goods_price" label="商品价格" />
                <el-table-column prop="goods_weight" label="商品重量" />
                <el-table-column prop="goods_state" label="商品状态">
                    <template #default="scope">
                    <p>
                        {{switchState(scope.row.goods_state)}}
                    </p>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pageNums">
            <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4"
                @update:current-page="handleCurrentChange" @current-change="getGoodsList" />
        </div>
    </div>

</template>


<script>
import { reactive, toRefs, } from 'vue'
import { goodsListApi } from "../../util/request.js"


export default {
    name: "goods",
    setup() {
        const data = reactive({
            goodsList: [],
            searchParams: {
                query: "",
                pagesize: "5",
                pagenum: 1
            },
        })

        const getGoodsList = () => {
            goodsListApi(data.searchParams).then(res => {
                if (res.data) {
                    data.goodsList = res.data.goods
                    console.log(res);
                }
            })

        }
        const handleCurrentChange = (val) => {
            data.searchParams.pagenum = val
            // console.log(val);

        }
        const switchState = state=>{
            switch(state){
                case 0:
                    return "未通过"
                    break;
                case 1:
                    return "审核中"
                    break;
                case 2:
                    return "已审核"
                    break;
            }
        }

        getGoodsList()
        return {
            ...toRefs(data),
            getGoodsList,
            handleCurrentChange,
            switchState
        }

    }
}
    






</script>






