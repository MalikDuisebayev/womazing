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

                    <li class="breadcrumb-item active" aria-current="page"> Контакты </li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-12 d-flex justify-content-center mt-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15780.248326257424!2d71.44002715523773!3d51.12411375804733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458404652ad61d%3A0x9158e42508bbed44!2z0JDQutC-0YDQtNCw!5e0!3m2!1sru!2skz!4v1654855762664!5m2!1sru!2skz"
                        width="1000" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 d-flex justify-content-around">
                    <ul>
                        <li>Телефон</li>
                        <li><a href="tel:+77073346526">+77073346526</a></li>
                    </ul>
                    <ul>
                        <li>E-mail</li>
                        <li><a href="mailto:malik.duysebaev@mail.ru">malik.duysebaev@mail.ru</a></li>
                    </ul>
                    <ul>
                        <li>Адрес</li>
                        <li>Ак орда, Левобережье, Нұр-Сұлтан</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

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