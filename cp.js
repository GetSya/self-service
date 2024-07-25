//base by DGXeon
//recode by ziyoo

require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    downloadContentFromMessage,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
    createSignalIdentity
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const tiktoku = require("@tobyg74/tiktok-api-dl")
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const ytdl = require('ytdl-core')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 
const absenData = {};
const { temporary, temmp } = require('./tempor')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    otpkode,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./media/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./media/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./media/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./media/database/xeonvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./media/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./media/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./media/database/apk.json'))

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')

const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == "interactiveResponseMessage") ? JSON.parse(m.message[m.mtype].nativeFlowResponseMessage?.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%/^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶/∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "/" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await client.decodeJid(client.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const xeonybody = body.startsWith(prefix)
        const isCommand = xeonybody ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const tgl = moment.tz('Asia/Jakarta').format('DD/MM/YY')
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isXeonMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= isOwner || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(client, m, premium)
        
        //theme sticker reply
        const stikertunggu = () => {
        let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/wait.webp')
        client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/admin.webp')
        client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/botadmin.webp')
        client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/owner.webp')
        client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/group.webp')
        client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./media/theme/sticker_reply/private.webp')
        client.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        //premium
        async function replyprem(teks) {
    reply(`This feature is for premium user, contact the owner to become premium user`)
}
        //reply
        async function reply(teks) {
                m.reply(teks)
            }
            
            //Fake quoted
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./media/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = client.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: client.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: client.getName(botNumber), alias: botname}, owner: { nick: client.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autobio: false,
               autoread: true,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: client.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: client.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

  const { jadibot, conns } = require('./jadibot')      
//bug loading
async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"AlwaysZiyoo Recode Bug 🐦..."
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await client.sendMessage(from, {text: xeonlod[i], edit: key })
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}
        
// enjoy (≧▽≦)
        ////
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            reply(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            client.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !isOwner && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!isOwner && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return reply("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!client.public) {
            if (isOwner && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	client.sendPresenceUpdate('unavailable', from)
        }
        }
            client.readMessages([m.key])
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            client.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            client.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            client.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            client.sendPresenceUpdate(xeonpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return client.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return client.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return client.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (isOwner || isAdmins || !isBotAdmins) return
            client.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await client.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await client.getName(i)}\nFN:${await client.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            if (!m.isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'args :', color(args.length))
            if (isCmd && m.isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ✓ \x1b[1;37m]', color(pushname), 'use', color(command), 'in group', color(groupName), 'args :', color(args.length))
            global.db.data.settings[botNumber].totalhit += 1
        }
        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
client.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(isOwner) return
client.groupParticipantsUpdate(from, [sender], 'remove')
await client.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
client.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          reply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isXeonMedia) {
    if(isXeonMedia === "imageMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isXeonMedia) {
    if(isXeonMedia === "videoMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isXeonMedia) {
    if(isXeonMedia === "stickerMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
    if(isXeonMedia === "audioMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isXeonMedia) {
    if(isXeonMedia === "pollCreationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isXeonMedia) {
    if(isXeonMedia === "locationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isXeonMedia) {
    if(isXeonMedia === "documentMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isXeonMedia) {
    if(isXeonMedia === "contactMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  ///setppanjang
  const jimp_1 = require('jimp')
        async function pepe(media) {
        const jimp = await jimp_1.read(media)
        const min = jimp.getWidth()
        const max = jimp.getHeight()
        const cropped = jimp.crop(0, 0, min, max)
        return {
            img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
            preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
        }
    }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  client.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                client.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                client.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
               await client.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
               await client.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const xeonfeature = () =>{
            var mytext = fs.readFileSync("./sya.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./media/audio/${BhosdikaXeon}.mp3`)
client.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./media/sticker/${BhosdikaXeon}.webp`)
client.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./media/image/${BhosdikaXeon}.jpg`)
client.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./media/video/${BhosdikaXeon}.mp4`)
client.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
client.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
client.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
client.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: client.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
client.ev.emit('messages.upsert', msg)
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) client.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            client.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    client.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) client.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) client.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) client.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) client.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    client.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
}
        
        switch (isCommand) {
            case 'menu':
            case 'help': {
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            var menunya = `╔═⧎ *${global.botname}* ⧎═\n║\n╠═⧎ Hallo *${pushname}*\n║\n╠═⧎ Aku Adalah *${global.botname}* \n║ Silahkan Pilih List Menu\n║ Untuk Melihat Daftar Menu.\n║\n╠═⧎ *Harap Login Terlebih*\n║ *Dahulu Sebelum Memulai Bot* \n║ *JOJO Untuk Mendapatkan* \n║ *Limit Dan Balance!*\n║\n╚═⧎ Thanks For Using\n❋─────────────────❋\n\n「 *${tgl}* 」\n「 *${jam}* 」`
            var sections = [
                {
                title: "Buka Menu",
                description: `Menampilkan List Menu`,
                id: `${prefix}allmenu`
            }
            ]
            var ownermenu = [
            {
                title: "Arasya & Tria",
                description: `Owner Jojo`,
                id: `${prefix}owner`
            }
            ]
            var money = [
                {
                    title: "Donate",
                    description: `Donasi Jojo`,
                    id: `${prefix}donasi`
                },
                {
                    title: "Sewa",
                    description: `Sewa Bot Jojo`,
                    id: `${prefix}sewa`
                }
            ]
            const unduh = {
                title: "Click Here",
                sections: [
                {
                title: "New Jojo",
                highlight_label: `New Jo Reborn`,
                rows: sections,
                },
                {
                title: "Owner Bot",
                rows: ownermenu,
                },
                {
                title: "Buy",
                rows: money,
                },
                ]
            }
                
            client.sendListButtonv2(m.chat, menunya, unduh, "> Join Grup Jojo\nhttps://chat.whatsapp.com/Famd1qzPzScBX4TSual41k", {quoted: m})
}
break
            case 'allmenu': {
let xmenu_oh = `${ucapanWaktu} ${pushname}

❋─────────────────❋
*⦿ Nama :* ${pushname}
*⦿ Tag :* @${sender.split('@')[0]}
*⦿ Jam :* ${jam}
*⦿ Tanggal :* ${tgl}
❋─────────────────❋
${readmore}\n
${allmenu(prefix, hituet)}`
client.sendMessage(m.chat, {image: fs.readFileSync("./media/theme/media/new-jobot.png"), caption: xmenu_oh, mentions: [sender]}, {quoted: m})
}
break
            /////////// MENU LAIN NYA ////////////
            case 'owner': {
                client.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break
case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await stikertunggu()
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'menfess': {
                        if (!q) return reply(`Masukan Text!\nExample : ${prefix}menfess no|pesan`)
                        var number = q.split('|')[0] ? q.split('|')[0] : q
                        var textnyaku = q.split('|')[1] ? q.split('|')[1] : ''
                        if (number.startsWith('08')) return reply(`Awali Dengan 62! bukan 08\nContoh : ${sender.split("@")[0]}`)
                        if (!number) return reply(`Masukan Nomernya.\nExample : ${CmD} ${sender.split("@")[0]}`)
                        if (!textnyaku) return reply(`Masukan Pesan nya.\nExample : ${CmD} ${sender.split("@")[0]}|Haii`)
                        if (m.isGroup)return reply('Hanya Bisa Di Gunakan Private Message')
                        var caption = `*[ FITUR BOT MENFESS/SURAT ]*\n\nDari : Tidak Diketahui\nUntuk : Kamu\nPesan : *${textnyaku}*`
                        var button = [{ buttonId: `.cnfrmmen ${m.sender}`, buttonText: { displayText: `Menfess Confirmasi` }, type: 1 }]
                        var img = fs.readFileSync('./media/surat.jpeg')
                        client.sendMessage(number.replace(/[-|+| |]/gi, '') + "@s.whatsapp.net", {image: img, caption: caption})
                        reply('Menfess Berhasil Terkirim.')
                    } 
                    break
            case 'toaud':
            case 'toaudio':
                case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await stikertunggu()
                let media = await client.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                client.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'toanime':{
            if (!/image/.test(mime)) return reply(`Send/Reply Gambar that you want to make into audio with captions ${prefix + command}`)
            await stikertunggu()
        let media = await client.downloadAndSaveMediaMessage(qmsg)
        if (/image/.test(mime)) {
            var anu = await TelegraPh(media)
            var data = await fetchJson(`https://aemt.me/toanime?url=${anu}`)
                    client.sendMessage(m.chat, {image: {url: data.url}, caption: `https://instagram.com/arsrfii`}, {quoted: m})
                }
            }
            break
            case 'ai-img':{
            if (!q) return reply(`Masukan Text\nExample ${CmD} Seorang wanita duduk di taman`)
            await stikertunggu()
            var data = await getBuffer(`https://aemt.me/dalle?text=${q}`)
            client.sendMessage(m.chat, {image: data, caption: `Done`}, {quoted: m})
            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await stikertunggu()
                let media = await client.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                client.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await stikertunggu()
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                await stikertunggu()
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'speedtest': {
                reply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) client.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://telegra.ph/file/9c90e2d490aef81155dbb.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) client.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://telegra.ph/file/9c90e2d490aef81155dbb.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                await stikertunggu()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return reply(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await client.downloadAndSaveMediaMessage(quoted)
                    client.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await client.downloadAndSaveMediaMessage(quoted)
                    client.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await client.downloadAndSaveMediaMessage(quoted)
                   client.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext dgxeon`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'toqr':{
  if (!q) return reply(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await client.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await client.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await client.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await stikertunggu()
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                client.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'readviewonce': case 'rvo':{
                (async()=>{
                       const { downloadContentFromMessage } = require("@whiskeysockets/baileys")
                       let quoted =  m.message.extendedTextMessage.contextInfo.quotedMessage
                                   let thay = {
                                       msg: quoted.viewOnceMessageV2?.message?.imageMessage || quoted.viewOnceMessageV2?.message?.videoMessage || quoted.viewOnceMessageV2Extension?.message?.audioMessage,
                                       type: quoted.viewOnceMessageV2?.message?.imageMessage ? "image" : quoted.viewOnceMessageV2?.message?.videoMessage ? "video" : "audio"
                                   }
                                   let stream = await downloadContentFromMessage(thay.msg,thay.type)
                                   let buffer = Buffer.from([])
                                   for await (const chunk of stream) {
                                       buffer = Buffer.concat([buffer, chunk])
                                   }
                                   let mssg = {}
                                   thay.type == "audio" && (mssg.ptt = true)
                                   await client.sendMessage(m.chat, {  [thay.type]: buffer, ...mssg }, {quoted: m})
                       })()
               }
               break
            case 's': case 'sticker': case 'stiker': {
                if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: pushname })
                } else {
                reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
                }
                }
                break
                            case 'swm': case 'steal': case 'stickerwm': case 'take':{
                if (!isPremium) return replyprem(mess.premium)
                if (!args.join(" ")) return reply(`Where is the text?`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                client.downloadAndSaveMediaMessage(quoted, "gifee")
                client.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else {
                reply(`Photo/Video?`)
                }
                }
                break

                ///////// DATABASE //////////
                case 'addsticker':{
                    if (!isOwner) return XeonStickOwner()
                    if (args.length < 1) return reply('Whats the sticker name?')
                    if (StickerXeon.includes(q)) return reply("The name is already in use")
                    let delb = await client.downloadAndSaveMediaMessage(quoted)
                    StickerXeon.push(q)
                    await fsx.copy(delb, `./media/sticker/${q}.webp`)
                    fs.writeFileSync('./media/database/xeonsticker.json', JSON.stringify(StickerXeon))
                    fs.unlinkSync(delb)
                    reply(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
                    }
                    break
                    case 'delsticker':{
                    if (!isOwner) return XeonStickOwner()
                    if (args.length < 1) return reply('Enter the sticker name')
                    if (!StickerXeon.includes(q)) return reply("The name does not exist in the database")
                    let wanu = StickerXeon.indexOf(q)
                    StickerXeon.splice(wanu, 1)
                    fs.writeFileSync('./media/database/xeonsticker.json', JSON.stringify(StickerXeon))
                    fs.unlinkSync(`./media/sticker/${q}.webp`)
                    reply(`Success deleting sticker ${q}`)
                    }
                    break
                    case 'liststicker':{
                    let teks = '┌──⭓「 *Sticker List* 」\n│\n'
                    for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                    }
                    teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`
                    reply(teks)
                    }
                    break
                    case 'addvideo':{
                        if (!isOwner) return XeonStickOwner()
                        if (args.length < 1) return reply('Whats the video name?')
                        if (VideoXeon.includes(q)) return reply("The name is already in use")
                        let delb = await client.downloadAndSaveMediaMessage(quoted)
                        VideoXeon.push(q)
                        await fsx.copy(delb, `./media/video/${q}.mp4`)
                        fs.writeFileSync('./media/database/xeonvideo.json', JSON.stringify(VideoXeon))
                        fs.unlinkSync(delb)
                        reply(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
                        }
                        break
                        case 'delvideo':{
                        if (!isOwner) return XeonStickOwner()
                        if (args.length < 1) return reply('Enter the video name')
                        if (!VideoXeon.includes(q)) return reply("The name does not exist in the database")
                        let wanu = VideoXeon.indexOf(q)
                        VideoXeon.splice(wanu, 1)
                        fs.writeFileSync('./media/database/xeonvideo.json', JSON.stringify(VideoXeon))
                        fs.unlinkSync(`./media/video/${q}.mp4`)
                        reply(`Success deleting video ${q}`)
                        }
                        break
                        case 'listvideo':{
                        let teks = '┌──⭓「 *Video List* 」\n│\n'
                        for (let x of VideoXeon) {
                        teks += `│⭔ ${x}\n`
                        }
                        teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`
                        reply(teks)
                        }
                        break
                        case 'addimage': case 'addimg':{
                        if (!isOwner) return XeonStickOwner()
                        if (args.length < 1) return reply('Whats the image name?')
                        if (ImageXeon.includes(q)) return reply("The name is already in use")
                        let delb = await client.downloadAndSaveMediaMessage(quoted)
                        ImageXeon.push(q)
                        await fsx.copy(delb, `./media/image/${q}.jpg`)
                        fs.writeFileSync('./media/database/xeonimage.json', JSON.stringify(ImageXeon))
                        fs.unlinkSync(delb)
                        reply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
                        }
                        break
                        case 'delimage':{
                        if (!isOwner) return XeonStickOwner()
                        if (args.length < 1) return reply('Enter the image name')
                        if (!ImageXeon.includes(q)) return reply("The name does not exist in the database")
                        let wanu = ImageXeon.indexOf(q)
                        ImageXeon.splice(wanu, 1)
                        fs.writeFileSync('./media/database/xeonimage.json', JSON.stringify(ImageXeon))
                        fs.unlinkSync(`./media/image/${q}.jpg`)
                        reply(`Success deleting image ${q}`)
                        }
                        break
                        case 'listimage':{
                        let teks = '┌──⭓「 *Image List* 」\n│\n'
                        for (let x of ImageXeon) {
                        teks += `│⭔ ${x}\n`
                        }
                        teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`
                        reply(teks)
                        }
                        break
                    case 'addmsg': {
                        if (!isOwner) return XeonStickOwner()
                                    if (!m.quoted) return reply('Reply Message You Want To Save In Database')
                                    if (!text) return reply(`Example : ${prefix + command} filename`)
                                    let msgs = global.db.data.database
                                    if (text.toLowerCase() in msgs) return reply(`'${text}' registered in the message list`)
                                    msgs[text.toLowerCase()] = quoted.fakeObj
                    reply(`Successfully added message in message list as '${text}'
                        
                    Access with ${prefix}getmsg ${text}
                    
                    View list of Messages With ${prefix}listmsg`)
                                }
                                break
                                case 'getmsg': {
                                    if (!text) return reply(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                                    let msgs = global.db.data.database
                                    if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
                                    client.copyNForward(m.chat, msgs[text.toLowerCase()], true)
                                }
                                break
                                case 'listmsg': {
                                    let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
                            let teks = ' DATABASE LIST \n\n'
                            for (let i of seplit) {
                                teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                                }
                                reply(teks)
                            }
                            break 
                        case 'delmsg': case 'deletemsg': {
                            if (!isOwner) return XeonStickOwner()
                                let msgs = global.db.data.database
                                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
                            delete msgs[text.toLowerCase()]
                            reply(`Successfully deleted '${text}' from the message list`)
                                }
                            break
                    case 'addvn':{
                    if (!isOwner) return XeonStickOwner()
                    if (args.length < 1) return reply('Whats the audio name?')
                    if (VoiceNoteXeon.includes(q)) return reply("The name is already in use")
                    let delb = await client.downloadAndSaveMediaMessage(quoted)
                    VoiceNoteXeon.push(q)
                    await fsx.copy(delb, `./media/audio/${q}.mp3`)
                    fs.writeFileSync('./media/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
                    fs.unlinkSync(delb)
                    reply(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
                    }
                    break
                    case 'delvn':{
                    if (!isOwner) return XeonStickOwner()
                    if (args.length < 1) return reply('Enter the vn name')
                    if (!VoiceNoteXeon.includes(q)) return reply("The name does not exist in the database")
                    let wanu = VoiceNoteXeon.indexOf(q)
                    VoiceNoteXeon.splice(wanu, 1)
                    fs.writeFileSync('./media/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
                    fs.unlinkSync(`./media/audio/${q}.mp3`)
                    reply(`Success deleting vn ${q}`)
                    }
                    break
                    case 'listvn':{
                    let teks = '┌──⭓「 *VN List* 」\n│\n'
                    for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                    }
                    teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`
                    reply(teks)
                    }
                    break
                    case 'addzip':{
                    if (!isOwner) return XeonStickOwner()
                    
                    if (args.length < 1) return reply(`What's the zip name?`)
                    let teks = `${text}`
                    {
                    if (ZipXeon.includes(teks)) return reply("This name is already in use")
                    let delb = await client.downloadAndSaveMediaMessage(quoted)
                    ZipXeon.push(teks)
                    await fsx.copy(delb, `./media/zip/${teks}.zip`)
                    fs.writeFileSync('./media/database/zip.json', JSON.stringify(ZipXeon))
                    fs.unlinkSync(delb)
                    reply(`Success Adding zip\nTo check type ${prefix}listzip`)
                    }
                    }
                    break
                    case 'delzip':{
                    if (!isOwner) return XeonStickOwner()
                    
                    if (args.length < 1) return reply('Enter the text in the zip list')
                    let teks = `${text}`
                    {
                    if (!ZipXeon.includes(teks)) return reply("This name does not exist in the database")
                    let wanu = ZipXeon.indexOf(teks)
                    ZipXeon.splice(wanu, 1)
                    fs.writeFileSync('./media/database/zip.json', JSON.stringify(ZipXeon))
                    fs.unlinkSync(`./media/zip/${teks}.zip`)
                    reply(`Successfully deleted zip ${teks}`)
                    }
                    }
                    break
                    case 'listzip': {
                    
                    let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
                    for (let x of ZipXeon) {
                    teksooooo += `│⭔ ${x}\n`
                    }
                    teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
                    reply(teksooooo)
                    }
                    break
                    case 'addapk':{
                    if (!isOwner) return XeonStickOwner()
                    
                    if (args.length < 1) return reply('What is the name of the apk?')
                    let teks = `${text}`
                    {
                    if (ApkXeon.includes(teks)) return reply("This name is already in use")
                    let delb = await client.downloadAndSaveMediaMessage(quoted)
                    apknye.push(teks)
                    await fsx.copy(delb, `./media/apk/${teks}.apk`)
                    fs.writeFileSync('./media/database/apk.json', JSON.stringify(ApkXeon))
                    fs.unlinkSync(delb)
                    reply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
                    }
                    }
                    break
                    case 'delapk':{
                    if (!isOwner) return XeonStickOwner()
                    
                    if (args.length < 1) return reply('Name of the apk?')
                    let teks = `${text}`
                    {
                    if (!ApkXeon.includes(teks)) return reply("This name does not exist in the database")
                    let wanu = ApkXeon.indexOf(teks)
                    ApkXeon.splice(wanu, 1)
                    fs.writeFileSync('./media/database/apk.json', JSON.stringify(ApkXeon))
                    fs.unlinkSync(`./media/apk/${teks}.apk`)
                    reply(`Successfully deleted Apk ${teks}`)
                    }
                    }
                    break
                    case 'listapk': {
                    
                    let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
                    for (let x of ApkXeon) {
                    teksoooooo += `│⭔ ${x}\n`
                    }
                    teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
                    reply(teksoooooo)
                    }
                    break
                    case 'addpdf':{
                    if (!isOwner) return XeonStickOwner()
                    
                    if (args.length < 1) return reply('What is the name of the pdf')
                    let teks = `${text}`
                    {
                    if (DocXeon.includes(teks)) return reply("This name is already in use")
                    let delb = await client.downloadAndSaveMediaMessage(quoted)
                    DocXeon.push(teks)
                    await fsx.copy(delb, `./media/doc/${teks}.pdf`)
                    fs.writeFileSync('./media/database/doc.json', JSON.stringify(DocXeon))
                    fs.unlinkSync(delb)
                    reply(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
                    }
                    }
                    break
                    case 'delpdf':{
                    if (!isOwner) return XeonStickOwner()
                    
                    if (args.length < 1) return reply('Enter the name')
                    let teks = `${text}`
                    {
                    if (!DocXeon.includes(teks)) return reply("This name does not exist in the database")
                    let wanu = DocXeon.indexOf(teks)
                    DocXeon.splice(wanu, 1)
                    fs.writeFileSync('./media/database/doc.json', JSON.stringify(DocXeon))
                    fs.unlinkSync(`./media/doc/${teks}.pdf`)
                    reply(`Successfully deleted pdf ${teks}`)
                    }
                    }
                    break
                    case 'listpdf': {
                    
                    let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
                    for (let x of DocXeon) {
                    teksoooo += `│⭔ ${x}\n`
                    }
                    teksoooo += `│\n└────────────⭓\n\n*Total : ${DocXeon.length}*`
                    reply(teksoooo)
                    }
                    break
                    case 'setcmd': {
                        if (!m.quoted) return reply('Reply Message!')
                        if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
                        if (!text) return reply(`For What Command?`)
                        let hash = m.quoted.fileSha256.toString('base64')
                        if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to change this sticker command')
                        global.db.data.sticker[hash] = {
                            text,
                            mentionedJid: m.mentionedJid,
                            creator: m.sender,
                            at: + new Date,
                            locked: false,
                        }
                        reply(`Done!`)
                    }
                    break
        case 'delcmd': {
                        let hash = m.quoted.fileSha256.toString('base64')
                        if (!hash) return reply(`No hashes`)
                        if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to delete this sticker command')             
                        delete global.db.data.sticker[hash]
                        reply(`Done!`)
                    }
                    break
        case 'listcmd': {
                        let teks = `
        *List Hash*
        Info: *bold* hash is Locked
        ${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
        `.trim()
                        client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
                    }
                    break 
        case 'lockcmd': {
                        if (!isOwner) return XeonStickOwner()
                        if (!m.quoted) return reply('Reply Message!')
                        if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
                        let hash = m.quoted.fileSha256.toString('base64')
                        if (!(hash in global.db.data.sticker)) return reply('Hash not found in database')
                        global.db.data.sticker[hash].locked = !/^un/i.test(command)
                        reply('Done!')
                    }
                    break

                    //////// GROUP /////////
                    case 'antilink':{
                        var sections = [
                            {
                            title: `Anti Link Gc On`,
                            id: `${prefix}antilink-> on`
                        },
                        {
                            title: `Anti Link Gc Off`,
                            id: `${prefix}antilink-> off`
                        }
                        ]
                        const unduh = {
                        title: "Click Here",
                        sections: [
                        {
                        title: "Anti Link Gc",
                        rows: sections,
                        }
                        ]
                    }
                        client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                        }
                        break
                    case 'antilink->': {
                        if (!m.isGroup) return XeonStickGroup()
                        if (!isBotAdmins) return XeonStickBotAdmin()
                        if (!isAdmins && !isOwner) return XeonStickAdmin()
                        if (args.length < 1) return reply('on/off?')
                        if (args[0] === 'on') {
                           db.data.chats[from].antilinkgc = true
                           reply(`${command} is enabled`)
                        } else if (args[0] === 'off') {
                           db.data.chats[from].antilinkgc = false
                           reply(`${command} is disabled`)
                        }
                     }
                     break
                     case 'welcome': case 'left':{
                        var sections = [
                            {
                            title: `Welcome/Left On`,
                            id: `${prefix}welcome-> on`
                        },
                        {
                            title: `Welcome/Left Gc Off`,
                            id: `${prefix}welcome-> off`
                        }
                        ]
                        const unduh = {
                        title: "Click Here",
                        sections: [
                        {
                        title: "Welcome/Left Gc",
                        rows: sections,
                        }
                        ]
                    }
                        client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                        }
                        break
                     case 'welcome->':
                     case 'left->': {
                    if (!m.isGroup) return XeonStickGroup()
                    if (!isAdmins && !isOwner) return XeonStickAdmin()
                    if (args.length < 1) return reply('on/off?')
                    if (args[0] === 'on') {
                        welcome = true
                        reply(`${command} is enabled`)
                    } else if (args[0] === 'off') {
                        welcome = false
                        reply(`${command} is disabled`)
                    }
            }
            break  
            case 'antistiker' : case 'antisticker':{
                var sections = [
                    {
                    title: `Anti Sticker On`,
                    id: `${prefix}antistiker-> on`
                },
                {
                    title: `Anti Sticker Gc Off`,
                    id: `${prefix}antistiker-> off`
                }
                ]
                const unduh = {
                title: "Click Here",
                sections: [
                {
                title: "Anti Sticker Gc",
                rows: sections,
                }
                ]
            }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                }
                break
            case 'antisticker->': case 'antistiker':{
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !isOwner) return XeonStickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antiimage' :{
                var sections = [
                    {
                    title: `Anti Image On`,
                    id: `${prefix}antiimage-> on`
                },
                {
                    title: `Anti Image Gc Off`,
                    id: `${prefix}antiimage-> off`
                }
                ]
                const unduh = {
                title: "Click Here",
                sections: [
                {
                title: "Anti Image Gc",
                rows: sections,
                }
                ]
            }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                }
                break
            case 'antiimage->':{
            	if (!m.isGroup) return XeonStickGroup()
                    if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !isOwner) return XeonStickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antivideo' :{
                var sections = [
                    {
                    title: `Anti Video On`,
                    id: `${prefix}antistiker-> on`
                },
                {
                    title: `Anti Video Gc Off`,
                    id: `${prefix}antistiker-> off`
                }
                ]
                const unduh = {
                title: "Click Here",
                sections: [
                {
                title: "Anti Video",
                rows: sections,
                }
                ]
            }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                }
                break
            case 'antivideo->':{
            	if (!m.isGroup) return XeonStickGroup()
                    if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !isOwner) return XeonStickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  reply(`${command} is disabled`)
               }
               }
            break
            
            case 'antibot' :{
                var sections = [
                    {
                    title: `Anti Bot On`,
                    id: `${prefix}antistiker-> on`
                },
                {
                    title: `Anti Bot Gc Off`,
                    id: `${prefix}antistiker-> off`
                }
                ]
                const unduh = {
                title: "Click Here",
                sections: [
                {
                title: "Anti Bot",
                rows: sections,
                }
                ]
            }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                }
                break
            case 'antibot->':{
		         if (!m.isGroup) return XeonStickGroup()
                    if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !isOwner) return XeonStickAdmin()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  reply(`${command} is disabled`)
               }
               }
            break
                    case 'antipoll':{
                    var sections = [
                        {
                        title: `Anti Polling On`,
                        id: `${prefix}antipoll-> on`
                    },
                    {
                        title: `Anti Polling Off`,
                        id: `${prefix}antipoll-> off`
                    }
                    ]
                    const unduh = {
                    title: "Click Here",
                    sections: [
                    {
                    title: "Anti Polling",
                    rows: sections,
                    }
                    ]
                }
                    client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                    }
                    break
                    case 'antipoll->':{
                        if (!m.isGroup) return XeonStickGroup()
                            if (!isBotAdmins) return XeonStickBotAdmin()
        if (!isAdmins && !isOwner) return XeonStickAdmin()
                       if (args.length < 1) return reply('on/off?')
                       if (args[0] === 'on') {
                          db.data.chats[from].antipoll = true
                          reply(`${command} is enabled`)
                       } else if (args[0] === 'off') {
                          db.data.chats[from].antipoll = false
                          reply(`${command} is disabled`)
                       }
                       }
                    break
                    case 'adminevent':{
                        var sections = [
                            {
                            title: `Admin Event On`,
                            id: `${prefix}adminevent-> on`
                        },
                        {
                            title: `Admin Event Off`,
                            id: `${prefix}adminevent-> off`
                        }
                        ]
                        const unduh = {
                        title: "Click Here",
                        sections: [
                        {
                        title: "Admin Event",
                        rows: sections,
                        }
                        ]
                    }
                        client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                        }
                        break
                    case 'adminevent->': {
                        if (!m.isGroup) return XeonStickGroup()
                            if (!isBotAdmins) return XeonStickBotAdmin()
                        if (!isAdmins && !isOwner) return XeonStickAdmin()
                        if (args.length < 1) return reply('on/off?')
                        if (args[0] === 'on') {
                           adminevent = true
                           reply(`${command} is enabled`)
                        } else if (args[0] === 'off') {
                           adminevent = false
                           reply(`${command} is disabled`)
                        }
                     }
                     break
                     case 'groupevent':{
                        var sections = [
                            {
                            title: `Group Event On`,
                            id: `${prefix}groupevent-> on`
                        },
                        {
                            title: `Group Event Off`,
                            id: `${prefix}groupevent-> off`
                        }
                        ]
                        const unduh = {
                        title: "Click Here",
                        sections: [
                        {
                        title: "Group Event",
                        rows: sections,
                        }
                        ]
                    }
                        client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                        }
                        break
                        case 'groupevent->': {
                        if (!m.isGroup) return XeonStickGroup()
                        if (!isAdmins && !isOwner) return XeonStickAdmin()
                        if (args.length < 1) return reply('on/off?')
                        if (args[0] === 'on') {
                           groupevent = true
                           reply(`${command} is enabled`)
                        } else if (args[0] === 'off') {
                           groupevent = false
                           reply(`${command} is disabled`)
                        }
                     }
                     break 
                     case 'invite': {
             if (!m.isGroup) return XeonStickGroup()
             if (!isBotAdmins) return XeonStickBotAdmin()
         if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 916909137213`)
         if (text.includes('+')) return reply(`Enter the number together without *+*`)
         if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
         let group = m.chat
         let link = 'https://chat.whatsapp.com/' + await client.groupInviteCode(group)
               await client.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
                 reply(` An invite link is sent to the user`) 
         }
         break
         case 'closetime':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    client.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isOwner) return reply(mess.admin)
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    client.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                reply(mess.done)
                break
                case 'idgroup': case 'groupid': {
if (!isOwner) return XeonStickBotAdmin()
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await client.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await client.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await client.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return XeonStickGroup()
if (!(isGroupAdmins || isOwner)) return XeonStickAdmin()
xeonbigpp = await client.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
client.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return XeonStickGroup()
if (!(isGroupAdmins || isOwner)) return XeonStickAdmin()
let cmiggc = await client.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
client.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return XeonStickGroup()
if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
client.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return XeonStickGroup()
if (!(isGroupAdmins || isOwner)) return XeonStickAdmin()
if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
client.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return XeonStickGroup()
                if(!isOwner) return XeonStickOwner()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                reply(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                reply(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!text) return reply('Text ?')
                await client.groupUpdateSubject(m.chat, text)
                reply(mess.done)
                break
                case 'userjid':{
          	if(!isOwner) return XeonStickOwner()
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      reply(textt)
    }
    break
    case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!text) return reply('Text ?')
                await client.groupUpdateDescription(m.chat, text)
                reply(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                let mediaa = await quoted.download()
                    var { img } = await pepe(mediaa)
                    await client.query({
                    tag: 'iq',
                    attrs: {
                    to: m.chat,
                    type:'set',
                    xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                    tag: 'picture',
                    attrs: { type: 'image' },
                    content: img
                    }
                    ]
                    })
                    reply(`Done`)
                break
            case 'tagall':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                client.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'hidetag':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                client.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply media with caption ${prefix + command}`)
                client.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group': case 'grup':{
                var sections = [
                    {
                    title: `Open GC`,
                    id: `${prefix}grup-> open`
                },
                {
                    title: `Close GC`,
                    id: `${prefix}grup-> close`
                }
                ]
                const unduh = {
                title: "Click Here",
                sections: [
                {
                title: "Open/Close GC",
                rows: sections,
                }
                ]
            }
                client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
                }
                break
            case 'group->':
            case 'grup->':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[0] === 'close') {
                    await client.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Success Opening Group`))
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let response = await client.groupInviteCode(m.chat)
                client.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await client.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await client.fetchStatus(who)
      reply(bio.status)
    } catch {
      return reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return XeonStickGroup()
            if (m.chat in vote) return reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`

            var sections = [
                {
                title: `Up Vote`,
                id: `${prefix}upvote`
            },
            {
                title: `Down Vote`,
                id: `${prefix}downvote`
            },
            {
                title: `Delete Vote`,
                id: `${prefix}deletevote`
            }
            ]
            const unduh = {
            title: "Click Here",
            sections: [
            {
            title: "Open/Close GC",
            rows: sections,
            }
            ]
        }
            client.sendListButtonv2(m.chat, teks_vote, unduh, "JoSisten", {quoted: m})
            
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return XeonStickGroup()
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            client.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return XeonStickGroup()
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            client.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return XeonStickGroup()
if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${client.user.id}
`
client.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return XeonStickGroup()
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                await client.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Reset Success`)
                    })
            break
            case 'ping': case 'botstatus': case 'statusbot': case 'test': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	client.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break
    case 'mulaiabsen': {
        if (!isGroup) return reply('Hanya Di Group')
            const chatId = m.chat; 
            const userId = m.sender;
        
            
            if (absenData[chatId]) {
                throw 'Absen sudah dimulai di obrolan ini!';
            }
        
           
            absenData[chatId] = {
                admin: userId, 
                participants: [], 
            };
        
            
            reply('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
        }
        break;
        
        
        case 'absen': {
        if (!isGroup) return reply('Hanya Di Group')
            const chatId = m.chat; 
            const userId = m.sender; 
        
           
            if (!absenData[chatId]) {
                throw 'Tidak ada proses absen yang sedang berlangsung di obrolan ini!';
            }
            absenData[chatId].participants.push(userId);
        
            reply('Anda telah berhasil bergabung dalam proses absen!');
        }
        break;
        
        case 'cekabsen': {
        if (!isGroup) return reply('Hanya Di Group')
            const chatId = m.chat; 
            if (!absenData[chatId]) {
                reply('Tidak ada proses absen yang sedang berlangsung di obrolan ini!')
            }
        
            
            const participants = absenData[chatId].participants;
        
            reply(`Daftar peserta absen:\n@${participants.join(', ')}`);
        }
        break;
        
        case 'hapusabsen': {
        if (!isGroup) return reply('Hanya Di Group')
            const chatId = m.chat;
            if (absenData[chatId] && absenData[chatId].admin === m.sender) {
              
                delete absenData[chatId];
                
                reply('Proses absen telah dihapus!');
            } else {
                throw 'Anda tidak memiliki izin untuk menghapus proses absen!';
            }
        }
        break    
            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    reply('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Wait @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await client.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await client.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        client.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        reply(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    reply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                this.suit[id] = {
                    chat: await client.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) client.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) reply(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                client.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
                case 'q': case 'quoted': {

if (!m.quoted) return reply('Reply the Message!!')

let xeonquotx= await client.serializeM(await m.getQuotedObj())

if (!xeonquotx.quoted) return reply('The message you are replying to is not sent by the bot')

await xeonquotx.quoted.copyNForward(m.chat, true)

}

break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'ai': 
            case 'ask':
            case 'openai': {
            client.sendPresenceUpdate(`composing`, m.chat)
               if (db.data.users[sender].limit < 1) return reply(mess.limit)
	            if (!q) return reply(`Example : ${prefix + command} who is ronaldo`)
			      var isiai = await fetchJson(`https://aemt.me/gpt4?text=${q}`)
			      var isi = isiai.result
		         await reply(isi)
			   }
			   break
            case 'lirik': 
            case 'lyrics':
            case 'lagu': {
               if (db.data.users[sender].limit < 1) return reply(mess.limit)
	            if (!q) return reply(`Example : ${prefix + command} Rayuan Perempuan Gila`)
			      var data = await fetchJson(`https://aemt.me/lirik?text=${q}`)
			      var isi = data.result.lyrics
                  var tekss = `*[ LIRIK LAGU ]*\nJudul Lagu : ${data.result.title}\nArtis : ${data.result.artist}\nLirik : \n${isi}`
                  client.sendMessage(m.chat, {image: {url: data.result.image}, caption: tekss}, {quoted: m})

			   }
			   break
               case 'remini': case 'tohd': {
                if (!/image/.test(mime)) return reply(`Send/Reply Gambar that you want to make into audio with captions ${prefix + command}`)
            await stikertunggu()
            let media = await client.downloadAndSaveMediaMessage(qmsg)
            if (/image/.test(mime)) {
                if (db.data.users[sender].limit < 1) return reply(mess.limit)
                var anu = await TelegraPh(media)
                var data = await fetchJson(`https://aemt.me/remini?url=${anu}&resolusi=4`)
                client.sendMessage(m.chat, {image: {url: data.url}, caption: `Sukses`}, {quoted: m})
               }
            }
               break
               case 'igstalk':{
                if (!q) return reply(`📌Example: ${prefix + command} arsrfii\NOTED : Tidak Menggunakan "@"`)
                if (!q === "@") return reply(`Gausah Pake "@"`)
                var data = await fetchJson(`https://aemt.me/download/igstalk?username=${q}`)
                var tekss = `*[ INSTAGRAM STALKER ]*\n\nUsername : ${data.result.username}\nFull Name : ${data.result.fullname}\nBio : ${data.result.bio}\nFollowers : ${data.result.followers}\nFollowing : ${data.result.following}\nPostingan Akun : ${data.result.postsCount}\n\n_Follow ig owner : @arsrfii_`
                client.sendMessage(m.chat, {image: {url: data.result.photoUrl}, caption: tekss}, {quoted: m})
               }
               break
    case 'qc': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply(`The selected color is not available.\nExample : ${prefix}${command} silver Jo?`)
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await client.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
client.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'ephemeral': case 'timerpesan':{
    var sections = [
        {
        title: `Timer Pesan Gc On`,
        id: `${prefix}ephemeral-> on`
    },
    {
        title: `Timer Pesan Gc Off`,
        id: `${prefix}ephemeral-> off`
    }
    ]
    const unduh = {
    title: "Click Here",
    sections: [
    {
    title: "Timer Pesan GC",
    rows: sections,
    }
    ]
}
    client.sendListButtonv2(m.chat, `Silahkan Pilih Untuk Di Aktifkan Ataupun Di Nonaktifkan`, unduh, "JoSisten", {quoted: m})
    }
    break
    case 'ephemeral->': {
                if (!m.isGroup) return XeonStickGroup()
                if (!isBotAdmins) return stikertunggu()
                if (!isAdmins) return XeonStickAdmin()
                if (!text) return reply('Enter the value enable/disable')
                if (args[0] === 'on') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await reply(`Done`)
                } else if (args[0] === 'off') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await reply(`Done`)
                }
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 client.sendMessage(m.chat, { delete: key })
}
break
//// DOWNLOAD ///////////////////

case 'tt': case 'tiktok':  {
    await stikertunggu()
            if (!q) return reply(`Masukan Text\nExample ${prefix}tiktok https://vm.tiktok.com/ZS8CoY9UX/`)
            if (!q.includes('tiktok')) return reply(`Salah Link`)
            reply(global.mess.wait)
    		try {
            tiktoku.Downloader(q, {version: "v2"}).then(data => {
                if (data.result.type === "video") {
                    client.sendMessage(m.chat, {video: {url: data.result.video}, caption: `Sukses Download TikTok Video.`}, {quoted: m})
                } else if (data.result.type === "image") {
                    for ( let i of data.result.images ) {
                        client.sendMessage(m.chat, {image: {url: i}})
                    }
                }
            })//.catch(() => reply(`ERORR. Postingan tidak Tersedia`))
            } catch (err) {
                console.log(`error nih`)
            }
        }
        break
        case 'ttmp3': case 'tiktokmp3':  {
            await stikertunggu()
            try {
            if (!q) return reply(`Masukan Text\nExample ${prefix}tiktok https://vm.tiktok.com/ZS8CoY9UX/`)
            if (!q.includes('tiktok')) return reply(global.mess.linkinv)
            reply(global.mess.wait)
            tiktoku.Downloader(q, { version: "v2"}).then ( data => { 
                client.sendMessage(m.chat, {audio: {url: data.result.music}, mimetype: 'audio/mp4'}, {quoted: m})
                })
    } catch (e) {
        reply(`Eror kak, Coba pakai server 2 ketik ${prefix}tiktok2 ${q} `)
    }
        }
        break
        case 'play':{
                    if (!q) return reply(`Masukan Text Setelah Perintah!\n\n*Example For Voice Not* : ${CmD} Jakarta Hari Ini - For revenge --vn\n*Example For Document :* ${CmD} Jakarta Hari Ini - For revenge -doc\n*Example For Video :* ${CmD} Jakarta Hari Ini - For revenge --video`)
                    await stikertunggu()
                    var cariyutup = await yts(q)
                    var urln = cariyutup.all[0].url
                    const judul = cariyutup.all[0].title
                    var thumbnailnya = cariyutup.all[0].image
                    var desc = cariyutup.all[0].description
                    var randomku = otpkode(5)
                    var teksyutup = `*[ DOWNLOAD YOUTUBE PLAY ]*\n\n 📛 Judul : ${judul}\n🔗 Link : ${urln}\n📃 Deskripsi : ${desc}\n\nSedang Mengirim...`
                    client.sendMessage(m.chat, {image: {url: thumbnailnya}, caption: teksyutup}, {quoted: m})
                try {
                    const audioStream = ytdl(urln, {
                        filter: 'audioonly',
                        quality: 'highestaudio',
                      }).pipe(fs.createWriteStream(`media/${randomku}.mp3`));
                      await sleep(5000)
                      client.sendMessage(m.chat, {audio: fs.readFileSync(`media/${randomku}.mp3`), mimetype: 'audio/mp4'}, {quoted: m})
                      await sleep(10000)
                      fs.unlinkSync(`media/${randomku}.mp3`)
                    } catch (error) {
                        reply(`Server Sibuk, Jojo Request yang laen dulu!`)
                    }
                } 
                    break
        case 'ytmp3': case 'yta': case'ytaudio': {
                    if (!q) return reply(`Masukan Text\nExample ${CmD} https://youtu.be/GDND88fqt1o`)
                    if (!q.includes('yout')) return reply(global.mess.linkinv)
                    await stikertunggu()
                    try {
                        var randomku = otpkode(5)
                        const audioStream = ytdl(q, {
                            filter: 'audioonly',
                            quality: 'highestaudio',
                          }).pipe(fs.createWriteStream(`media/${randomku}.mp3`));
                          await sleep(5000)
                          client.sendMessage(m.chat, {audio: fs.readFileSync(`./media/${randomku}.mp3`), mimetype: 'audio/mp4'}, {quoted: m})
                          await sleep(10000)
                          fs.unlinkSync(`media/${randomku}.mp3`)
                        } catch (error) {
                            reply(`Bentar kebelet`)
                        }
                }
                break
                case 'jadibot': {
                    if (!text) return reply('*<!> Example:* .jadibot 628xxx')
                    if (!isOwner) return XeonStickOwner()
        await jadibot(client, text, fkontak, from)
                    let loli = '`'
             await sleep(4500)      
                reply(`*Masukkan code dibawah ini untuk jadi bot sementara*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code di bawah ini\n\nNote: code dapat expired kapan saja!\n\nCode: ${loli}${global.codepairing}${loli}\nJika Code Error Silahkan Hapus  Folder Jadibot`);
              
        }
        break     
        case 'stopjadibot':
        if (!isOwner) return XeonStickOwner()
        reply("apus manual bg bot kurang canggih :v")
        break
                    case 'listjadibot': 
                   if (!isOwner) return XeonStickOwner() 
        try {
        let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
        te = "*List Jadibot*\n\n"
        for (let i of user){
        y = await client.decodeJid(i.id)
        te += " • User : @" + y.split("@")[0] + "\n"
        te += " • Name : " + i.name + "\n\n"
        }
        client.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
        } catch (err) {
        reply(`Belum Ada User Yang Jadibot`)
        }
        break           
                case 'instagram': case 'igvideo': case 'ig': case 'igimage': case 'igvid': case 'igimg': case 'igdl': {
                    if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
                    await stikertunggu()
                let res
                try {
                  res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
                } catch (error) {
                  return reply(`An error occurred: ${error.message}`)
                }
                let api_response = await res.json()
                if (!api_response || !api_response.data) {
                  return reply(`No video or image found or Invalid response from API.`)
                }
                const mediaArray = api_response.data;
                for (const mediaData of mediaArray) {
                  const mediaType = mediaData.type
                  const mediaURL = mediaData.url_download
                  let cap = `Sukses Mendownload Video Instagram`
                  if (mediaType === 'video') {
                    client.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
                  } else if (mediaType === 'image') {
                    client.sendMessage(m.chat, { image: {url: mediaURL}}, {quoted: m})
                  }
                }
              }
              break
case 'yts': case 'ytsearch': {
                if (!text) return reply(`Example : ${prefix + command} story wa anime`)
                await stikertunggu()
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            
case 'ytmp4': case 'ytvideo': {
const xeonvidoh = require('./lib/ytdl')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) reply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
await stikertunggu()
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await client.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'git': case 'gitclone':    
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
/// OWNER
case 'donasi': case 'donate':{
    var sewa = `*[ DONASI ]*
    Donasi
    1. Spay : 0882-1329-2687
    2. Gopay : 0882-1329-2687
    3. Dana : 0882-1329-2687
    
    Setelah melakukan donasi dari jojo, mohon konfirmasi melalui kontak di bawah ini:
    Email: arasyarafi02@gmail.com
    Whatsapp: 0882-1477-2441
    Link : https://wa.me/6288214772441`
reply(sewa)
}
break
case 'sewa': case 'sewabot':{
var sewa = `Premium Bot

Price List Jojo :
1 Minggu : -
1 Bulan : Rp. 10.000
Permanent : Rp. 20.000


Silakan lakukan pembayaran melalui metode berikut:
1. Spay : 0882-1329-2687
2. Gopay : 0882-1329-2687
3. Dana : 0882-1329-2687

Setelah melakukan pembayaran, mohon konfirmasi melalui kontak di bawah ini:
Email: arasyarafi02@gmail.com
Whatsapp: 0882-1477-2441
Link : https://wa.me/6288214772441

Terima kasih telah menggunakan layanan Sewa Bot!`
reply(sewa)
}
break
/// OWNERRRRR 
case 'autoswview':
    case 'autostatusview':{
             if (!isOwner) return XeonStickOwner()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'anticall': {
             if (!isOwner) return XeonStickOwner()
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  anticall = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'bc':
            case 'broadcast': {
               if (!isOwner) return XeonStickOwner()
               if (!text) return reply('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await client.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await client.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await client.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               reply(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'addlimit':
            case 'givelimit':{
                if (!isOwner) return XeonStickOwner()
                if (!text) return reply(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                reply(mess.done)
            }
            break
            case 'dellimit':{
                if (!isOwner) return XeonStickOwner()
                if (!text) return reply(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return reply(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                reply(mess.done)
            }
            break
            case 'addprem':
                if (!isOwner) return XeonStickOwner()
                if (args.length < 2)
                    return reply(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    reply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    reply("Premium Success")
                }
            break
            case 'delprem':
                if (!isOwner) return XeonStickOwner()
                if (args.length < 1) return reply(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 916909137213`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    reply("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    reply("Delete Success")
                }
            break
            case 'listprem': {
                if (!isOwner) return XeonStickOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                client.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
            case 'block': case 'ban': {
                if (!isOwner) return XeonStickOwner()
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await client.updateBlockStatus(users, 'block')
                await reply(`Done`)
            }
            break
            case 'unblock': case 'unban': {
                if (!isOwner) return XeonStickOwner()
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await client.updateBlockStatus(users, 'unblock')
                await reply(`Done`)
            }
            break

                case 'bcgc':
            case 'bcgroup': {
                if (!isOwner) return XeonStickOwner()
                if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await clientgroupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `*[ BROADCAST ]*\n\n${text}`
                    client.sendMessage(i, {text: a})
                }
                reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
                    case 'getcase':
                        if (!isOwner) return XeonStickOwner()
                        try {
                           const getCase = (cases) => {
                              return "case" + `'${cases}'` + fs.readFileSync("XeonCheems10.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                           }
                           reply(`${getCase(q)}`)
                        } catch {
                          reply(`case ${q} not found!`)
                        }
                    break
case 'addowner':
if (!isOwner) return XeonStickOwner()
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await client.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isOwner) return XeonStickOwner()
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                reply(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!isOwner) return XeonStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isOwner) return XeonStickOwner()
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    client.groupAcceptInvite(result)
                    await reply(`Done`)
                } catch {
                    reply('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!isOwner) return XeonStickOwner()
                reply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                client.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
                case 'setpp': case 'setppbot':{
                if (!isOwner) return XeonStickOwner()
                await stikertunggu()
                if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let mediaa = await quoted.download()
                var { img } = await pepe(mediaa)
                await client.query({
                tag: 'iq',
                attrs: {
                to: botNumber,
                type:'set',
                xmlns: 'w:profile:picture'
                },
                content: [
                {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
                }
                ]
                })
                reply(`Done`)
                }
                break

default:
    if (budy.startsWith('=>')) {
        if (!isOwner) return XeonStickOwner()
        function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
                bang = util.format(sul)
            }
            return reply(bang)
        }
        try {
            reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
        } catch (e) {
            reply(String(e))
        }
    }

    if (budy.startsWith('>')) {
        if (!isOwner) return XeonStickOwner()
        try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
        } catch (err) {
            await reply(String(err))
        }
    }
    if (budy.startsWith('$')) {
        if (!isOwner) return XeonStickOwner()
        exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(err)
            if (stdout) return reply(stdout)
        })
    }
    if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
client.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
        
    } catch (err) {
        
        console.log(util.format(err))
        

if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
