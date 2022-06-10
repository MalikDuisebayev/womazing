<template>
    <div>
        <navbar />
        <order-component />
        <footer-component />

    </div>
</template>

<script>
import Navbar from '../components/UI/Navbar.vue'
import OrderComponent from '../components/Order/OrderComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
    components: { Navbar, OrderComponent, FooterComponent }

}
</script>

<style scoped>
</style>