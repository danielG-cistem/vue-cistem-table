<template>
    <div class="main-container">
        <HeaderComponent></HeaderComponent>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'App',
    components: {
        HeaderComponent: defineAsyncComponent(() => import("@/modules/HeaderComponent.vue")),
    },
    setup () {
        

        return {
        }
    }
}
</script>

<style scoped>
    .main-container {
        min-width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .content {
        padding: 20px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>