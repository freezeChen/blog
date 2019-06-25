<template>
    <div id="about">
        <zhead></zhead>
    </div>
</template>

<script>
    import head from '../components/header'

    export default {
        name: "Aboutme",
        components: {
            'zhead': head,
        },
    }
</script>

<style scoped>
    #about {
        background: red;
        height: 30%;
    }
</style>