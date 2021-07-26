<template>
    <el-container>
        <el-aside>
            <el-menu
                class="el-menu-vertical-demo"
                background-color="#2d3a4b"
                text-color="#ffffff"
                :collapse="isCollapse"
                >
                <el-menu-item-group>
                    <el-menu-item>
                        <i class="el-icon-s-grid"></i>
                        <span>Dashboard</span>
                    </el-menu-item>
                </el-menu-item-group>
                
                <el-submenu index="0">
                    <template slot="title">
                        <i class="el-icon-s-help"></i>
                        <span>Example</span>
                    </template>
                    <el-menu-item>
                        <i class="el-icon-notebook-2"></i>
                        <span>Table</span>
                    </el-menu-item>
                    <el-menu-item>
                        <i class="el-icon-grape"></i>
                        <span>Tree</span>
                    </el-menu-item>
                </el-submenu>
                 
                <el-menu-item>
                    <i class="el-icon-s-order"></i>
                    <span>Form</span>
                </el-menu-item>

                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-s-management"></i>
                        <span>Nested</span>
                    </template>
                    <el-submenu index="1-1">
                        <template slot="title">Menu1</template>
                        <el-menu-item>Menu1-1</el-menu-item>
                        <el-submenu index="1-1-1">
                            <template slot="title">
                                Menu1-1
                            </template>
                            <el-menu-item>Menu1-2-1</el-menu-item>
                            <el-menu-item>Menu1-2-2</el-menu-item>
                        </el-submenu>
                        <el-menu-item>Menu1-3</el-menu-item>
                    </el-submenu>
                    <el-menu-item>
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
        </el-aside>

        <el-main>
            <div class="navbar">
                <div class="folder">
                    <i class="el-icon-s-fold"></i>
                </div>
                <el-breadcrumb>
                    <el-breadcrumb-item>
                        Dashboard
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
            </div>
        </el-main>
    </el-container>
</template>

<script>
import router from '../router/index'
export default {
    data(){
        return {
            isCollapse: false
        }
    },
    router: router
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