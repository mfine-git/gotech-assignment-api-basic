import winston from 'winston'
import { name, version } from '../../package.json'
import { config } from './config'

const logFormatters = [winston.format.timestamp(), winston.format.json()]

export const logger = winston.createLogger({
  level: config.isDevelopment ? 'debug' : 'info',
  format: winston.format.combine(...logFormatters),
  defaultMeta: { service: name, version },
  transports: [new winston.transports.Console()],
})
