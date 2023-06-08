const fs = require("fs")
const encrypt = require("../required/encrypt")
const decrypt = require("../required/decrypt")
const publicKey = fs.readFileSync("../required/publicKey.pem", "utf8") // without utf8, publicKey logs binary but with utf8 it logs the actual data. Binary data can be printed as actual data by publicKey.String()
const privateKey = fs.readFileSync("../required/privateKey.pem", "utf8")

const encryptedMessg = encrypt.encryptWithPublicKey(publicKey, "super secret messg")  // encryptedMessg will be in binary
//console.log(encryptedMessg.toString())

const decryptedMessg = decrypt.decryptWithPrivateKey(privateKey, encryptedMessg)
//console.log(decryptedMessg.toString())