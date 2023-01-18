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
        tableStore.columnsHeadings = ref([
            { label: 'ID' },
            { label: 'First Name' },
            { label: 'Last Name' },
            { label: 'Email' },
            { label: 'Phone' },
            { label: 'Image' },
        ]);

        // console.log("Config: ", tableStore.config)
        // console.log("Columns: ", tableStore.columnsHeadings)

        return {}
    }
}
</script>

<style scoped></style>