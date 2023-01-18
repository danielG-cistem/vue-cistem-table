<template>
    <div class="records-per-page">
        <p>Mostrar</p>
        <select class="select-page" @change="selectNumber">
            <option v-for="item in listRecordsPerPage" :key="item.value" :value="item.value">{{ item.text }}</option>
        </select>
        <p>Regisros.</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'RecordsPerPage',
    props: {
        recordsPerPage: {
            type: Function,
            required: true
        }
    },
    setup ( props ) {

        const listRecordsPerPage = ref(
            [
                {
                    value: 10,
                    text: '10'
                },
                {
                    value: 25,
                    text: '25'
                },
                {
                    value: 35,
                    text: '35'
                },
                {
                    value: 50,
                    text: '50'
                }
            ]
        );

        const selectNumber = ( e ) => props.recordsPerPage( Number(e.target.value) );

        return {
            listRecordsPerPage,
            selectNumber
        }
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