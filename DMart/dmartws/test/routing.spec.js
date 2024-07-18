const { request } = require("express");
const app=require("../src/routes/routing");
const expect=require("chai").expect;

describe("testing routing.js",()=>{
    it("testing /products",()=>{
        // request("http://localhost:1050/products",function(error, respopnse, body){
        //   expect(body).to.equal("mmm");
        //   done();
        // });
        let s=app.s(1,1);
        expect(s).to.equal(2);
        
    })
})