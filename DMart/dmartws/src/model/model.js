const connection = require("../utilities/connection");
let model={};

model.findUser= async (emailId,passWord)=>{
    const userDb=await connection.getCustomerCollection();
    let findRes= await userDb.findOne({"uCredentials.uEmail":emailId,"uCredentials.uPass":passWord});
    return findRes;
}
model.checkUser=async(emailId)=>{
    const checkDb= await connection.getCustomerCollection();
    let checkRes=await checkDb.findOne({"uCredentials.uEmail":emailId});
    return checkRes;
}
model.updateUser = async(data) =>{
    let newData=[
        {
          "uCredentials": {
            "uEmail": data.emailId,
            "uPass": data.passWord
          },
          "uProfile": {
            "uName": data.name,
            "uAddress": data.address,
            "uPhone": data.phoneNumber,
            
          }
        }
      ]
    const newUser=await connection.getCustomerCollection();
    let createRes=await newUser.insertMany(newData);
    return createRes;
}

model.findProductDetails= async (Id)=>{
    const productDb=await connection.getProductCollection();
    let findRes= await productDb.findOne({"_id":Id});
    return findRes;
}

model.fetchAllProducts= async ()=>{
    const productDb=await connection.getProductCollection();
    let findRes= await productDb.find();   
    return findRes;
}

model.fetchProductByCategory= async (category)=>{
  const productDb=await connection.getProductCollection();
  let findRes= await productDb.find({"pCategory" : category});
  return findRes;
}

model.fetchProductByProdName= async (prodName)=>{
  const productDb=await connection.getProductCollection();
  let findRes= await productDb.find({pName : { $regex : prodName, $options : "mi"}});
  return findRes;
}


model.updateCart=async(emailId,product)=>{
    const userDb=await connection.getCustomerCollection();
    let findRes= await userDb.findOne({"uCredentials.uEmail":emailId,"addedInCart._id":product._id});
    
 if(!findRes)
 { product.uQuantity=product.uQuantity+1;
  await userDb.updateOne({"uCredentials.uEmail":emailId},{$push:{addedInCart:product}});
}
  else{
  for(let i=0;i<findRes.addedInCart.length;i++){
    if(findRes.addedInCart[i]._id===product._id){
      findRes.addedInCart[i].uQuantity=findRes.addedInCart[i].uQuantity+1;
      break;
    }
  }
    await userDb.updateOne({"uCredentials.uEmail":emailId},{$set:{addedInCart:findRes.addedInCart}});
  }
  return findRes;
}

model.deleteFromCart=async(emailId,array)=>{
  const userDb=await connection.getCustomerCollection();
  const updateRes = await userDb.updateOne({"uCredentials.uEmail":emailId},{$set:{addedInCart:array}});
  return updateRes;
}

model.generateOrderId =async() => {
  const transCol = await connection.getTransactionsCollection();
  let ids = await transCol.distinct("orderId");
  let oId = Math.max(...ids);  
  return oId+1;
}

model.checkOut= async (emailId)=>{
  const userDb=await connection.getCustomerCollection();
  let findRes= await userDb.findOne({"uCredentials.uEmail":emailId});
  const productDb=await connection.getProductCollection();
  for(let i=0;i<findRes.addedInCart.length;i++){
    let product=await productDb.findOne({"_id":findRes.addedInCart[i]._id});
    if(product){
      await productDb.updateOne({"_id":findRes.addedInCart[i]._id},{$set:{"pSeller.pQuantity":product.pSeller.pQuantity-findRes.addedInCart[i].uQuantity}});
    }
  }
  return findRes;
}

model.updateCus=async(emailId)=>{
  const userDb=await connection.getCustomerCollection();
  let findRes= await userDb.findOne({"uCredentials.uEmail":emailId});
  for(let i=0;i<findRes.addedInCart.length;i++){
     total=0
    total=total+(findRes.addedInCart[i].uQuantity*findRes.addedInCart[i].price);
    products="";
    if(i<findRes.addedInCart.length-1){products=products+findRes.addedInCart[i].pName+"[quantity:"+findRes.addedInCart[i].uQuantity+"]"+", "}
    else{
      products=products+findRes.addedInCart[i].pName+"[quantity:"+findRes.addedInCart[i].uQuantity+"]"
    }
  }

let transactionData=[
    {
   "orderId": await model.generateOrderId(),
   "userEmailId": findRes.uCredentials.uEmail,
   "orderedProducts":products,
   "totalPrice": total 
}
]
  for(let i=0;i<findRes.addedInCart.length;i++){
        findRes.addedInCart.splice(i,1);
  }
 await userDb.updateOne({"uCredentials.uEmail":emailId},{$set:{addedInCart:findRes.addedInCart}});
 const viewTrans=await connection.getTransactionsCollection();
  let createRes=await viewTrans.insertMany(transactionData);
  return createRes;
}

model.view= async (emailId)=>{
  const transactionDb=await connection.getTransactionsCollection();
  let findRes= await transactionDb.find({"userEmailId":emailId});
  return findRes;
}

module.exports=model;