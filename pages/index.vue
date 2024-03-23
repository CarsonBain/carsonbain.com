<template>
  <div v-if="homePageImages.length" class="grid md:grid-cols-2 gap-6 md:gap-12">
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
    <!-- TODO: spinner? -->
    <div v-if="!allLoaded" id="trigger">Trigger</div>
  </div>
</template>
<script setup>
useHead({
  title: 'Home',
});

const homePageImages = ref([]);
const skip = ref(0);
const limit = ref(10);
const allLoaded = ref(false);

const { getAllAssets } = useAssets();
const { data } = await useAsyncData(
  async () => {
    return await getAllAssets({
      skip: skip.value,
      limit: limit.value,
    });
  },
  {
    // Triggers a re-fetch when the when skip gets bumped on the intersection observer
    watch: [skip],
  }
);

watch(
  data,
  () => {
    if (data.value && data.value.length) {
      const copy = [...homePageImages.value];
      homePageImages.value = [...copy, ...data.value];
    } else {
      // Assume we got to the end here. Assign a boolean to stop the observer on the next run
      allLoaded.value = true;
    }
  },
  { immediate: true }
);

onBeforeMount(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (allLoaded.value) {
          observer.disconnect();
          return;
        }
        skip.value += limit.value;
      }
    });
  });

  const lastImage = document.querySelector('#trigger');
  if (lastImage) {
    observer.observe(lastImage);
  }
});
</script>
