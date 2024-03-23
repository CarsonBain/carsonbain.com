<template>
  <div class="grid md:grid-cols-2 gap-6 md:gap-12">
    <NuxtPicture
      v-for="(image, index) in homePageImages"
      :key="index"
      preload
      provider="contentful"
      :src="image.fields.file.url"
      sizes="sm:100vw md:848px"
      width="848"
      height="1242"
    />
  </div>
  <!-- <div class="grid md:grid-cols-2 gap-12">
    <NuxtLink
      v-for="(gallery, index) in galleries"
      class="relative group flex"
      :key="index"
      :to="`/galleries/${gallery.fields.slug}`"
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
  </div> -->
</template>
<script setup>
const homePageImages = useState('homePageImages');
// const galleries = useState('allGalleries');

useHead({
  title: 'Home',
});
</script>
