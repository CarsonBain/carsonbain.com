<template>
  <div class="grid md:grid-cols-2 gap-12">
    <NuxtLink v-for="index in 4" class="relative group flex" :key="index" :to="`/work/${index}`">
      <div class="flex flex-col">
        <!-- TODO: use nuxt-picture instead? -->
        <NuxtImg src="/test.jpg" />
        <div class="text-black text-2xl md:text-3xl font-semibold mt-6">— Mallorca, Spain</div>
      </div>
    </NuxtLink>
  </div>
</template>
