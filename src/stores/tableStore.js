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
        // firstPage: false,
        // lastPage: false,
    }),
    getters: {},
    actions: {
        // createVueCistemTable() {
        //     const table = new VueCistemTable( this.config );
        //     return { table }
        // },
        // renderData( table ) {
        //     this.currentPage = table.getCurrentPage();
        //     this.totalPages = table.getNumberOfPages();
        //     this.data.splice(0, this.data.length, ...table.getPage( this.currentPage ));
        //     return this.data;
        // },
        // recordsIndicator( table ) {
        //     const { firstIndex, lastIndex } = table.getPageIndex();
        //     this.recordsIndicator.init = firstIndex;
        //     this.recordsIndicator.end = lastIndex;
        //     this.totalRecords = table.getNumberOfRecords();
        // },
        // previousPage: ( table ) => {
        //     this.currentPage = table.getCurrentPage();
        //     table.getPreviousPage();
        // },
        // nextPage: ( table ) => {
        //     this.currentPage = table.getCurrentPage();
        //     table.getNextPage();
        // },
    }
});
