import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Table from '../views/example/Table'
import Tree from '../views/example/Tree'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/example',
            children: [
                {
                    path: 'table',
                    component: Table
                },
                {
                    path: 'tree',
                    component: Tree
                }
            ]
        }
    ]

})