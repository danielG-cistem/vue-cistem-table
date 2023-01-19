import serviceAPI from '@/api/serviceAPI.js';

const LOAD_COLUMN_VALUES = {
    id: {
        label: 'ID',
        default: '1000',
        sortable: true,
        type: 'numeric'
    },
    firstName: {
        label: 'First Name',
        default: 'default firstName',
        sortable: true,
        type: 'string',
        normalizer: str => str.toUpperCase(),
    },
    lastName: {
        label: 'Last Name',
        default: 'default lastName',
        normalizer: str => str.toUpperCase(),
    },
    email: {
        label: 'Email',
        default: 'default@email.com',
        sortable: true,
        type: 'string',
        normalizer: str => str.toUpperCase(),
    },
    phone: {
        label: 'Phone',
        default: 'default phone',
        sortable: true,
        type: 'string',
        normalizer: str => str.toUpperCase(),
    },
    // image: {
    //     label: 'image',
    //     default: 'Not Found',
    //     type: 'string',
    // }
}

const REQUEST_USERS = async () => {
    const gettingUsers = await serviceAPI.get("/users?limit=100");
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