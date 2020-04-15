import gql from "graphql-tag"
<template>
  <context-layout>
    <sub-sidebar>
      <h1 v-if="event" slot="header">{{ event.name }}</h1>

      <sub-sidebar-nav>
        <sub-sidebar-nav-item
          v-for="{ to, title, icon } in pages"
          :key="to"
          :to="to"
        >
          <span class="icon" :class="icon" />
          {{ title }}
        </sub-sidebar-nav-item>
      </sub-sidebar-nav>
    </sub-sidebar>

    <page-layout>
      <slot />
    </page-layout>
  </context-layout>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      event: null,
      pages: [
        { title: 'Overview', to: '/', icon: 'lnr lnr-chart-bars' },
        { title: 'Speakers', to: '/speakers', icon: 'lnr lnr-bullhorn' },
        { title: 'Venue', to: '/venue', icon: 'lnr lnr-map-marker' },
        { title: 'Schedule', to: '/schedule', icon: 'lnr lnr-clock' },
        { title: 'Sales', to: '/sales', icon: 'lnr lnr-pie-chart' },
        { title: 'Sponsors', to: '/sponsors', icon: 'lnr lnr-briefcase' }
      ]
    }
  },
  apollo: {
    event: {
      query: gql`
        query getEvent($slug: String) {
          event(slug: $slug) {
            id
            slug
            name
          }
        }
      `,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  computed: {
    baseUri() {
      const brandSlug = this.$route.params.brandSlug
      const brandUri = brandSlug ? `/brands/${brandSlug}` : ''
      return `/events${brandUri}/`
    }
  }
}
</script>

<style scoped>
.icon {
  display: block;
  margin-left: -20px;
  margin-right: 10px;
}
h1 {
  font-size: 1.7em;
}
</style>
