import { createRouter, createWebHistory } from 'vue-router'
import Game from '../views/Game.vue'
import Pres from '../views/Pres.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pres',
      component:Pres 
    },
    {
      path: '/game',
      name: 'game',
      component:Game
    }
  ]
})

export default router