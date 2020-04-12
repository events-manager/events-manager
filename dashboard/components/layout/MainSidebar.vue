<template>
  <div class="sidebar">
    <base-sidebar-header>
      <slot name="header" />
    </base-sidebar-header>

    <nav class="main-navigation">
      <nuxt-link to="/">Dashboard</nuxt-link>
      <nuxt-link to="/events">Events</nuxt-link>
      <nuxt-link to="/people">People</nuxt-link>
      <nuxt-link to="/locations">Finance</nuxt-link>
      <nuxt-link to="/locations">Locations</nuxt-link>
      <nuxt-link to="/organizations">Organizations</nuxt-link>
    </nav>

    <slot name="bottom" />
  </div>
</template>

<script>
import BaseSidebarHeader from './BaseSidebarHeader'

export default {
  components: {
    BaseSidebarHeader
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  z-index: 10;
  width: 120px;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
}

a {
  position: relative;
  display: flex;
  height: 110px;
  width: 120px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;

  &:hover {
    color: #ed7117;
  }

  &.nuxt-link-exact-active {
    &::after {
      content: ' ';
      background: #ed7117;
      border-radius: 10px;
      position: absolute;
      width: 6px;
      height: 90px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      left: 0;
    }
  }
}
</style>
