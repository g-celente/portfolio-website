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
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl"></div>
    </div>

    <div class="section-container relative z-10">
      <h2 class="heading-xl text-center mb-8">
        <span class="bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">Get
          In Touch</span>
      </h2>
      <p class="text-white text-center max-w-2xl mx-auto mb-16 text-lg">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      <div class="max-w-3xl mx-auto">
        <form @submit.prevent="handleSubmit" class="glass-card p-8 md:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="space-y-2">
              <label class="text-white block text-sm font-medium">Name</label>
              <InputText v-model="form.name" placeholder="Your name"
                class="w-full bg-surface-800 border-surface-700 focus:border-primary-500 rounded-full
                                text-white placeholder:text-white/70 text-sm py-3 px-4" />
            </div>
            <div class="space-y-2">
              <label class="text-white block text-sm font-medium">Email</label>
              <InputText v-model="form.email" type="email" placeholder="your@email.com"
                class="w-full bg-surface-800 border-surface-700 focus:border-primary-500 rounded-full
                                text-white placeholder:text-white/70 text-sm py-3 px-4" />
            </div>
          </div>

          <div class="space-y-2 mb-6">
            <label class="text-white block text-sm font-medium">Subject</label>
            <InputText v-model="form.subject" placeholder="What's this about?"
              class="w-full bg-surface-800 border-surface-700 focus:border-primary-500 rounded-full
                              text-white placeholder:text-white/70 text-sm py-3 px-4" />
          </div>

          <div class="space-y-2 mb-8">
            <label class="text-white block text-sm font-medium">Message</label>
            <Textarea v-model="form.message" placeholder="Your message here..." rows="5"
              class="w-full bg-surface-800 border-surface-700 focus:border-primary-500 rounded-2xl
                             text-white placeholder:text-white/70 text-sm p-4 resize-none" />
          </div>

          <div class="flex justify-center">
            <button type="submit"
              class="btn-primary w-full md:w-auto rounded-full px-8">
              <i class="pi pi-send mr-2"></i>
              Send Message
            </button>
          </div>
        </form>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div class="glass-card p-6 group text-center">
            <i class="pi pi-envelope text-2xl text-primary-400 mb-4"></i>
            <h3 class="text-white font-semibold mb-2">Email</h3>
            <p class="text-white/70">contact@example.com</p>
          </div>
          <div class="glass-card p-6 group text-center">
            <i class="pi pi-github text-2xl text-primary-400 mb-4"></i>
            <h3 class="text-white font-semibold mb-2">GitHub</h3>
            <p class="text-white/70">github.com/username</p>
          </div>
          <div class="glass-card p-6 group text-center">
            <i class="pi pi-linkedin text-2xl text-primary-400 mb-4"></i>
            <h3 class="text-white font-semibold mb-2">LinkedIn</h3>
            <p class="text-white/70">linkedin.com/in/username</p>
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
}

:deep(.p-inputtext),
:deep(.p-textarea) {
  background-color: rgb(30, 41, 59) !important; /* surface-800 */
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 9999px !important; /* full */
  padding: 0.75rem 1rem;
}

:deep(.p-textarea) {
  border-radius: 1rem !important; /* 2xl */
}

:deep(.p-inputtext::placeholder),
:deep(.p-textarea::placeholder) {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style>
