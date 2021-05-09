import Vue from 'vue'
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/prepare-for-war',
    name: 'prepare-for-war',
    redirect: {
      name: 'attack'
    },
    component: () => import('../views/prepare_for_war/PrepareForWarLayot.vue'),
    children: [{
      path: 'equipment',
      name: 'equipment',
      component: () => import('../views/prepare_for_war/equipment/Equipment.vue'),
      children: [
        {
          path: 'attack',
          name: 'attack',
          component: () => import('../views/prepare_for_war/equipment/Attack.vue')
        },
        {
          path: 'magic',
          name: 'magic',
          component: () => import('../views/prepare_for_war/equipment/Magic.vue')
        },
        {
          path: 'defense',
          name: 'defense',
          component: () => import('../views/prepare_for_war/equipment/Defense.vue')
        },
        {
          path: 'mobile-field',
          name: 'mobile-field',
          component: () => import('../views/prepare_for_war/equipment/MobileField.vue')
        },
        {
          path: 'wondering',
          name: 'magic',
          component: () => import('../views/prepare_for_war/equipment/Wondering.vue')
        },
      ]
    }
    ]


  },
  {
    path: '*',
    component: () => import('../views/404/404.vue')
  }
]

const router = new VueRouter({
  routes
})


export default router
