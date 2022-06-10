<template>
    <div>

        <div class="container">
            <h2 class="title">
                Корзина
            </h2>
            <nav class="nav-b" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Главная</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/magazine">Магазин</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page"> Корзина </li>
                </ol>
            </nav>
            <div class="car__inner" v-if="$store.state.products">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Товар</th>
                            <th scope="col">Цена</th>
                            <th scope="col">Количество</th>
                            <th scope="col">Размер</th>
                            <th scope="col">Цвет</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in $store.state.products" :key="product.id" class="">
                            <th scope="row"> <img class="img" :src="product.url" :alt="product.name"> {{ product.name }}
                            </th>
                            <td class="text-center"> {{ product.price }} </td>
                            <td class="text-center"> {{ product.amount }} </td>
                            <td class="text-center"> {{ product.size }} </td>
                            <td class="text-center"> {{ product.color }} </td>
                        </tr>

                    </tbody>
                </table>
                <div class="mt-5 d-flex justify-content-end align-items-end flex-column">
                    <div class="mb-5">
                        Итого: {{ summary }}$
                    </div>
                    <div>
                        <my-button @click="removeProduct" class="btn warning">Очистить корзину</my-button>
                        <router-link class="btn" to="/order">Оформить заказ</router-link>
                    </div>
                </div>

            </div>
            <div class="car__inner" v-else>
                <h2 class="text-center">Корзина пуста</h2>
                <router-link to="/magazine" class="btn">Вернуться к покупкам</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from '../../components/UI/My-Button.vue'
export default {
    components: { MyButton },
    data() {
        return {
            summary: 0
        }
    },
    methods: {
        removeProduct() {
            this.$store.state.products = []
            this.summary = 0
        },
    },
    created() {
        this.summary = this.$store.state.products.reduce((acc, i) => {
            const sum = i.price.replace(/[^a-zа-яё0-9\s]/gi, ' ');
            console.log(sum)
            acc = +acc + (+sum * i.amount)
            return acc
        }, 0)
        console.log()
    }

}
</script>

<style  scoped>
.title {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    /* identical to box height, or 44px */
    margin-bottom: 26px;
    letter-spacing: 0.02em;
    margin-top: 116px;
    color: #000000;
}

.nav-b {
    margin-bottom: 80px;
}

.img {
    height: 205px;
    width: 136px;
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

td {
    vertical-align: middle;
}

.btn {
    padding: 22px 50px;
    gap: 10px;
    width: 243px;
    height: 68px;
    color: white;
    background: #6E9C9F;
    /* white-space: nowrap; */
}

.warning {
    margin-right: 20px;
    background: white;
    color: #6E9C9F;
    border: 1px solid #6E9C9F;
}
</style>