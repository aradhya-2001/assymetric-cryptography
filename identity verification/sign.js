const crypto = require("crypto")
const fs = require("fs")
const encrypt = require("../required/encrypt")

const hash = crypto.createHash("sha256")
//console.log(hash)

const data = {
    fname: "aradhya",
    lname: "ajay"
}

//console.log(JSON.stringify(data))

hash.update(JSON.stringify(data))
//console.log(hash)

const hashedData = hash.digest("hex") 
//console.log(hashedData)

const senderPrivateKey = fs.readFileSync("../required/privateKey.pem", "utf8")
const signedMessg = encrypt.encryptWithPrivateKey(senderPrivateKey, hashedData)

//console.log(signedMessg.toString())

const senderData = {
    algorithm: "sha256",
    originalData: data,
    signedAndEncryptedData: signedMessg
}

module.exports = senderData

/* const signFunc = crypto.createSign("sha256")
signFunc.write(JSON.stringify(data))
signFunc.end()

const signMessg = signFunc.sign(senderPrivateKey)

module.exports.signMessg = signMessg */