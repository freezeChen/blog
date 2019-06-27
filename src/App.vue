<template>
    <div id="app">

        <el-container>
            <el-header>
                <top></top>
            </el-header>
            <el-container id="main">
                <el-main>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </el-main>
                <el-aside class="aside">
                    <h1>侧边栏</h1>
                </el-aside>
            </el-container>
        </el-container>


    </div>
</template>

<script>
    import header from './components/header'
    import ElPager from "element-ui/packages/pagination/src/pager"

    export default {
        name: 'app',
        components: {
            "top": header
        },
    }
</script>

<style>

    body {
        background-color: lightgray;
    }

    #main {
        margin-top: 40px;
    }

    .aside {
        background-color: azure;
        height: 100%;
        padding: 20px;

    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        overflow-x: hidden;
        color: #444;
    }


</style>
