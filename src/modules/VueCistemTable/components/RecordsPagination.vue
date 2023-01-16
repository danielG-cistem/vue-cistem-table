<template>
    <div class="pagination-wrapper">
        <button class="btn-large">Previo</button>
        <button class="btn-small btn-first-page">&#60;&#60;</button>
        <button class="btn-small">1</button>
        <button class="btn-small">2</button>
        <button class="btn-small">3</button>
        <button class="btn-small">4</button>
        <button class="btn-small">5</button>
        <button class="btn-small btn-last-page">&#62;&#62;</button>
        <button class="btn-large">Siguiente</button>
    </div>
</template>

<script>
export default {
    name: 'RecordsPagination',
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .pagination-wrapper {
        display: flex;
        gap: 10px;
    }

    .btn-large {
        background-color: #293277;
        color: #FFFFFF;
        font-weight: bold;
        width: 100px;
        height: 40px;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        box-shadow: 4px 4px 8px #DFDFDF;
        cursor: pointer;
        font-size: 14px;
    }

    .btn-large:hover {
        background-color: #424d9f;
        color: #FFFFFF;
        transition: background-color .5s ease;
    }

    .btn-large:disabled {
        cursor: not-allowed;
        background-color: #4c57a9;
    }

    .btn-small {
        background-color: #FFFFFF;
        font-weight: bold;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 4px 4px 8px #DFDFDF;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .btn-small:hover {
        background-color: #293277;
        color: #FFFFFF;
        transition: background-color .5s ease;
    }

    .btn-first-page, .btn-last-page {
        background-color: #bababa;
        color: #FFFFFF;
    }

    .btn-first-page:hover, .btn-last-page:hover {
        background-color: #848484;
    }

    .pagination-active {
        background-color: #293277;
        color: #FFFFFF;
    }

</style>