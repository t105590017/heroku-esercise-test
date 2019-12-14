const redisController = require('../controllers/redisController.js')
const testController = require('../controllers/testController.js')

module.exports = app => {
  app.get('/redis', redisController.getRedisKey);
  app.post('/redis', redisController.setRedisKey);
  app.get('/test111', testController.getView);
}