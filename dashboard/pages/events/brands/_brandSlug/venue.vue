<template>
  <event-page-layout>
    <p>Venue for brand {{ $route.params.brandSlug }}</p>
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
