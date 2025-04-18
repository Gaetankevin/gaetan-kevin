<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>


      <!-- Header -->
      <nav class="navbar navbar-expand-lg navbar-light bg-orange">
        <div class="container-fluid">
          <!-- Bouton Hamburger pour petit écran -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Titre du site -->
          <a class="navbar-brand" href="#">Profil - Gaétan</a>
          <!-- Menu de navigation -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/profile">Profil</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">À propos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Qrcode">Qrcode</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<style>
/* Personnalisation de la couleur de fond du header */
.navbar {
  background-color: #ff5722;
  /* Couleur orange */
}

/* Changer la couleur des liens */
.navbar-nav .nav-link {
  color: white !important;
}

.navbar-nav .nav-link:hover {
  color: #fff !important;
  text-decoration: underline;
}
</style>
