<template>
  <base-page-layout>
    <!-- Replace below line with a "BrandSwitcher" -->
    <portal to="sub-sidebar-header">
      <h3>Frontend Love</h3>
    </portal>

    <portal to="sub-sidebar">
      <sub-sidebar-nav>
        <sub-sidebar-nav-item to="/">Overview</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/speakers">Speakers</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/venue">Venue</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/schedule">Schedule</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/sales">Sales</sub-sidebar-nav-item>
        <sub-sidebar-nav-item to="/sponsors">Sponsors</sub-sidebar-nav-item>
      </sub-sidebar-nav>
    </portal>

    <slot />
  </base-page-layout>
</template>

<script>
export default {}
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
