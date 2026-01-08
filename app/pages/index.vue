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
:root {
  --traveller-orange: #f39c12;
  --traveller-green: #2ecc71;
  --traveller-dark: #1a1a1a;
  --traveller-bg: #0f0f0f;
  --traveller-border: #333;
  --traveler-done : #b7b7b7;
  --font-main: 'Share Tech Mono', monospace; /* Ein technischer Font */
}

body {
  background-color: var(--traveller-bg);
  color: #e0e0e0;
  font-family: var(--font-main), 'Courier New', Courier, monospace;
  line-height: 1.6;
  background-image: 
    radial-gradient(circle at 2px 2px, #222 1px, transparent 0);
  background-size: 40px 40px; /* Dezentes Sternen-Raster */
}

/* Container für den Content */
.content-wrapper {
  max-width: 1000px; /* Oder deine gewünschte Breite */
  margin: 40px auto; /* 'auto' links und rechts zentriert den Block horizontal */
  border-left: 4px solid var(--traveller-orange);
  background: rgba(20, 20, 20, 0.9);
  padding: 40px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);

  /* Damit der Inhalt innerhalb auch schön aussieht */
  display: flex;
  flex-direction: column;
}

/* Überschriften im Traveller-Look */
h1, h2, h3 {
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--traveller-orange);
  border-bottom: 1px solid var(--traveller-border);
  padding-bottom: 5px;
}

h1 { font-size: 2.5rem; text-shadow: 2px 2px #000; }

/* Styling für Tabellen (wichtig für Traveller Stats!) */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  border: 1px solid var(--traveller-green);
}

th {
  background-color: rgba(46, 204, 113, 0.2);
  color: var(--traveller-green);
  text-align: left;
  padding: 10px;
}

td {
  padding: 8px;
  border-bottom: 1px solid #222;
}

/* Akzente für Code/Ausrüstung */
code {
  background: #222;
  color: var(--traveller-green);
  padding: 2px 5px;
  border-radius: 3px;
}

/* Blockquotes für Flavour-Text */
blockquote {
  border-left: 3px solid var(--traveller-green);
  margin: 20px 0;
  padding-left: 20px;
  font-style: italic;
  color: #aaa;
}

/* Spezifische Traveller-Module */

/* Status-Leiste für Finanzen und Zeit */
.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.status-card {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--traveller-orange);
  padding: 1rem;
  text-align: center;
}

.status-card h4 {
  margin: 0;
  font-size: 0.8rem;
  color: var(--traveller-green);
}

.status-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}

/* Quest-Tracker */
.quest-list {
  list-style: none;
  padding: 0;
}

.quest-item {
  background: rgba(255, 255, 255, 0.05);
  border-left: 4px solid var(--traveller-green);
  margin-bottom: 10px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quest-deadline {
  color: var(--traveller-orange);
  font-size: 0.9rem;
  border: 1px solid var(--traveller-orange);
  padding: 2px 8px;
}

/* Warnung wenn Quest fast abläuft */
.urgent {
  border-left-color: #e74c3c;
  animation: pulse 2s infinite;
}

.done {
  border-left-color: var(--traveler-done);
  opacity: 0.6;
  text-decoration: line-through;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(231, 76, 60, 0); }
  100% { box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
}
</style>