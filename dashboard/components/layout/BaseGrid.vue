<template>
  <component :is="component" class="grid">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    component: {
      type: String,
      default: 'section'
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
}
</style>
