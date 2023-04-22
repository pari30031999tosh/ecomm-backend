const db = require('../models')
console.log(db)
const Users = db.users;










async function createUser(req, res, next){
    
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let password = req.body.password;
    
   // try{
        let userData = {
            firstname: firstname,
            lastname: lastname,
            password: password,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
       
       


        var result = await Users.build(userData);
        await result.save()
        return res.status(200).json({
            status: 200,
            message: "successfully created user",
            result: result
        })

    // }catch(err){
        
    //     console.log("errrr", err)
    //     return res.status(300).json({
    //         status: 200,
    //         message: "server sode error",
    //         error: err
    //     })
    // }
}

module.exports = { createUser }