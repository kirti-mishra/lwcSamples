/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
// import fetchDataHelper from './fetchDataHelper';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class BasicDatatable extends LightningElement {
    // @track data = [];
    @track selectedrows = [];
    @track columns = columns;
    @track changeSelection = true;
    @track noRowsSelected = true; // to display message if no rows are selected

    @track data = [{
        id: 'a',
        name: 'Cloudhub',
        website: 'jrogers@cloudhub.com',
        phone: '2352235235',
        amount: 25000,
        closeAt: 'Jan 1, 2020'
    },
    {
        id: 'b',
        name: 'Quipy',
        website: 'quipy@quip.com',
        phone: '2352235235',
        amount: 740000,
        closeAt: 'May 7, 2020'
    },
    {
        id: 'c',
        name: 'Test1',
        website: 'Test1@sample.com',
        phone: '2352235235',
        amount: 74000,
        closeAt: 'Feb 7, 2020'
    },
    {
        id: 'd',
        name: 'Test2',
        website: 'Test2@sample.com',
        phone: '2352235235',
        amount: 64000,
        closeAt: 'May 9, 2020'
    },
    {
        id: 'e',
        name: 'Test3',
        website: 'Test3@sample.com',
        phone: '2352235235',
        amount: 54000,
        closeAt: 'March 19, 2020'
    }];

    @track dataSelected = []; //used to feed data in second table

    getSelected() {
        //get selected rows data from data-table
        var selectRows = this.template.querySelector('lightning-datatable').getSelectedRows();
        console.log("getSelectedRows => ", selectRows);
        console.log("length: ", selectRows.length);

        //if any row is selected, store the ids in a variable
        if (selectRows.length > 0) {
            // eslint-disable-next-line vars-on-top
            var tempList = [];
            selectRows.forEach(function (record) {
                tempList.push(record.id);
            })
            this.selectedRows = tempList; //this will help us in keeping the data-table selection intact
            this.noRowsSelected = false;
            console.log('--selected row Ids: ' + this.selectedRows);
        }
        //if no rows selected, empty the selection array and display message
        else {
            this.selectedRows = [];
            this.noRowsSelected = true;
        }

        this.dataSelected = selectRows;
        this.changeSelection = false;
    }

    getMoreRows() {
        this.changeSelection = true;
    }
}
