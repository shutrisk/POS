Ext.define('POS.store.sales.EditDetail', {
    extend: 'Ext.data.Store',
    model: 'POS.model.SalesDetail',

    remoteSort: false,

    sorters: [{
        property: 'id',
        direction: 'ASC'
    }]
});