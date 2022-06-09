<template>
    <div class="team">
        <div class="container">
            <h2 class="title">
                Команда мечты Womazing
            </h2>
            <div class="team__inner d-flex justify-content-between align-items-center">
                <div id="carouselExampleControls" class="carousel slide slider" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../assets/img/team.avif" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/img/team2.avif" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/img/team3.avif" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="box">
                    <h2 class="subtitle">Для каждой</h2>
                    <p class="pb-3">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                    <p>
                        Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства
                        каждой девушки.</p>
                    <router-link class="link" to="/about">Подробнее о бренде</router-link>
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
.team {
    margin-top: 130px;
}

.box {
    width: 255px;
}

.slider {
    max-width: 900px;
}

.title {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    /* identical to box height, or 44px */
    margin-bottom: 80px;
    letter-spacing: 0.02em;

    color: #000000;
}

.subtitle {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 140%;
    /* identical to box height, or 35px */

    letter-spacing: 0.02em;

    color: #000000;
}

.link {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 140%;
    /* identical to box height, or 24px */

    letter-spacing: 0.02em;

    /* CTA */

    color: #6E9C9F;
}
</style>