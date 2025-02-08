<script setup>
import { RouterLink } from 'vue-router';

import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
   <nav class="navbar">
      <ul class="navbar-list">
         <li class="navbar-item">
            <RouterLink to="/about">
               <button :class="route.name == 'about' ? 'active' : ''" class="navbar-link" data-nav-link>About</button>
            </RouterLink>
         </li>
         <li class="navbar-item">
          <RouterLink to="/resume">
            <button :class="route.name == 'resume' ? 'active' : ''" class="navbar-link" data-nav-link>Resume</button>
          </RouterLink>
          </li>
         <li class="navbar-item">
          <RouterLink to="/portfolio">
            <button :class="route.name == 'portfolio' ? 'active' : ''" class="navbar-link" data-nav-link>Portfolio</button>
          </RouterLink>
         </li>
         <!-- <li class="navbar-item">
          <RouterLink to="/blog">
            <button :class="route.name == 'blog' ? 'active' : ''" class="navbar-link" data-nav-link>Blog</button>
          </RouterLink>
         </li> -->
         <li class="navbar-item">
          <RouterLink to="/contact-me">
            <button :class="route.name == 'contact-me' ? 'active' : ''" class="navbar-link" data-nav-link>Contact</button>
          </RouterLink>
         </li>
      </ul>
   </nav>
</template>

