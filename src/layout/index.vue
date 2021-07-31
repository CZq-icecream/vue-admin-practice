<template>
    <el-container>
        <el-aside>
            <SideBar/>
        </el-aside>
        <el-main>
            <AppMain/>
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
    }
}
</script>

<style>

</style>