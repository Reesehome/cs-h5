import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import ServiceLists from '@/components/service/ServiceLists'
import ServiceDetail from '@/components/service/ServiceDetail'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        }, {
            path: '/service/ServiceLists',
            name: 'ServiceLists',
            component: ServiceLists
        },{
            path: '/service/ServiceDetail',
            name: 'ServiceDetail',
            component: ServiceDetail
        }
    ]
})
