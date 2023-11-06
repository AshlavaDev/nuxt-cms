<template>
  <!-- Contains header and footer and wrap any pages -->
  <div class="page">
    <NavTopNav />
    <main>
      <slot />
    </main>
    <NavFooter />
  </div>
</template>

<style lang="scss">
  @use "@/assets/styles/global.scss" as *;

  //This is a separate div because there is a hidden div between layout and body
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
    font-family: $main;
  }
</style>