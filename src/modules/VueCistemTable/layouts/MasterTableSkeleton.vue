<template>
    <div class="master-table">
        <div class="controls-wrapper">
            <div class="record-per-page">
                <AnimatedPlaceholder height="15px" width="80px" borderRadius="10px"/>
                <AnimatedPlaceholder height="35px" width="35px" borderRadius="4px"/>
                <AnimatedPlaceholder height="15px" width="60px" borderRadius="10px"/>
            </div>
            <div class="search-keyword">
                <AnimatedPlaceholder height="45px" width="300px" borderRadius="5px"/>
            </div>
        </div>
        <div class="table-wrapper">
            <AnimatedPlaceholder height="300px" width="1350px" borderRadius="8px"/>
        </div>
        <div class="controls-wrapper">
            <div class="record-indicator-wrapper">
                <AnimatedPlaceholder height="20px" width="250px" borderRadius="10px"/>
            </div>
            <div class="pagination-wrapper">
                <AnimatedPlaceholder height="40px" width="100px" borderRadius="5px"/>
                <AnimatedPlaceholder height="40px" width="40px" borderRadius="5px"/>
                <AnimatedPlaceholder height="40px" width="40px" borderRadius="5px"/>
                <AnimatedPlaceholder height="40px" width="40px" borderRadius="5px"/>
                <AnimatedPlaceholder height="40px" width="100px" borderRadius="5px"/>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
   name: 'MasterTableSkeleton',
   components: {
       AnimatedPlaceholder: defineAsyncComponent(() => import("@/AnimatedPlaceholder.vue"))
   },
   setup () {
       return {}
   }
}
</script>

<style scoped>   
    .master-table {
        display: flex;
        flex-direction: column;   
        gap: 20px;
    }
    .controls-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .record-per-page { 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .pagination-wrapper {
        display: flex;
        gap: 10px;
    }
</style>