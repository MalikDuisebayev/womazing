<template>
    <div>
        <div v-if="isSuccess">
            <navbar />
            <div class="container">
                <h2 class="title">
                    Заказ получен
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
                        <li class="breadcrumb-item">
                            <router-link to="/order">Оформление заказа</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page"> Заказ получен </li>
                    </ol>
                </nav>

                <div class="row mt-5">
                    <div class="col-6 d-flex align-items-center">
                        <img src="../../assets/vector/live.png" alt="live">
                        <div style="margin-left: 10px">
                            <h3>Заказ успешно оформлен</h3>
                            <p>Мы свяжемся с вами в ближайшее время!</p>
                        </div>
                    </div>
                    <div class="col-6 d-flex align-items-center">
                        <router-link class="btn text-center" to="/">перейти на главную</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="d-flex align-items-center justify-content-center spinners">
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
            <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
            <div class="spinner-grow text-light" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
            <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Загрузка...</span>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from '../UI/My-Button.vue'
import Navbar from '../UI/Navbar.vue'
export default {
    components: { Navbar, MyButton },
    data() {
        return {
            isSuccess: false
        }
    },
    created() {
        setTimeout(() => {
            this.isSuccess = true
        }, 2000)
    }

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

.btn {
    padding: 22px 70px;
    gap: 10px;
    /* width: 243px; */
    /* height: 68px; */
    color: #6E9C9F;
    background: #fff;
    border: 1px solid #6E9C9F;
    /* white-space: nowrap; */
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

.spinners {
    height: 100vh;
}
</style>