<template>
    <div>
        <div class="headBack">
            <div class="head">
                <el-menu default-active="/home" mode="horizontal" background-color="#383a3a" @select="handlerSelect"
                         text-color="#888" active-text-color="#fff">

                    <el-menu-item class="menu-item" index="1"> 首页</el-menu-item>

                    <el-submenu index="2">
                        <template slot="title">分类</template>
                        <el-menu-item index="2-1">golang</el-menu-item>
                        <el-menu-item index="2-2">android</el-menu-item>
                        <el-menu-item index="2-3">java</el-menu-item>
                    </el-submenu>
                    <el-menu-item class="menu-item" index="3"> 关于我</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "myHeader",
        methods: {
            //页面跳转
            handlerSelect(key, keyPath) {
                let path;
                let param;
                switch (key) {
                    case "1":
                        path = "/home"
                        break
                    case "3":
                        path = "/aboutme"
                        break
                    case "2-1":
                        path = "/type"
                        param = {"type": 1}
                        break
                    case "2-2":
                        path = "/type"
                        param = {"type": 2}
                        break
                    case "2-3":
                        path = "/type"
                        param = {"type": 2}
                        break
                }
                this.$router.push({
                    path: path,
                    query: param,
                })
            },
        }
    };
</script>

<style scoped>
    .headBack {
        width: 100%;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 100;
    }
</style>
