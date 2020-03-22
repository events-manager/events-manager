<template>
  <nav>
    <ul>
      <li class="nav-item">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/events">Events</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/organizations">Organizations</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>


<style lang="scss" scoped>
nav {
  width: 110px;
  height: calc(100vh - 100px);
  background-color: #ffffff;
  position: fixed;
}

.nav-item {
  height: 110px;
  width: 110px;
  border-bottom: 1px solid #f3f3f3;
  position: relative;
}

a {
  color: #000000;
  font-size: 16px;
  height: 110px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: orange;
  }

  &.nuxt-link-exact-active {
    color: orange;

    &::after {
      content: ' ';
      background: #f18024;
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
