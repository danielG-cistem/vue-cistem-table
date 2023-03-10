<template>
    <div class="master-table-container">
        <div class="controls-wrapper">
            <RecordsPerPage :recordsPerPage="recordsPerPage"></RecordsPerPage>
            <SearchForRecords :search="searchByKeyword"></SearchForRecords>
        </div>
        <div class="table-container">
            <TableRecords :sorting="sortingByField"></TableRecords>
        </div>
        <div class="controls-wrapper">
            <RecordsIndicator></RecordsIndicator>
            <RecordsPagination 
                :previousPage="previousPage" 
                :nextPage="nextPage" 
                :currentPage="currentPage"
                :goToFirstPage="goToFirstPage"
                :goToLastPage="goToLastPage">
            </RecordsPagination>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { useTableStore } from '@/stores/tableStore.js';
import VueCistemTable from '@/modules/VueCistemTable/main.js';

export default {
    name: 'MasterTable',
    components: {
        TableRecords: defineAsyncComponent(() => import("../components/TableRecords.vue")),
        RecordsPerPage: defineAsyncComponent(() => import("../components/RecordsPerPage.vue")),
        SearchForRecords: defineAsyncComponent(() => import("../components/SearchForRecords.vue")),
        RecordsIndicator: defineAsyncComponent(() => import("../components/RecordsIndicator.vue")),
        RecordsPagination: defineAsyncComponent(() => import("../components/RecordsPagination.vue"))
    },
    async setup () {
        
        await new Promise((res) => setTimeout(res, 1500));

        const tableStore = useTableStore();

        // Iniciamos VueCistemTable.
        const table = new VueCistemTable( tableStore.config );
        await table.init();
        
        // Renderizar información.
        const renderData = ( currentPage ) => tableStore.data.splice(0, tableStore.data.length, ...table.getPage( currentPage ));

        // Indicador de registros.
        const recordsIndicator = () => {
            const { firstIndex, lastIndex } = table.getPageIndex();
            tableStore.recordsIndicator.init = firstIndex;
            tableStore.recordsIndicator.end = lastIndex;
            tableStore.totalRecords = table.getNumberOfRecords();
        }

        // Iniciando sistema de paginación.
        const initPagination = () => {
            tableStore.totalPages = table.getNumberOfPages();
            tableStore.currentPage = table.getCurrentPage();
        }

        // Registros por página.
        const recordsPerPage = ( recordsPerPage ) => {
            table.setNumberOfRows( recordsPerPage );
            renderData();
            recordsIndicator();
            initPagination();
        }

        // Página previa.
        const previousPage = () => {
            tableStore.currentPage = table.getCurrentPage();
            table.getPreviousPage();
            renderData();
            recordsIndicator();
            initPagination();
            previousDisabled();
            nextDisabled();
        }

        // Página siguiente.
        const nextPage = () => {
            tableStore.currentPage = table.getCurrentPage();
            table.getNextPage();
            renderData();
            recordsIndicator();
            initPagination();
            previousDisabled();
            nextDisabled();
        }

        // Página actual
        const currentPage = ( page ) => {
            tableStore.currentPage = table.getCurrentPage();
            renderData( page );
            initPagination();
            recordsIndicator();
            previousDisabled();
            nextDisabled();
        }

        const goToFirstPage = () => {
            tableStore.currentPage = table.getCurrentPage();
            renderData( 1 );
            initPagination();
            recordsIndicator();
            previousDisabled();
            nextDisabled();
        }

        const goToLastPage = () => {
            tableStore.currentPage = table.getCurrentPage();
            tableStore.data.splice(0, tableStore.data.length, ...table.getLastPage());
            initPagination();
            recordsIndicator();
            previousDisabled();
            nextDisabled();
        }

        // Desactivar botón de página previa.
        const previousDisabled = () => tableStore.currentPage === 1 ? tableStore.previous = true : tableStore.previous = false;
        // Desactivar botón de página siguiente.
        const nextDisabled = () => tableStore.currentPage === tableStore.totalPages ? tableStore.next = true : tableStore.next = false;

        // Busquedas.
        const searchByKeyword = ( keyword ) => {
            table.filterByKeyword( keyword.value );
            tableStore.currentPage = table.getCurrentPage();
            tableStore.data.splice(0, tableStore.data.length, ...table.getPage());
            initPagination();
            recordsIndicator();
            previousDisabled();
            nextDisabled();
        }

        // Ordenamiento.
        const sortingByField = ( field ) => {
            table.sortByField( field );
            tableStore.data.splice(0, tableStore.data.length, ...table.getPage());
        }        

        renderData();
        recordsIndicator();
        initPagination();
        previousDisabled();
        nextDisabled();

        return {
            recordsPerPage,
            previousPage, nextPage, currentPage, goToFirstPage, goToLastPage,
            searchByKeyword,
            sortingByField
        }

    }
}
</script>

<style scoped>

    .master-table-container {
        display: flex;
        flex-direction: column;   
        gap: 20px;
    }

    .controls-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>