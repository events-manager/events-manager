<template>
  <div id="app">
    <main-header />

    <main-sidebar />

    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    MainHeader: () => import('~/components/MainHeader'),
    MainSidebar: () => import('~/components/MainSidebar')
  }
}
</script>

<style>
  body {
    font-family: "Helvetica Neue", Arial, serif;
    font-size: 18px;
    background-color: #eeeeee;
  }
</style>
