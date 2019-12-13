// 載入 express
const express = require('express')

// 設定 Port 號
const app = express()
const port = process.env.PORT || 3000

// 判別開發環境
if (process.env.NODE_ENV !== 'production') {
  // 如果不是 production 模式
  // 使用 dotenv 讀取 .env 檔案
  require('dotenv').config()
}

// 載入路由器
require('./routes')(app)

// 啟動 Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})