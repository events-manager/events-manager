<template>
  <div class="context">
    <sub-sidebar>
      <slot slot="header" name="sidebar-header" />

      <slot name="sidebar-body" />
    </sub-sidebar>

    <main class="page">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.domain {
  flex: 1;
  display: flex;
  height: 100vh;
}
.page {
  padding: 20px;
  flex: 1;
  height: 100vh;
}
</style>
