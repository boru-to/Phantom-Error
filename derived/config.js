/*

# Owner ? : 𝕻𝖍𝖆𝖓𝖙𝖔𝖒
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['27747815326']
global.ownMain = '27747815326'
global.NamaOwner = '𝕻𝖍𝖆𝖓𝖙𝖔𝖒' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = '𝕻𝖍𝖆𝖓𝖙𝖔𝖒-𝕰𝖗𝖗𝖔𝖗' //
global.author = '𝕻𝖍𝖆𝖓𝖙𝖔𝖒-𝕰𝖗𝖗𝖔𝖗' //
global.packname = '𝕻𝖍𝖆𝖓𝖙𝖔𝖒-𝕰𝖗𝖗𝖔𝖗' //
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.welcome = false
global.url1 = 'https://whatsapp.com/channel/0029VarLMN08aKvDTt0h9L3J' //gausah diganti
global.url2 = 'https://whatsapp.com/channel/0029VarLMN08aKvDTt0h9L3J' //gausah diganti
global.linkgc = ''
global.delayjpm = 3500
global.domain = 'https://guru.sellerpanell.me' // your domian
global.apikey = 'ptla_aRq7aFBbQowvPwLChvjNLX5uE0rYZ6dUdGbFIhqUwUg' // Isi Apikey Plta Lu
global.capikey = 'ptlc_mI4q2CFLyxYSG9lqtpWVJSkqtxbQvZyheemGqW56VUH' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id egg
global.location = '1' // id location

global.mess = { // 
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not 𝕻𝖍𝖆𝖓𝖙𝖔𝖒.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by 𝕻𝖍𝖆𝖓𝖙𝖔𝖒-𝕰𝖗𝖗𝖔𝖗',
bugrespon: `Processs.....`
}


global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
