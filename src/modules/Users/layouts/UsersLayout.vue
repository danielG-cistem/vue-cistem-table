<template>
    <Suspense>
        <template #default>
            <MasterTable></MasterTable>
        </template>
        <template #fallback>
            <MasterTableSkeleton></MasterTableSkeleton>
        </template>
    </Suspense>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
import { useTableStore } from '@/stores/tableStore.js';
import VCT_CONFIG from '../config/vctConfig.js';

export default {
    name: 'UsersLayout',
    components: {
        MasterTable: defineAsyncComponent(() => import("@/modules/VueCistemTable/layouts/MasterTable.vue")),
        MasterTableSkeleton: defineAsyncComponent(() => import("@/modules/VueCistemTable/layouts/MasterTableSkeleton.vue"))
    },
    setup () {
        
        const tableStore = useTableStore();
        
        tableStore.config = VCT_CONFIG;

        const labels = Object.entries( VCT_CONFIG.columns )
        .map( ( [ field, config ] ) => {
            const { label, sortable } = config;
            return { label, field, sortable }
        });

        tableStore.columnsHeadings = labels;

        return {}
    }
}
</script>

<style scoped></style>