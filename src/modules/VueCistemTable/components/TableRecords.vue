<template>
    <table class="table-wrapper">
        <thead>
            <tr>
                <template v-for="column in tableStore.columnsHeadings" :key="column.label">
                    <th @click="sorting( column.field )" v-if="column.sortable">
                        <div class="wrapper">
                            <img :src="pathIconSort" class="sort-img" :id="column.field">
                            {{ column.label }}
                        </div>
                    </th>
                    <th v-else="column.sortable">{{ column.label }}</th>
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
import { ref } from 'vue';
import { useTableStore } from '@/stores/tableStore.js';

export default {
    name: 'TableRecords',
    props: {
        sorting: {
            type: Function,
            required: true
        }
    },
    setup ( props ) {
        
        const tableStore = useTableStore();
        const pathIconSort = ref("src/assets/img/sort-default.png");
        const oldField = ref("");
        const isAsc = ref(false);
        
        const sorting = ( field ) => {

            const $imgField = document.querySelector(`th div img#${ field }`);
            
            if ( field === oldField.value ) {
                if ( isAsc.value ) {
                    $imgField.src = "src/assets/img/sort-asc.png";
                    isAsc.value = false;
                    props.sorting( field )
                } else {
                    $imgField.src = "src/assets/img/sort-desc.png";
                    isAsc.value = true;
                    props.sorting( field )
                }
                
            } else {

                if ( oldField.value !== "" ) {
                    const $imgOldField = document.querySelector(`th div img#${ oldField.value }`);
                    $imgOldField.src = "src/assets/img/sort-default.png";
                }

                $imgField.src = "src/assets/img/sort-asc.png";
                oldField.value = field;
                isAsc.value = false;
                props.sorting( field );

            }

        }
        
        return {
            tableStore,
            sorting, pathIconSort
        }
    }
}
</script>

<style scoped>

    .sort-img {
        width: 12px;
    }

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
        /* outline: 2px dashed red; */
        position: relative;
        cursor: pointer;
    }

    .table-wrapper thead tr th .wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
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