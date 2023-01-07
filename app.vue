<template>
  <div class="flex flex-col h-full">
    <div class="w-full max-w-screen-lg py-10 px-6 md:px-16 mx-auto flex-1">
      <header>
        <nav class="flex justify-between items-center">
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
      <main class="relative mt-12 md:mt-16">
        <NuxtPage></NuxtPage>
      </main>
    </div>
  </div>
</template>
<script setup>
// TODO: should this piece of state live here? maybe if it gets more complex abstract to a different file
const allGalleries = useState('allGalleries', () => []);

const { getEntriesForContentType } = useEntries();
await useAsyncData(async () => {
  const data = await getEntriesForContentType('gallery');
  allGalleries.value = data;
});
</script>
