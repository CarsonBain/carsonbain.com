<template>
  <ContentList path="/writing" v-slot="{ list }">
    <div class="w-full flex flex-col gap-y-8 md:gap-y-10">
      <NuxtLink v-for="article in list" :key="article._path" :to="article._path">
        <h2 class="font-medium">{{ article.title }}</h2>
        <p class="text-xs mt-2 flex gap-x-1">
          <span class="text-gray-600 bg-gray-50 rounded px-2 py-1">
            {{ article.createdAt.slice(0, 10) }}
          </span>
          <span class="text-gray-600 bg-gray-50 rounded px-2 py-1">
            {{ formatCategoryName(article.category) }}
          </span>
        </p>
      </NuxtLink>
    </div>
  </ContentList>
</template>
<script setup>
const formatCategoryName = (name) => {
  name = name.replace(/-/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
};
</script>
