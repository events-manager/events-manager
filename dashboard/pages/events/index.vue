<template>
  <domain-layout title="Events">
    <domain-sidebar>
      <sidebar-header>
        <sidebar-title>Events</sidebar-title>
      </sidebar-header>

      <sidebar-body>
        <p>
          Location for filters. For example filter events based on brand or date-range
        </p>
      </sidebar-body>
    </domain-sidebar>
    <page-layout>
      <page-header />

      <base-grid>
        <nuxt-link v-for="{ id, slug, name } in events" :key="id" class="card" :to="`/events/${slug}`">
          {{ name }}
        </nuxt-link>
      </base-grid>
    </page-layout>
  </domain-layout>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      events: []
    }
  },
  apollo: {
    events: gql`
      query {
        events {
          id
          slug
          name
        }
      }
    `
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
}

.columns {
  margin: 0 -20px;
}

.card {
  padding: 20px;
  border-radius: 10px;
}
</style>
