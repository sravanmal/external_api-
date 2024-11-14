using { caprequestapp.db.transaction } from '../db/schema';

service MainService @(path: 'MainService'){
    entity ReqHeaderSet @(odata.draft.enabled: true) as projection on transaction.reqHeader{
        *,
        items
    };
    entity ReqItemSet  as projection on transaction.reqItem;

    entity StatusSet as projection on transaction.status;

    entity MaterialSet as projection on transaction.material;


}