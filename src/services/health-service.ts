import { prismaClient } from '../db'
import { redisClient } from '../redis'

const healthCheckDB = async (): Promise<boolean> => {
  // A basic health check to see if the database is up
  await prismaClient.$queryRawUnsafe('SELECT 1')
  return true
}

const healthCheckRedis = async (): Promise<boolean> => {
  // A basic health check to see if the redis is up
  try {
    await redisClient.connect()
    await redisClient.ping()
    return true
  } finally {
    await redisClient.disconnect()
  }
}

export const healthService = {
  healthCheckDB,
  healthCheckRedis,
}
