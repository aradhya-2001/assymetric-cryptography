const crypto = require("crypto")
const fs = require("fs")

// if we have variable name as {pubKey, privKey} or any other than {publicKey, privateKey} then it will show error
const {publicKey, privateKey} = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096, // Specifies the size of the RSA key in bits. It determines the strength of the encryption and the computational complexity of cryptographic operations. Higher modulus lengths generally provide stronger security but require more computational resources. Common values include 2048, 4096, or even higher.
    publicKeyEncoding: {
        type: "pkcs1", // "Public Key Cryptography Standards 1"
        format: "pem" // PEM stands for "Privacy-Enhanced Mail." It is a commonly used format for storing and exchanging cryptographic objects, including keys and certificates. In the context of key generation, the PEM format represents the key in a human-readable ASCII format that is base64-encoded and enclosed within -----BEGIN <type>----- and -----END <type>----- delimiters.
    },
    privateKeyEncoding: {
        type: "pkcs1",
        format: "pem"
    }
})

fs.writeFileSync("publicKey.pem", publicKey)
fs.writeFileSync("privateKey.pem", privateKey)

