<template>
    <div class="main-container">
        <h1>VUE CISTEM TABLE</h1><sup>v{{ VERSION_APP }}</sup>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'App',
    setup () {
        
        const VERSION_APP = ref( import.meta.env.VITE_VERSION_APP );

        return {
            VERSION_APP
        }
    }
}
</script>

<style scoped>
    .main-container {
        min-width: 100%;
        min-height: 100vh;
        padding: 20px 40px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-container h1 {
        font-size: 30px;
        font-weight: 500;  
        letter-spacing: 8px;
    }
</style>