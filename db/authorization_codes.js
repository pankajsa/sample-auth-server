'use strict';

const codes = {};


module.exports.find = (key) => {
    return codes[key];
};

module.exports.save = ({code, clientId, redirectUri, userId, userName}) => {
  codes[code] = { clientId, redirectUri, userId, userName };
};


// const sample = {
//     code: 'mycode',
//     clientId: 'myclientid',
//     redirectUri: 'http://mydomain.com/landing',
//     userId: 'myuserid',
//     userName: 'myusername'
// }  
// module.exports.save(sample)
