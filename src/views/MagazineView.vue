<template>
    <div>
        <navbar />
        <hat-component :data="data" />
        <footer-component />
    </div>
</template>

<script>
import db from '../assets/db.json'
import FooterComponent from '../components/FooterComponent.vue'
import HatComponent from '../components/Magazine/HatComponent.vue'
import Navbar from '../components/UI/Navbar.vue'
export default {
    components: { FooterComponent, Navbar, HatComponent },
    data() {
        return {
            data: null
        }
    },
    async created() {
        this.data = db.magazine
    },


}
</script>

<style lang="scss" scoped>
</style>