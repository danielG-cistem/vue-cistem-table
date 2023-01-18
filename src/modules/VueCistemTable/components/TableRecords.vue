<template>
    <table class="table-wrapper">
        <thead>
            <tr>
                <template v-for="column in tableStore.columnsHeadings" :key="column.label">
                    <th>{{ column.label }}</th>
                </template>
            </tr>
        </thead>
        <tbody>
            <template v-if="tableStore.data.length === 0">
                <tr>
                    <td :colspan="tableStore.columnsHeadings.length" class="text-center">No hay datos para mostrar.</td>
                </tr>
            </template>
            <template v-else>
                <tr v-for="row in tableStore.data">
                    <td v-for="item in Object.keys(row)">
                        {{ row[item] }}
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
import { useTableStore } from '@/stores/tableStore.js';

export default {
    name: 'TableRecords',
    setup () {
        
        const tableStore = useTableStore();
        
        return {
            tableStore,
        }
    }
}
</script>

<style scoped>
    .table-wrapper {
        width: 1300px;
        border-collapse: collapse;
        font-size: 0.9em;
        min-width: 400px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }

    .table-wrapper thead tr {
        background-color: #293277;
        color: #ffffff;
        text-align: left;
        font-weight: bold;
    }

    .table-wrapper thead tr th {
        position: relative;
        cursor: pointer;
    }

    .table-wrapper th,
    .table-wrapper td {
        padding: 12px 15px;
    }

    .table-wrapper tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    /* .table-wrapper tbody tr td {
        width: 10%;        
    } */

    /* .table-wrapper tbody tr td:nth-child(3) {
        width: 60%;        
    } */

    .table-wrapper tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .table-wrapper tbody tr:last-of-type {
        border-bottom: 2px solid #293277;
    }

    .table-wrapper tbody tr.active-row {
        font-weight: bold;
        color: #293277;
    }

    .text-center {
        text-align: center;
    }

</style>