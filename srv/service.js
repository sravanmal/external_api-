module.exports=cds.service.impl(async function(){
    
    const product_api = await cds.connect.to('OP_API_PRODUCT_SRV_0001');
    const  { MaterialSet }  = this.entities;

    this.on("READ",MaterialSet,async (req)=>{
        req.query.where("Product <> ''");
        req.query.SELECT.count = false;
        return await product_api.run(req.query);
    });    
})