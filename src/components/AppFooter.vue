<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    year(): number {
      return new Date().getFullYear()
    },
  },
})
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <p class="copy">© {{ year }} YST Apps</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 32px 24px;
}

.inner {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.copy {
  color: var(--text-muted);
  font-size: 0.85rem;
}
</style>
