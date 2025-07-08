import { createRouter, createWebHistory } from 'vue-router'
import Sobre from './pages/Sobre.vue'
import Projetos from './pages/Projetos.vue'

const routes = [
    { path: '/', component: Sobre },
    { path: '/projetos', component: Projetos },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
