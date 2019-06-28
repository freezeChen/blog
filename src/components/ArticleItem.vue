<template>

    <div>

        <el-row class="article-time">
            <i class="date title-text">{{item.Time}}</i>


            <i class="language title-text">
                &bull; {{item.Language}}
            </i>
            <i class="author title-text">
                By {{item.Author}}
            </i>
        </el-row>

        <el-card v-html="item.Detail">
            <!--          {{item.Detail}}-->

        </el-card>


    </div>


</template>

<script>
    export default {
        name: "ArticleItem",
        props: ["item"],

    }
</script>

<style scoped>


    .language {
        text-transform: uppercase;
    }

    .author {
        color: #ccc;
    }

    .article-time {
        padding-left: 10px;
        margin-bottom: 20px;


    }

    .article-title {
    }

    .article-end {
    }
</style>
