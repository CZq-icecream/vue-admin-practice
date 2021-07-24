<template>
    <div class="login-container">
        <el-form class="login-form">
            <div class="title-container">
                <h3 class="title">Login Form</h3>
            </div>
            <el-form-item>
                <!-- 可以通过 prefix-icon 和 suffix-icon 属性在
                 input 组件首部和尾部增加显示图标，
                 也可以通过 slot 来放置图标。 -->
                <el-input
                    placeholder="admin"
                    prefix-icon="el-icon-user-solid"
                    >
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    v-model="password"
                    placeholder="password"
                    show-password>
                    <i slot="prefix" class="el-icon-lock"/>
                </el-input>
            </el-form-item>
            <el-button 
                type="primary"
            >
                Login
            </el-button>
            <div class="tips">
                <span style="margin-right:20px;">username: admin</span>
                <span> password: any</span>
            </div>
        </el-form>
    </div>

</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
export default {
    data(){
        return {
            password: ''
        }
    }
}
</script>

<style>
.login-container{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
}

.login-form{
    width: 50%;
    margin: 0 auto;
    padding: 160px 35px 0px 0px;
    vertical-align: middle;
}


.title{
    color: #ffffff;
    text-align: center;
    margin: 0px auto 40px auto;
    font-weight: bold;
    font-size: 26px;
}

.el-button{
    width:100%;
    margin-bottom:30px;
}

.tips{
    color: #ffffff;
    margin-bottom: 20px;
}

</style>