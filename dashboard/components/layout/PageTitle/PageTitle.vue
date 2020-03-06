<template>
  <div>
    <h1>{{ title }}</h1>
    <v-divider />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 16px;
}

.v-divider {
  margin-bottom: 32px;
}
</style>
