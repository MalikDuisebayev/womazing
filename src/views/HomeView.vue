<template>
    <div>
        <header-component />
        <new-collection :collection="newCollection.newCollection" />
        <pros />
        <team />
        <footer-component />

    </div>
</template>

<script>
import HeaderComponent from '../components/Home/HeaderComponent.vue'
import NewCollection from '../components/Home/NewCollection.vue'
import photo from '../assets/photo.json'
import Pros from '../components/Home/Pros.vue'
import Team from '../components/Home/Team.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
    components: { HeaderComponent, NewCollection, Pros, Team, FooterComponent },
    data() {
        return {
            newCollection: null
        }
    },
    async created() {
        this.newCollection = photo
        console.log(this.newCollection)
    }
}
</script>

<style scoped>
.header__inner {
    display: flex;
    justify-content: space-between;
}
</style>