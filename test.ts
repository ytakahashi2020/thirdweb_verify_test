import { verifySignature, verifyContractWalletSignature } from "thirdweb/auth";
import { Chain, ThirdwebClient } from "thirdweb";

const message = "You signature is required to register your wallet address.";
const signature =
  "0x627e2658530a99ee8916245968df23dd7734574a36a13908bd9a13b9d3be931b35849ad75b85168d86a7d33d25d7675484e16fc078b2645572d5d4de07d972481c";
const address = "0x507c8069416DBBd5195c84eFc9c4c4609CF04cd4";
const chain: Chain = {
  id: 80002,
  rpc: "https://80002.rpc.thirdweb.com/",
};
const client: ThirdwebClient = {
  clientId: "",
  secretKey: "",
};

const isValid = await verifySignature({
  message: message,
  signature: signature,
  address: address,
  chain: chain,
  client: client,
});

console.log(`isValid is ${isValid} `);
