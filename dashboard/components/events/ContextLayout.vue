<template>
  <base-context-layout>
    <brand-switcher slot="sidebar-header" />

    <sub-sidebar-nav slot="sidebar-body">
      <sub-sidebar-nav-item
        v-for="{ to, icon, title } in navItems"
        :key="to"
        :to="to"
      >
        <span class="icon" :class="icon" />
        {{ title }}
      </sub-sidebar-nav-item>
    </sub-sidebar-nav>

    <slot />
  </base-context-layout>
</template>

<script>
import BrandSwitcher from './BrandSwitcher'

export default {
  components: {
    BrandSwitcher
  },
  data() {
    return {
      pages: [
        { slug: '', title: 'Overview', icon: 'lnr lnr-chart-bars' },
        { slug: 'speakers', title: 'Speakers', icon: 'lnr lnr-bullhorn' },
        { slug: 'venue', title: 'Venue', icon: 'lnr lnr-map-marker' },
        { slug: 'schedule', title: 'Schedule', icon: 'lnr lnr-clock' },
        { slug: 'sales', title: 'Sales', icon: 'lnr lnr-pie-chart' },
        { slug: 'sponsors', title: 'Sponsors', icon: 'lnr lnr-briefcase' }
      ]
    }
  },
  computed: {
    navItems() {
      // TODO Extract this functionality into a Vue Hook named useBrandNav(pages)
      const brandSlug = this.$route.params.brandSlug
      const brandUri = brandSlug ? `/brands/${brandSlug}` : ''
      const baseUri = `/events${brandUri}/`
      return this.pages.map((page) => ({
        ...page,
        to: `${baseUri}${page.slug}`
      }))
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
