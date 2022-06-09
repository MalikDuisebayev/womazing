<template>
    <section class="pros">
        <div class="container">
            <h2 class="title"> Что для нас важно</h2>
            <div class="pros__inner d-flex justify-content-between mt-5">
                <ul class="d-flex flex-column list">
                    <li><img src="../../assets/vector/quality.png" alt="quality"></li>
                    <li class="subtitle">Качество</li>
                    <li class="text">Наши профессионалы работают на лучшем оборудовании для пошива одежды
                        беспрецедентного качества
                    </li>
                </ul>
                <ul class="d-flex flex-column list">
                    <li><img src="../../assets/vector/Vector2.png" alt="quality"></li>
                    <li class="subtitle">Скорость</li>
                    <li class="text">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции
                        в наших
                        собственных цехах
                    </li>
                </ul>
                <ul class="d-flex flex-column list">
                    <li><img src="../../assets/vector/Group.png" alt="quality"></li>
                    <li class="subtitle">Ответственность</li>
                    <li class="text">Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда
                        - все это
                        Womazing
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.pros {
    margin-top: 130px;
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

.list {
    gap: 37px 0;
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

.text {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 140%;
    /* or 24px */

    letter-spacing: 0.02em;

    color: #000000;

}
</style>