let redisClient

const getRedisInstance = () => {
  if (redisClient == null) {
    redisClient = require('redis').createClient(process.env.REDIS_URL)
  }
  return redisClient
}

const getRedisKey = (req, res) => {
  let redisKey = req.query.key
  getRedisInstance().get(redisKey, (err, reply) => {
    res.send(reply)
  })
}

const setRedisKey = (req, res) => {

  let redisKey = req.headers['key']
  let redisValue = req.headers['value']

  console.log(`Key: ${redisKey}, values: ${redisValue}`)
  getRedisInstance().set(redisKey, redisValue, () => {
    getRedisInstance().expire(redisKey, "300", () => {
      res.send(`Key: ${redisKey}, values: ${redisValue}`)
    })
  })

}

module.exports = { getRedisKey, setRedisKey }