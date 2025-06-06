<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    },
    { threshold: 0.1 }
  );

  const section = document.querySelector('#about');
  if (section) {
    observer.observe(section);
  }
});

const techStack = [
  { name: 'Frontend', icon: 'pi pi-desktop', items: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: 'pi pi-server', items: ['Node.js', 'Python', 'Spring Boot', 'Golang'] },
  { name: 'Tools', icon: 'pi pi-cog', items: ['Git', 'Docker', 'AWS', 'Serverless Framework'] }
];
</script>

<template>
  <section id="about" class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">        <div :class="['fade-up', { 'in-view': isVisible }]">
          <h2 class="heading-xl text-center mb-12 text-lg"> 
            <span class="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text animate-pulse">About Me</span>
          </h2>
          
          <div class="glass-card p-8 mb-12 animate-glow">
            <p class="text-lg text-surface-300 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating seamless user experiences. With years of experience in web development, I specialize in building modern, responsive applications that solve real-world problems.
            </p>
            <p class="text-lg text-surface-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(tech, index) in techStack" 
                 :key="index" 
                 :style="{ transitionDelay: `${index * 200}ms` }"                 class="glass-card p-6 group"
                 :class="{ 'in-view': isVisible }">
              <div class="flex items-center mb-4 gap-3">
                <i :class="[tech.icon, 'text-2xl text-primary-400 group-hover:scale-110 transition-transform duration-300']"></i>
                <h3 class="text-xl font-semibold text-primary-400">{{ tech.name }}</h3>
              </div>
              <ul class="space-y-3">
                <li v-for="(item, idx) in tech.items" 
                    :key="item"
                    :style="{ transitionDelay: `${idx * 100}ms` }"
                    class="text-surface-300 flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-300">
                  <i class="pi pi-check text-primary-400"></i>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-card {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  border-color: rgba(var(--primary-400-rgb), 0.4);
  box-shadow: 0 0 20px rgba(var(--primary-400-rgb), 0.1);
  transform: translateY(-4px);
}

.fade-up {
  opacity: 0;
  transform: translateY(2rem);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-up.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
