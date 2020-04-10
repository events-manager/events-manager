<template>
  <header>
    <span>Vue.js Amsterdam</span>
    <font-awesome-icon icon="th-large" />
    <ul>
      <li v-for="brand in brands" :key="brand.id">
        {{ brand.name }}
      </li>
    </ul>
  </header>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      brands: []
    }
  },

  apollo: {
    brands: gql`query {
      brands {
        name
      }
    }`
  }
}
</script>

<style scoped>
header {
  height: 100px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
}

span {
  font-size: 32px;
  width: 100%;
  text-align: center;
}

.fa-th-large {
  color: orange;
}
</style>
