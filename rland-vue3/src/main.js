
import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'

import './assets/css/icon.css'

import Layout from './components/inc/Layout.vue'
import Index from './components/Index.vue'
import MenuList from './components/menu/List.vue'
import MenuDetail from './components/menu/Detail.vue'
import AdminIndex from './components/admin/Index.vue'
import AdminLayout from './components/admin/inc/Layout.vue'



const router = createRouter({
    history: createWebHistory(),
    routes:[
      {
        path:"/", children:[
        {path:"index",component:Index},
        {path:"menu/list",component:MenuList},
        {path:"menu/detail",component:MenuDetail}
      ],component:Layout
    },
      {
        path:"/admin",children:[
          {path:"index",component:AdminIndex}
        ],component:AdminLayout
      }

        // {path:"/",component:Layout},
        // {path:"/index",component:Index},
        // {path:"/menu/list",component:MenuList},
        // {path:"/menu/detail",component:MenuDetail},
        // {path:"/admin/detail",component:MenuDetail},
    ],
  })

createApp(App)
.use(router)
.mount('#app')
