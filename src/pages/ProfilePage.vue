<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <!-- Card Profil -->
      <div class="col-md-6">
        <div class="card shadow-lg border-0 rounded-4 my-card">
          <div class="card-body text-center">
            <!-- Avatar -->
            <img :src="profile.avatar" alt="Profile Picture" class="img-fluid rounded-circle mb-3"
              style="width: 120px; height: 120px; object-fit: cover;" />
            <h2 class="text-primary">{{ profile.name }}</h2>
            <h5 class="text-muted">{{ profile.jobTitle }}</h5>
            <p class="text-secondary">{{ profile.bio }}</p>

            <hr />

            <!-- Skills -->
            <div v-for="(skill, index) in skills" :key="index" class="mb-3">
              <h6 class="text-dark">{{ skill.name }}</h6>
              <div class="progress" style="height: 20px;">
                <div class="progress-bar" :style="{ width: skill.level * 100 + '%' }" role="progressbar"
                  :aria-valuenow="skill.level * 100" aria-valuemin="0" aria-valuemax="100">
                  {{ Math.round(skill.level * 100) }}%
                </div>
              </div>
            </div>

            <!-- Social links -->
            <div class="d-flex justify-content-center mt-4">
              <a :href="links.github" target="_blank" class="btn btn-outline-dark mx-2">
                <i class="bi bi-github"></i> GitHub
              </a>
              <a :href="links.email" target="_blank" class="btn btn-outline-dark mx-2">
                <i class="bi bi-envelope"></i> Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Données du profil
const profile = ref({
  name: 'Gaétan Kevin',
  jobTitle: 'Développeur Logiciel Passionné',
  bio: 'Je suis un développeur logiciel passionné par la création de solutions innovantes. Mon expertise inclut Vue.js, Quasar, et bien plus encore.',
  avatar: 'src/assets/photo.jpg', // Utilisation de l'image locale
});

// Compétences
const skills = ref([
  { name: 'Vue.js', level: 0.9 },
  { name: 'Quasar', level: 0.85 },
  { name: 'PHP / MySQL', level: 0.8 },
  { name: 'Electron', level: 0.75 },
  { name: 'C# Windows Forms', level: 0.7 },
]);

// Liens sociaux
const links = ref({
  github: 'https://github.com/gaetankevin',
  email: 'mailto:g45398364@gmail.com',
});
</script>

<style scoped>
.my-card {
  background-color: #fff6f0;
  /* Couleur de fond orange clair */
  border-radius: 10px;
  transition: all 0.3s ease;
}

.my-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 2rem;
}

.text-primary {
  color: #ff5722;
  /* Couleur orange vif */
}

.text-muted {
  color: #6c757d;
}

.text-secondary {
  color: #495057;
}

.progress-bar {
  background-color: #ff5722;
  /* Couleur orange pour la barre de progression */
}

.btn-outline-dark {
  border-color: #ff5722;
  color: #ff5722;
}

.btn-outline-dark:hover {
  background-color: #ff5722;
  color: #fff;
}
</style>
