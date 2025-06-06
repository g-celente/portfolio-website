<script setup lang="ts">

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Vue.js and Node.js',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['React', 'TypeScript', 'Firebase'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Vue and Tailwind',
    image: 'https://via.placeholder.com/600x400',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript'],
    demoUrl: '#',
    githubUrl: '#'
  }
];
</script>

<template>

  <section id="projects" class="py-24 bg-surface-900/50 p-20">
    <div class="section-container">
      <h2 class="heading-xl text-center mb-12 text-lg"> 
            <span class="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text animate-pulse">Featured Projects</span>
          </h2>
      <p class="text-surface-300 text-center max-w-2xl mx-auto mb-16">
        A collection of my recent work, showcasing modern web development practices
        and creative solutions.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects"
             :key="project.id"
             class="group">
          <div class="glass-card overflow-hidden rounded-xl transition-all duration-300 group-hover:-translate-y-2">
            <div class="relative overflow-hidden aspect-[16/10]">
              <div class="absolute inset-0 bg-surface-900/30 group-hover:bg-surface-900/20 transition-colors"></div>
              <img :src="project.image" 
                   :alt="project.title"
                   class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
            </div>
            
            <div class="p-6 space-y-4">
              <h3 class="text-xl font-semibold text-surface-100">{{ project.title }}</h3>
              <p class="text-surface-300">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies"
                      :key="tech"
                      class="px-3 py-1 bg-surface-800/50 text-surface-300 text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
              
              <div class="flex items-center gap-4 text-white">
                <Button label="Live Demo" 
                        icon="pi pi-external-link" 
                        class="p-button-sm flex-1 btn-primary bg-primary/90" />
                <Button label="Code" 
                        icon="pi pi-github"
                        class="p-button-outlined p-button-sm flex-1 btn-primary bg-primary/90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
