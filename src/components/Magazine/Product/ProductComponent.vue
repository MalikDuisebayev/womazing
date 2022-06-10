<template>
    <div>
        <navbar />
        <div class="container">
            <div class="title">
                {{ data.name }}
            </div>
            <nav class="nav-b" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Главная</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/magazine">Магазин</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page"> {{ data.name }} </li>
                </ol>
            </nav>
            <div class="product__inner d-flex justify-content-around">
                <img :src="data.url" :alt="data.name">
                <div class="align-self-center">
                    <h3 class="price"> {{ data.price }} </h3>
                    <p class="mt-5">Выберите размер</p>
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input v-model="size" value="S" type="radio" class="btn-check" name="btnradio" id="btnradio1"
                            autocomplete="off" checked>
                        <label class="btn btn-outline-dark" for="btnradio1">S</label>
                        <input v-model="size" value="M" type="radio" class="btn-check" name="btnradio" id="btnradio2"
                            autocomplete="off">
                        <label class="btn btn-outline-dark" for="btnradio2">M</label>
                        <input v-model="size" value="L" type="radio" class="btn-check" name="btnradio" id="btnradio3"
                            autocomplete="off">
                        <label class="btn btn-outline-dark" for="btnradio3">L</label>
                        <input v-model="size" value="XL" type="radio" class="btn-check" name="btnradio" id="btnradio4"
                            autocomplete="off">
                        <label class="btn btn-outline-dark" for="btnradio4">XL</label>
                    </div>
                    <p class="mt-5">Выберите цвет</p>
                    <div class="btn-group color" role="group" aria-label="Basic radio toggle button group">
                        <input v-model="color" value="Желтый" type="radio" class="btn-check" name="btnradio5"
                            id="btnradio5" autocomplete="off" checked>
                        <label class="btn btn-outline-warning rounded-circle circle" for="btnradio5"></label>
                        <input v-model="color" value="Зеленый" type="radio" class="btn-check" name="btnradio6"
                            id="btnradio6" autocomplete="off">
                        <label class="btn btn-outline-success rounded-circle circle" for="btnradio6"></label>
                        <input v-model="color" value="Красный" type="radio" class="btn-check" name="btnradio6"
                            id="btnradio7" autocomplete="off">
                        <label class="btn btn-outline-danger rounded-circle circle" for="btnradio7"></label>
                        <input v-model="color" value="Бежевый" type="radio" class="btn-check" name="btnradio7"
                            id="btnradio8" autocomplete="off">
                        <label class="btn btn-outline-secondary rounded-circle circle" for="btnradio8"></label>
                    </div>

                    <div class="d-flex mt-5 car">
                        <input v-model="amount" type="text" class="form-control inputCol text-center">
                        <my-button @click="addProduct">Добавить в корзину</my-button>
                    </div>
                </div>


            </div>
        </div>
        <footer-component />
    </div>
</template>

<script>
import Navbar from '../../UI/Navbar.vue'
import db from '../../../assets/db.json'
import MyButton from '../../UI/My-Button.vue';
import FooterComponent from '../../FooterComponent.vue';
export default {
    components: { Navbar, MyButton, FooterComponent },
    data() {
        return {
            data: null,
            size: '',
            color: '',
            amount: 1

        }
    },
    async created() {
        const data = db.magazine;
        const arr = data.filter(i => i.id === this.$route.params.id)
        const [obg] = arr
        this.data = obg
        console.log(obg)
    },
    updated() {
        console.log(this.size)
        console.log(this.color)
    },
    methods: {
        addProduct() {
            if (this.amount == 0) {
                return alert('Кoличество не может быть равным 0')
            }
            const obj = {
                amount: this.amount,
                size: this.size,
                color: this.color
            }
            this.$store.state.products.push({ ...this.data, ...obj })
            alert(`${this.data.name} в корзине!`)


        }
    },

}
</script>

<style scoped>
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

.inputCol {
    width: 80px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    /* identical to box height, or 28px */

    text-align: center;
    letter-spacing: 0.02em;

    color: #000000;
}

.btn-car {
    align-self: flex-end;
    padding: 22px 50px;
    gap: 10px;
    width: 243px;
    height: 68px;
    color: white;
    background: #6E9C9F;
    white-space: nowrap;
}

.car {
    gap: 0 10px;
}

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

.circle {
    width: 30px;
    height: 30px;
}

.color {
    gap: 0 20px;
}

.nav-b {
    margin-bottom: 80px;
}

.product__inner {
    height: 729px;
}

.price {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    /* identical to box height, or 44px */
    letter-spacing: 0.02em;
    /* Дополнительный акцент */
    color: #998E78;
}

.btn-circle {
    width: 38px;
    height: 38px;
    border-radius: 19px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    font-size: 16px;
}
</style>