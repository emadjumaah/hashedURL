import { generateHashUrl, validateUrl } from "./util";

const originalUrl = "http://ayshee.net/200x200/image1.png";
const secret = "ayshee.net";

const createUrl = generateHashUrl(originalUrl, secret);

console.log(createUrl);

const checkurl =
  "http://ayshee.net/200x200/image1.png?bba5e922b1626a0774c7aedd11a7f1bc1fd5845b";

console.log("Valid", validateUrl(checkurl, secret));
