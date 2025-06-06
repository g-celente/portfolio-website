<script setup lang="ts">



const skills = [
  { name: 'Node.Js', icon: 'pi pi-check-circle', level: 90 },
  { name: 'TypeScript', icon: 'pi pi-code', level: 85 },
  { name: 'Spring Boot', icon: 'pi pi-file-edit', level: 70 },
  { name: 'Python', icon: 'pi pi-server', level: 95 },
  { name: 'Vue.Js', icon: 'pi pi-github', level: 85 },
  { name: 'React', icon: 'pi pi-palette', level: 75 },
  { name: 'Data Science', icon: 'pi pi-check', level: 70 },
  { name: 'Clean Architecure', icon: 'pi pi-users', level: 85 }
];
</script>

<template>


  <section id="skills" class="py-24 bg-surface-950 p-20">
    <div class="section-container">
      <h2 class="heading-xl text-center mb-12 text-lg">
        <span class="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text animate-pulse">Skills & Expertise</span>
      </h2>
      <p class="text-surface-300 text-center max-w-2xl mx-auto mb-16">
        Proficient in modern web technologies and development practices, with a focus on creating
        efficient and scalable solutions.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="skill in skills" :key="skill.name"
          class="glass-card group p-6 hover:-translate-y-1 transition-all duration-300">
          <div class="text-center space-y-4">
            <div class="relative inline-flex p-4">
              <div
                class="absolute inset-0 bg-primary-600/10 rounded-full blur-xl group-hover:bg-primary-600/20 transition-colors">
              </div>
              <i :class="skill.icon"
                class="relative text-3xl text-primary-400 group-hover:text-primary-300 transition-colors"></i>
            </div>

            <h3 class="text-lg font-semibold text-surface-100">{{ skill.name }}</h3>

            <div class="relative pt-4">
              <ProgressBar :value="skill.level" class="h-2" :pt="{
                root: { class: 'bg-surface-800 rounded-full' },
                value: { class: 'bg-primary-500 rounded-full' }
              }" />
              <span class="absolute -top-1 right-0 text-sm text-surface-400">
                {{ skill.level }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
