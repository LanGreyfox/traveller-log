<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
const { data: aslan } = await useAsyncData(() => queryCollection('content').path('/s2-aslan-scout').first())

const showAslan = ref(false)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <div class="top-nav">
    <a class="top-nav-link" :class="{ active: !showAslan }" @click="showAslan = false">Zephyrus (A2L)</a>
    <a class="top-nav-link" :class="{ active: showAslan }" @click="showAslan = true">Aslan Scout</a>
  </div>
  
  <div class="content-wrapper">
    <ContentRenderer v-if="home && !showAslan" id="page-home" :value="home"></ContentRenderer>
    <ContentRenderer v-if="aslan && showAslan" id="page-s2-aslan-scout" :value="aslan"></ContentRenderer>
  </div>
</template>