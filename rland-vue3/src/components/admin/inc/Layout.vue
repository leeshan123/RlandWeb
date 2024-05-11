<script setup>
import Header from "./Header.vue"
import Footer from "../../inc/Footer.vue"
</script>


<template>
    <Header />
    <div>admin</div>
    <RouterView />
    <Footer />
</template>

<style>
    .n-list{
        background-color: blue;
    }
</style>