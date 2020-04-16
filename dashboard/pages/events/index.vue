<template>
  <context-layout title="Events">
    <page-layout>
      <header>
        <h1>Events</h1>
      </header>

      <section class="columns">
        <nuxt-link v-for="{ id, slug, name } in events" :key="id" class="card column is-one-quarter" :to="`/events/${slug}`">
          {{ name }}
        </nuxt-link>
      </section>
    </page-layout>
  </context-layout>
</template>

<script>
import gql from 'graphql-tag'

export default {
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

.columns {
  margin: 0 -20px;
}

.card {
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
  /*margin-bottom: 1rem;*/
}
</style>
