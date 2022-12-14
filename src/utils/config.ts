import { cleanEnv, port, str } from 'envalid'

export enum Environment {
  Development = 'development',
}

export const config = cleanEnv(process.env, {
  NODE_ENV: str({ choices: [Environment.Development] }),
  PORT: port(),
  DATABASE_URL: str(),
  REDIS_URL: str(),
})
