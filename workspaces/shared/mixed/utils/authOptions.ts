import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import CONFIG from 'config'

const { AUTH_URL } = CONFIG.services

export default {
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        const res = await axios.post(`${AUTH_URL}/login`, credentials)
        const user = res.data
        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    // maxAge: 60 * 60, // 01 hour
    // maxAge: 60, // 60 seconds
    updateAge: 24 * 60 * 60, // 24 hours
  },

  jwt: {
    async encode({ token, secret, maxAge }) {
      const newToken = { ...token }
      newToken.token = jwt.sign({ email: token.email }, secret)

      return jwt.sign(newToken, secret)
    },
    async decode({ token, secret }) {
      return jwt.verify(token, secret)
    },
  },
  callbacks: {
    async session(session, token, user) {
      return session
    },
  },
}
