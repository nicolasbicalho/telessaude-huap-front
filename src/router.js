import { createRouter, createWebHistory } from 'vue-router';
import auth from './lib/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
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
          component: () => import('@/views/Appointments.vue'),
          // children: [
          //   {
          //     path: '/chamada/:meetId',
          //     name: 'chamada',
          //     component: () => import('@/views/AppointmentCall.vue'),
          //   },
          // ],
        },
        {
          path: '/chamada/:meetId',
          name: 'chamada',
          component: () => import('@/views/AppointmentCall.vue'),
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
