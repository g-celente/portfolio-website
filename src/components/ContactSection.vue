<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};
</script>

<template>
  <section id="contact" class="py-24 bg-surface-950 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl"></div>
    </div>

    <div class="section-container relative z-10">
      <h2 class="heading-xl text-center mb-12 text-lg">
        <span class="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text animate-pulse">Get
          In Touch</span>
      </h2>
      <p class="text-surface-300 text-center max-w-2xl mx-auto mb-16">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      <div class="max-w-3xl mx-auto">
        <form @submit.prevent="handleSubmit" class="glass-card p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="space-y-2">
              <label class="text-surface-200 block">Name</label>
              <InputText v-model="form.name" placeholder="Your name" class="w-full bg-surface-800/50" />
            </div>
            <div class="space-y-2">
              <label class="text-surface-200 block">Email</label>
              <InputText v-model="form.email" type="email" placeholder="your@email.com"
                class="w-full bg-surface-800/50" />
            </div>
          </div>

          <div class="space-y-2 mb-6">
            <label class="text-surface-200 block">Subject</label>
            <InputText v-model="form.subject" placeholder="What's this about?" class="w-full bg-surface-800/50" />
          </div>

          <div class="space-y-2 mb-8">
            <label class="text-surface-200 block">Message</label>
            <Textarea v-model="form.message" placeholder="Your message here..." rows="5"
              class="w-full bg-surface-800/50" />
          </div>

          <div class="flex justify-center">
            <Button type="submit" label="Send Message" icon="pi pi-send" class="p-button-lg w-full md:w-auto" />
          </div>
        </form>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="glass-card p-6">
            <i class="pi pi-envelope text-2xl text-primary-400 mb-4"></i>
            <h3 class="text-surface-100 font-semibold mb-2">Email</h3>
            <p class="text-surface-300">contact@example.com</p>
          </div>
          <div class="glass-card p-6">
            <i class="pi pi-github text-2xl text-primary-400 mb-4"></i>
            <h3 class="text-surface-100 font-semibold mb-2">GitHub</h3>
            <p class="text-surface-300">github.com/username</p>
          </div>
          <div class="glass-card p-6">
            <i class="pi pi-linkedin text-2xl text-primary-400 mb-4"></i>
            <h3 class="text-surface-100 font-semibold mb-2">LinkedIn</h3>
            <p class="text-surface-300">linkedin.com/in/username</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
