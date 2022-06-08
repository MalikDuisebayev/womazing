<template>
  <div>
    <navbar />
    <div class="container app">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Navbar from './components/UI/Navbar.vue'
export default {
  components: { Navbar }

}
</script>

<style>
</style>