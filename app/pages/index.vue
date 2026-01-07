<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <div class="content-wrapper">
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
  </div>
</template>

<style>
.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.content-wrapper h1 {
  color: #2c3e50;
  font-size: 2.5rem;
}

.content-wrapper p {
  line-height: 1.6;
  color: #34495e;
}

.content-wrapper code {
  background-color: #f8f8f8;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}
</style>