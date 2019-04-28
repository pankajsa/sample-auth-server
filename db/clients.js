'use strict';

const clients = [
  { id: '1', name: 'client1', clientId: 'abc123', clientSecret: 'mysecret' },
  { id: '2', name: 'client2', clientId: 'xyz123', clientSecret: 'mysecret' },

];



module.exports.findById = (id) => {
  for (let i = 0, len = clients.length; i < len; i++) {
    if (clients[i].id === id) return clients[i];
  }
  return null;
};

module.exports.findByClientId = (clientId) => {
  for (let i = 0, len = clients.length; i < len; i++) {
    if (clients[i].clientId === clientId) return clients[i];
  }
  return null;
};
