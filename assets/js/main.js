const pubKey =  " l8smgruhbomy ";
const secKey = "uqr7729i2pix";

const baseUrl = "api.wallets.africa"


const passHeaders = new Headers();
passHeaders.append("Content-Type", "application/json");

const data = JSON.stringify({
    "Code":"airtel",
    "Amount":100,
    "PhoneNumber":"07068260000",
    "SecretKey": secKey
})

const options = {
    method: "POST",
    headers: passHeaders,
    body: data,
    // redirect: follow
}


fetch(`${baseUrl}/bills/airtime/purchase`, options)
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(err => console.log('error here =>', err));

// Secret Key: hfucj5jatq8h
// Public Key: uvjqzm5xl6bw