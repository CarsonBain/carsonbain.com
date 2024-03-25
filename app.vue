<template>
  <div class="flex flex-col h-full min-h-svh text-gray-950 text-sm">
    <div class="w-full max-w-screen-lg pt-10 pb-16 px-6 md:px-16 mx-auto flex flex-col flex-1">
      <header class="flex-grow-0 flex-shrink-0 basis-auto">
        <nav class="flex justify-between items-center flex-wrap gap-x-4 gap-y-2">
          <NuxtLink class="font-bold text-xl md:text-3xl uppercase tracking-wider shrink-0" to="/"
            >Carson Bain</NuxtLink
          >
          <div>
            <ul class="flex list-none space-x-3">
              <li>
                <NuxtLink
                  class="md:text-lg font-medium py-1"
                  activeClass="border-b md:border-b-[1.5px] border-solid border-current"
                  to="/"
                >
                  Photograpy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="md:text-lg font-medium py-1"
                  activeClass="border-b md:border-b-[1.5px] border-solid border-current"
                  to="/writing"
                >
                  Writing
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="md:text-lg font-medium py-1"
                  activeClass="border-b md:border-b-[1.5px] border-solid border-current"
                  to="/about"
                >
                  About
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main class="relative mt-8 md:mt-16 flex flex-col items-start flex-grow shrink-0 basis-auto">
        <!-- Using keep alive mostly to persist state of photo gallery depending on where a person has scrolled to -->
        <NuxtPage keepalive></NuxtPage>
      </main>
      <footer
        class="mt-16 text-xs text-gray-700 flex-grow-0 flex-shrink-0 basis-auto flex flex-col items-center space-y-2"
      >
        <p>© {{ new Date().getFullYear() }} Carson Bain</p>
      </footer>
    </div>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: '%s - Carson Bain',
  meta: [{ name: 'description', content: "Carson Bain's personal site." }],
});

useSeoMeta({
  title: 'Carson Bain',
  ogTitle: 'Carson Bain',
  description: "Carson Bain's personal site.",
  ogDescription: "Carson Bain's personal site.",
  // TODO: add other values here
});
</script>
