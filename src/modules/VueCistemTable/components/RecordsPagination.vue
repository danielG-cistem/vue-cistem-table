<template>
    <div class="pagination-wrapper">
        <button class="btn-large" @click="btnPreviousPage" :disabled="tableStore.previous">Previo</button>
        <button class="btn-small btn-first-page" @click="btnFirstPage" :disabled="tableStore.previous">&#60;&#60;</button>
        <template v-for="page in tableStore.totalPages" :key="page">
            <!-- <button v-if="page < tableStore.currentPage + 3 && page > tableStore.currentPage - 3" @click="btnPage( page )" class="btn-small" :class="{ 'active-page': page === tableStore.currentPage }">{{ page }}</button>     -->
            <button v-if="page < tableStore.currentPage + 3 && page > tableStore.currentPage - 3" @click="btnPage( page )" class="btn-small" :class="{ 'active-page': page === tableStore.currentPage }">{{ page }}</button>    
            
            <!-- <button class="btn-small" @click="btnPage( page )" :class="{ 'active-page': page === tableStore.currentPage }">{{ page }}</button>     -->
        </template>
        <button class="btn-small btn-last-page" @click="btnLastPage" :disabled="tableStore.next">&#62;&#62;</button>
        <button class="btn-large" @click="btnNextPage" :disabled="tableStore.next">Siguiente</button>
    </div>
</template>

<script>
import { useTableStore } from '@/stores/tableStore.js';

export default {
    name: 'RecordsPagination',
    props: {
        previousPage: {
            type: Function,
            required: true
        },
        nextPage: {
            type: Function,
            required: true
        },
        currentPage: {
            type: Function,
            required: true
        },
        goToFirstPage: {
            type: Function,
            required: true
        },
        goToLastPage: {
            type: Function,
            required: true
        }
    },
    setup ( props ) {
        
        const tableStore = useTableStore();

        const btnPreviousPage = props.previousPage;
        const btnNextPage = props.nextPage;
        const btnFirstPage = props.goToFirstPage;
        const btnLastPage = props.goToLastPage;
        const btnPage = ( page ) => props.currentPage ( page );

        return {
            tableStore,
            btnPreviousPage, btnNextPage, btnFirstPage, btnLastPage, btnPage
        }
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

    .btn-first-page:disabled,
    .btn-last-page:disabled {
        cursor: not-allowed;
        background-color: #4c57a9;
    }

    .active-page {
        background-color: #293277;
        color: #FFFFFF;
    }

</style>