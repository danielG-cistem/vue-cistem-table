import serviceAPI from '@/api/serviceAPI.js';

const LOAD_COLUMN_VALUES = {
    id: {
        // prop: 'id',
        label: 'ID',
        default: '1000',
        sortable: true,
        type: 'numeric'
    },
    title: {
        // prop: 'title',
        label: 'Title',
        default: 'default title',
        sortable: true,
        type: 'string',
        normalizer: str => str.toUpperCase(),
    },
    description: {
        label: 'Description',
        default: 'default description',
        normalizer: str => str.toUpperCase(),
    },
    stock: {
        label: 'Stock',
        default: '0',
        sortable: true,
        type: 'numeric',
        normalizer: price => price.toFixed(2),
    },
    price: {
        label: 'Price',
        default: '0',
        sortable: true,
        type: 'numeric',
        normalizer: price => `$ ${ price.toFixed(2) }`,
    },
}

const REQUEST_PRODUCTS = async () => {
    const gettingProducts = await serviceAPI.get("/products");
    const { products } = gettingProducts.data;
    return products;
}


const NUMBER_OF_ROWS = 10;

const VCT_CONFIG = {
    columns: LOAD_COLUMN_VALUES,
    populateFunction: REQUEST_PRODUCTS,
    numberOfRows: NUMBER_OF_ROWS
}

export default VCT_CONFIG;