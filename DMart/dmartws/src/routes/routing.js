const express = require("express");
const routing = express.Router();
const service = require("../service/service");
const userDetails=require("../model/userDetails");
const setupDb=require("../model/dbsetup");

routing.get("/setupDb",async(req, res, next)=>{
    try{
        let createDb= await setupDb.setupDb();
    res.send(createDb);
    }
    catch(error){
        next(error);
    }
})

routing.post("/login", async (req, res, next) => {
    try{
    let obj= new userDetails(req.body);
    let serviceRes = await service.verifyEmailId(obj.emailId,obj.passWord);
    res.status(200);
    res.send(serviceRes);
    }
    catch(error){
        next(error);
    }
})

routing.post("/signup",async(req,res,next)=>{
    try{
       const booking=new userDetails(req.body);
        let register=await service.registeruser(booking);
        res.send(register);
    }
    catch(error){
        next(error)
    }
})

routing.get("/products/:Id",async(req,res,next)=>{
    try{
         let findProduct=await service.findProductDetails(req.params.Id);
         res.send(findProduct);
     }
     catch(error){
         next(error)
     }
})

routing.get("/products",async(req,res,next)=>{
    try{
         let fetchAllProducts = await service.fetchAllProducts();         
         res.send(fetchAllProducts);
     }
     catch(error){
         next(error)
     }
})

routing.get("/findProducts/:category", async (req, res, next) => {
    try{
    let serviceRes = await service.fetchProductByCategory(req.params.category);
    res.status(200);
    res.send(serviceRes);
    }
    catch(error){
        next(error);
    }
})

routing.get("/findProductsByName/:prodName", async (req, res, next) => {
    try{
    let serviceRes = await service.fetchProductByProdName(req.params.prodName);
    res.status(200);
    res.send(serviceRes);
    }
    catch(error){
        next(error);
    }
})

routing.get("/addToCart/:emailId/:proId",async(req,res,next)=>{
    try{
        let product=await service.findProductDetails(req.params.proId);
        let update=await service.updateCart(req.params.emailId,product);
        if(update)
        res.json({message:"cart successfully updated"});
    }
    catch(error){
        next(error)
    }
})

routing.post("/deleteFromCart/:emailId",async(req,res,next)=>{
    try{
        let update=await service.deleteFromCart(req.params.emailId,req.body);
        if(update)
        res.json({message:"product deleted from cart"});
    }
    catch(error){
        next(error)
    }
})

routing.get("/customer/:emailId",async(req,res,next)=>{
    try{
         let findcus=await service.findCusDetails(req.params.emailId);
         res.send(findcus);
     }
     catch(error){
         next(error)
     }
})


routing.get("/checkOut/:emailId",async(req,res,next)=>{
    try{
        await service.checkOut(req.params.emailId);
        let update=await service.updateCus(req.params.emailId);
        if(update)
        res.json({message:"product successfully checked out"});
    }
    catch(error){
        next(error)
    }
})


routing.get("/view/:emailId",async(req,res,next)=>{
    try{
        let viewList=await service.view(req.params.emailId);
        if(viewList)
        res.send(viewList);
    }
    catch(error){
        next(error)
    }
})

module.exports=routing;