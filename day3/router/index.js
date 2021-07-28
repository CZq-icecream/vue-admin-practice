import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Table from '../views/example/Table'
import Tree from '../views/example/Tree'
import Form from '../views/Form'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Dashboard,
            children: [
                {
                    path: '/form',
                    component: Form
                },
                {
                    path: '/example/table',
                    component: Table
                },
                {
                    path: '/example/tree',
                    component: Tree
                },
                {
                    path: '/nested',
                    component: () => import('../views/nested/index'),
                    children: [
                        {
                            path: 'menu1',
                            component: () => import('../views/nested/menu1/index'),
                            children: [
                                {
                                    path: 'menu1-1',
                                    component: () => import('../views/nested/menu1/menu1-1/index')
                                },
                                {
                                    path: 'menu1-2',
                                    component: () => import('../views/nested/menu1/menu1-2/index'),
                                    children: [
                                        {
                                            path: 'menu1-2-1',
                                            component: () => import('../views/nested/menu1/menu1-2/menu1-2-1/index')
                                        },
                                        {
                                            path: 'menu1-2-2',
                                            component: () => import('../views/nested/menu1/menu1-2/menu1-2-2/index')
                                        }
                                    ]
                                },
                                {
                                    path: 'menu1-3',
                                    component: () => import('../views/nested/menu1/menu1-3/index')
                                },
                            ]
                        },
                        {
                            path: 'menu2',
                            component: () => import('../views/nested/menu2/index')
                        }
                    ]
                }
            ]
        },
        
        
        {
            path: '/dashboard',
            component: Dashboard
        },
        
    ]

})