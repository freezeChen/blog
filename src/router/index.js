import Vue from 'vue'
import Router from 'vue-router'
import Aboutme from '../pages/Aboutme'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/Aboutme',
            component: Aboutme,
            name: 'Aboutme'
        }
    ]
})