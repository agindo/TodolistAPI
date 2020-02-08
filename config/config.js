module.exports = {
    // DB: process.env.HOST ? process.env.HOST : 'mongodb://ramadhanagindo:blu3Isp4ss@sandbox-workshop-shard-00-00-f92cd.mongodb.net:27017,sandbox-workshop-shard-00-01-f92cd.mongodb.net:27017,sandbox-workshop-shard-00-02-f92cd.mongodb.net:27017/learnit-react?authSource=admin&replicaSet=sandbox-workshop-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    DB: process.env.HOST ? process.env.HOST : 'localhost',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80
};