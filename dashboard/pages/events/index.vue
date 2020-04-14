<template>
  <context-layout title="Events">
    <div class="card">
      TEST
    </div>
  </context-layout>
</template>

<script>
export default {
  components: {
    ContextLayout: () => import('~/components/events/ContextLayout')
  }
}
</script>

<style>
.card {
  padding: 20px;
  border-radius: 10px;
}
</style>
