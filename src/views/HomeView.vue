<template>
    <div>
        <hat-component />
        <collection-component :collection="newCollection.newCollection" />
        <criteria-component />
        <team-component />
        <footer-component />

    </div>
</template>

<script>
import HatComponent from '../components/Home/HatComponent.vue'
import CollectionComponent from '../components/Home/CollectionComponent.vue'
import db from '../assets/db.json'
import CriteriaComponent from '../components/Home/CriteriaComponent.vue'
import TeamComponent from '../components/Home/TeamComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default {
    components: { HatComponent, CollectionComponent, CriteriaComponent, TeamComponent, FooterComponent },
    data() {
        return {
            newCollection: null
        }
    },
    async created() {
        this.newCollection = db
    }
}
</script>

<style scoped>
.header__inner {
    display: flex;
    justify-content: space-between;
}
</style>