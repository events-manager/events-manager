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
.context {
  flex: 1;
  display: flex;
  height: 100vh;
}
.page {
  padding: 0 20px 20px 20px;
  flex: 1;
  height: 100vh;
}
</style>
