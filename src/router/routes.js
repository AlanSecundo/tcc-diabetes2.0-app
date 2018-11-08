
const routes = [
  {
    path: '/consultas',
    component: () => import('pages/HistoricoConsultas.vue')
  },
  {
    path: '/alarmes',
    component: () => import('pages/Alarme.vue')
  },
  {
    path: '/home',
    component: () => import('pages/Home.vue')
  },
  {
    path: '/remedios',
    component: () => import('pages/Remedios.vue')
  },
  {
    path: '/cadastro',
    component: () => import('pages/Cadastro.vue')
  },
  {
    path: '/hemoglobina',
    component: () => import('pages/Hemoglobina.vue')
  },
  {
    path: '/',
    component: () => import('pages/Login.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
