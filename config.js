const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~&f8Q3VIQQ#B6R4h5JSGCbMrOeFkpsdiPy2-8G-2hIpZOAx_thVEv8#mpTu1ZjNKrmTy8e74Ec_bSrJNjP1NzCe2'
};
