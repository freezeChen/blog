<template>
    <div id="app">
        <router-link to="/Aboutme">关于我</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width:100%;
        overflow-x: hidden;
        -webkit-overflow-x: hidden;
        color: #444;
    }


</style>
