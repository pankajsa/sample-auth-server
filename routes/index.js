'use strict';

const pets = require('./pets');

const db = require('../db')



// module.exports.save = (code, clientId, redirectUri, userId, userName) => {
//     codes[code] = { clientId, redirectUri, userId, userName };
//   };

// console.log('find:', 'mycode', db.authorizationCodes.find('mycode'))
// console.log('find:', 'mycode2', db.authorizationCodes.find('mycode2'))  
// console.log('find:', 'abc123', db.clients.findByClientId('abc123'))  
// console.log('find:', 'client3', db.clients.findByClientId('client3'))  


const getName = (req, res, next) => {
    res.send(req.params);
    return next();  
}


// { response_type: 'token',
//   client_id: 's6BhdRkqt3',
//   state: 'xyz',
//   redirect_uri: 'https://client.example.com/cb' }
//GET /authorize?response_type=token&client_id=s6BhdRkqt3&state=xyz
//        &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb HTTP/1.1
const authorize = (req, res, next) => {
    console.log(req.query);

    const response_type = req.query.response_type;
    const client_id = req.query.client_id;
    const state = req.query.state;
    const redirect_uri = req.query.redirect_uri;

    validateAuth({response_type, client_id, state, redirect_uri})


    res.send("authorized", req.query);
    return next();  
}

const token = (req, res, next) => {
    console.log(req.body)
    const username = req.body.username;
    const password = req.body.password;
    const scope = req.body.scope;
    const client_id = req.body.client_id;
    const client_secret = req.body.client_secret;
    const access_token = db.accessTokens.findByUsernameAndClientId({username, client_id})
    console.log('accessToken', access_token)
    res.send({access_token, token_type: 'bearer', expires_in: 3600})
    return next();  
}


function validateAuth(payload){
    console.log("validateAuth", payload)

    // db.authorizationCodes.find(payload.)
    console.log('find:', 'mycode', db.authorizationCodes.find('mycode'))


}

const client = (req, res, next) => {
    console.log("client")
    console.log(req.body)
    res.send("client");

    return next();  

}




module.exports = {
    pets,
    getName,
    authorize,
    token,
    client,
}
