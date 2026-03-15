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
  <div class="privacy-page">
    <div class="container">
      <div v-if="!app" class="not-found">
        <p>App not found.</p>
        <router-link to="/" class="link">← Back to home</router-link>
      </div>

      <template v-else>
        <router-link :to="`/apps/${app.slug}`" class="back-link">
          ← Back to {{ app.name }}
        </router-link>

        <!-- privacyPolicy contains trusted, developer-authored HTML -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="policy-content" v-html="app.privacyPolicy" />
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

.policy-content :deep(h2) {
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 8px;
}

.policy-content :deep(h3) {
  font-size: 1rem;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 10px;
  color: var(--text);
}

.policy-content :deep(p) {
  font-size: 0.975rem;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 14px;
}

.policy-content :deep(strong) {
  font-weight: 600;
}

.not-found {
  text-align: center;
  padding: 96px 0;
  color: var(--text-muted);
}

.link {
  display: inline-block;
  margin-top: 14px;
  color: var(--accent);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s;
}

.link:hover {
  color: var(--accent-hover);
}
</style>
