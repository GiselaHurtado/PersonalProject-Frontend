import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import Home from '@/views/HomeView.vue';
import Dashboard from '@/views/DashboardView.vue';
import Appointment from '@/views/AppointmentView.vue';
import Services from '@/components/Services.vue';
import Contact from '@/components/Contact.vue';
import About from '@/components/About.vue';
import LoginView from '@/views/LoginView.vue';  
import RegisterView from '@/views/RegisterView.vue';  

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/services', name: 'Services', component: Services },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/appointment', name: 'Appointment', component: Appointment, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else if (authStore.isAuthenticated) {
    const userRole = authStore.role;
    if (userRole === 'ROLE_ADMIN' && to.path !== '/dashboard') {
      next('/dashboard');
    } else if (userRole === 'ROLE_USER' && to.path !== '/appointment') {
      next('/appointment');
    } else {
      next();
    }
  } else {
    next(); // Permitir navegación si no requiere autenticación
  }
});

export default router;
