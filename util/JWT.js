const jsonwebtoken = require("jsonwebtoken");

const secret = "RiseAbove"
const JWT = {
    //生成token
    generate(value,expires){
        return jsonwebtoken.sign(value,secret,{expiresIn:expires})
    },
    //验证token
    verify(token){
        try {
            return jsonwebtoken.verify(token,secret)
        } catch (error) {
            return false
        }
        
    }
}

module.exports = JWT;