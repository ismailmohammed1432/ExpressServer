import jwt from "jsonwebtoken"

function getData(){
    try {
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXNtYWlsIiwiYWdlIjoyMiwiaXNBbGl2ZSI6dHJ1ZSwiaWF0IjoxNzM0MTYxMDMzLCJleHAiOjE3MzQxNjQ2MzN9.JHJpa4_X3PZ5t4ltl8vFNQ3tSX8NdiCb4BkvsKF6A8Q"
        let key = "ismail"
        let verify = jwt.verify(token, key)
        console.log(verify);
        if (verify) {
            console.log("matched");
        } else {
            console.log("not matched");
        }
    } catch (error) {
        console.log(error);
    }
}
getData()