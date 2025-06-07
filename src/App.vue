<script setup lang="ts">
import { onMounted } from 'vue';
import { initParticles, initProgressBar, initSmoothScroll } from './utils/animations';
import NavBar from './components/NavBar.vue';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';

onMounted(() => {
  // Initialize animations
  initParticles();
  initProgressBar();
  initSmoothScroll();
});
</script>

<template>
  <div class="min-h-screen bg-surface-950">
    <NavBar />
    <main>
      <HomeSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>
