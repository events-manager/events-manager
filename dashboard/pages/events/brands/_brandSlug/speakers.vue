<template>
  <event-page-layout>
    <p>Speakers for brand {{ $route.params.brandSlug }}</p>
  </event-page-layout>
</template>

<script>
export default {
  components: {
    EventPageLayout: () => import('~/components/events/EventPageLayout')
  }
}
</script>

<style></style>
