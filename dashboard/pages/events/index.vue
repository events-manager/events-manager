import gql from "graphql-tag"
<template>
  <context-layout title="Events">
    <header>
      <h1>Events</h1>
    </header>


      <div v-for="event in events" :key="event.id" class="card">
        {{ event.name }} {{ event.id }}
      </div>


  </context-layout>
</template>

<script>
import gql from 'graphql-tag'

export default {
  components: {
    ContextLayout: () => import('~/components/events/ContextLayout')
  },
  data() {
    return {
      events: []
    }
  },
  apollo: {
    events: gql`
      query {
        events {
          id
          slug
          name
        }
      }
    `
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
