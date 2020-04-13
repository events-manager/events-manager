<template>
  <div class="wrapper">
    <main-sidebar>
      <span slot="header">LOGO</span>
    </main-sidebar>

    <sub-sidebar>
      <portal-target slot="header" name="sub-sidebar-header" />

      <portal-target name="sub-sidebar" />
    </sub-sidebar>

    <main class="page">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  position: relative;
}
.page {
  padding: 20px;
  width: 100%;
  height: 100vh;
}
</style>
