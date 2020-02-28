<template>
  <div id="app">
    <main-header />

    <main-sidebar />
<<<<<<< Updated upstream

    <nuxt />
=======
    <section class="content">
      <nuxt />
    </section>
    <main-footer />
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
<style>
  body {
    font-family: "Helvetica Neue", Arial, serif;
    font-size: 18px;
    background-color: #eeeeee;
  }
=======
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
  padding: 24px;
}
>>>>>>> Stashed changes
</style>
