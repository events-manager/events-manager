<template>
  <context-layout>
    <p>Speakers for brand {{ $route.params.brandSlug }}</p>
  </context-layout>
</template>

<script>
export default {
  components: {
    ContextLayout: () => import('~/components/events/ContextLayout')
  }
}
</script>

<style></style>
