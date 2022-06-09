<template>
    <nav class="nav">
        <div class="container">
            <div class="d-flex justify-content-between w-100">
                <div class="title">
                    <img class="nav__img" src="../../assets/vector/logo.png" alt="Womazing">
                    <span class="nav__span">Womazing</span>
                </div>
                <ul class="nav__list">
                    <li class="nav__item" v-for="(link, idx) in links" :key="idx">
                        <router-link class="nav__link" :to="link.url"> {{ link.name }} </router-link>
                    </li>
                </ul>
                <ul class="nav__list">
                    <li>
                        <img class="nav__img" src="../../assets/vector/phone.png" alt="phone">
                        <span class="nav__span phone"><a href="tel:+77073346526">+7(707)3346526</a></span>
                    </li>
                    <li>
                        <router-link to="/car"><img src="../../assets/vector/car.png" alt="car" /></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    data() {
        return {
            links: [
                { name: 'Главная', url: '/' },
                { name: 'Магазин', url: '/magazine' },
                { name: 'О бренде', url: '/about' },
                { name: 'Контакты', url: '/contacts' },
            ]
        }
    },

}
</script>

<style scoped>
.nav {
    margin-top: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 99;
}

.title {
    display: flex;
    align-items: center;
    gap: 0 14px;
}

.nav__span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
}

.nav__list {
    display: flex;
    align-items: center;
    gap: 0 40px;
}

.nav__link {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: #000000;
    transition: .3s ease-in-out;
}

.nav__link:hover {
    font-weight: 700;
    color: #6E9C9F;
}

.phone {
    margin-left: 15px;
}

.phone a {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    /* identical to box height, or 21px */

    letter-spacing: 0.02em;

    color: #000000;

}
</style>