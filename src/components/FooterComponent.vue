<template>
    <div class="footer">
        <div class="container">
            <div class="footer__inner d-flex justify-content-between align-items-center">
                <ul class="d-flex flex-column">
                    <li>© Все права защищены</li>
                    <li>Политика конфиденциальности</li>
                    <li>Публичная оферта</li>
                </ul>
                <div>
                    <router-link class="logo" to="/">
                        <img src="../assets/vector/logo.png" alt="womazin">
                        <span class="span">Womazing</span>
                    </router-link>
                </div>
                <ul class="d-flex list">
                    <li>
                        <a href="">
                            <img src="../assets/vector/instagram.png" alt="instagram">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../assets/vector/facebook.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/malikduisebayev">
                            <img src="../assets/vector/telegram.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
    background: #F1EADC;
    margin-top: 130px;
}

.footer__inner {
    height: 150px;
}

.span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0 20px;
}

.list {
    gap: 0 20px;
}
</style>