<template>
    <div class="login-container">
        <el-form class="login-form"
                ref="loginForm"
                >
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
                    v-model="loginForm.username">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    placeholder="password"
                    v-model="loginForm.password"
                    show-password>
                    <i slot="prefix" class="el-icon-lock"/>
                </el-input>
            </el-form-item>
            <el-button 
                type="primary"
                @click="handleLogin">
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
import axios from 'axios'

Vue.use(ElementUI)
export default {
    data(){
        return {
            loginForm: {
                username: '',
                password: ''
            }
        }
    },
    methods:{
        handleLogin(){
            let loginForm = this.loginForm;
            let p = new Promise((resolve, reject) => {
                let req = new XMLHttpRequest();
                let url = 'http://localhost:8080/vue-admin-template/user/login';
                let p = new Promise((resolve, reject) => {
                    req.open('post', url, true);
                    req.send(loginForm);
                    // req.send();
                    console.log(req);
                    req.onreadystatechange = function(){
                        if (req.readyState == 4 && req.status == 200){
                            // resolve(req.responseText);
                            resolve('success');
                        }else{
                            // reject(req.responseText);
                            reject('failure');
                        }
                    }
                })
            });
            p.then((value) => {
                //success
                console.log('resolve:' + value);
            }, (value) => {
                //fail
                console.log('reject:' + value);
            }).catch((error) => {
                console.log('catch:' + error);
            })
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