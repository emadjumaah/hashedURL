import url from "url";
import crypto from "crypto";

export const hashOriginalUrl = (url, secret, algorithm = "sha1") => {
  return crypto
    .createHmac(algorithm, secret)
    .update(url)
    .digest("hex");
};

export const generateHashUrl = (urlToHash, secret) => {
  const hash = hashOriginalUrl(urlToHash, secret);
  return `${urlToHash}?${hash}`;
};

export const validateUrl = (uri, secret) => {
  const hash = url.parse(uri).query;
  const path = uri.split("?").shift();
  const newhash = hashOriginalUrl(path, secret);
  return hash === newhash ? true : false;
};
