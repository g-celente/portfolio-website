<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Contact</h3>
          <p class="flex items-center gap-2">
            <i class="pi pi-envelope"></i>
            email@example.com
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Follow Me</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-primary transition-colors">
              <i class="pi pi-github text-xl"></i>
            </a>
            <a href="#" class="hover:text-primary transition-colors">
              <i class="pi pi-linkedin text-xl"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#home" class="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#projects" class="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#contact" class="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-8 pt-8 border-t border-gray-700">
        <p>&copy; {{ year }} Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
