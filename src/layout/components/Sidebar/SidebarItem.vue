<template>
    <!-- https://blog.csdn.net/qq_34452824/article/details/106546478 -->
    <!-- element-ui的bug -->
    <!-- https://github.com/ElemeFE/element/issues/19760 -->
    <!-- 尝试过渲染函数也没有作用，改用CSDN上该博主的方法解决 -->
    <div>
        <!-- 不显示在导航栏的标签 -->
        <span v-if="isHidden(item)" style="display: none">
        </span>
        <!-- 如果当前路由有多于一个hidden不为true的children,就有子菜单 -->
        <el-submenu v-else-if="hasSubmenu(item)" :index="resolvePath(showingItem)">
            <template slot="title">
                <i v-if="hasIcon(showingItem)" :class="showingItem.meta.icon"></i>
                <span>{{showingItem.meta.title}}</span>
            </template>
            <SidebarItem v-for="route in item.children"
                :key="route.path"
                :item="route"
                :base-path="resolvePath(showingItem)"
                />
        </el-submenu>
        <!-- 否则就是单纯的菜单选项 -->
        <!-- 如果当前路由的path为外链，要用a标签做导航 -->
        <a v-else-if="isExternal(showingItem)" :href="showingItem.path" target="_blank">
            <el-menu-item class="el-menu-item-style">    
                <!-- <template slot="title"> -->
                    <i v-if="hasIcon(showingItem)" :class="showingItem.meta.icon"></i>
                    <span>{{showingItem.meta.title}}</span>
                <!-- </template> -->
            </el-menu-item>
        </a>
        <!-- 否则可以用el-menu-item做导航 -->
        <el-menu-item v-else :index="resolvePath(showingItem)">
            <i v-if="hasIcon(showingItem)" :class="showingItem.meta.icon"></i>
            <span>{{showingItem.meta.title}}</span>
        </el-menu-item>
    </div>
</template>

<script>
import path from 'path'
import Vue from 'vue'
import { isExternal as util_isExternal } from '@/utils/validate'

export default {
    name: 'SidebarItem',
    props: {
        item: { //router中的每一条route
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            required: true,
            default: ''
        }
    },
    data(){
        return {
            showingItem: null, //当前要展示的内容数据
                                //showingItem{
                                //  path: ''     路径
                                //  hidden: ''
                                //  component: ''
                                //  redirect: ''
                                //  children: ''
                                //  meta: {
                                //      icon: ''     图标class，可选项
                                //      title: ''    导航栏标题，必输项
                                //  }
                                //}
        }
    },
    methods: {
        isHidden(item){
            return item.hidden != undefined && item.hidden;
        },
        hasSubmenu(parent){
            if (parent.hidden){
                return false;
            }
            let children = [];
            if (parent.children){
                children = parent.children.filter((item) => {
                    if (item.hidden){ return false; }
                    return item.hidden == undefined || item.hidden != true;
                })
            }
            this.showingItem = children.length > 1 || children.length == 0 ? parent : children[0];
            this.icon = this.showingItem.meta.icon;
            return children.length > 1;
        },
        hasIcon(showingItem){
            console.log(showingItem.path);
            console.log(showingItem.meta.icon);
            return showingItem.meta.icon != undefined;
        },
        resolvePath(showingItem){
            if (showingItem.path != undefined){
                return path.resolve(this.basePath, showingItem.path);
            }else{
                return this.basePath;
            }
        },
        isExternal(showingItem){
            return util_isExternal(showingItem.path);
        }
    }
}
</script>

<style>
.el-menu-item.is-active{
    color: #909399;
}

a span{
    color: #ffffff;
}

.el-menu--collapse > div > .el-submenu > .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
.el-menu--collapse > div > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
    display: none;
}

/* 去掉导航栏折叠后递归生成的没有菜单的导航栏的文字 */
.el-menu--collapse > div > .el-menu-item span{
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
/* 去掉导航栏折叠后外部链接的导航栏的文字 */
.el-menu--collapse > div > a > .el-menu-item > span{
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
</style>