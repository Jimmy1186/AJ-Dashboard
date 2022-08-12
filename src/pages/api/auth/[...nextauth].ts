import argon2 from "argon2";
import { PrismaClient, user } from "@prisma/client";
const prisma = new PrismaClient();

import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";



 
const options: NextAuthOptions = {
  debug: true,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",

      credentials: {
        username: { label: "UserName", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // const data = {
        //   username: `${credentials?.username}`,
        //   password: `${credentials?.password}`,
        // };
 
        const registeredUser = await prisma.user.findFirst({
          where: { username: { equals: credentials?.username } },
        });
   
        if (registeredUser){

        const match =  await argon2.verify(registeredUser.password,credentials?.password!)
        
        if(match){
          return {
            id: registeredUser.id,
            name: registeredUser.username,
            role: registeredUser.role,
          }}
          return null
        }
          

        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  session: { strategy: "jwt", maxAge: 24 * 60 * 60, updateAge: 24 * 60 * 60 },

  callbacks: {
    // async signIn(res) {
    //   console.log(res)
    //   return true
    // },
    async jwt({ token, account, user }) {
      // console.log("===== jwt =====");
      // console.log("user", user);
      // console.log("token", token);
      // console.log("user", account);

      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token, user }) {
      // console.log("===== session =====");
      // console.log("session", session);
      // console.log("token", token);
      // console.log("user", user);
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

// const prisma = new PrismaClient();
// const options = {
//   secret: process.env.NEXTAUTH_SECRET,
//   debug: true,
//   providers: [
//     Credentials({
//       name: 'Credentials',
//       credentials: {
//         username: { label: 'UserName', type: 'text', placeholder: 'jsmith' },
//         password: { label: 'Password', type: 'password' },
//         email:{label:"Email",type:'text'},

//       },

//       async authorize(credentials) {
//         const data = {
//           username: `${credentials?.username}`,
//           password: `${credentials?.password}`,
//           email:`${credentials?.email}`,
//         };
//         // const user = await prisma.user.create( {data} );
//         // return user

//         const registeredUser = await prisma.user.findFirst({
//           where: { username: { equals: credentials?.username } },
//         });
//         // We can throw errors if user exist or return user itself
//         // Returning registeredUser
//         if (registeredUser) return registeredUser;
//         // try {
//         //   // const hashed = await hash(data?.password, 10).then(
//         //   //   (hasedPass) => (data.password = hasedPass)
//         //   // );
//         //   const user = await prisma.user.create( {data} );
//         //   // New user successfully created
//         //   return user;
//         // } catch (e) {
//         //   console.log(e);
//         // }
//         // login failed

//         return null;
//       },
//     }),
//   ],
//   jwt: {
//     // The maximum age of the NextAuth.js issued JWT in seconds.
//     // Defaults to `session.maxAge`.
//     maxAge: 60 * 60 * 24 * 30,
//     // You can define your own encode/decode functions for signing and encryption
//     async encode() {},
//     async decode() {},
//   },
//   session: { strategy: "jwt",maxAge:24*60*60,updateAge: 24 * 60 * 60 },

//   callbacks: {
//     jwt: (token, user) => {
//       console.log('===== jwt =====')
//       console.log('token', token)
//       console.log('user', user)
//       if (user) {
//         token = {
//           accessToken: user.token,
//           user: { username: user.username },
//         }
//       }
//       return token
//     },

//     // Remove Any
//     session: (session, token) => {
//       console.log('===== session =====')
//       console.log('session', session)
//       console.log('token', token)
//       return { user: token.user }
//     },

//   },

//   pages: {
//     signIn: '/login',
//     signup: '/admin/signup',
//     error: '/auth/error', // Error code passed in query string as ?error=
//     verifyRequest: '/auth/verify-request', // (used for check email message)
//     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
//   }

// };

// export default (req: NextApiRequest, res: NextApiResponse) =>
//   NextAuth(req, res, options);
