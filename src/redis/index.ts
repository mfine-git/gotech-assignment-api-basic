import { createClient } from 'redis'
import { config } from '../utils/config'

export const redisClient = createClient({
  url: config.REDIS_URL,
})
