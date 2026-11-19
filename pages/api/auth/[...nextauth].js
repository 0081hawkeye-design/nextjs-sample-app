import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23ctO5MuG43QcxYXXx",
      clientSecret: "18fd010798eda6c0effa8d604502b91a96d4db62",
    }),
  ],
};

export default NextAuth(authOptions);
