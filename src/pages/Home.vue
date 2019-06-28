<template>
    <div>
        <div v-for="(val) in item">
            <item v-bind:item="val"></item>
        </div>

        <div class="page-index">
            <el-pagination :span="24"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page.sync="currentPages"
                           :page-size="100"
                           layout="prev, pager, next, jumper"
                           :total="1000">
            </el-pagination>
        </div>

    </div>
</template>

<script>

    import {getMainList} from '../api/api'
    import ArticleItem from '../components/ArticleItem'

    export default {
        name: "Home",
        components: {
            'item': ArticleItem
        },
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

            })
        },
        methods: {
            handleSizeChange(size) {
                console.log('handleSizeChange'+s)
                this.size = size
            },

            handleCurrentChange(page) {
                console.log('handleCurrentChange'+page)

                this.page = page
                let that = this
                getMainList(that.page, that.size, (data) => {
                    that.item = data

                })
            },
            currentPages(page) {
                console.log('currentPages'+page)

            }
        }
    }
</script>

<style scoped>
    .page-index {
        margin-top: 60px;
        float: right;
    }

</style>
