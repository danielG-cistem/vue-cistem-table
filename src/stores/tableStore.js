import { defineStore } from 'pinia';

export const useTableStore = defineStore('tableStore', {
    state: () => ({
        config: {},
        columnHeadings: [],
        data: [],
        currentPage: 0,
        recordsIndicator: {
            init: 0,
            end: 0
        },
        totalRecords: 0,
        totalPages: 0,
        previous: false,
        next: false,
    }),
    getters: {},
    actions: {}
});
