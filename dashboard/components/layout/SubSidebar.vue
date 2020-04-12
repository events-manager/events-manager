<template>
  <div class="domain-sidebar">
    <sidebar-header>
      <slot name="header" />
    </sidebar-header>

    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script>
import SidebarHeader from './BaseSidebarHeader'

export default {
  components: {
    SidebarHeader
  }
}
</script>

<style scoped>
.domain-sidebar {
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  border-left: 1px solid #eeeeee;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.body {
  padding: 20px;
}
</style>
