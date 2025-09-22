const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~4UhDTTyK#ecqOOgA8m5ZIQBs0Ygg6M_1rDNQlB4NA_Ot5d7Dwte0'
};
