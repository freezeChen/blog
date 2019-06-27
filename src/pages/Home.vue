<template>
    <div>

        <h1>home</h1>
    </div>
</template>

<script>

    import {getMainList} from '../api/api'

    export default {
        name: "Home",
        data() {
            return {
                'page': 1,
                'size': 10,
            }
        },


        created() {
            let that = this

            getMainList(that.page, that.size, (data) => {
                console.log(data);
            })
        },
        methods: {}
    }
</script>

<style scoped>


</style>
