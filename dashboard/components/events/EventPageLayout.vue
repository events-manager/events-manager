<template>
  <base-page-layout>
    <!-- Replace below line with a "BrandSwitcher" -->
    <portal to="sub-sidebar-header">
      <brand-switcher />
    </portal>

    <portal to="sub-sidebar">
      <sub-sidebar-nav>
        <sub-sidebar-nav-item to="/events">Overview</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/events/speakers">Speakers</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/events/venue">Venue</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/events/schedule">Schedule</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/events/sales">Sales</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/events/sponsors">Sponsors</sub-sidebar-nav-item>
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
