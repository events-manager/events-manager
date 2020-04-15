<template>
  <event-layout title="Event overview">
    <header>
      <h1>Event overview</h1>
    </header>


  </event-layout>
</template>

<script>
import gql from 'graphql-tag'

export default {
  components: {
    EventLayout: () => import('~/components/events/EventLayout')
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
}

.card {
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
