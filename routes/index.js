const redisController = require('../controllers/redisController.js')

module.exports = app => {
  app.get('/redis', redisController.getRedisKey)
  app.post('/redis', redisController.setRedisKey)
}