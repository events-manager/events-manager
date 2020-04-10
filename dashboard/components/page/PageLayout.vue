<template>
  <section class="page">
    <page-header>
      <page-title v-if="title">{{ title }}</page-title>
      <slot name="header" />
    </page-header>
    <page-content>
      <slot />
    </page-content>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
</style>
