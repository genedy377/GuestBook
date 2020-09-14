import thunk from 'redux-thunk'
import logger from './loggor'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  logger,
)