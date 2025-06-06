<script setup lang="ts">
import { ref } from 'vue';

const showMenu = ref(false);


const menuItems = [
  { id: 1, text: 'Home', href: '#home' },
  { id: 2, text: 'About', href: '#about' },
  { id: 3, text: 'Skills', href: '#skills' },
  { id: 4, text: 'Projects', href: '#projects' },
  { id: 5, text: 'Contact', href: '#contact' }
];

const closeMenu = () => {
  showMenu.value = false;
};

const scrollTo = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  }
};
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-surface-950 backdrop-blur-lg border-b border-surface-800 z-50">
    <div class="container mx-auto px-4 py-4 ">
      <div class="flex items-center justify-between ">
        <div class="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
          Portfolio
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in menuItems" 
             :key="item.id" 
             :href="item.href" 
             class="text-surface-300 hover:text-primary-400 transition-colors duration-200"
             @click.prevent="scrollTo(item.href)">
            {{ item.text }}
          </a>
          <Button label="Contact" 
                  icon="pi pi-envelope"
                  class="p-button-sm p-button-outlined" />
        </div>
        <Button icon="pi pi-bars" 
                class="md:hidden p-button-text text-surface-200" 
                @click="showMenu = true" />
      </div>
    </div>
  </nav>

  <!-- Mobile Menu Overlay -->
  <Transition name="fade">
    <div v-if="showMenu" 
         class="fixed inset-0 bg-surface-950/90 backdrop-blur-sm z-50 md:hidden"
         @click="closeMenu">
      <div class="h-full w-64 bg-surface-900 ml-auto py-4 px-6" 
           @click.stop>
        <div class="flex justify-end mb-6">
          <Button icon="pi pi-times" 
                  class="p-button-text text-surface-200" 
                  @click="closeMenu" />
        </div>
        <div class="flex flex-col space-y-4">
          <a v-for="item in menuItems" 
             :key="item.id" 
             :href="item.href" 
             class="text-surface-300 hover:text-primary-400 transition-colors duration-200 py-2"
             @click.prevent="scrollTo(item.href)">
            {{ item.text }}
          </a>
          <Button label="Contact" 
                  icon="pi pi-envelope"
                  class="p-button-sm p-button-outlined mt-4" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
