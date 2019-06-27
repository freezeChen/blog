import Vue from 'vue'
import Router from 'vue-router'
import Aboutme from '../pages/Aboutme'
import Home from '../pages/Home'
import Type from '../pages/type'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/aboutme',
            component: Aboutme,
            name: 'Aboutme'
        },
        {
            path: '/home',
            component: Home,
            name: 'home'
        },
        {
            path: '/type',
            component: Type,
            name: 'type',
        }
    ]
})
