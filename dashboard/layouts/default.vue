<template>
  <div class="wrapper">
    <main-sidebar>
      <span slot="header">LOGO</span>
    </main-sidebar>

    <sub-sidebar>
      <portal-target slot="header" name="sub-sidebar-header" />

      <portal-target name="sub-sidebar" />
    </sub-sidebar>

    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

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
    color: #cb5905;
  }

  &.nuxt-link-exact-active {
    color: #ed7117;
  }
}

h1 {
  font-weight: normal;
}

.wrapper {
  display: flex;
  position: relative;
}
</style>
