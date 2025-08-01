<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <section id="home" class="min-h-screen flex items-center p-4 sm:p-8 lg:p-20 pt-20 sm:pt-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Profile Image - Agora primeiro no mobile -->
        <div class="block md:block relative mt-4 mb-8 md:mb-0 md:mt-0 order-1 md:order-2">
          <div class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 
                        rounded-full blur-xl opacity-30 animate-pulse">
            </div>
            <img src="../assets/img/WhatsApp Image 2025-05-13 at 21.23.55 (1).jpeg" 
                 alt="Profile"
                 class="w-full h-full object-cover rounded-full border-4 border-surface-800 
                        shadow-xl relative z-10 animate-float" />
          </div>
        </div>

        <!-- Text Content - Segundo no mobile -->
        <div :class="['text-center md:text-left fade-up space-y-4 sm:space-y-6 order-2 md:order-1', { 'in-view': isVisible }]">
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style="color: #fff;">
            Hi, I´m <span class="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text animate-pulse">
              Guilherme Celente
            </span>
          </h1>
          <p class="text-base sm:text-lg lg:text-xl text-surface-300 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0 animate-fade-in">
            Backend Developer and Data Science enthusiast with a passion for building scalable applications and solving
            complex problems.
          </p>
          <div class="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <a class="btn-primary flex items-center gap-2 px-4 py-2 rounded bg-primary/90 transition-colors
                      text-sm sm:text-base w-full sm:w-auto justify-center"
               href="https://github.com/g-celente" 
               target="_blank" 
               rel="noopener noreferrer">
              <i class="pi pi-github text-lg sm:text-xl"></i>
              View Projects
            </a>
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
