import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { healthService } from '../services/health-service'
import { logger } from '../utils/logger'

const healthCheck = async (req: Request, res: Response) => {
  try {
    // A basic health check to see if the database is up
    await healthService.healthCheckDB()
    await healthService.healthCheckRedis()
    res.status(StatusCodes.OK).send('OK')
  } catch (e: any) {
    logger.error(e.message, e)
    res.status(StatusCodes.SERVICE_UNAVAILABLE).send('SERVICE_UNAVAILABLE')
  }
}

export const healthController = {
  healthCheck,
}
