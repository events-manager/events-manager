<template>
  <div class="wrapper">
    <main-sidebar :pages="pages">
      <span slot="header">LOGO</span>
    </main-sidebar>

    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { title: 'Dashboard', icon: 'lnr lnr-home', to: '/' },
        { title: 'Events', icon: 'lnr lnr-calendar-full', to: '/events' },
        { title: 'People', icon: 'lnr lnr-users', to: '/people' },
        { title: 'Finance', icon: 'lnr lnr-briefcase', to: '/finance' },
        { title: 'Locations', icon: 'lnr lnr-map-marker', to: '/locations' },
        { title: 'Organisations', icon: 'lnr lnr-apartment', to: '/organisations' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

html {
  overflow: hidden;
}

body {
  font-family: 'Nunito', 'Helvetica Neue', Arial, serif;
  font-size: 16px;
  background-color: #eeeeee;
}

a {
  text-decoration: none;
  color: #3a3a3a;

  &:hover {
    color: #ed7117;
  }

  &:active {
    color: #cb5905;;
  }

  &.nuxt-link-exact-active {
    color: #ed7117;
  }
}

.wrapper {
  display: flex;
  position: relative;
}
</style>
