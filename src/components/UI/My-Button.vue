<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
    padding: 22px 50px;
    gap: 10px;
    width: 243px;
    height: 68px;
    color: white;
    background: #6E9C9F;
}
</style>