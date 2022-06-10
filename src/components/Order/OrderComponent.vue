<template>
    <div>
        <div class="container">
            <h2 class="title">
                Оформление заказа
            </h2>
            <nav class="nav-b" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Главная</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/magazine">Магазин</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/car">Корзина</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page"> Оформление заказа </li>
                </ol>
            </nav>
            <form-component />
        </div>


    </div>
</template>

<script>
import FormComponent from "./FormComponent.vue"


export default {
    components: { FormComponent },

}
</script>

<style scoped>
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
</style>