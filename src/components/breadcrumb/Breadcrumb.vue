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
            // console.log(this.$route);
            // this.levelList = this.$route.matched.filter(
            //     (item) => {
            //         return (item.meta && item.meta.title);
            //     }
            // )
            let matched = this.$route.matched.filter(
                (item) => {
                    return (item.meta && item.meta.title);
                }
            )
            console.log(matched);
            let firstRoute = matched[0];
            if (firstRoute.name !== 'Dashboard'){
                matched.unshift([{
                    path: '/dashboard',
                    meta: {title: 'Dashboard'}
                }])
            }
            console.log(matched);
            this.levelList = matched.filter(
                (item) => item.meta && item.meta.title
            )
        }
    },
    methods: {
        handleLink(item){
            console.log(item);
            console.log(item.path);
            this.$router.replace(item.path)
        }
    },
}
</script>

<style>

</style>