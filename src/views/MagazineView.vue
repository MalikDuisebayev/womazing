<template>
    <div>
        <navbar />
        <header-component :data="data" />
        <footer-component />
    </div>
</template>

<script>
import photo from '../assets/photo.json'
import FooterComponent from '../components/FooterComponent.vue'
import HeaderComponent from '../components/Magazine/HeaderComponent.vue'
import Navbar from '../components/UI/Navbar.vue'
export default {
    components: { FooterComponent, Navbar, HeaderComponent },
    data() {
        return {
            data: null
        }
    },
    async created() {
        this.data = photo.magazine
        console.log(this.data)
    },


}
</script>

<style lang="scss" scoped>
</style>