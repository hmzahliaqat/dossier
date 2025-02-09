<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue'
import NavbarLinks from '@/components/headers/NavbarLinks.vue'
import { RouterView } from 'vue-router'
import '../../assets/style.css'
</script>

<template>
  <main>
    <ProfileSidebar />
    <div class="main-content">
      <NavbarLinks />
      <a
        href="https://wa.me/+923705453997"
        target="_blank"
        class="fixed bottom-16 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
      >
        <img src="@/assets/icons/whatsapp-white.svg" alt="" class="w-6 h-6 md:w-10 md:h-10" />
      </a>

      <RouterView></RouterView>
    </div>
  </main>
</template>

<style></style>
