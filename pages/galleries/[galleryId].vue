<template>
  <div class="flex flex-col space-y-12">
    <div v-for="(images, index) in galleryImages" class="flex flex-col" :key="index">
      <NuxtPicture
        width="1365"
        height="2048"
        sizes="sm:100vw md:1365"
        provider="contentful"
        :loading="index === 0 || 1 ? 'eager' : 'lazy'"
        :src="images.fields.file.url"
      />
    </div>
  </div>
</template>

<script setup>
useHead({
  // TODO: replace with gallery title
  title: 'Gallery',
});
const route = useRoute();
const allGalleries = useState('allGalleries');
const gallery = allGalleries.value.find((gallery) => {
  return gallery.fields.slug === route.params.galleryId;
});
const galleryImages = gallery?.fields?.images ? gallery.fields.images : [];

const log = () => {
  console.log('hello');
};
</script>
