import { createRouter, createWebHistory } from 'vue-router';

import HomeEn from '../components/en/AdultsLanding.vue';
import HomeAr from '../components/ar/AdultsLanding.vue';
import CartEn from '../components/en/CartPage.vue';
import CartAr from '../components/ar/CartPage.vue';

const englishRoutes = [
  { path: '/en', name: 'HomeEn', component: HomeEn },
  { path: '/en/cart', name: 'CartEN', component: CartEn }
];

const arabicRoutes = [
  { path: '/', name: 'HomeAr', component: HomeAr },
  { path: '/ar/cart', name: 'CartAr', component: CartAr }
];

const routes = [
  ...englishRoutes,
  ...arabicRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;