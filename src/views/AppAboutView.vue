<script lang="ts">
import { defineComponent } from 'vue'
import { apps } from '@/data/apps'
import type { AppEntry } from '@/data/apps'

export default defineComponent({
  data() {
    return {
      app: null as AppEntry | null,
    }
  },
  created() {
    const slug = this.$route.params.slug as string
    this.app = apps.find((a) => a.slug === slug) ?? null
  },
})
</script>

<template>
  <div class="about-page">
    <div class="container">
      <div v-if="!app" class="not-found">
        <p>App not found.</p>
        <router-link to="/" class="link">← Back to home</router-link>
      </div>

      <template v-else>
        <router-link to="/" class="back-link">← All apps</router-link>

        <div class="app-header">
          <div>
            <h1 class="app-name">{{ app.name }}</h1>
            <p class="app-tagline">{{ app.tagline }}</p>
          </div>
        </div>

        <div class="store-badges">
          <a
            v-if="app.playStoreUrl"
            :href="app.playStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="badge"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.487 1.487 0 0 0-.227.796v20.558c0 .28.073.55.213.786l11.09-11.09L1.337.924zm11.109 10.64L3.13 2.292l14.477 8.192-5.161 5.08zm-9.48 11.43l.006.004L18.54 15.5l-4.82-4.82L2.966 22.994z"
              />
            </svg>
            Download on Google Play
          </a>
          <a
            v-if="app.appStoreUrl"
            :href="app.appStoreUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="badge"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
              />
            </svg>
            Download on App Store
          </a>
        </div>

        <p class="description">{{ app.description }}</p>

        <div v-if="app.features.length" class="features">
          <h2 class="section-label">Features</h2>
          <ul class="feature-list">
            <li v-for="feature in app.features" :key="feature">
              <span class="check" aria-hidden="true">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="footer-link">
          <router-link :to="`/apps/${app.slug}/privacy`" class="link">
            Privacy Policy →
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 680px;
  margin: 0 auto;
  padding: 44px 24px 96px;
}

.back-link {
  display: inline-block;
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 44px;
  transition: color 0.15s;
}

.back-link:hover {
  color: var(--accent);
}

.app-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 28px;
}

.app-icon {
  font-size: 5rem;
  line-height: 1;
  flex-shrink: 0;
}

.app-name {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 7px;
}

.app-tagline {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.5;
}

.store-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  background: var(--text);
  color: var(--bg);
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.15s;
}

.badge:hover {
  opacity: 0.75;
}

.description {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 44px;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 18px;
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 44px;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.975rem;
  line-height: 1.6;
}

.check {
  color: var(--accent);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}

.footer-link {
  padding-top: 28px;
  border-top: 1px solid var(--border);
}

.link {
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s;
}

.link:hover {
  color: var(--accent-hover);
}

.not-found {
  text-align: center;
  padding: 96px 0;
  color: var(--text-muted);
}

.not-found .link {
  display: inline-block;
  margin-top: 14px;
}
</style>
