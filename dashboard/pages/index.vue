<template>
  <main id="page">
    <page-title title="Content" />
  </main>
</template>

<script>
export default {
  components: {
    PageTitle: () => import('~/components/layout/PageTitle')
  },
  data() {
    return {}
  }
}
</script>

<style></style>
