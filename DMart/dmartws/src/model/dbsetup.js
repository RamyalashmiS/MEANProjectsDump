const collection = require("../utilities/connection");


let customer = [
  {
    "uCredentials": {
      "uEmail": "john@gmail.com",
      "uPass": "John111"
    },
    "uProfile": {
      "uName": "John",
      "uAddress": "50,East Street,Chennai",
      "uPhone": 8265839081,
      "uIsSeller": false,
      "uDateJoined": "2018-06-07T04:21:00.760Z",
      "uLastLogin": "2018-06-12T11:30:28.340Z"      
    }
  }
]

let products = [
  {
    "_id": "1001",
    "pName": "Asus Zenfone Max Pro M2",
    "pDescription": "an economical phone by Asus",
    "pRating": 3.5,
    "pCategory": "Electronics",
    "price": 14999,
    "color": "Black",
    "image": "https://m.media-amazon.com/images/I/61vU9OWgdgL._AC_SL1000_.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Asus@Seller",
      "pDiscount": 0.2,
      "pQuantity": 661,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1002",
    "pName": "Redmi Note 6 Pro",
    "pDescription": "an economical phone by Xiaomi",
    "pRating": 4,
    "pCategory": "Electronics",
    "price": 13999,
    "color": "Black",
    "image": "https://m.media-amazon.com/images/I/61g3QDDM07L._AC_SS450_.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Xiaomi@Seller",
      "pDiscount": 0.2,
      "pQuantity": 665,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1003",
    "pName": "Moto G7 Plus",
    "pDescription": "a prime phone by Moto",
    "pRating": 4,
    "pCategory": "Electronics",
    "price": 23599,
    "color": "Silver",
    "image": "https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_motorola_moto_g7_plus_Teaser.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Moto@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1004",
    "pName": "Lenovo Tab 2 A8-50",
    "pDescription": "a high end phone by Lenovo",
    "pRating": 4.5,
    "pCategory": "Electronics",
    "price": 19999,
    "color": "Blue",
    "image": "https://www.searchmymobile.in/wp-content/uploads/2016/03/Lenovo-A8.png",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Lenovo@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1005",
    "pName": "iphone 8 plus",
    "pDescription": "a high end phone by apple",
    "pRating": 4.9,
    "pCategory": "Electronics",
    "price": 79999,
    "color": "Rose Gold",
    "image": "https://www.pngkit.com/png/full/104-1046295_iphone-8-plus-png-iphone-8-plus-gold.png",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Apple@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1006",
    "pName": "Adidas Running Men Lite",
    "pDescription": "a pair of light weight running shoes by adidas",
    "pRating": 4,
    "pCategory": "Shoes",
    "price": 2599,
    "color": "Grey Blue",
    "image": "https://images-eu.ssl-images-amazon.com/images/I/41cWPluuJ7L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Adidas@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1007",
    "pName": "Adidas Running Women Lite",
    "pDescription": "a pair of light weight running shoes by adidas",
    "pRating": 4,
    "pCategory": "Shoes",
    "price": 2599,
    "color": "Pink",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71SVqvcIK1L._UL1500_.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Adidas@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1008",
    "pName": "Adidas Running Men robust",
    "pDescription": "A pair of robust running shoes by adidas",
    "pRating": 4,
    "pCategory": "Shoes",
    "price": 3599,
    "color": "Black",
    "image": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2021/6/23/ce6befe5-3f91-4db7-a526-e6c08e81c5d71624462818159-1.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Adidas@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1009",
    "pName": "Reebok training shoes",
    "pDescription": "A pair of light weight training shoes by Reebok",
    "pRating": 3,
    "pCategory": "Shoes",
    "price": 1599,
    "color": "Grey",
    "image": "https://assets.reebok.com/images/w_600,f_auto,q_auto/2ffdcd6e598f485cae22aa870163ab06_9366/Reebok_Grace_Women's_Training_Shoes_Black_FU7739_01_standard.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Reebok@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1010",
    "pName": "Nike Running Men Lite",
    "pDescription": "a pair of light weight running shoes by Nike",
    "pRating": 4.6,
    "pCategory": "Shoes",
    "price": 6599,
    "color": "Green",
    "image": "https://m.media-amazon.com/images/I/81WZ-JKyivL._UL1500_.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Nike@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1011",
    "pName": "Luxury Bed by Zuari",
    "pDescription": "sunmica finished zuari luxury bed",
    "pRating": 4,
    "pCategory": "Furniture",
    "price": 8999,
    "color": "Beige",
    "image": "http://www.zuari-furniture.com/wp-content/uploads/2020/01/banner3.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Zuari@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1012",
    "pName": "Organised Cupboards by Zuari",
    "pDescription": "sunmica finished zuari cupboards",
    "pRating": 4.3,
    "pCategory": "Furniture",
    "price": 6999,
    "color": "Coffee Brown",
    "image": "https://m.media-amazon.com/images/I/71UikvwYQOL._SL1213_.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Zuari@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1013",
    "pName": "Dressing Table by Zuari",
    "pDescription": "sunmica finished zuari Dressing table",
    "pRating": 4,
    "pCategory": "Furniture",
    "price": 8599,
    "color": "Beige",
    "image": "http://www.zuari-furniture.com/wp-content/uploads/2019/01/Cosmo_Dressing_Table.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Zuari@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1014",
    "pName": "Recliner sofa set by Grihshobha",
    "pDescription": "A luxurious and comfortable sofa set by Grihshobha furniture makers",
    "pRating": 4.8,
    "pCategory": "Furniture",
    "price": 12500,
    "color": "Dark grey",
    "image": "https://www.ambicafurniture.com/img/product/recline-chair.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Grihshobha@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1015",
    "pName": "Dining table by @HOME",
    "pDescription": "Teak wood dining table with glass top",
    "pRating": 4.4,
    "pCategory": "Furniture",
    "price": 18999,
    "color": "caramel",
    "image": "https://ii1.pepperfry.com/media/catalog/product/g/e/568x625/gem-4-seater-dining-set-in-cappucino-finish-by--home-gem-4-seater-dining-set-in-cappucino-finish-by--dwdkgm.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "HOME@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1016",
    "pName": "Kurta Plazzo set ethnic for women",
    "pDescription": "embroidery work kurta plazzo set for women",
    "pRating": 4,
    "pCategory": "Clothing",
    "price": 1499,
    "color": "Orange",
    "image": "https://img3.junaroad.com/uiproducts/16507230/pri_175_p-1565703539.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Ethnic@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1017",
    "pName": "Cotton silk saree by FabIndia",
    "pDescription": "cotton silk hand woven sarees by Fabindia",
    "pRating": 4.8,
    "pCategory": "Clothing",
    "price": 5900,
    "color": "Red",
    "image": "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3217119047353139922/products/10679957BU.m.250621.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "FabIndia@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1018",
    "pName": "Virat's Special for men ethnic",
    "pDescription": "Festive season special woven black woollen coat for men",
    "pRating": 4.8,
    "pCategory": "Clothing",
    "price": 1900,
    "color": "black",
    "image": "https://www.indiablooms.com/life_pic/2018/1-1540455266.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "Ethnic@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1019",
    "pName": "US Polo T-shirt",
    "pDescription": "100 % pure cotton t shirt by US polo",
    "pRating": 4.8,
    "pCategory": "Clothing",
    "price": 3299,
    "color": "Orange",
    "image": "https://zoomishop.com/wp-content/uploads/2020/08/2-Sky-blue-Olive-Green-U.S.-Polo-Assn.-T-shirt-for-men-back-ZooMishop.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "USPolo@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  },
  {
    "_id": "1020",
    "pName": "UCB T-shirt",
    "pDescription": "100 % pure cotton t shirt by UCB",
    "pRating": 4.2,
    "pCategory": "Clothing",
    "price": 1900,
    "color": "Blue",
    "image": "https://g3fashion.cdn.imgeng.in/upload/products/ucb_royal_blue_color_t_shirt_1557385788as1681694_1.jpg",
    "specification": "",
    "dateFirstAvailable": "2012-09-17T00:00:00.000Z",
    "dateLastAvailable": "2017-09-17T00:00:00.000Z",
    "pSeller": {
      "sId": "UCB@Seller",
      "pDiscount": 0.2,
      "pQuantity": 666,
      "pShippingCharges": 150
    }
  }
]

let transactions = [{  
    "orderId": 1000,
    "userEmailId": "john@gmail.com",
    "transactionTime": "2018-06-08T04:21:00.760Z",
    "orderedProducts": "Adidas Running Men Lite",
    "totalPrice": 2599
  }
]

exports.setupDb = async () => {
  const cusDb = await collection.getCustomerCollection();
  let cusDbRes = await cusDb.insertMany(customer);
  const proDb = await collection.getProductCollection();
  let proDbRes = await proDb.insertMany(products);
  const transDb = await collection.getTransactionsCollection();
  let transDbRes = await transDb.insertMany(transactions);
  if (cusDbRes && proDbRes && transDbRes) {
    return "Insertion successful";
  }
  else {
    let err = new Error("insertion failed");
    err.status = 400;
    throw err;
  }
}