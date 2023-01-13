import GoogleProvider from "next-auth/providers/google";
import { Web3sdksNextAuth } from "@web3sdks/auth/next-auth";

export const { NextAuthHandler, getUser } = Web3sdksNextAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  domain: "example.com",
  nextOptions: {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      }),
    ],
  },
});

export default NextAuthHandler();
