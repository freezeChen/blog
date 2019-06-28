<template>
    <div id="app">

        <el-container>
            <el-header>
                <top></top>
            </el-header>
            <el-container id="main">
                <el-main class="home">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </el-main>
                <el-aside class="aside">
                    <tab/>
                </el-aside>
            </el-container>
        </el-container>


    </div>
</template>

<script>
    import header from './components/header'
    import Tab from "./pages/tab"

    export default {
        name: 'app',
        components: {
            Tab,
            "top": header
        },
    }
</script>

<style>

    body {
        background-color: #eee;
    }

    #main {
        margin-top: 40px;
    }

    .aside {
        height: 100%;
        padding: 20px;

    }

    .title-text {
        color: #999;
        letter-spacing: 2px;
        text-shadow: 0 1px #fff;
        font-weight: bold;
        line-height: 1em;
        font-family: inherit;
        font-style: normal;
        padding-right: 8px;
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
