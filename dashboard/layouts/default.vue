<template>
  <div id="app">
    <main-header />
    <main-sidebar />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
export default {
  components: {
    MainHeader: () => import('~/components/base/Header'),
    MainSidebar: () => import('~/components/base/Sidebar'),
    MainFooter: () => import('~/components/base/Footer')
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Helvetica Neue', Arial, serif;
  font-size: 18px;
  background-color: #eeeeee;
}
</style>
