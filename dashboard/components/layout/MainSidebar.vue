import gql from "graphql-tag"
<template>
  <div class="sidebar">
    <sidebar-header>
      <slot name="header" />
    </sidebar-header>

    <nav class="main-navigation">
      <ul>
        <li v-for="{ to, label, icon } in navItems" :key="to">
          <nuxt-link :to="to">
            <span class="icon" :class="icon" />
            {{ label }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <slot name="bottom" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { label: 'Dashboard', icon: 'lnr lnr-home', to: '/' },
        { label: 'Events', icon: 'lnr lnr-calendar-full', to: '/events' },
        { label: 'People', icon: 'lnr lnr-users', to: '/people' },
        { label: 'Finance', icon: 'lnr lnr-briefcase', to: '/finance' },
        { label: 'Locations', icon: 'lnr lnr-map-marker', to: '/locations' },
        { label: 'Organisations', icon: 'lnr lnr-apartment', to: '/organisations' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  z-index: 10;
  width: 120px;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
}

.main-navigation {
  ul {
    padding-left: 0;
  }
}

a {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 110px;
  width: 120px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;

  &:hover {
    color: #ed7117;
  }

  .icon {
    display: block;
    width: 40px;
    height: 40px;
    font-size: 40px;
    margin-bottom: 10px;
  }

  &.nuxt-link-exact-active:first-child {
    &::after {
      content: ' ';
      background: #ed7117;
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

  &.nuxt-link-active:not(:first-child) {
    &::after {
      content: ' ';
      background: #ed7117;
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
