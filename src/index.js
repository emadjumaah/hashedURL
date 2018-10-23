const url = require("url");
var crypto = require("crypto");
var myurl = "http://ayshee.net/200x200/image1.png";
var secret = "ayshee.net"; //make this your secret!!
var algorithm = "sha256"; //consider using sha256
var hash, hmac;

// Method 2 - Using update and digest:
hmac = crypto.createHmac(algorithm, secret);
hmac.update(myurl);
hash = hmac.digest("hex");
console.log("Hash: ", hash);
const finalurl = `${myurl}?${hash}`;

console.log("finalurl : ", finalurl);

const validUrl = uri => {
  const hash = url.parse(uri).query;
  const path = uri.split("?").shift();

  const hmac = crypto.createHmac(algorithm, secret);
  hmac.update(path);
  const newhash = hmac.digest("hex");

  if (hash === newhash) {
    return true;
  }
  return false;
};

const checkurl =
  "http://ayshee.net/200x200/image1.png?1b819d020123d9d6eac02571f4c83f71625b027febff7687201cded1e2d1c9a3";

console.log("Valid", validUrl(checkurl));
