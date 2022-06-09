<template>
    <div>
        <navbar />
        <about :abouts="abouts" />
        <footer-component />

    </div>
</template>

<script>
import About from '../components/About/About.vue'
import Navbar from '../components/UI/Navbar.vue'
import photo from '../assets/photo.json'
import FooterComponent from '../components/FooterComponent.vue'
export default {
    components: { Navbar, About, FooterComponent },
    data() {
        return {
            abouts: null
        }
    },
    async created() {
        this.abouts = photo.about
        console.log(this.abouts)
    }

}
</script>

<style la
Navbarng="scss" scoped>
</style>