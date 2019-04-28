// @flow

'use strict';
var restify = require('restify');

const routes = require('./routes');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});


server.get('/newecho/:name', routes.getName)
server.get('/authorize', routes.authorize)
server.post('/token', routes.token)
server.post('/admin/client', routes.client)

server.get('/pets', routes.pets.getPets)
server.get('/pets/:id', routes.pets.getPet)
server.post('/pets', routes.pets.addPet)





server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});