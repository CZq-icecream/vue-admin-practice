<template>
    <el-menu
        class="el-menu-vertical-demo"
        background-color="#2d3a4b"
        text-color="#ffffff"
        :collapse="isCollapse" 
        :router="true"
        >
        <el-menu-item-group>
            <el-menu-item index="/dashboard">
                <i class="el-icon-s-grid"></i>
                <span>Dashboard</span>
            </el-menu-item>
        </el-menu-item-group>
        
        <el-submenu index="/example">
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
            
        <el-menu-item index="/form">
            <i class="el-icon-s-order"></i>
            <span>Form</span>
        </el-menu-item>

        <el-submenu index="/nested">
            <template slot="title">
                <i class="el-icon-s-management"></i>
                <span>Nested</span>
            </template>
            <el-submenu index="/nested/menu1">
                <template slot="title">Menu1</template>
                <el-menu-item index="/nested/menu1/menu1-1">
                    Menu1-1
                </el-menu-item>
                <el-submenu index="/nested/menu1/menu1-2">
                    <template slot="title">
                        Menu1-2
                    </template>
                    <el-menu-item index="/nested/menu1/menu1-2/menu1-2-1">
                        Menu1-2-1
                    </el-menu-item>
                    <el-menu-item index="/nested/menu1/menu1-2/menu1-2-2">
                        Menu1-2-2
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="/nested/menu1/menu1-3">
                    Menu1-3
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="/nested/menu2">
                Menu2
            </el-menu-item>
        </el-submenu>

        <el-menu-item-group>
            <el-menu-item>
                <i class="el-icon-link"></i>
                <span>External Link</span>
            </el-menu-item>
        </el-menu-item-group>
    </el-menu>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
    data(){
        return {
            isCollapse: false,
        }
    }
}
</script>

<style>

</style>