<template>
  <ContentDoc v-slot="{ doc }">
    <article class="markdown-content w-full">
      <!-- Using a span here to avoid child styles being applied by markdown-content > div -->
      <span class="flex flex-col gap-y-1 mb-4">
        <h1>{{ doc.title }}</h1>
        <p class="text-xs text-gray-800">Written {{ doc.createdAt.slice(0, 10) }}</p>
      </span>
      <ContentRenderer :value="doc" />
    </article>
  </ContentDoc>
</template>
