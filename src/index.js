import { generateUrl, validateUrl } from "./util";

const url = "http://ayshee.net/200x200/image1.png";
const secret = "ayshee.net";

const createUrl = generateUrl(url, secret);

console.log(createUrl);

const checkurl =
  "http://ayshee.net/200x200/image1.png?bba5e922b1626a0774c7aedd11a7f1bc1fd5845b";

console.log("Valid", validateUrl(checkurl, secret));
