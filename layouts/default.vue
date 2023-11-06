<template>
  <main>
    <!-- Will contain header and footer and wrap any pages -->
    <NavTopNav />
    <slot />
  </main>
</template>

<style lang="scss">
  @use "@/assets/styles/global.scss" as *;

  main {
    font-family: $main;
  }
</style>