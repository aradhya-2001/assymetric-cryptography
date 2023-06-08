const crypto=require("crypto")

function encryptWithPublicKey(publicKey, messg){

    const bufferMessg=Buffer.from(messg, "utf8")

    return crypto.publicEncrypt(publicKey, bufferMessg)
}

function encryptWithPrivateKey(privateKey, messg){

    const bufferMessg=Buffer.from(messg, "utf8")

    return crypto.privateEncrypt(privateKey, bufferMessg)
}

module.exports.encryptWithPublicKey = encryptWithPublicKey
module.exports.encryptWithPrivateKey = encryptWithPrivateKey