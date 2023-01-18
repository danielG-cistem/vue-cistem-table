import serviceAPI from '@/api/serviceAPI.js';

const LOAD_COLUMN_VALUES = {
    id: {
        prop: 'id',
        default: '1000',
        sortable: true,
        type: 'numeric'
    },
    firstName: {
        prop: 'firstName',
        default: 'default firstName',
        sortable: true,
        type: 'string',
        normalizer: str => str.toUpperCase(),
    },
    lastName: {
        prop: 'lastName',
        default: 'default lastName',
        normalizer: str => str.toUpperCase(),
    },
    email: {
        prop: 'email',
        default: 'default@email.com',
        sortable: true,
        type: 'string',
        normalizer: str => str.toUpperCase(),
    },
    phone: {
        prop: 'phone',
        default: 'default phone',
        sortable: true,
        type: 'string',
        normalizer: str => str.toUpperCase(),
    },
    image: {
        prop: 'image',
        default: 'Not Found',
        type: 'string',
    }
}

const REQUEST_USERS = async () => {
    const gettingUsers = await serviceAPI.get("/users");
    const { users } = gettingUsers.data;
    return users;
}

const NUMBER_OF_ROWS = 10;

const VCT_CONFIG = {
    columns: LOAD_COLUMN_VALUES,
    populateFunction: REQUEST_USERS,
    numberOfRows: NUMBER_OF_ROWS
}

export default VCT_CONFIG;