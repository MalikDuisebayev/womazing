<template>
    <div>
        <navbar />
        <about-component :data="data" />
        <footer-component />
    </div>
</template>

<script>
import AboutComponent from '../components/About/AboutComponent.vue'
import Navbar from '../components/UI/Navbar.vue'
import db from '../assets/db.json'
import FooterComponent from '../components/FooterComponent.vue'
export default {
    components: { Navbar, AboutComponent, FooterComponent },
    data() {
        return {
            data: null
        }
    },
    async created() {
        this.data = db.about
    }

}
</script>

<style  scoped>
</style>