<template>
    <div>

        <h1>home</h1>
        <div v-for="(val,i) in item">
        {{val.Title}} {{val.Detail}}
        </div>

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
                'item': [],
            }
        },

        created() {
            let that = this

            getMainList(that.page, that.size, (data) => {
                that.item = data
                console.log(data);
            })
        },
        methods: {}
    }
</script>

<style scoped>


</style>
