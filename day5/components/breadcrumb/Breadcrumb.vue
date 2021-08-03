<template>
    <el-breadcrumb>
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
            <span v-if="index == levelList.length - 1">{{item.meta.title}}</span>
            <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    data(){
        return {
            levelList: []
        }
    },
    watch: {
        $route(){
            this.getLevelList();
        }
    },
    methods: {
        handleLink(item){
            console.log(item);
            console.log(item.path);
            this.$router.replace(item.path)
        },
        getLevelList(){
            let matched = this.$route.matched.filter(
                (item) => {
                    return (item.meta && item.meta.title);
                }
            )
            let firstRoute = matched[0];
            if (!firstRoute.meta || firstRoute.meta.title !== 'Dashboard'){
                console.log(firstRoute.meta);
                console.log(firstRoute.meta.title);
                matched.unshift({
                    path: '/dashboard',
                    meta: {title: 'Dashboard'}
                })
            }
            // console.log(matched);
            this.levelList = matched.filter(
                (item) => item.meta && item.meta.title
            )
        }
    },
    mounted() {
        this.getLevelList();
    }
}
</script>

<style>

</style>