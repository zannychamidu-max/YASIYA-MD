const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~&2l5VRaBB#mpTu1ZjNKrmTy8e74Ec_bSrJNjP1NzCe2MUO94Ez22Q'
};
