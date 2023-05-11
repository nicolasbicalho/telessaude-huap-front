import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/page/Login'),
    },
    {
      path: '/',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '/teleinterconsulta',
          name: 'teleinterconsulta',
          component: () => import('@/views/About.vue'),
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
// 	document.body.classList.add('app-loading')
// 	const token = auth.getToken()
// 	if (to.path !== '/login' && !token) {
// 		setTimeout(() => next('/login'), 10)
// 	} else if (to.path === '/login' && token) {
// 		setTimeout(() => next('/'), 10)
// 	} else {
// 		setTimeout(() => next(), 10)
// 	}
// })

export default router;
