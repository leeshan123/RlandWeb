<script setup>
import { onMounted, reactive,ref } from 'vue';

const categoryModel = reactive({
    list:[],
    count:0
});


onMounted(()=>{
    fetch("http://localhost:8080/categorys")
    .then((resp)=>resp.json())
    .then((json)=>{
        categoryModel.list = json;
        console.log(categoryModel.list);
    })
})

</script>

<template>
    <section class="menu-filter">
        <h1>Rland Menu<span class="d:none">검색</span></h1>

        <nav class="category-filter">              
            
            <h1 class="d:none">카테고리 검색 메뉴 목록</h1>
            <ul>
                <li><a class="sm:deco md:deco sm:icon-filter_list"                                    
                        href="list">전체메뉴</a></li>
                <li v-for="c of categoryModel.list">
                    <a class="d:none md:d:inline current" 
                    href="?c=1">{{ c.name }}</a></li>
            </ul>
        </nav>
        <section class="query-filter" id="query-form">
            <h1 class="d:none">이름 검색 폼</h1>
            <form action="list" method="get">
                <fieldset>
                    <legend class="d:none">이름 검색</legend>
                    <input class="query-input" type="text" placeholder="메뉴 검색" name="q" value="">
                    <button class="icon icon-find">검색</button>
                </fieldset>
            </form>
        </section>
    </section>
</template>

<style scoped>
    @import url(@/assets/css/menu/menu-filter.css);
</style>