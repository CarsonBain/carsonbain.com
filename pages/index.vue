<template>
  <div v-if="homePageImages.length" class="grid md:grid-cols-2 gap-6 md:gap-12">
    <NuxtPicture
      v-for="image in homePageImages"
      :key="image.fields.file.url"
      preload
      provider="contentful"
      :src="image.fields.file.url"
      sizes="sm:100vw md:848px"
      width="848"
      height="1242"
      :class="imageLoadedStatuses[image.fields.file.url] ? 'opacity-100' : 'opacity-0'"
      class="transition-opacity duration-300 ease-in-out"
      @load="setLoadedStatus(image.fields.file.url)"
    />
    <div id="loadMoreTrigger"></div>
  </div>
</template>
<script setup>
useHead({
  title: 'Home',
});

const homePageImages = ref([]);
const skip = ref(0);
const limit = ref(10);
const allDataHasLoaded = ref(false);
const imageLoadedStatuses = ref({});
let observer = null;

const { getAllAssets } = useAssets();

const setLoadedStatus = (key) => {
  imageLoadedStatuses.value[key] = true;
};

const { data } = await useAsyncData(
  async () => {
    return await getAllAssets({
      skip: skip.value,
      limit: limit.value,
      // TODO: Order by sys.id just to make things random?
      order: 'sys.id',
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
      allDataHasLoaded.value = true;
    }
  },
  { immediate: true }
);

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (allDataHasLoaded.value) {
          observer.disconnect();
          return;
        }
        skip.value += limit.value;
      }
    });
  });

  const lastImage = document.querySelector('#loadMoreTrigger');
  if (lastImage) {
    observer.observe(lastImage);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
