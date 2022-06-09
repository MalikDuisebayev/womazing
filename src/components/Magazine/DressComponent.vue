<template>

    <div>
        <h3 class="results">
            Показано: {{ shirt.length }} из {{ shirt.length }} товаров
        </h3>
        <div class="gallery__inner">
            <router-link to="/" v-for="(shop, idx) in shirt" :key="idx" class="card" style="width: 398px;">
                <img :src="shop.url" class="card-img-top img" :alt="shop.name">
                <div class="card-body">
                    <div class="card-text">
                        <h3 class="text-center subtitle"> {{ shop.name }} </h3>
                        <p class="text-center price"> {{ shop.price }} </p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            shirt: null
        }
    },
    props: {
        data: {
            type: Array
        }
    },
    async created() {
        const arr = this.data.filter(i => i.category === 'dress')
        this.shirt = arr
    }
}
</script>

<style scoped>
.gallery__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 30px;
}

.img {
    height: 550px;
}

.subtitle {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    /* identical to box height, or 28px */

    letter-spacing: 0.02em;

    color: #000000;
}

.price {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    /* identical to box height, or 21px */

    letter-spacing: 0.02em;

    /* Дополнительный акцент */

    color: #998E78;
}

.results {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 140%;
    /* identical to box height, or 24px */
    margin-bottom: 65px;

    letter-spacing: 0.02em;

    color: #808080;
}
</style>