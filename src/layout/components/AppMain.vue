<template>
    <div class="navbar">
        <div class="folder">
            <i class="el-icon-s-fold"></i>
        </div>
        <el-breadcrumb>
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
                <span v-if="index == levelList.length - 1">{{item.meta.title}}</span>
                <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="right-menu">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"/>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Home</el-dropdown-item>
                    <el-dropdown-item>Github</el-dropdown-item>
                    <el-dropdown-item>Docs</el-dropdown-item>
                    <el-dropdown-item divided>
                        Logout
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <router-view/>
    </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default {

}
</script>

<style>
.navbar{
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #ffffff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

.folder{
    float: left;
    height: 100%;
    line-height: 46px;
    cursor: pointer;
    vertical-align: middle;
    padding: 0px 15px;
}

.el-breadcrumb{
    float: left;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
}

.right-menu{
    float: right;
    height: 100%;
}

.el-dropdown-link{
    cursor: pointer;
    line-height: 50px;
}

.el-dropdown-link img{
    width: 40px;
    height: 40px;
    margin-top: 5px;
}
</style>