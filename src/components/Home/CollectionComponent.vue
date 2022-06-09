<template>
    <div class="collection">
        <div class="container">
            <h2 class="title">
                Новая коллекция
            </h2>
            <div class="collection__inner d-flex justify-content-between">
                <div @click='$router.push(`/magazine/${shop.id}`)' v-for="(shop, idx) in collection" :key="idx"
                    class="card" style="width: 398px;">
                    <img :src="shop.url" class="card-img-top" :alt="shop.name">
                    <div class="card-body">
                        <div class="card-text">
                            <h3 class="text-center subtitle"> {{ shop.name }} </h3>
                            <p class="text-center price"> {{ shop.price }} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <router-link class="btn mt-5" to="/magazine">Открыть магазин</router-link>
            </div>

        </div>
    </div>
</template>

<script>
import MyButton from '../UI/My-Button.vue'
export default {
    components: { MyButton },
    props: {
        collection: {
            type: Array,
        }
    }

}
</script>

<style  scoped>
.collection {
    margin-top: 130px;
}

.title {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    /* identical to box height, or 44px */
    margin-bottom: 80px;
    letter-spacing: 0.02em;

    color: #000000;
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

.card {
    cursor: pointer;
}

.btn {
    background: white;
    border: 1px solid #6E9C9F;
    color: #6E9C9F;
    padding: 22px 50px;
    gap: 10px;
    width: 243px;
    height: 68px;
    white-space: nowrap;
}
</style>