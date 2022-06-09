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
                <nav aria-label="Page navigation example">
                    <ul class="pagination pagination-lg d-flex justify-content-center list">

                        <li class="page-item">
                            <router-link to="/magazine/all" class="page-link">Все</router-link>
                        </li>
                        <li class="page-item">
                            <router-link to="/magazine/shirt" class="page-link">Футболки</router-link>
                        </li>
                        <li class="page-item">
                            <router-link to="/magazine/dress" class="page-link">Платья</router-link>
                        </li>
                        <li class="page-item">
                            <router-link to="/magazine/swim" class="page-link">Купальник</router-link>
                        </li>
                        <li class="page-item">
                            <router-link to="/magazine/swit" class="page-link">Толстовки</router-link>
                        </li>
                    </ul>
                </nav>

            </div>

            <router-view :data="data"></router-view>

        </div>

    </div>
</template>

<script>
import Gallery from './Gallery.vue'
export default {
    components: { Gallery },
    props: {
        data: {
            type: Array
        }
    }
}
</script>

<style  scoped>
.magazine {
    margin-top: 194px;
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
</style>