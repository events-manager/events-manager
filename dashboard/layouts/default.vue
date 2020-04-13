<template>
  <nuxt />
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
</style>
