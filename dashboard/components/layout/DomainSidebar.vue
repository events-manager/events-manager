<template>
  <div class="domain-sidebar">
    <slot />
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.domain-sidebar {
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
  border-left: 1px solid #eeeeee;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
