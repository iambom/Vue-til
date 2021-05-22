<template>
  <div>
    <div>
      <AppHeader></AppHeader>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
</style>