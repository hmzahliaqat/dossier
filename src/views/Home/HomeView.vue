<script setup>
import ProfileSidebar from '@/components/ProfileSidebar.vue';
import NavbarLinks from '@/components/headers/NavbarLinks.vue';
import { RouterView } from 'vue-router';
import '../../assets/style.css';
</script>

<template>
  <main>
       <ProfileSidebar />
       <div class="main-content">

            <NavbarLinks />

           <RouterView></RouterView>

        </div>
    </main>
</template>


<style>

</style>


