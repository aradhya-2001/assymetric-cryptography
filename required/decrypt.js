const crypto = require("crypto")

const decryptWithPrivateKey = (privateKey, messg) => {

    return crypto.privateDecrypt(privateKey, messg)
}

const decryptWithPublicKey = (publicKey, messg) => {

    return crypto.publicDecrypt(publicKey, messg)
}

module.exports.decryptWithPrivateKey = decryptWithPrivateKey
module.exports.decryptWithPublicKey = decryptWithPublicKey