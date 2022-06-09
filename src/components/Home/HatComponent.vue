<template>
    <div class="header">
        <navbar class="navbar" />
        <div class="header__inner">
            <div class="header__left">
                <div class="box__left">
                    <h2 class="subtitle">Новые поступления
                        в этом сезоне</h2>
                    <p class="text">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
                        Время
                        исследовать.</p>
                    <router-link class="btn" to="/magazine">Открыть магазин</router-link>
                </div>
            </div>
            <div class="header__right">
                <div class="box__right">
                    <img class="box__img" src="../../assets/img/1.jpg" alt="Woman">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../UI/Navbar.vue'
import MyButton from '../UI/My-Button.vue'
export default {
    components: { Navbar, MyButton },
}
</script>

<style scoped>
.navbar {
    position: absolute;
    width: 100%;
}

.header__inner {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    z-index: 0;
}

.header__left {
    padding-top: 265px;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.subtitle {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 55px;
    line-height: 110%;
    letter-spacing: 0.02em;
    margin-bottom: 45px;
    color: #000000;
}

.text {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: right;
    letter-spacing: 0.02em;
    margin-bottom: 52px;
    color: #000000;
}

.btn {
    align-self: flex-end;
    padding: 22px 50px;
    gap: 10px;

    width: 243px;
    height: 68px;
    color: white;
    background: #6E9C9F;
}

.box__left {
    width: 585px;
    display: flex;
    flex-direction: column;
}

.header__right {
    padding-top: 120px;
    width: 40%;
    background: #F1EADC;
    height: 100%;
}

.box__right {
    padding-left: 50px;
}
</style>