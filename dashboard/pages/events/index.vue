<template>
  <event-page-layout title="Events">
    <div class="card">
      TEST
    </div>
  </event-page-layout>
</template>

<script>
export default {
  components: {
    EventPageLayout: () => import('~/components/events/EventPageLayout')
  }
}
</script>

<style>
.card {
  padding: 20px;
  border-radius: 10px;
}
</style>
