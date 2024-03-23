<template>
  <ContentList path="/writing" v-slot="{ list }">
    <div class="w-full flex flex-col gap-y-8 md:gap-y-8 max-w-prose">
      <NuxtLink v-for="article in list" :key="article._path" :to="article._path">
        <h2 class="font-medium md:text-base">{{ article.title }}</h2>
        <p class="text-xs mt-1 flex gap-x-2 items-center">
          <span class="text-gray-600 bg-gray-50 rounded-md px-2 py-1 border-gray-100 border">
            {{ formatCategoryName(article.category) }}
          </span>
          <span>
            {{ article.createdAt.slice(0, 10) }}
          </span>
        </p>
      </NuxtLink>
    </div>
  </ContentList>
</template>
<script setup>
useHead({
  title: 'Writing',
});

const formatCategoryName = (name) => {
  name = name.replace(/-/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
};
</script>
