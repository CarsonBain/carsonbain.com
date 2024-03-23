<template>
  <div class="self-start">
    <p class="max-w-prose">
      Carson Bain is a software developer and a photographer from Toronto, Ontario. Currently he's building accessible
      healthcare products at
      <a class="underline" href="https://www.felixforyou.ca/" target="_blank">Felix</a>.
    </p>

    <p class="mt-4">
      <a class="underline" href="mailto:carsonbain@gmail.com"> email</a>,
      <a class="underline" target="_blank" href="https://www.instagram.com/carsonbain/">instagram</a>,
      <a class="underline" target="_blank" href="https://github.com/CarsonBain">github</a>
    </p>
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: 'About',
    });
  },
};
</script>
