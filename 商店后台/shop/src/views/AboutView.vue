<template>
  <div>
    <h1>vue3 的生命周期</h1>
    <p id="dom">{{ msg }} {{ num }}</p>
    <button @click="handleclick">click me</button>
    <hr>
    <input type="text" v-model="username">
    <textarea name="" id="" cols="30" rows="10" v-model="userinput"></textarea>
    <p>{{ username }}---{{ userinput }}</p>
    <button @click="submit">提交</button>


    <br>


    <input type="text" v-model="username">
    <br>
    <input type="text" v-model="userphone" @focus="handlefoucs" @blur="handleiblur" @input="handleinput">
    <br>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";

export default {
  name: "about",
  setup() {
    const data = reactive({
      msg: "你好",
      msg2: "helloworld",
      num: 0,
      username: "",
      userinput: "",
      userphone: ""

    })

    const handleclick = () => {
      alert("你好")
    }

    const submit = () => {
      alert(`${data.username}的建议是${data.userinput}`)
    }

    const handlefoucs = () => {
      console.log("获取焦点")
    }
    const handleiblur = () => {
      console.log("失去焦点");
      if (!data.userphone) {
        alert("手机号必填")
      }

    }

    const handleinput =()=>{
      //验证手机号

      if(/^[1][3,4,5,7,8][0-9]{9}$/.test(data.userphone)){
        console.log("不符合手机号");
        
      }
    }

    onBeforeMount(() => {
      console.log("onBeforeMount", document.querySelector("#dom"))

    })
    onMounted(() => {
      console.log("onMounted", document.querySelector("#dom"))
      setTimeout(() => {
        data.msg = "hello"
        data.msg = "hello"
      }, 2000)

    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    })

    onUpdated(() => {
      console.log("onupdated");
      // data.num +=1
    })

    return {

      ...toRefs(data),
      handleclick,
      submit,
      handlefoucs,
      handleiblur, handleinput

    }
  }



}


</script>
