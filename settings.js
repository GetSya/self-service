
const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "JOJO CHANNEL" //ur yt chanel name
global.socialm = "IG: @josisten._" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'Joy - Assistant' //ur bot name
global.ownernumber = '6288214772441' //ur owner number
global.ownername = 'Arasya' //ur owner name
global.websitex = "https://chat.whatsapp.com/Famd1qzPzScBX4TSual41kT" 
global.wagc = "https://chat.whatsapp.com/IwuZiVC1zuCIuYsdLprOCP" 
global.themeemoji = '🎭'
global.wm = "Joy"
global.botscript = 'https://m.youtube.com/channel/UCcsmxAtiv9Af10psQ-EI1XA' //'https://chat.whatsapp.com/C3Hz1i2uYjb3X3bmZTrFxA' //script link
global.packname = "My Sticker"
global.prefa = ['#']
global.author = "Sticker Saya"
global.creator = "6288214772441@s.whatsapp.net"
global.xprefix = ''
global.premium = ["6288214772441"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v8'
global.typereply = 'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Sukses ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./media/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
