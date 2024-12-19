import { verifySignature } from "thirdweb/auth";

const message = "";
const signature = "";
const address = "";

const isValid = await verifySignature({
  message: message,
  signature: signature,
  address: address,
});

console.log(`isValid is ${isValid} `);
