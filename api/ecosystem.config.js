module.exports = {
  apps : [{
    name   : "appchat",
    script : "./app-chat-react/api/index.js",
    instances: 0,
    exec_mode: "cluster",
    env: {
        SERVER_PORT: 4000,
        MONGO_URL: ,
        JWT_SECRET: ,
        CLIENT_URL: 
    }
  }]
}
