import { defineStore } from 'pinia';
import VueCistemTable from '@/modules/VueCistemTable/main.js';

export const useTableStore = defineStore('tableStore', {
    state: () => ({
        config: {},
        columnHeadings: [],
        data: [],
        recordsIndicator: {
            init: 0,
            end: 0
        },
        totalRecords: 0,
    }),
    getters: {},
    actions: {
        createVueCistemTable() {
            const table = new VueCistemTable( this.config );
            return { table }
        },
        renderData( table ) {
            const currentPage = table.getCurrentPage();
            this.data.splice(0, this.data.length, ...table.getPage( currentPage ));
            return this.data;
        },
        recordsIndicator( table ) {
            const { firstIndex, lastIndex } = table.getPageIndex();
            this.recordsIndicator.init = firstIndex;
            this.recordsIndicator.end = lastIndex;
            this.totalRecords = table.getNumberOfRecords();
        }
    }
});
