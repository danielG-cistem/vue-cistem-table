<template>
    <div class="master-table-container">
        <div class="controls-wrapper">
            <RecordsPerPage></RecordsPerPage>
            <SearchForRecords></SearchForRecords>
        </div>
        <div class="table-container">
            <TableRecords></TableRecords>
        </div>
        <div class="controls-wrapper">
            <RecordsIndicator></RecordsIndicator>
            <RecordsPagination></RecordsPagination>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { useTableStore } from '@/stores/tableStore.js';

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

        const { table } = tableStore.createVueCistemTable();
        await table.init();

        tableStore.renderData( table );

        return {}

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