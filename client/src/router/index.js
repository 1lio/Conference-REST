import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {title: 'Главная', layout: 'main'},
    component: () => import('../views/Index.vue')
  },
  {
    path: '/events/',
    name: 'Events',
    meta: {title: 'События', layout: 'main'},
    component: () => import('../views/Events.vue'),
    children: [
      {
        path: 'all',
        name: 'allEvents',
        meta: {tile: 'Все события', layout: 'main'},
        component: () => import('../views/allEvents.vue')
      },
      {
        path: 'add',
        name: 'addEvents',
        meta: {tile: 'Добавить событие', layout: 'main'},
        component: () => import('../views/addEvents.vue')
      },
      {
        path: 'complete',
        name: 'completeEvents',
        meta: {tile: 'Заершенные', layout: 'main'},
        component: () => import('../views/completeEvents.vue')
      },
      {
        path: 'archive',
        name: 'archiveEvents',
        meta: {tile: 'Архив', layout: 'main'},
        component: () => import('../views/archiveEvents.vue')
      }
    ]
  },
  {
    path: '/members',
    name: 'Members',
    meta: {title: 'Участники', layout: 'main'},
    component: () => import('../views/Members.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    meta: {title: 'Календарь', layout: 'main'},
    component: () => import('../views/Calendar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
