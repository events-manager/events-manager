<template>
  <div class="sidebar">
    <sidebar-header v-if="$slots.header">
      <slot name="header" />
    </sidebar-header>

    <nav v-if="navItems.length > 0">
      <ul>
        <li v-for="{ to, title, icon } in navItems" :key="to">
          <nuxt-link :to="to">
            <span class="icon" :class="icon" />
            {{ title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      default: () => []
    },
    baseUri: {
      type: String,
      default: ''
    }
  },
  computed: {
    navItems() {
      return this.pages.map((page) => ({
        ...page,
        to: `${this.baseUri}${page.to}`
      }))
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

nav > ul {
  padding-left: 0;
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
