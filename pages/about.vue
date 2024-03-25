<template>
  <div class="self-start max-w-prose flex flex-col space-y-4">
    <p>
      Carson Bain is a software developer and a photographer based in Toronto, Ontario. 
      Originally from Victoria, British Columbia, he's drawn to the outdoors and nature, but also to the technology that surrounds us and the creativity it enables.
    </p>
    <p>
      Currently, he's building accessible healthcare products for Canadians at
      <a class="underline" href="https://www.felixforyou.ca/" target="_blank">Felix</a>.
    </p>

    <p class="mt-8">
      <a class="underline" href="mailto:carsonbain@gmail.com"> email</a>,
      <a class="underline" target="_blank" href="https://www.instagram.com/carsonbain/">instagram</a>,
      <a class="underline" target="_blank" href="https://github.com/CarsonBain">github</a>,
      <a class="underline" target="_blank" href="https://ca.linkedin.com/in/carson-bain">linkedin</a>
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
