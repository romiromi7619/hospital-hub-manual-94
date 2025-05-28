import { renderHome } from './pages/Home.js';
import { renderLogin } from './pages/Login.js';
import { renderDashboard } from './pages/Dashboard.js';
import { renderAppointments } from './pages/Appointments.js';
import { renderPurchase } from './pages/Purchase.js';
import { renderInsurance } from './pages/Insurance.js';
import { renderRegister } from './pages/Register.js';
import { renderNotFound } from './pages/NotFound.js';
import { getAuth } from './auth.js';

const routes = {
  '/': renderHome,
  '/login': renderLogin,
  '/register': renderRegister,
  '/dashboard': renderDashboard,
  '/appointments': renderAppointments,
  '/purchase': renderPurchase,
  '/insurance': renderInsurance,
  '/404': renderNotFound
};

export function initRouter() {
  window.addEventListener('popstate', handleRoute);
  handleRoute();

  // Handle navigation links
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      const path = e.target.getAttribute('href');
      navigateTo(path);
    }
  });
}

export function navigateTo(path) {
  history.pushState(null, null, path);
  handleRoute();
}

function handleRoute() {
  const path = window.location.pathname;
  const auth = getAuth();
  const renderer = routes[path] || routes['/404'];

  // Protected routes
  if (['/dashboard', '/appointments', '/purchase', '/insurance'].includes(path)) {
    if (!auth.isAuthenticated) {
      navigateTo('/login');
      return;
    }
  }

  const app = document.getElementById('app');
  renderer(app);
}