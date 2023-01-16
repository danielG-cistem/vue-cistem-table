<template>
    <div class="search-keyword">
        <input type="search" placeholder="Buscar..." class="search-input">
    </div>
</template>

<script>
export default {
    name: 'SearchForRecords',
    setup () {
        

        return {}
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