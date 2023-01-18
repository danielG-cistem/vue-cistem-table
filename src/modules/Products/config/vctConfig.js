import serviceAPI from '@/api/serviceAPI.js';

const LOAD_COLUMN_VALUES = {
    id: {
        prop: 'id',
        default: '1000',
        sortable: true,
        type: 'numeric'
    },
    title: {
        prop: 'title',
        default: 'default title',
        sortable: true,
        type: 'string',
        normalizer: str => str.toUpperCase(),
    },
    description: {
        prop: 'description',
        default: 'default description',
        normalizer: str => str.toUpperCase(),
    },
    price: {
        prop: 'price',
        default: '0',
        sortable: true,
        type: 'numeric',
        normalizer: price => `$ ${ price.toFixed(2) }`,
    },
    stock: {
        prop: 'stock',
        default: '0',
        sortable: true,
        type: 'numeric',
        normalizer: price => price.toFixed(2),
    }
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