<template>
  <div>
    <page-title title="Events" />
  </div>
</template>

<script>
export default {
  components: {
    PageTitle: () => import('~/components/page/PageTitle'),
    EventCard: () => import('~/components/events/EventCard'),
  },
  data() {
    return {
      dense: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
