<script setup lang="ts">
const currentPage = ref('index')

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
const { data: aslan } = await useAsyncData(() => queryCollection('content').path('/s2-aslan-scout').first())
const { data: fartrader } = await useAsyncData(() => queryCollection('content').path('/fartrader-aslan-trader').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})

function navigateTo(pageName: string) {
  currentPage.value = pageName
}
</script>

<template>
  <div class="top-nav">
    <a class="top-nav-link" :class="{ active: currentPage === 'index' }" @click="navigateTo('index')">Zephyrus</a>
    <a class="top-nav-link" :class="{ active: currentPage === 'fartrader-aslan-trader' }" @click="navigateTo('fartrader-aslan-trader')">Fartrader Aslan Trader</a>
    <a class="top-nav-link" :class="{ active: currentPage === 's2-aslan-scout' }" @click="navigateTo('s2-aslan-scout')">Aslan Geleitschiff</a>
  </div>
  
  <div class="content-wrapper">
    <!-- Startseite -->
    <ContentRenderer v-if="currentPage === 'index'" id="page-home" :value="home"></ContentRenderer>

    <!-- Fartrader Aslan Trader -->
    <ContentRenderer v-else-if="currentPage === 'fartrader-aslan-trader' && fartrader" id="page-fartrader-aslan-trader" :value="fartrader"></ContentRenderer>

    <!-- Aslan Geleitschiff -->
    <ContentRenderer v-else-if="currentPage === 's2-aslan-scout'" id="page-s2-aslan-scout" :value="aslan"></ContentRenderer>
  </div>
</template>