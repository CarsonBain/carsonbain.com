<template>
  <div class="grid md:grid-cols-2 gap-12">
    <NuxtLink
      v-for="(gallery, index) in galleries"
      class="relative group flex"
      :key="index"
      :to="`/galleries/${index}`"
    >
      <div class="flex flex-col">
        <NuxtPicture
          preload
          provider="contentful"
          :src="gallery.fields.featureImage.fields.file.url"
          sizes="sm:100vw md:848px"
          width="848"
          height="1242"
        />
        <div class="text-black text-2xl md:text-3xl font-semibold mt-6">— {{ gallery.fields.title }}</div>
      </div>
    </NuxtLink>
    <pre>{{ data }}</pre>
  </div>
</template>
<script setup>
useHead({
  title: 'Home',
});
const { getEntriesForContentType } = useEntries();

const { data: galleries } = await useAsyncData(async () => {
  const data = await getEntriesForContentType('gallery');
  return data;
});
</script>
