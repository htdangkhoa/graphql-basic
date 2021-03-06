import crypto from 'crypto'

const algorithm = "aes-256-ctr"
const secret = "05f86981b90e718dea9d070415344cba";

const encrypt = (data) => {
    var cipher = crypto.createCipher(algorithm, secret);
    var crypted = cipher.update(data, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
}

const decrypt = (data) => {
    if (data.indexOf("JWT ") !== -1) {
        var arr = data.split(" ");
        arr.shift();
        data = arr[0];
    }

    var decipher = crypto.createDecipher(algorithm, secret)
    var dec = decipher.update(data, "hex","utf8")
    dec += decipher.final("utf8");
    return dec;
}

export {
    encrypt,
    decrypt,
    secret
}