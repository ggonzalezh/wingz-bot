const request = require('request');

exports.getFrases = () => {
    return new Promise((resolve, reject) => {
        request(process.env.FRASES_ENDPOINT, (err, res, body) => {
            body = JSON.parse(body);
            if (!err && body) {
                resolve(body.fields);
            } else {
                reject(err);
            }
        })
    })
}