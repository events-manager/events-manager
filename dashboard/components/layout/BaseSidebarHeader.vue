<template>
  <header>
    <slot />
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-bottom: 1px solid #eeeeee;
}
</style>
