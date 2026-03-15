<script lang="ts">
import { defineComponent } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default defineComponent({
  components: { AppNavbar, AppFooter },
})
</script>

<template>
  <div class="shell">
    <AppNavbar />
    <main class="content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #ffffff;
  --bg-soft: #f7f8fa;
  --text: #111827;
  --text-muted: #6b7280;
  --accent: #5b5bd6;
  --accent-hover: #4646b5;
  --border: #e8eaed;
  --radius: 14px;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 6px 20px rgba(0, 0, 0, 0.06);
  --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}

html {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>

<style scoped>
.shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
