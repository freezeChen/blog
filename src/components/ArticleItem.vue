<template>

    <div class="article-time">

        <h1>{{time}} {{language}} {{author}}</h1>
        <div>
            :before
            {{language}}
        </div>
    </div>

    <div class="article-title">

    </div>

    <div class="article-end">

    </div>


</template>

<script>
    export default {
        name: "ArticleItem",
        data() {
            return {
                time: '',
                language: '',
                author: '',
            }
        }
    }
</script>

<style scoped>

</style>
