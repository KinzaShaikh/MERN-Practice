const productCollection = require('../models/ProductModel');

const addProduct = async (req,res)=>{
    await productCollection.create(req.body).then(rec=>{
        res.send({sucess:true,msg:"Added"})
    }).catch(err=>{
        res.send({sucess:false,msg:"Not Added"})
    })
}

const displayProduct = async(req,res)=>{
    const products=await productCollection.find()
    res.send({sucess:true,data:products})
}

const deleteProduct = async (req,res)=>{
    const {id} = req.body
    const data =await productCollection.findByIdAndDelete(id).then()
    if(data){
        const remaiming = await productCollection.find();
        res.send({sucess:true,msg:"deleted",data:remaiming})
    }
    else{
        res.send({sucess:false,msg:"not deleted"})
        
    }
}

module.exports={
    addProduct,
    displayProduct,
    deleteProduct
}