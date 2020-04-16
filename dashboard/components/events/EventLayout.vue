import gql from "graphql-tag"
<template>
  <domain-layout>
    <domain-sidebar>
      <sidebar-header>
        <sidebar-title v-if="event">{{ event.name }}</sidebar-title>
      </sidebar-header>

      <sidebar-body>
        <sidebar-nav>
          <sidebar-nav-item
            v-for="{ to, title, icon } in navItems"
            :key="to"
            :to="to"
          >
            <span class="icon" :class="icon" />
            {{ title }}
          </sidebar-nav-item>
        </sidebar-nav>
      </sidebar-body>
    </domain-sidebar>

    <page-layout>
      <slot />
    </page-layout>
  </domain-layout>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      event: null,
      pages: [
        { title: 'Overview', slug: '', icon: 'lnr lnr-chart-bars' },
        { title: 'Speakers', slug: 'speakers', icon: 'lnr lnr-bullhorn' },
        { title: 'Venue', slug: 'venue', icon: 'lnr lnr-map-marker' },
        { title: 'Schedule', slug: 'schedule', icon: 'lnr lnr-clock' },
        { title: 'Sales', slug: 'sales', icon: 'lnr lnr-pie-chart' },
        { title: 'Sponsors', slug: 'sponsors', icon: 'lnr lnr-briefcase' }
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
    },
    navItems() {
      return this.pages.map((page) => {
        return {
          ...page,
          to: `/events/${this.$route.params.slug}/${page.slug}`
        }
      })
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
</style>
