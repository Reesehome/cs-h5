import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import ServiceLists from '@/components/service/ServiceLists'
import ServiceDetail from '@/components/service/ServiceDetail'
import ServiceBaseInfo from '@/components/service/ServiceBaseInfo'
import ServiceAbnInfo from '@/components/service/ServiceAbnInfo'
import HomeIndex from '@/components/home/Index'
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
            component: ServiceDetail,
            children:[
                {path: 'ServiceBaseInfo', name: 'ServiceBaseInfo',component: ServiceBaseInfo},
                {path: 'ServiceAbnInfo', name: 'ServiceAbnInfo',component: ServiceAbnInfo},
            ]
        },{
            path: '/home/index',
            name: 'HomeIndex',
            component: HomeIndex,
        }
    ]
})
