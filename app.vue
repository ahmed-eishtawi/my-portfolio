<script setup lang="ts">
//
useHead({
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});
/*
  models
*/
const is_dark_mode = ref(true);

//
</script>

<template>
  <NuxtLayout
    class="dark"
    :class="{ dark: is_dark_mode }"
  >
    <NuxtPage :class="{ dark: is_dark_mode }" />
  </NuxtLayout>
</template>
