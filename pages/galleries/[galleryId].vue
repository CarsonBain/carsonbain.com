<template>
  <div class="flex flex-col space-y-12">
    <NuxtLink v-for="index in 4" class="flex flex-col" :key="index" :to="`/galleries/${index}`">
      <!-- TODO: use nuxt-picture instead? -->
      <!-- TODO: add alts -->
      <NuxtImg loading="lazy" src="/test.jpg" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      // TODO: replace with gallery title
      title: 'Gallery',
    });
  },
};
</script>

<style></style>
