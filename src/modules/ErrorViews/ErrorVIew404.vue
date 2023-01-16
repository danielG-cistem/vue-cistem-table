<template>
    <div class="error-view-container">
        <h1 class="error-title">Opps, página no encontrada</h1>
        <p class="error-description">Error 404</p>
    </div>
</template>

<script>
export default {
    name: 'ErrorView404',
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .error-view-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .error-title {
        font-size: 25px;
    }
    .error-description {
        color: #9f9f9f;
    }
</style>