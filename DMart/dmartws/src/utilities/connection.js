const Mongoose = require("mongoose")


const schema = Mongoose.Schema([{
    addedInCart: Array,
    uCredentials:
    {
        uEmail: String,
        uPass: String,
    },

    uProfile:
    {
        uName: String,
        uAddress: String,
        uPhone: Number,
        uIsSeller: Boolean,
        uDateJoined: { type: Date, default: [new Date()] },
        uLastLogin: { type: Date, default: [new Date()] }
    }

}],
    { collection: "UserCollection", timestamps: true }
)

const productSchema = Mongoose.Schema({
    uQuantity: { type: Number, default: 0 },
    _id: Number,
    pName: String,
    pDescription: String,
    pRating: Number,
    pCategory: String,
    price: Number,
    color: String,
    image: String,
    specification: String,
    dateFirstAvailable: { type: Date, default: [new Date()] },
    dateLastAvailable: { type: Date, default: [new Date()] },
    pSeller:
    {
        sId: String,
        pDiscount: Number,
        pQuantity: Number,
        pShippingCharges: Number
    },

},
    { collection: "ProductCollection", timestamps: true }
)

const transactionsSchema = Mongoose.Schema({
    orderId: Number,  
    userEmailId:{type : String, required : [true , "Required field"]},
    transactionTime: { type: Date, default: [new Date()] },
    orderedProducts: {type : String, required : [true , "Required field"]},
    totalPrice: Number
}, { collection: "TransactionsCollection", timestamps: true })

let connection = {};

connection.getCustomerCollection = async () => {
    try {
        await Mongoose.connect("mongodb://localhost:27017/eMartDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        return Mongoose.model("UserCollection", schema);
    }
    catch (error) {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    }

}

connection.getProductCollection = async () => {
    try {
        await Mongoose.connect("mongodb://localhost:27017/eMartDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        return Mongoose.model("ProductCollection", productSchema);
    }
    catch (error) {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    }

}

connection.getTransactionsCollection = async () => {
    try {
        await Mongoose.connect("mongodb://localhost:27017/eMartDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
        return Mongoose.model("TransactionsCollection", transactionsSchema);
    }
    catch (error) {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    }

}

module.exports = connection;