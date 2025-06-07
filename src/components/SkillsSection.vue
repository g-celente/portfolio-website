<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const skills = [
  { name: 'Node.js', icon: 'pi pi-server', gradient: 'from-green-500 to-green-700' },
  { name: 'Python', icon: 'pi pi-code', gradient: 'from-yellow-400 to-yellow-600' },
  { name: 'Java', icon: 'pi pi-cog', gradient: 'from-orange-500 to-red-500' },
  { name: 'Spring Boot', icon: 'pi pi-cog', gradient: 'from-green-500 to-emerald-600' },
  { name: 'TypeScript', icon: 'pi pi-code', gradient: 'from-blue-400 to-cyan-400' },
  { name: 'Data Science', icon: 'pi pi-chart-line', gradient: 'from-purple-500 to-indigo-600' },
  { name: 'AWS', icon: 'pi pi-cloud', gradient: 'from-yellow-400 to-orange-500' },
  { name: 'Docker', icon: 'pi pi-send', gradient: 'from-blue-500 to-blue-700' },
  { name: 'Git', icon: 'pi pi-github', gradient: 'from-orange-500 to-red-500' },
  { name: 'MySQL', icon: 'pi pi-database', gradient: 'from-blue-500 to-blue-700' },
  { name: 'MongoDB', icon: 'pi pi-database', gradient: 'from-green-400 to-teal-500' },
  { name: 'Vue', icon: 'pi pi-desktop', gradient: 'from-green-400 to-emerald-500' },
  { name: 'React', icon: 'pi pi-desktop', gradient: 'from-blue-400 to-indigo-500' }
];

// Triplicar o array para garantir uma transição suave
const duplicatedSkills = [...skills, ...skills, ...skills];
const containerRef = ref<HTMLElement | null>(null);
const isHovered = ref(false);

let animationFrame: number;

onMounted(() => {
  startAnimation();
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});

const startAnimation = () => {
  const step = () => {
    if (!isHovered.value && containerRef.value) {
      containerRef.value.style.transform = `translateX(-${performance.now() * 0.05}px)`;
    }
    animationFrame = requestAnimationFrame(step);
  };

  animationFrame = requestAnimationFrame(step);
};
</script>

<template>
  <section id="skills" class="py-16 sm:py-20 lg:py-24 bg-surface-950 relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.1),transparent_50%)]"></div>
    </div>

    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0 bg-[linear-gradient(30deg,rgba(255,255,255,0.02)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,0.02)_87.5%,rgba(255,255,255,0.02)),linear-gradient(150deg,rgba(255,255,255,0.02)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,0.02)_87.5%,rgba(255,255,255,0.02))]">
      </div>
    </div>

    <div class="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="heading-xl mb-4 sm:mb-6">
          <span class="bg-gradient-to-r from-white to-surface-200 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
            Technical 
          </span>
          <span class="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p class="text-base sm:text-lg text-surface-300 max-w-2xl mx-auto px-4">
          Leveraging cutting-edge technologies to build amazing web experiences
        </p>
      </div>

      <div class="relative overflow-hidden mask-gradient rounded-xl sm:rounded-3xl bg-surface-900/20 
                  backdrop-blur-xl border border-surface-800/10 p-4 sm:p-6 lg:p-8 shadow-2xl">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5"></div>

        <div ref="containerRef" 
             class="flex gap-3 sm:gap-4 lg:gap-6" 
             @mouseenter="isHovered = true" 
             @mouseleave="isHovered = false">
          <div v-for="(skill, index) in duplicatedSkills" 
               :key="`${skill.name}-${index}`" 
               class="flex-shrink-0">
            <div class="rounded-lg w-36 sm:w-40 lg:w-48 h-32 sm:h-36 bg-surface-900/20 backdrop-blur-xl 
                      border border-surface-800/10 hover:border-primary-500/30 transition-all duration-500 
                      shadow-2xl transform-gpu group">
              <div class="flex flex-col items-center justify-center h-full p-4 sm:p-6 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div :class="`w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 rounded-xl sm:rounded-2xl 
                             bg-gradient-to-r ${skill.gradient} flex items-center justify-center mb-3 sm:mb-4 
                             shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-300`">
                  <i :class="[skill.icon, 'text-xl sm:text-2xl text-white']"></i>
                </div>
                <h3 class="bg-gradient-to-r from-white to-surface-200 bg-clip-text text-transparent 
                         font-semibold text-sm sm:text-base lg:text-lg relative z-10 text-center">
                  {{ skill.name }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating decorative elements -->
    <div class="absolute top-20 left-10 floating" style="animation-delay: -2s">
      <div class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-500/20"></div>
    </div>
    <div class="absolute bottom-20 right-10 floating" style="animation-delay: -1s">
      <div class="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary-600/20"></div>
    </div>
  </section>
</template>

<style scoped>
.mask-gradient::before,
.mask-gradient::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  z-index: 2;
  pointer-events: none;
}

.mask-gradient::before {
  left: 0;
  background: linear-gradient(to right, rgb(2, 6, 23) 20%, transparent);
}

.mask-gradient::after {
  right: 0;
  background: linear-gradient(to left, rgb(2, 6, 23) 20%, transparent);
}

/* Remove a transition do container para ter uma animação mais suave */
.flex {
  will-change: transform;
}
</style>
