const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }, // Page d'accueil (index)
      { path: 'profile', component: () => import('pages/ProfilePage.vue') }, // Route pour la page profil
      { path: 'about', component: () => import('pages/AboutPage.vue') }, // Route pour la page à propos
      { path: 'contact', component: () => import('pages/ContactPage.vue') }, // Route pour la page contact
      { path: 'Qrcode', component: () => import('pages/QrcodeGenerator.vue') }, // Route pour la page contact
    ],
  },

  // Always leave this as last one,
  // but you can also remove it if needed.
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'), // Page d'erreur pour les routes non trouvées
  },
]

export default routes
