'use strict';
const jwt = require('jsonwebtoken');

const tokens = {};




module.exports.find = (key) => {
    return tokens[key];
};

module.exports.findByUsernameAndClientId = ({username, client_id}) => {
  for (const token in tokens) {
    if (tokens[token].username == username && tokens[token].client_id == client_id) return token;
  }
  return null;
};


module.exports.save = ({client_id, client_secret, username, password, access_token}) => {
  tokens[access_token] = { client_id, client_secret, username, password, access_token};
};


const token = jwt.sign({ username: 'pankaj' }, 'share-this-secret');

const sample = {
    client_id: 'myclientid',
    client_secret: 'myclientsecret',
    username: 'pankaj',
    password: 'mypassword',
    access_token: token,
}  

// console.log('access_tokens')
module.exports.save(sample)
console.log(module.exports.findByUsernameAndClientId({username: 'pankaj', client_id: 'myclientid'}))
// console.log(module.exports.findByUsernameAndClientId({username: 'myusername2', client_id: 'myclientid'}))
// console.log(module.exports.findByUsernameAndClientId({username: 'myusername', client_id: 'myclientid2'}))

