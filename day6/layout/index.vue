<template>
    <el-container>
        <!-- 给el-side添加width属性，防止隐藏和显示导航栏时出现bug -->
        <!-- 也可以给SideBar添加宽度属性（可以参考官网的demo） -->
        <!-- https://juejin.cn/post/6844903815527956494 -->
        <el-aside width="initial">
            <SideBar :isCollapse="isCollapse"/>
        </el-aside>
        <el-main>
            <AppMain v-on:handleFolder="handleFolder"/>
            <transition mode="out-in">
                <router-view/>
            </transition>
        </el-main>
    </el-container>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'

Vue.use(ElementUI)

export default {
    name: 'Layout',
    components: {
        SideBar,
        AppMain
    },
    data(){
        return {
            isCollapse: false
        }
    },
    methods: {
        handleFolder(isCollapse){
            this.isCollapse = isCollapse;
        }
    }
}
</script>

<style>

</style>