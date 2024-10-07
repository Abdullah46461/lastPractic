<template>

  <div class="container">
    <AppMessage></AppMessage>
    <router-view/>
  </div>

</template>

<script>
import AppMessage from "../ui/AppMessage.vue";
export default {
  components: {AppMessage}


}
</script>

<style lang="scss" scoped>

</style>
