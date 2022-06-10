<template>
    <div>
        <navbar />
        <contacts-component />
        <footer-component />

    </div>
</template>

<script>
import Navbar from '../components/UI/Navbar.vue'
import ContactsComponent from '../components/Contacts/ContactsComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
    components: { Navbar, ContactsComponent, FooterComponent }

}
</script>

<style lang="scss" scoped>
</style>