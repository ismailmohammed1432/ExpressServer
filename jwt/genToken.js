import jwt from "jsonwebtoken"

function token(){
    try {
        let userObj = {
            name:"ismail",
            age:22,
            isAlive:true
        }
        console.log(userObj);

        let secretKey = "ismail"
        let getToken = jwt.sign(userObj,secretKey, {expiresIn:"1h"})
        console.log(getToken);
    } catch (error) {
        console.log(error);
    }
}

token()