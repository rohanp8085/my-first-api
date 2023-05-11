const jsonServer = require("json-serve");
const Server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001

Server.use(middlewares);
Server.use(router);
S
Server.listen(port)

