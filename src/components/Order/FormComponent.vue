<template>
    <div>
        <div class="row">
            <div class="col-6">
                <h2>Данные покупателя </h2>
                <form @submit.prevent="saveProducts">
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Имя</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" required>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Фамилия</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" required>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            required>
                        <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.
                        </div>
                    </div>
                    <router-link to="/issued" class="btn">Заказать</router-link>
                </form>
            </div>
            <div class="col-6">
                <h2 class="subtitle">Ваш заказ</h2>
                <ul class="list-group">
                    <li class="list-group-item" v-for="product in data" :key="product.id"> {{ product.name }}
                        - {{ product.price }} </li>

                    <li class="list-group-item end">Итого: ${{ summary }}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import MyButton from '../UI/My-Button.vue'
export default {
    components: { MyButton },
    data() {
        return {
            data: null,
            summary: 0
        }
    },
    methods: {
        saveProducts() {
            if (this.summary === 0) {
                return alert('Корзина пуста')
            }
            alert(`Спасибо за покупку`)
        },
    },
    created() {
        this.data = this.$store.state.products;
        this.summary = this.$store.state.products.reduce((acc, i) => {
            const sum = i.price.replace(/[^a-zа-яё0-9\s]/gi, ' ');
            console.log(sum)
            acc = +acc + (+sum * i.amount)
            return acc
        }, 0)
    },


}
</script>

<style  scoped>
.end {
    background: #F1EADC;
}

.btn {
    padding: 22px 50px;
    gap: 10px;
    width: 243px;
    height: 68px;
    color: white;
    background: #6E9C9F;
    white-space: nowrap;
}
</style>