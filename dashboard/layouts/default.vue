<template>
  <div id="app">
    <main-header />
    <main-sidebar />

    <section class="content">
      <nuxt />
    </section>

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

a {
  text-decoration: none;
}

h1 {
  font-weight: normal;
}

.content {
  margin-left: 110px;
  padding: 50px;
}
</style>
