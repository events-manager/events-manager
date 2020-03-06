<template>
  <div>
    <page-title title="Events" />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <event-card />
            <event-card />
            <event-card />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    PageTitle: () => import('~/components/layout/PageTitle'),
    EventCard: () => import('~/components/events/EventCard')
  },
  data() {
    return {
      dense: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
