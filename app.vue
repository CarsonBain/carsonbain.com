<template>
  <div class="flex flex-col h-full">
    <div class="w-full max-w-screen-lg py-10 px-6 md:px-16 mx-auto flex-1">
      <header>
        <nav class="flex justify-between items-center mb-12">
          <NuxtLink class="font-extrabold text-xl md:text-3xl uppercase tracking-wide" to="/">Carson Bain</NuxtLink>
          <div>
            <ul class="flex list-none space-x-3">
              <li>
                <NuxtLink
                  class="md:text-lg font-semibold py-1"
                  activeClass="border-b-2 border-solid border-current"
                  to="/"
                >
                  Work
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="md:text-lg font-semibold py-1"
                  activeClass="border-b-2 border-solid border-current"
                  to="/about"
                >
                  About
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main class="relative mt-16">
        <NuxtPage></NuxtPage>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const nuxtApp = useNuxtApp();
    onMounted(() => {
      // TODO: what's this error about with unsafe headers? https://github.com/contentful/contentful.js/issues/422
      nuxtApp.$contentful
        .getEntries()
        .then((response) => console.log(response))
        .catch(console.error);
    });
  },
};
</script>
