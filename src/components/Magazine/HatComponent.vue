<template>
    <div class="magazine">
        <div class="container">
            <h2 class="title">
                Магазин
            </h2>
            <nav class="nav-b" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Главная</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Магазин</li>
                </ol>
            </nav>
            <div class="magazine__inner">

                <div class="btn-group d-flex justify-content-center list" role="group"
                    aria-label="Basic radio toggle button group">
                    <input v-model="sort" value="all" type="radio" class="btn-check" name="btnradio" id="btnradio10"
                        autocomplete="off" checked>
                    <label class="btn btn-outline-dark" for="btnradio10">Все</label>
                    <input v-model="sort" value="shirt" type="radio" class="btn-check" name="btnradio" id="btnradio11"
                        autocomplete="off">
                    <label class="btn btn-outline-dark" for="btnradio11">Футболки</label>
                    <input v-model="sort" value="dress" type="radio" class="btn-check" name="btnradio" id="btnradio12"
                        autocomplete="off">
                    <label class="btn btn-outline-dark" for="btnradio12">Платья</label>
                    <input v-model="sort" value="swim" type="radio" class="btn-check" name="btnradio" id="btnradio13"
                        autocomplete="off">
                    <label class="btn btn-outline-dark" for="btnradio13">Купальник</label>
                    <input v-model="sort" value="swit" type="radio" class="btn-check" name="btnradio" id="btnradio14"
                        autocomplete="off">
                    <label class="btn btn-outline-dark" for="btnradio14">Толстовки</label>
                </div>

            </div>
            <div>
                <h3 class="results">
                    Показано: {{ products.length }} из {{ products.length }} товаров
                </h3>
                <div class="gallery__inner">
                    <div v-for="(product, idx) in products" :key="idx">
                        <div @click='$router.push(`/magazine/${product.id}`)' class="card" :item="product"
                            style="width: 398px;">
                            <img :src="product.url" class="card-img-top img" :alt="product.name">
                            <div class="card-body">
                                <div class="card-text">
                                    <h3 class="text-center subtitle"> {{ product.name }} </h3>
                                    <p class="text-center price"> {{ product.price }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array
        }
    },
    data() {
        return {
            products: null,
            sort: 'all'
        }
    },
    methods: {
        sortedAll() {
            this.products = null
            if (this.sort === 'all') {
                return this.products = this.data.filter(i => i.all)
            }
            return this.products = this.data.filter(i => i.category === this.sort)
        },

    },
    created() {
        this.sortedAll()
    },
    updated() {
        this.sortedAll(this.sort)
    }
}
</script>

<style  scoped>
.magazine {
    margin-top: 194px;
}

.card {
    cursor: pointer;
}

.title {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    /* identical to box height, or 44px */
    letter-spacing: 0.02em;
    margin-bottom: 26px;
    color: #000000;
}

.magazine__inner {
    margin-bottom: 92px;
}

a {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 140%;
    /* identical to box height, or 24px */

    letter-spacing: 0.02em;

    color: #000000;
}

.nav-b {
    margin-bottom: 80px;
}

.list {
    gap: 0 40px;
}

.results {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 140%;
    /* identical to box height, or 24px */

    letter-spacing: 0.02em;

    color: #808080;
}

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