<template>
  <main id="page">
    <page-title title="Content" />
    <section>
      <p>Content goes here! Bar</p>
    </section>
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
