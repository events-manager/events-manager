<template>
  <v-select :items="items" label="Select Brand" clearable @change="handleChange"></v-select>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      brands: [],
    }
  },
  apollo: {
    brands: gql`
      query {
        brands {
          id
          name
        }
      }
    `
  },
  computed: {
    items() {
      return this.brands.map((brand) => ({ value: brand.id, text: brand.name }))
    }
  },
  methods: {
    handleChange(value) {
      if (value) {
        this.$router.replace(`${this.$route.fullPath}?brandId=${value}`)
      } else {
        this.$router.replace(this.$route.fullPath)
      }
    }
  }
}
</script>

<style scoped></style>
