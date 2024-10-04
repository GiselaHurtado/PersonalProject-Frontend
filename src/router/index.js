import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Home from '@/views/HomeView.vue';
import Dashboard from '@/views/DashboardView.vue';
import Appointment from '@/views/AppointmentView.vue';
import Services from '@/components/Services.vue';
import Contact from '@/components/Contact.vue';
import About from '@/components/About.vue';
import LoginView from '@/views/LoginView.vue';  // Importa la vista de login
import RegisterView from '@/views/RegisterView.vue';  // Importa la vista de registro

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,  // Usa la vista de login
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,  // Usa la vista de registro
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
