<template>
    <el-menu
        class="el-menu-vertical-demo"
        background-color="#2d3a4b"
        text-color="#ffffff"
        :isCollapse="isCollapse"
        :collapse="isCollapse"
        menu-trigger="click"
        :router="true"
        >

        <SidebarItem v-for="route in routes" 
            :key="route.path"
            :item="route"
            :base-path="route.path"/>
        <!-- <el-submenu index="/example">
            <template slot="title">
                <i class="el-icon-s-help"></i>
                <span>Example</span>
            </template>
            <el-menu-item index="/example/table">
                <i class="el-icon-notebook-2"></i>
                <span>Table</span>
            </el-menu-item>
            <el-menu-item index="/example/tree">
                <i class="el-icon-grape"></i>
                <span>Tree</span>
            </el-menu-item>
        </el-submenu>
        <el-menu-item index="/example/tree">
            <i class="el-icon-grape"></i>
            <span>Tree</span>
        </el-menu-item> -->
    </el-menu>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SidebarItem from './SidebarItem'

export default {
    components:{
        SidebarItem
    },
    props: {
        isCollapse: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        routes(){
            return this.$router.options.routes;
        }
    }
}
</script>

<style>
.el-menu:not(.el-menu--collapse){
    width: 300px;
}



</style>