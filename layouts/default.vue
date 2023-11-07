<template>
  <!-- Contains header and footer and wrap any pages -->
  <div class="page">
    <NuxtSnackbar />
    <NavTopNav />
    <main>
      <slot />
    </main>
    <NavFooter />
  </div>
</template>

<style lang="scss">

  //This is a separate div because there is a hidden div between layout and body that I need to be flex
  .page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: $main;
  }

  main {
    flex-grow: 1;
    font-family: $main;
    display: flex;
  }
</style>