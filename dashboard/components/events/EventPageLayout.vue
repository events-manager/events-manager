<template>
  <base-page-layout>
    <!-- Replace below line with a "BrandSwitcher" -->
    <portal to="sub-sidebar-header">
      <brand-switcher />
    </portal>

    <portal to="sub-sidebar">
      <sub-sidebar-nav>
        <sub-sidebar-nav-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
        >
          {{ item.title }}
        </sub-sidebar-nav-item>
      </sub-sidebar-nav>
    </portal>

    <slot />
  </base-page-layout>
</template>

<script>
import BrandSwitcher from './BrandSwitcher'

export default {
  components: {
    BrandSwitcher
  },
  data() {
    return {
      domain: 'events',
      pages: [
        { slug: '', title: 'Overview' },
        { slug: 'speakers', title: 'Speakers' },
        { slug: 'venue', title: 'Venue' },
        { slug: 'schedule', title: 'Schedule' },
        { slug: 'sales', title: 'Sales' },
        { slug: 'sponsors', title: 'Sponsors' }
      ]
    }
  },
  computed: {
    navItems() {
      const brandSlug = this.$route.params.brandSlug
      const brandUri = brandSlug ? `/brands/${brandSlug}` : ''
      const baseUri = `/${this.domain}${brandUri}/`
      return this.pages.map((page) => ({
        ...page,
        to: `${baseUri}${page.slug}`
      }))
    }
  }
}
</script>

<style scoped>
ul {
  padding-left: 20px;
  list-style: disc;
}

a {
  display: flex;
  padding: 12px 0;
}
</style>
