<script setup>
defineProps(["price"])
</script>


<template>
    <section class="basket-status">
            <h1 class="d:none">Basket Bar</h1>
            <dl class="ph:3">
                <dt>금액</dt>
                <dd class="ml:2">{{price}}원</dd>
                <dt class="d:none">수량</dt>
                <dd class="ml:auto">
                    <a href="/basket/list" 
                        class="icon icon-basket_outline icon-color:base-0 icon-size:4 icon-text-with"
                    >1</a>
                </dd>
            </dl>
        </section>
</template>

<style scoped>
    @import url(@/assets/css/menu/basket-status.css);

</style>