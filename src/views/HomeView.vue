<script lang="ts">
import { defineComponent } from 'vue'
import { apps } from '@/data/apps'
import type { AppEntry } from '@/data/apps'

export default defineComponent({
  data() {
    return {
      apps: apps as AppEntry[],
    }
  },
})
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Our Apps</h1>
        <p class="hero-sub">Simple, beautiful apps made for everyday use.</p>
      </div>
    </section>

    <section class="apps-section">
      <div class="container">
        <div class="apps-grid">
          <div v-for="app in apps" :key="app.slug" class="app-card">
            <router-link :to="`/apps/${app.slug}`" class="card-body">
              <div class="card-icon">{{ app.icon }}</div>
              <h2 class="card-name">{{ app.name }}</h2>
              <p class="card-tagline">{{ app.tagline }}</p>
            </router-link>

            <div class="card-badges">
              <a
                v-if="app.playStoreUrl"
                :href="app.playStoreUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="badge"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.487 1.487 0 0 0-.227.796v20.558c0 .28.073.55.213.786l11.09-11.09L1.337.924zm11.109 10.64L3.13 2.292l14.477 8.192-5.161 5.08zm-9.48 11.43l.006.004L18.54 15.5l-4.82-4.82L2.966 22.994z"/>
                </svg>
                Google Play
              </a>
              <a
                v-if="app.appStoreUrl"
                :href="app.appStoreUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="badge"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero {
  padding: 96px 0 52px;
  text-align: center;
}

.hero-title {
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--text);
  margin-bottom: 14px;
}

.hero-sub {
  font-size: 1.125rem;
  color: var(--text-muted);
}

.apps-section {
  padding: 8px 0 96px;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.app-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.app-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 16px 40px rgba(0, 0, 0, 0.1);
}

.card-body {
  display: block;
  text-decoration: none;
  color: inherit;
  flex: 1;
  margin-bottom: 22px;
}

.card-icon {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 18px;
}

.card-name {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 7px;
}

.card-tagline {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.55;
}

.card-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  background: var(--text);
  color: var(--bg);
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.15s;
}

.badge:hover {
  opacity: 0.75;
}
</style>
