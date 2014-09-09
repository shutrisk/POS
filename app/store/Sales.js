Ext.define('POS.store.Sales', {
    extend: 'Ext.data.Store',
    model: 'POS.model.Sales',
    storeId: 'sales',

    remoteSort: true,
    pageSize: 100,

    sorters: [{
        property: 'date',
        direction: 'DESC'
    }],

    search: function(params){
        this.getProxy().extraParams = params;
        this.loadPage(1);
    }
});