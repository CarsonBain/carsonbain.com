<template>
  <div class="self-start">
    <p class="max-w-prose">
      Carson Bain is a photographer from Toronto, Ontario. Currently he is working as a front end developer at
      <a class="underline" href="https://www.felixforyou.ca/" target="_blank">Felix</a>, and some of his writing on
      software development can be found on his
      <a class="underline" href="https://dev.carsonbain.com/blog" target="_blank">blog</a>.
    </p>
    <p class="mt-4">
      <a class="flex space-x-2 items-center underline" href="mailto:carsonbain@gmail.com">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
          ></path>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5.5 6.5L12 12.25L18.5 6.5"
          ></path>
        </svg>
        carsonbain@gmail.com</a
      >
    </p>
    <p class="mt-2">
      <a class="underline" target="_blank" href="https://www.instagram.com/carsonbain/">@carsonbain</a>
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
