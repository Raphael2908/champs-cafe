<template>
    <div>
      <NuxtLoadingIndicator/>
      <Header/>
      <NuxtPage />
    </div>
</template>

<style>
.page-enter-active{
  position: absolute;
  top: 0px;
  transition: all 1s ease-out;
}
.page-leave-active {
  position: absolute;
  bottom: 0px;
  transition: all 1s ease-out;
}

.page-enter-from{
  top: 400px;
  opacity: 0;
}
.page-leave-to {
  bottom: -400px;
  opacity: 0;
}
</style>