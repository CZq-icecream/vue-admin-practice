import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Table from '../views/example/Table'
import Tree from '../views/example/Tree'
import Form from '../views/Form'

import Layout from '@/layout/index'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    component: Dashboard,
                    meta: {title: 'Dashboard'}
                }
            ]
        },
        {
            path: '/example',
            component: Layout,
            meta: {title: 'Example'},
            children: [
                {
                    path: 'table',
                    component: Table,
                    meta: {title: 'Table'}
                },
                {
                    path: 'Tree',
                    component: Tree,
                    meta: {title: 'Tree'}
                }
            ]
        },
        {
            path: '/form',
            component: Layout,
            meta: {title: 'Form'},
            children: [
                {
                    path: 'index',
                    component: Form,
                }
            ]
        },
        {
            path: '/nested',
            component: Layout,
            meta: {title: 'Nested'},
            children: [
                {
                    path: 'menu1',
                    component: () => import('../views/nested/menu1/index'),
                    meta: {title: 'Menu1'},
                    children: [
                        {
                            path: 'menu1-1',
                            component: () => import('../views/nested/menu1/menu1-1/index'),
                            meta: {title: 'Menu1-1'}
                        },
                        {
                            path: 'menu1-2',
                            component: () => import('../views/nested/menu1/menu1-2/index'),
                            meta: {title: 'Menu1-2'},
                            children: [
                                {
                                    path: 'menu1-2-1',
                                    component: () => import('../views/nested/menu1/menu1-2/menu1-2-1/index'),
                                    meta: {title: 'Menu1-2-1'}
                                },
                                {
                                    path: 'menu1-2-2',
                                    component: () => import('../views/nested/menu1/menu1-2/menu1-2-2/index'),
                                    meta: {title: 'Menu1-2-2'}
                                }
                            ]
                        },
                        {
                            path: 'menu1-3',
                            component: () => import('../views/nested/menu1/menu1-3/index'),
                            meta: {title: 'Menu1-3'}
                        },
                    ]
                },
                {
                    path: 'menu2',
                    component: () => import('../views/nested/menu2/index'),
                    meta: {title: 'Menu2'}
                }
            ]
        }
    ]

})