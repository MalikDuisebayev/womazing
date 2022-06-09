<template>
    <div class="about">
        <div class="container">
            <div>
                <h2 class="title">О бренде</h2>
                <nav class="nav-b" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <router-link to="/">Главная</router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">О бренде</li>
                    </ol>
                </nav>
                <div v-for="(data, idx) in abouts" :key="idx"
                    class="d-flex justify-content-around align-items-center about__inner">
                    <img style="width: 400px" :src="data.url" :alt="data.subtitle">
                    <div style="width:542px">
                        <h3 class="subtitle">
                            {{ data.subtitle }}
                        </h3>
                        <p>
                            {{ data.text_1 }}
                        </p>
                        <p>
                            {{ data.text_2 }}
                        </p>
                    </div>

                </div>
                <div class="d-flex justify-content-center">
                    <router-link class="btn mt-5" to="magazine">Перейти в магазин</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import MyButton from '../UI/My-Button.vue'
export default {
    components: { MyButton },
    props: {
        abouts: {
            type: Array
        }
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
    margin-top: 194px;
    color: #000000;
}

.subtitle {
    margin-bottom: 46px;
}

.about__inner:nth-child(even) {
    flex-direction: row-reverse;
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

.btn {
    padding: 22px 50px;
    gap: 10px;
    width: 243px;
    height: 68px;
    border: 1px solid #6E9C9F;
    color: #6E9C9F;
    background: white;
    white-space: nowrap;
}

.nav-b {
    margin-bottom: 80px;
}
</style>