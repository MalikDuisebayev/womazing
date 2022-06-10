<template>
    <div>
        <navbar />
        <car-component />
        <my-modal />
        <footer-component />

    </div>
</template>

<script>
import CarComponent from '../components/Car/CarComponent.vue'
import Navbar from '../components/UI/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import MyModal from '../components/UI/My-Modal.vue'
export default {
    components: { Navbar, CarComponent, FooterComponent, MyModal },

}
</script>

<style lang="scss" scoped>
</style>