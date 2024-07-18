const model = require("../model/model");


let service = {}
service.verifyEmailId=async (emailId,passWord)=>{

    try{
     let modelRes=await model.findUser(emailId,passWord);
     if(modelRes){
         return modelRes;
     }
     else{
         let err=new Error("You are not registered. Please register to login");
         err.status=400;
         throw err;
     }
    }
 catch(error){
     return error.message;
 }

}
service.registeruser= async(booking) => {
    try{
    let user = await model.checkUser(booking.emailId);
    if (user) {
        let err = new Error("Email already in use");
        err.status = 400;
        throw err;
    }
    else {
        await model.updateUser(booking);
        return {"message" : "Sign Up successfully "+ booking.emailId};
        
    }
}catch(error){
    return error.message;
}
}
service.findProductDetails=async (Id)=>{
    try{
        let modelRes=await model.findProductDetails(Id);
        if(modelRes){
            return modelRes;
        }
        else{
            let err=new Error("product is not present");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}
service.fetchAllProducts=async ()=>{
    try{
        let modelRes=await model.fetchAllProducts();
        if(modelRes){
            return modelRes;
        }
        else{
            let err=new Error("No products to show");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}

service.fetchProductByCategory=async (category)=>{
    try{
        let modelRes=await model.fetchProductByCategory(category);
        if(modelRes){
            return modelRes;            
        }
        else{
            let err=new Error("No products to show");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}
service.fetchProductByProdName=async (prodName)=>{
    try{
        let modelRes=await model.fetchProductByProdName(prodName);
        if(modelRes){
            return modelRes;            
        }
        else{
            let err=new Error("No products to show");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}
service.updateCart=async(emailId,product)=>{
    try{
        let modelRes=await model.updateCart(emailId,product);
        if(modelRes){
            return modelRes;
        }
        else{
            let err=new Error("cannot updated");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}

service.deleteFromCart=async(emailId,array)=>{
    try{
        let modelRes=await model.deleteFromCart(emailId,array);
        if(modelRes){
            return modelRes;
        }
        else{
            let err=new Error("cannot deleted");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}

service.storeTransactionDetails=async (data)=>{
    try{
        let storeTrans = await model.storeTransactionDetails(data);
        if(storeTrans){
            return storeTrans;
        }
        else{
            let error= new Error("Can't make this transaction");
            error.status=400;
            throw error;
        }            
       }
       catch(error){
           return error.message;
       }
    }

service.findCusDetails=async(emailId)=>{
    try{
        let user = await model.checkUser(emailId);
        if(user){
            return user;
        }
        else{
            let err=new Error("emailId is not present");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}


service.checkOut=async (emailId)=>{
    try{
        let modelRes=await model.checkOut(emailId);
        if(modelRes){
            return modelRes;
        }
        else{
            let err=new Error("product cannot check out");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}

service.updateCus=async(emailId)=>{
    try{
        let modelRes=await model.updateCus(emailId);
        if(modelRes){
            return modelRes;
        }
        else{
            let err=new Error("product cannot check out");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}
service.checkTranscationDetails=async(data)=>{
    try{
        let check=await model.checkUser(data.emailId);
        if(check===null){
            let err=new Error("You are not loggedin!!");
            err.status=404;
            throw err;
        }else {
            let transaction=await model.transactionDetails(data);
            return transaction;
        }
    }
    catch(error){
        return error.message;

    }
}

service.view=async(emailId)=>{
    try{
        let modelRes=await model.view(emailId);
        if(modelRes){
            return modelRes;
        }
        else{
            let err=new Error("no orders done till now");
            err.status=400;
            throw err;
        }
       }
    catch(error){
        return error.message;
    }
}

module.exports=service;