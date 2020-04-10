<template>
  <div id="app">
    <main-navbar />
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
    MainNavbar: () => import('~/components/layout/MainNavbar'),
    MainSidebar: () => import('~/components/layout/MainSidebar'),
    MainFooter: () => import('~/components/layout/MainFooter'),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

body {
  font-family: 'Nunito', 'Helvetica Neue', Arial, serif;
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
