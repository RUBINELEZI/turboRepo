const { PORT } = process.env
process.env.NEXTAUTH_URL = `http://localhost:${PORT}`
process.env.NEXTAUTH_SECRET = 'banana'

const config = {
  PORT: PORT,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  VISITOR_API: 'pD4OF7vaeJ36x8eyhb7r',
  DEFAULT_GEO: [60.39250009014687, 5.33116366943065],
  EXTENDA_API: 'https://pos-tst.wallmob.com',
  drizzle: {
    schema: 'workspaces/services/drizzle/schema/index.ts',
    out: 'workspaces/services/.migrations',
  },
  postgres: {
    host: 'mysalon-dev.c8bhhxdq02qq.eu-north-1.rds.amazonaws.com',
    database: 'mysalon-dev',
    username: 'postgres',
    password: 'DFx^KapVsvQoPo5%Sdvt3rd&',
  },
  email: {
    host: '46.101.245.57',
    port: 1025,
  },
  services: {
    AUTH_URL: 'http://localhost:8001/auth',
    API_URL: 'http://localhost:8001/api',
    POS_URL: 'http://localhost:8001/pos',
    EMAILER_URL: 'http://localhost:8001/emailer',
  },
  apps: {
    web: 'http://localhost:3000',
    admin: 'http://localhost:3001',
    business: 'http://localhost:3002',
  },
}

export default config
