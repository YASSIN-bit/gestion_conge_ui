import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/loginView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      name:"loginView",
      component : LoginView
    }
  ]
})

export default router
