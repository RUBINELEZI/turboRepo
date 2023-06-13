const { PORT } = process.env
process.env.NEXTAUTH_URL = process.env.NEXTAUTH_URL || `http://localhost:${PORT}`
process.env.NEXTAUTH_SECRET = 'bananarama'

const config = {
  PORT: PORT,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  VISITOR_API: 'pD4OF7vaeJ36x8eyhb7r',
  DEFAULT_GEO: [60.39250009014687, 5.33116366943065],
  EXTENDA_API: process.env.EXTENDA_API,
  drizzle: {
    schema: 'shared/backend/drizzle/schema/index.ts',
    out: '.drizzle',
  },
  postgres: {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
  },
  email: {
    host: 'localhost',
    port: 1025,
  },
  services: {
    AUTH_URL: 'http://localhost:8001/auth',
    API_URL: 'http://localhost:8001/api',
    POS_URL: 'http://localhost:8001/pos',
  },
  apps: {
    web: 'http://localhost:3000',
    admin: 'http://localhost:3001',
    business: 'http://localhost:3002',
  },
}

export default config
