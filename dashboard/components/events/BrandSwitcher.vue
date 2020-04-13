<template>
  <b-autocomplete
    v-model="selected"
    :data="brands"
    placeholder="Select brand"
    icon="magnify"
    field="slug"
    open-on-focus
    rounded
    clearable
  >
    <template slot-scope="props">
      <div class="option">
        {{ props.option.name }}
      </div>
    </template>
  </b-autocomplete>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      selected: this.$route.params.brandSlug,
      brands: []
    }
  },
  apollo: {
    brands: gql`
      query {
        brands {
          slug
          name
        }
      }
    `
  },
  watch: {
    selected() {
      // TODO this is crap. We might need a tiny layer over the current Vue Router to enable
      // easy route manipulations from within smart components
      const currentUriSegments = this.$route.fullPath.split('/')

      if (!this.selected) {
        const segmentsWithoutBrandUri = [
          currentUriSegments[1],
          ...currentUriSegments.slice(4)
        ]

        return this.$router.push(`/${segmentsWithoutBrandUri.join('/')}`)
      }

      const segmentsWithBrandUri = [
        currentUriSegments[1],
        'brands',
        this.selected,
        ...currentUriSegments.slice(2)
      ]

      const uri = segmentsWithBrandUri.join('/')
      this.$router.push(`/${uri}`)
    }
  }
}
</script>

<style scoped></style>
