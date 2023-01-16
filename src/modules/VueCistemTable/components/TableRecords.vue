<template>
    <table class="table-wrapper">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>IPHONE</td>
                <td>ASDASDASDASDSF DSFSD</td>
                <td>3.20</td>
                <td>$ 15,000.00</td>
            </tr>
            <tr>
                <td>1</td>
                <td>IPHONE</td>
                <td>ASDASDASDASDSF DSFSD</td>
                <td>3.20</td>
                <td>$ 15,000.00</td>
            </tr>
            <tr>
                <td>1</td>
                <td>IPHONE</td>
                <td>ASDASDASDASDSF DSFSD</td>
                <td>3.20</td>
                <td>$ 15,000.00</td>
            </tr>
            <tr>
                <td>1</td>
                <td>IPHONE</td>
                <td>ASDASDASDASDSF DSFSD</td>
                <td>3.20</td>
                <td>$ 15,000.00</td>
            </tr>
            <tr>
                <td>1</td>
                <td>IPHONE</td>
                <td>ASDASDASDASDSF DSFSD</td>
                <td>3.20</td>
                <td>$ 15,000.00</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'TableRecords',
    setup () {
        

        return {}
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

    .table-wrapper thead tr th:nth-child(1) {
        background-color: #293277;
        width: 1%;
    }

    .table-wrapper thead tr th:nth-child(2) {
        background-color: #293277;
        width: 4%;
    }

    .table-wrapper thead tr th:nth-child(3) {
        background-color: #293277;
        width: 10%;
    }

    .table-wrapper thead tr th:nth-child(4) {
        background-color: #293277;
        width: 1%;
    }

    .table-wrapper thead tr th:nth-child(5) {
        background-color: #293277;
        width: 1%;
    }

    .table-wrapper th,
    .table-wrapper td {
        padding: 12px 15px;
    }

    .table-wrapper tbody tr {
        border-bottom: 1px solid #dddddd;
    }

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

</style>