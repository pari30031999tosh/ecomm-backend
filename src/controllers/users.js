const db = require('../models')



const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const uuidv4 = require('uuid').v4;
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key: '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'
    }
}));


async function userSignup(req, res, next){

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email =  req.body.email;
    let password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password,salt)
    
    try{
        let userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            
        }
       
        var result = await db.users.create(userData);

        transporter.sendMail({
            to: email,
            from :'pari1999tosh.pandey@gmail.com',
            subject: 'signup succeeded',
            html: '<h1>successfully signed up</h1>'
        }).
        then(res => console.log("hint",res))
        .catch(err => console.log(err))

        return res.status(200).json({
            status: 200,
            message: "successfully created user",
            result: result
        })

    }catch(err){
        
       
        return res.status(300).json({
            status: 200,
            message: "server sode error",
            error: err
        })
    }
}

async function loginUser(req, res, next){
    
    let email    = req.body.email;
    let password = req.body.password;

    try{
        var userData = await db.users.findOne({
            where:{
                email: email
            }
        })
    
        if(!userData){
            res.send("email is not registered");   
        }
        
        var authresult = await bcrypt.compare(password, userData.password)
        
        if(authresult){
            const sessionId = uuidv4();
            res.set('Set-cookie',`session = ${sessionId}`)
            let sessionData = {
                sessionId: sessionId,
                email: email
            }
            await db.Sessions.create(sessionData)

            
            return res.status(200).json({
                status: 200,
                message: "successfully logged in",
                result: userData
            })
        }else{
            return res.status(401).json({
                status: 401,
                message: "password is incorrect",
                
            })
        }

    }catch(err){
        return  res.status(300).json({
            status: 300,
            error: err
        })
    }
}

async function logoutUser(req, res, next){
    
    let sessionId = req.headers.cookie?.split('=')[1];
    
    try{
        await db.Sessions.destroy({
            where:{
                sessionId: sessionId
            }
        })

        res.set('Set-Cookie','session =;expires=Thu, 01 Jan 1970 00:00:00 GMT')

    
        return res.status(200).json({
            status: 200,
            message: "successfully logged out"
        })
    }catch(err){
        return res.status(300).json({
            status: 300,
            error: err
        })
    }
}

module.exports = { userSignup, loginUser, logoutUser }