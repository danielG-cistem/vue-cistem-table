<template>
    <div class="records-per-page">
        <p>Mostrar</p>
        <select class="select-page">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="35">35</option>
            <option value="50">50</option>
        </select>
        <p>Regisros.</p>
    </div>
</template>

<script>
export default {
    name: 'RecordsPerPage',
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
    .records-per-page { 
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .select-page {
        background-color: #FFFFFF;
        font-weight: bold;
        width: 35px;
        height: 35px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 4px 4px 8px #cdcdcd;
        padding: 0;
        text-align: center;
        outline: none;
    }

    .select-page:focus {
        outline: 2px solid #293277;
    }
</style>