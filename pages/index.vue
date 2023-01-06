<template>
  <div class="grid md:grid-cols-2 gap-12">
    <NuxtLink
      v-for="(gallery, index) in galleries"
      class="relative group flex"
      :key="index"
      :to="`/galleries/${index}`"
    >
      <div class="flex flex-col">
        <!-- TODO: use nuxt-picture instead? -->
        <NuxtPicture provider="contentful" :src="gallery.fields.featureImage.fields.file.url" width="848" />
        <div class="text-black text-2xl md:text-3xl font-semibold mt-6">— {{ gallery.fields.title }}</div>
      </div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  setup() {
    useHead({
      title: 'Home',
    });
    const nuxtApp = useNuxtApp();
    const galleries = ref([]);
    onMounted(() => {
      // TODO: what's this error about with unsafe headers? https://github.com/contentful/contentful.js/issues/422
      nuxtApp.$contentful
        .getEntries({ content_type: 'gallery' })
        .then((response) => {
          galleries.value = response.items;
        })
        .catch(console.error);
    });

    return {
      galleries,
    };
  },
};
</script>
