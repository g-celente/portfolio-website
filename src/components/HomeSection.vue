<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <section id="home" class="min-h-screen flex items-center p-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div :class="['text-center md:text-left fade-up', { 'in-view': isVisible }]">
          <h1 class="heading-xl mb-6 text-lg" style="color: #fff;">
            Hi, I´m <span
              class="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text animate-pulse">Guilherme
              Celente</span>
          </h1>
          <p class="text-xl text-surface-300 mb-8 animate-fade-in">
            Backend Developer and Data Science enthusiast with a passion for building scalable applications and solving
            complex problems.
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <a class="btn-primary flex items-center gap-2 px-4 py-2 rounded bg-primary/90 transition-colors"
              href="https://github.com/g-celente" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-github text-xl"></i>
              View Projects
            </a>
            <button class="btn-outline">
              <i class="pi pi-envelope text-xl"></i>
              Contact Me
            </button>
          </div>
        </div>
        <div class="hidden md:block relative">
          <div class="w-64 h-64 mx-auto relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-xl opacity-30 animate-pulse">
            </div>
            <img src="../assets/img/WhatsApp Image 2025-05-13 at 21.23.55 (1).jpeg" alt="Profile"
              class="w-full h-full object-cover rounded-full border-4 border-surface-800 shadow-xl relative z-10 animate-float" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

.btn-primary i,
.btn-outline i {
  margin-right: 0.5rem;
}

.heading-xl span {
  background-size: 200% auto;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
