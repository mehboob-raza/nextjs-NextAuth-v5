import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
import GitHub from "next-auth/providers/github"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    providers: [
        GitHub({
            clientId: process.env.GITHUB_AUTH_ID,
            clientSecret: process.env.GITHUB_AUTH_SECRET,
        }),
        Google({
            clientId: process.env.GOOGLE_AUTH_ID,
            clientSecret: process.env.GOOGLE_AUTH_SECRET,
        })
    ],
})