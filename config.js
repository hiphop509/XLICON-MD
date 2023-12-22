const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "50948134767"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VNcm1lSDN2VS9VRVJqYkFvMklYMVJYWG9IM2c2Ni9oRDh4eTJyMFgzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSERibGJteTVmMlc5NU9SV2xiT0QwQjZhbVVFRkRZZnBBLzVsK2RNTjNUQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQjVhOGhjZERjbWZwczJOVlFzUUVGYUhJNk5tSC9IN3N2OC9uUFltdUZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZd3VNTWx1bmJUYlBrbUUxN3Z1QXFUSm11V1UwdjQ2ODJaelZjOE9uVlI0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QZ3RETkdKUnd4amJ1bWx4ckV2TXZWMmZPOFdKa3dTK0lJZzczSGdzMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFiVjRGREZoTHRvOXArZFB2T1F1bHJVMTl5MkxJcVBsODJtN1p4OU5GMEE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzYUJYdTlkOFVHZnQvTFNNdXhoT0dYVWNiVUo3dnVobmI3TmRHdFRBSzlRNU93L0NYYk8wUzliOHovQUpPZm1uQWJ5dkNsK2JvdGhhME5Yd1BCUXVqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEzNiwiYWR2U2VjcmV0S2V5IjoiUVMyaGdzVHQyeVUzaWYrdGxHOHh1bXVlVzc2WldGRm8vMnhnWE1raXhtdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZUJuQ2JET0tSSkNGa0hnYVo2N3gtQSIsInBob25lSWQiOiI1ZTRlODJmOS0zZmU2LTRlMWUtODdhMy0zNTRlMWNiNzRmNWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDJZQi83WFRFWGpva2h5anRnRE8rbDBBOFlBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3OHgrU1lPYk1XT2U2S3c0blNIRW44STBJcEE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOSG51THdIRU1uSWw2d0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2dUFKZDQ5UmtVcDFzYjFDbnJDQ3M1bVlUOGM0ZVA4N0xHaXFkWHExY1ZJPSIsImFjY291bnRTaWduYXR1cmUiOiJNYnIzMUQ2Y1JxQ04wdjJJQXhwVWhaaUExNWVkVVJ3c21OT2xYVkxLV1VUQ1FxZlIvVGgvYy9DZzIvWGVZNm9zbFN2TGZwcHpwNVQ0alVjR29JSC9Bdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOVdHbk9vVS9tZzlvbm9LZEpZL2lEUE5RQ3NsZzJVV0NFMFJRcWVlejhwMjhyVloxWGQ4dkQ1RGhiOC9Xa3ZNNzV6eXEyVVo4YXErKzdnc1ZJTzFqaEE9PSJ9LCJtZSI6eyJpZCI6IjUwOTQ4MTM0NzY3OjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZFRExZIFRFQ0ggT0ZGSUNJQUwifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDgxMzQ3Njc6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXJnQ1hlUFVaRktkYkc5UXA2d2dyT1ptRS9IT0hqL095eG9xblY2dFhGUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzI3MzU0N30=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
