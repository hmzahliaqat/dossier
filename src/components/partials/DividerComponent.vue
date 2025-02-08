<script setup>

const props = defineProps({
  title: String,
});

</script>


<template>
  <div class="relative p-3">
  <div class="absolute inset-0 flex items-center" aria-hidden="true">
    <div class="w-full border-t border-gray-300"></div>
  </div>
  <div class="relative flex justify-start">
    <span class="bg-white pr-2 text-sm text-gray-500">{{ props?.title }}</span>
  </div>
</div>
</template>
