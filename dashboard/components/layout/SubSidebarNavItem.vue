<template>
  <li>
    <nuxt-link :to="to">
      <slot />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  display: flex;
  padding: 12px 0;
}
</style>
