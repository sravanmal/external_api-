namespace caprequestapp.db;
using { managed } from '@sap/cds/common';

using { OP_API_PRODUCT_SRV_0001 as product_api } from '../srv/external/OP_API_PRODUCT_SRV_0001';

context transaction{

    entity reqHeader : managed {
        key requestNo : UUID @cuid;
        requestDesc : String(60) @mandatory;
        status : Association to status;
        // statusText : localized String(50);
        totalPrice : Decimal(10, 2);
        items :  Composition of  many reqItem on items.header=$self;
    }

    entity reqItem : managed{
        key itemNo : UUID @cuid; 
        itemDesc :String(30) @mandatory;
        materialNo : Association to material;
        plant : String(32) @mandatory;
        quantity : String(10) @mandatory;
        unitPrice : Decimal(10,2) @mandatory;
        header : Association to one reqHeader;

    }

    entity status  {
        key statusId :String(11);
        statusText : localized String(50);
       
    }

    entity material  as projection on product_api.A_Product{
        key Product as ID,
        ProductType as Desc
     };
    
}



