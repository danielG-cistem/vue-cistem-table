<template>
    <div class="search-keyword">
        <input type="search" placeholder="Buscar..." v-model="keyword" @keyup="searchByKeyword" class="search-input">
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'SearchForRecords',
    props: {
        search: {
            type: Function,
            required: true
        }
    },
    setup ( props ) {
        
        const keyword = ref("");

        const searchByKeyword = () => props.search( keyword );

        return {
            keyword,
            searchByKeyword
        }
    }
}
</script>

<style scoped>
    .search-input {
        width: 300px;
        height: 45px;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 4px 4px 10px #d0d0d0;
        outline: none;
        border: none;
    }
    .search-input:focus {
        outline: 2px solid #293277;
    }
</style>