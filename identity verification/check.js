const crypto = require("crypto")
const fs = require("fs")
const decrypt = require("../required/decrypt")
const receivedData = require("./sign")
/* const signMessg = require("./sign").signMessg */
const publicKey = fs.readFileSync("../required/publicKey.pem", "utf8")

const decryptedMessgBin = decrypt.decryptWithPublicKey(publicKey, receivedData.signedAndEncryptedData)
// console.log(decryptedMessgBin.toString())

const decryptedMessgHex = decryptedMessgBin.toString()

const hash = crypto.createHash(receivedData.algorithm)
const hashOfSenderBin = hash.update(JSON.stringify(receivedData.originalData))
const hashOfSenderHex  = hash.digest("hex")

if(hashOfSenderHex===decryptedMessgHex){
    console.log("the data is not tampered and sender is valid")
}else{
    console.log("either data is tampered or sender is not valid")
}

/* const verifyFunc = crypto.createVerify("sha256")
const isValid = verifyFunc.verify(publicKey, signMessg)

console.log(isValid) */