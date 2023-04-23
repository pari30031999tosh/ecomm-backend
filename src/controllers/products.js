const db = require('../models')

async function createProduct(req, res, next){
    
    let sessionId = req.headers.cookie?.split('=')[1];
    
    
    if(!sessionId){
        res.send("unauthorised, please login")
    }
    try{
        
        //check if sessionid is there in the db
        var sessionData = await db.Sessions.findOne({
            where:{
                sessionId: sessionId
            }
        })

        if(!sessionData){
            res.send("please login")
        }
        
        var data = {
            name: "mobile",
            category:"accessory"
        }
        
        var result = await db.products.create(data);

        return res.status(200).json({
            status: 200,
            message: "successfully created data",
            result: result
        })

    }catch(err){
        return res.status(300).json({
            status: 300,
            error: err
        })
    }
}

async function addProducttoCart(req, res, next){
    
    let sessionId = req.headers.cookie?.split('=')[1];
    let productid = req.body.productid;
    
    if(!sessionId){
        res.send("unauthorised, please login")
    }

    try{
      
        var sessionData = await db.Sessions.findOne({
            where:{
                sessionId: sessionId
            }
        })

        var userData = await db.users.findOne({
            where:{
                email: sessionData.email
            }
        })

        var cartdata = {
            user_id: userData.id,
            product_id: productid
        }

        var result = await db.cart.create(cartdata);

        return res.status(200).json({
            status: 200,
            message: "added product to cart",
            result: result
        })

    }catch(err){
        return res.status(300).json({
            status: 300,
            error: err
        })
    }
}

module.exports = { createProduct, addProducttoCart }
