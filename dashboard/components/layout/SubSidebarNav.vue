<template>
  <nav>
    <ul>
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array, // TODO Properly type with allowed props per array item
      default: () => []
    }
  }
}
</script>

<style scoped>
ul {
  padding-left: 20px;
  list-style: disc;
}
</style>
