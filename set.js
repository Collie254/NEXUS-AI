




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || '"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhaeUNMVUxzTnVSUlpsYk5RSk55Vm1sU2Z6Vm5ac091UUZRZURLZGlXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnMxVURYNzRTZHp1ZnVtY3NlM1gzM2YxcWpKelNnTXFOMHZZaU5Yd2xoTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTyt1QW5XOTBtVEwvVTh3RDFjWmVCbEZkT2JTYlhJZ1FsRE02TVJWRjBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UEhTbHc4MFQvOVRseXQ1UzRUWXBaNkhjTHF0V01URktjL3lUaEZhSlJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdOcEp5RldLL2twM1RFeGNtN2FaTGVrelZSTTVPWEJCK1NOUFlyNWNQR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYwcVEwWCtuODIveHVNR2JPb1Vjb0pVbk43Z0RZeFJiamY2NmJRYndzeDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtVeU9zMTlMQUxBMEVQbU1SVGFMMitOaU5DRXZpaHArNDZoUTdqcFUwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUm4rbFdGV2pqTWVrSjc3MHptdHpjVXlIUGhwV1Fzd1JocFltR2x2bGZSTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFTbUJlTGkwK3lFSFRQSjYvZ2xDWm41Rm1uOStFckJxYlpwZmZrT3dHeUF4M215eDBTRXhtb01GWWdydnd0RS9wOGgwTjgyM0xtc29JMUVvcUtna2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IlNidHBOdFh2ZjUzNDJVZjlXSklrVTZxZHpmcFcvVDFhTDl6Z2J1a2FvUnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk4NjExODk1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNEMURGMzIyNzY0MjExMjAwMzkyQjQyNTkxN0U1MzVEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTI3ODE3NzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5ODYxMTg5NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NjkwMTdENEMwRkRBMERENERGRjJGOTJEOUVCQTk1MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyNzgxNzk0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3OTg2MTE4OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTU3QjNGNTVGQjM2QzI2QTI1OUExQTQ3NUM5RjMwQjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Mjc4MTgxN31dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiNFgyWU41WkwiLCJtZSI6eyJpZCI6IjI1NDc5ODYxMTg5NTo4NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEzNzY4ODM5NzE0NDMxODo4NUBsaWQiLCJuYW1lIjoi4bWQyrPEisOYxYLFguG8t9GU251y4by3xojGiOKxpyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2FzaytjREVMbW41Y01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWnI3ZERsSk1QQXRoRngzM2VaRldEUXBtcm5iQXhPZEV4UUVnR1VYcmFpMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNkc3amhnU1FUTHJyNlo4N2YzZ0ZpZ2F0dXJBbmp2bzZZNnRuT1ZlTWFTaEJVQ0NQZks0Z1dMRXZEaW1wMERMZ1doNm1IZDN4U3YzNUFLNjdLb2FQRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkxqUDdKZTBiY1FZNyttbXVKZWVWcVhOZFkxbmJFa2tWZW5vcTFuWEZFTU1pcjJib203T01xeGpxRTBldjZ5OGdLQXljN0lEcGpMM2FUa1dWbXhRRWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk4NjExODk1Ojg1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldhKzNRNVNURHdMWVJjZDkzbVJWZzBLWnE1MndNVG5STVVCSUJsRjYyb3QifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Mjc4MTc2NiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLczkifQ==",
    PREFIXE: process.env.PREFIX || "¡",
    OWNER_NAME: process.env.OWNER_NAME || "254710772666",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  CHATBOT : process.env.CHATBOT || "yes",
                  AUTO_BIO : process.env.AUTO_BIO || "no",
                  AUTO_REACT : process.env.AUTO_REACT || "no",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
