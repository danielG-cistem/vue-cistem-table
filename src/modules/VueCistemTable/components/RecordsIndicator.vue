<template>
    <div class="record-indicator-wrapper">
        <p class="total">
            Mostrando {{ tableStore.recordsIndicator.init }} 
            a {{ tableStore.recordsIndicator.end }} 
            de {{ tableStore.totalRecords }} entradas.
        </p>
    </div>
</template>

<script>
import { useTableStore } from '@/stores/tableStore.js';

export default {
    name: 'RecordsIndicator',
    setup () {
    
        const tableStore = useTableStore();

        return {
            tableStore
        }
    }
}
</script>

<style scoped></style>