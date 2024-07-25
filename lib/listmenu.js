//FUKU MD

const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`╔══ 『 Main Menu 』
║
║- ${prefix}sticker
║- ${prefix}jodoh
║- ${prefix}ai
║- ${prefix}report
║- ${prefix}dall-e
║- ${prefix}video
║- ${prefix}qc
║- ${prefix}infogempa
║- ${prefix}swm
║- ${prefix}readviewonce
║- ${prefix}rvo
║- ${prefix}ping
║- ${prefix}google
║- ${prefix}delete
║- ${prefix}toimg
║- ${prefix}tomp3
║- ${prefix}tovn
║- ${prefix}afk
║- ${prefix}cekkhodam
║- ${prefix}togif
║- ${prefix}toanime
║- ${prefix}tohd
║- ${prefix}tourl
║- ${prefix}speedtest
║- ${prefix}emojimix
║- ${prefix}emojimix2
║- ${prefix}toviewonce
║- ${prefix}fliptext
║- ${prefix}toqr
║- ${prefix}volaudio
║- ${prefix}volvideo
║- ${prefix}lirik
║
╚════╝

╔══ 『 Change Vn Menu 』
║
║- ${prefix}bass
║- ${prefix}blown
║- ${prefix}deep
║- ${prefix}earrape
║- ${prefix}fast
║- ${prefix}fat
║- ${prefix}nightcore
║- ${prefix}reverse
║- ${prefix}robot
║- ${prefix}slow
║- ${prefix}smooth
║- ${prefix}squirrel
║
╚════╝

╔══ 『 Game Menu 』
║
║- ${prefix}ttt
║- ${prefix}delttt
║- ${prefix}suitpvp
║- ${prefix}math
║
╚════╝

╔══ 『 Command Menu 』
║
║- ${prefix}setcmd
║- ${prefix}listcmd
║- ${prefix}lockcmd
║- ${prefix}delcmd
║
╚════╝

╔══ 『 Download Menu 』
║
║- ${prefix}mediafiredl
║- ${prefix}tiktok
║- ${prefix}tiktokmp3
║- ${prefix}play
║- ${prefix}spotify
║- ${prefix}ytmp3
║- ${prefix}ytmp4
║- ${prefix}ytsearch
║- ${prefix}gitclone
║- ${prefix}igdl
║
╚════╝

╔══ 『 Grup Menu 』
║
║- ${prefix}antilink
║- ${prefix}antipoll
║- ${prefix}antisticker
║- ${prefix}antiimage
║- ${prefix}antivideo
║- ${prefix}antibot
║- ${prefix}welcome
║- ${prefix}adminevent
║- ${prefix}groupevent
║- ${prefix}invite
║- ${prefix}closetime
║- ${prefix}opentime
║- ${prefix}add
║- ${prefix}kick
║- ${prefix}promote
║- ${prefix}demotex
║- ${prefix}setnamegc
║- ${prefix}setdesc
║- ${prefix}setppgrup
║- ${prefix}tagall
║- ${prefix}hidetag
║- ${prefix}totag
║- ${prefix}grup
║- ${prefix}linkgc
║- ${prefix}getbio
║- ${prefix}vote
║- ${prefix}upvote
║- ${prefix}downvote
║- ${prefix}checkvote
║- ${prefix}deletevote
║- ${prefix}revoke
║- ${prefix}userjid
║- ${prefix}nowa
║- ${prefix}getcontact
║- ${prefix}savecontact
║- ${prefix}sendcontact
║- ${prefix}contag
║- ${prefix}mulaiabsen
║- ${prefix}absen
║- ${prefix}checkabsen
║- ${prefix}hapusabsen
║
╚════╝

╔══ 『 Database Menu 』
║
║- ${prefix}addsticker
║- ${prefix}delsticker
║- ${prefix}liststicker
║- ${prefix}addvideo
║- ${prefix}delvideo
║- ${prefix}listvideo
║- ${prefix}addimage
║- ${prefix}delimage
║- ${prefix}listimage
║- ${prefix}addmsg
║- ${prefix}getmsg
║- ${prefix}delmsg
║- ${prefix}addvn
║- ${prefix}delvn
║- ${prefix}listvn
║- ${prefix}addzip
║- ${prefix}delzip
║- ${prefix}listzip
║- ${prefix}addapk
║- ${prefix}delapk
║- ${prefix}listapk
║- ${prefix}addpdf
║- ${prefix}delpdf
║- ${prefix}listpdf
║
╚════╝

╔══ 『 Owner Menu 』
║
║- ${prefix}bc
║- ${prefix}jadibot
║- ${prefix}listjadibot
║- ${prefix}stopjadibot
║- ${prefix}autoswview
║- ${prefix}anticall
║- ${prefix}addlimit
║- ${prefix}dellimit
║- ${prefix}addprem
║- ${prefix}delprem
║- ${prefix}listprem
║- ${prefix}clearsession
║- ${prefix}getsession
║- ${prefix}join
║- ${prefix}ban
║- ${prefix}unban
║- ${prefix}bcgc
║- ${prefix}getcase
║- ${prefix}setpp
║- >
║- =>
║- $
║
╚════╝
`}

global.animemenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Anime* ❱
║◦${prefix}akira 𝙁𝙍𝙀𝙀
║◦${prefix}akiyama 𝙁𝙍𝙀𝙀
║◦${prefix}ana 𝙁𝙍𝙀𝙀
║◦${prefix}asuna 𝙁𝙍𝙀𝙀
║◦${prefix}ayuzawa 𝙁𝙍𝙀𝙀
║◦${prefix}boruto 𝙁𝙍𝙀𝙀
║◦${prefix}chiho 𝙁𝙍𝙀𝙀
║◦${prefix}chitoge 𝙁𝙍𝙀𝙀
║◦${prefix}cosplayloli 𝙁𝙍𝙀𝙀
║◦${prefix}cosplaysagiri 𝙁𝙍𝙀𝙀
║◦${prefix}deidara 𝙁𝙍𝙀𝙀
║◦${prefix}doraemon 𝙁𝙍𝙀𝙀
║◦${prefix}elaina 𝙁𝙍𝙀𝙀
║◦${prefix}emilia 𝙁𝙍𝙀𝙀
║◦${prefix}erza 𝙁𝙍𝙀𝙀
║◦${prefix}gremory 𝙁𝙍𝙀𝙀
║◦${prefix}hestia 𝙁𝙍𝙀𝙀
║◦${prefix}husbu 𝙁𝙍𝙀𝙀
║◦${prefix}inori 𝙁𝙍𝙀𝙀
║◦${prefix}isuzu 𝙁𝙍𝙀𝙀
║◦${prefix}itachi 𝙁𝙍𝙀𝙀
║◦${prefix}itori 𝙁𝙍𝙀𝙀
║◦${prefix}kaga 𝙁𝙍𝙀𝙀
║◦${prefix}kagura 𝙁𝙍𝙀𝙀
║◦${prefix}kakasih 𝙁𝙍𝙀𝙀
║◦${prefix}kaori 𝙁𝙍𝙀𝙀
║◦${prefix}keneki 𝙁𝙍𝙀𝙀
║◦${prefix}kotori 𝙁𝙍𝙀𝙀
║◦${prefix}kurumi 𝙁𝙍𝙀𝙀
║◦${prefix}loli 𝙁𝙍𝙀𝙀
║◦${prefix}madara 𝙁𝙍𝙀𝙀
║◦${prefix}megumin 𝙁𝙍𝙀𝙀
║◦${prefix}mikasa 𝙁𝙍𝙀𝙀
║◦${prefix}mikey 𝙁𝙍𝙀𝙀
║◦${prefix}miku 𝙁𝙍𝙀𝙀
║◦${prefix}minato 𝙁𝙍𝙀𝙀
║◦${prefix}naruto 𝙁𝙍𝙀𝙀
║◦${prefix}neko 𝙁𝙍𝙀𝙀
║◦${prefix}neko2 𝙁𝙍𝙀𝙀
║◦${prefix}nekonime 𝙁𝙍𝙀𝙀
║◦${prefix}nezuko 𝙁𝙍𝙀𝙀
║◦${prefix}onepiece 𝙁𝙍𝙀𝙀
║◦${prefix}pokemon 𝙁𝙍𝙀𝙀
║◦${prefix}randomnime 𝙁𝙍𝙀𝙀
║◦${prefix}randomnime2 𝙁𝙍𝙀𝙀
║◦${prefix}rize 𝙁𝙍𝙀𝙀
║◦${prefix}sagiri 𝙁𝙍𝙀𝙀
║◦${prefix}sakura 𝙁𝙍𝙀𝙀
║◦${prefix}sasuke 𝙁𝙍𝙀𝙀
║◦${prefix}shina 𝙁𝙍𝙀𝙀
║◦${prefix}shinka 𝙁𝙍𝙀𝙀
║◦${prefix}shinomiya 𝙁𝙍𝙀𝙀
║◦${prefix}shizuka 𝙁𝙍𝙀𝙀
║◦${prefix}shota 𝙁𝙍𝙀𝙀
║◦${prefix}tejina 𝙁𝙍𝙀𝙀
║◦${prefix}toukachan 𝙁𝙍𝙀𝙀
║◦${prefix}tsunade 𝙁𝙍𝙀𝙀
║◦${prefix}waifu 𝙁𝙍𝙀𝙀
║◦${prefix}animewall 𝙁𝙍𝙀𝙀
║◦${prefix}yotsuba 𝙁𝙍𝙀𝙀
║◦${prefix}yuki 𝙁𝙍𝙀𝙀
║◦${prefix}yulibocil 𝙁𝙍𝙀𝙀
║◦${prefix}yumeko 𝙁𝙍𝙀𝙀
║◦${prefix}8ball 𝙁𝙍𝙀𝙀
║◦${prefix}tickle 𝙁𝙍𝙀𝙀
║◦${prefix}gecg 𝙁𝙍𝙀𝙀
║◦${prefix}feed 𝙁𝙍𝙀𝙀
║◦${prefix}animeawoo 𝙁𝙍𝙀𝙀
║◦${prefix}animemegumin 𝙁𝙍𝙀𝙀
║◦${prefix}animeshinobu 𝙁𝙍𝙀𝙀
║◦${prefix}animehandhold 𝙁𝙍𝙀𝙀
║◦${prefix}animehighfive 𝙁𝙍𝙀𝙀
║◦${prefix}animecringe 𝙁𝙍𝙀𝙀
║◦${prefix}animedance 𝙁𝙍𝙀𝙀
║◦${prefix}animehappy 𝙁𝙍𝙀𝙀
║◦${prefix}animeglomp 𝙁𝙍𝙀𝙀
║◦${prefix}animeblush 𝙁𝙍𝙀𝙀
║◦${prefix}animesmug 𝙁𝙍𝙀𝙀
║◦${prefix}animewave 𝙁𝙍𝙀𝙀
║◦${prefix}animesmille 𝙁𝙍𝙀𝙀
║◦${prefix}animepoke 𝙁𝙍𝙀𝙀
║◦${prefix}animewink 𝙁𝙍𝙀𝙀
║◦${prefix}animebonk 𝙁𝙍𝙀𝙀
║◦${prefix}animebully 𝙁𝙍𝙀𝙀
║◦${prefix}animeyeet 𝙁𝙍𝙀𝙀
║◦${prefix}animebite 𝙁𝙍𝙀𝙀
║◦${prefix}animelick 𝙁𝙍𝙀𝙀
║◦${prefix}animekill 𝙁𝙍𝙀𝙀
║◦${prefix}animecry 𝙁𝙍𝙀𝙀
║◦${prefix}animewlp 𝙁𝙍𝙀𝙀
║◦${prefix}animekiss 𝙁𝙍𝙀𝙀
║◦${prefix}animehug 𝙁𝙍𝙀𝙀
║◦${prefix}animeneko 𝙁𝙍𝙀𝙀
║◦${prefix}animepat 𝙁𝙍𝙀𝙀
║◦${prefix}animeslap 𝙁𝙍𝙀𝙀
║◦${prefix}animecuddle 𝙁𝙍𝙀𝙀
║◦${prefix}animewaifu 𝙁𝙍𝙀𝙀
║◦${prefix}animenom 𝙁𝙍𝙀𝙀
║◦${prefix}animefoxgirl 𝙁𝙍𝙀𝙀
║◦${prefix}animegecg 𝙁𝙍𝙀𝙀
║◦${prefix}animetickle 𝙁𝙍𝙀𝙀
║◦${prefix}animefeed 𝙁𝙍𝙀𝙀
║◦${prefix}animeavatar 𝙁𝙍𝙀𝙀
║◦${prefix}anime 𝙁𝙍𝙀𝙀
║◦${prefix}animequote 𝙁𝙍𝙀𝙀
║◦${prefix}random loli 𝙁𝙍𝙀𝙀
║◦${prefix}random waifu 𝙁𝙍𝙀𝙀
║◦${prefix}random neko 𝙁𝙍𝙀𝙀
║◦${prefix}random zerotwo 𝙁𝙍𝙀𝙀
╰⟢
`}

global.ownermenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Owner Menu* ❱
║◦${prefix}autoread 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}autobio 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}autotype 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}unavailable 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}autorecord 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}autorecordtype 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}autoswview 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setautoblock 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setantiforeign 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}autoblock 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}onlygc 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}onlypc 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}onlyindia 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}onlyindo 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}anticall 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}self 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}public 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}join 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}poll 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}bc 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}bcgroup 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setmenu 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setimgmenu 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setvidmenu 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setgifmenu 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setreply 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setprefix 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addlimit 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}dellimit 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}resethit 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}resetuser 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}creategc 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}userjid 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setexif 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setbotbio 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delppbot 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}shutdown 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}setppbot 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addprem 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delprem 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addowner 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delowner 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addvn 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addapk 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addzip 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addpdf 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delapk 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delzip 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delpdf 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delvn 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addsticker 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delsticker 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addimage 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delimage 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addvideo 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}delvideo 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}addtitle 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}deltitle 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}upswtext 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}upswvideo 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}upswimage 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}upswaudio 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}block 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}unblock 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}leavegc 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}pushcontact 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}pushcontactv2 𝙊𝙒𝙉𝙀𝙍
╰⟢
`}

global.othermenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Other Menu* ❱
║◦${prefix}ping 𝙁𝙍𝙀𝙀
║◦${prefix}menu 𝙁𝙍𝙀𝙀
║◦${prefix}myip 𝙁𝙍𝙀𝙀
║◦${prefix}repo 𝙁𝙍𝙀𝙀
║◦${prefix}reportbug 𝙁𝙍𝙀𝙀
║◦${prefix}listprem 𝙁𝙍𝙀𝙀
║◦${prefix}listowner 𝙁𝙍𝙀𝙀
║◦${prefix}liststicker 𝙁𝙍𝙀𝙀
║◦${prefix}listimage 𝙁𝙍𝙀𝙀
║◦${prefix}listvideo 𝙁𝙍𝙀𝙀
║◦${prefix}listvn 𝙁𝙍𝙀𝙀
║◦${prefix}listapk 𝙁𝙍𝙀𝙀
║◦${prefix}listzip 𝙁𝙍𝙀𝙀
║◦${prefix}listpdf 𝙁𝙍𝙀𝙀
║◦${prefix}listbadword 𝙁𝙍𝙀𝙀
║◦${prefix}listpc 𝙁𝙍𝙀𝙀
║◦${prefix}listgc 𝙁𝙍𝙀𝙀
║◦${prefix}isgroup 𝙁𝙍𝙀𝙀
║◦${prefix}owner 𝙁𝙍𝙀𝙀
║◦${prefix}rentbot 𝙁𝙍𝙀𝙀
║◦${prefix}donate 𝙁𝙍𝙀𝙀
║◦${prefix}friend 𝙁𝙍𝙀𝙀
║◦${prefix}obfuscate 𝙁𝙍𝙀𝙀
║◦${prefix}styletext 𝙁𝙍𝙀𝙀
║◦${prefix}fliptext 𝙁𝙍𝙀𝙀
║◦${prefix}tts 𝙁𝙍𝙀𝙀
║◦${prefix}say 𝙁𝙍𝙀𝙀
║◦${prefix}togif 𝙁𝙍𝙀𝙀
║◦${prefix}toqr 𝙁𝙍𝙀𝙀
║◦${prefix}bass 𝙁𝙍𝙀𝙀
║◦${prefix}blown 𝙁𝙍𝙀𝙀
║◦${prefix}deep 𝙁𝙍𝙀𝙀
║◦${prefix}earrape 𝙁𝙍𝙀𝙀
║◦${prefix}fast 𝙁𝙍𝙀𝙀
║◦${prefix}fat 𝙁𝙍𝙀𝙀
║◦${prefix}nightcore 𝙁𝙍𝙀𝙀
║◦${prefix}reverse 𝙁𝙍𝙀𝙀
║◦${prefix}robot 𝙁𝙍𝙀𝙀
║◦${prefix}slow 𝙁𝙍𝙀𝙀
║◦${prefix}smooth 𝙁𝙍𝙀𝙀
║◦${prefix}squirrel 𝙁𝙍𝙀𝙀
║◦${prefix}tinyurl 𝙁𝙍𝙀𝙀
║◦${prefix}tovn 𝙁𝙍𝙀𝙀
║◦${prefix}toaudio 𝙁𝙍𝙀𝙀
║◦${prefix}tomp3 𝙁𝙍𝙀𝙀
║◦${prefix}tomp4𝙁𝙍𝙀𝙀
║◦${prefix}toimg 𝙁𝙍𝙀𝙀
║◦${prefix}toonce 𝙁𝙍𝙀𝙀
║◦${prefix}sticker 𝙁𝙍𝙀𝙀
║◦${prefix}take 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}emoji 𝙁𝙍𝙀𝙀
║◦${prefix}volaudio 𝙁𝙍𝙀𝙀
║◦${prefix}volvideo 𝙁𝙍𝙀𝙀
║◦${prefix}ebinary 𝙁𝙍𝙀𝙀
║◦${prefix}dbinary 𝙁𝙍𝙀𝙀
║◦${prefix}ssweb 𝙁𝙍𝙀𝙀
║◦${prefix}quoted 𝙁𝙍𝙀𝙀
║◦${prefix}checkaccount 𝙁𝙍𝙀𝙀
║◦${prefix}runtime 𝙁𝙍𝙀𝙀
║◦${prefix}translate 𝙁𝙍𝙀𝙀
║◦${prefix}quran 𝙁𝙍𝙀𝙀
║◦${prefix}bible 𝙁𝙍𝙀𝙀
╰⟢
`}

global.downloadmenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Download Menu* ❱
║◦${prefix}ytsearch 𝙁𝙍𝙀𝙀
║◦${prefix}play 𝙁𝙍𝙀𝙀
║◦${prefix}ytmp3 𝙁𝙍𝙀𝙀
║◦${prefix}ytmp4 𝙁𝙍𝙀𝙀
║◦${prefix}tiktokaudio 𝙁𝙍𝙀𝙀
║◦${prefix}tiktok 𝙁𝙍𝙀𝙀
║◦${prefix}igvideo 𝙁𝙍𝙀𝙀
║◦${prefix}igimage 𝙁𝙍𝙀𝙀
║◦${prefix}facebook 𝙁𝙍𝙀𝙀
║◦${prefix}mediafire 𝙁𝙍𝙀𝙀
║◦${prefix}apk 𝙁𝙍𝙀𝙀
║◦${prefix}google 𝙁𝙍𝙀𝙀
║◦${prefix}imdb 𝙁𝙍𝙀𝙀
║◦${prefix}weather 𝙁𝙍𝙀𝙀
║◦${prefix}wanumber 𝙁𝙍𝙀𝙀
║◦${prefix}spotify 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}gitclone 𝙁𝙍𝙀𝙀
║◦${prefix}happymod 𝙁𝙍𝙀𝙀
║◦${prefix}gdrive 𝙁𝙍𝙀𝙀
║◦${prefix}pinterest 𝙁𝙍𝙀𝙀
║◦${prefix}ringtone 𝙁𝙍𝙀𝙀
╰⟢
`}

global.groupmenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Group Menu* ❱
║◦${prefix}antibot 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antiviewonce 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}welcome 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}adminevent 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}groupevent 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antiforeign 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antimedia 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antiaudio 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antivideo 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antiimage 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antidocument 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antilocation 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}anticontact 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antisticker 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antipoll 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antilink 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antilinkgc 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antivirtex 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}grouplink 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}listadmin 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}invite 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}ephemeral 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}delete 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}setppgroup 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}delppgroup 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}setnamegc 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}setdesc 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}add 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}kick 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}promote 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}demote 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}getcontact 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}savecontact 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}sendcontact 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}contactag 𝙊𝙒𝙉𝙀𝙍
║◦${prefix}hidetag 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}totag 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}tagall 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}editinfo 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}opentime 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}closetime 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}resetlink 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}getbio 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}vote 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}upvote 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}downvote 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}checkvote 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}delvote 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}autostickergc 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antivirus 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}antitoxic 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}nsfw 𝙂𝙍𝙊𝙐𝙋
║◦${prefix}react 𝙂𝙍𝙊𝙐𝙋
╰⟢
`}

global.funmenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Fun Menu* ❱
║◦${prefix}define 𝙁𝙍𝙀𝙀
║◦${prefix}lyrics 𝙁𝙍𝙀𝙀
║◦${prefix}tictactoe 𝙁𝙍𝙀𝙀
║◦${prefix}suit 𝙁𝙍𝙀𝙀
║◦${prefix}math 𝙁𝙍𝙀𝙀
║◦${prefix}fact 𝙁𝙍𝙀𝙀
║◦${prefix}truth 𝙁𝙍𝙀𝙀
║◦${prefix}dare 𝙁𝙍𝙀𝙀
║◦${prefix}couple 𝙁𝙍𝙀𝙀
║◦${prefix}soulmate 𝙁𝙍𝙀𝙀
║◦${prefix}stupidcheck 𝙁𝙍𝙀𝙀
║◦${prefix}handsomecheck 𝙁𝙍𝙀𝙀
║◦${prefix}uncleancheck 𝙁𝙍𝙀𝙀
║◦${prefix}hotcheck 𝙁𝙍𝙀𝙀
║◦${prefix}smartcheck 𝙁𝙍𝙀𝙀
║◦${prefix}greatcheck 𝙁𝙍𝙀𝙀
║◦${prefix}evilcheck 𝙁𝙍𝙀𝙀
║◦${prefix}dogcheck 𝙁𝙍𝙀𝙀
║◦${prefix}coolcheck 𝙁𝙍𝙀𝙀
║◦${prefix}waifucheck 𝙁𝙍𝙀𝙀
║◦${prefix}awesomecheck 𝙁𝙍𝙀𝙀
║◦${prefix}gaycheck 𝙁𝙍𝙀𝙀
║◦${prefix}cutecheck 𝙁𝙍𝙀𝙀
║◦${prefix}lesbiancheck 𝙁𝙍𝙀𝙀
║◦${prefix}hornycheck 𝙁𝙍𝙀𝙀
║◦${prefix}prettycheck 𝙁𝙍𝙀𝙀
║◦${prefix}lovelycheck 𝙁𝙍𝙀𝙀
║◦${prefix}uglycheck 𝙁𝙍𝙀𝙀
║◦${prefix}pick 𝙁𝙍𝙀𝙀
║◦${prefix}pickupline 𝙁𝙍𝙀𝙀
║◦${prefix}quotes 𝙁𝙍𝙀𝙀
║◦${prefix}can 𝙁𝙍𝙀𝙀
║◦${prefix}is 𝙁𝙍𝙀𝙀
║◦${prefix}when 𝙁𝙍𝙀𝙀
║◦${prefix}where 𝙁𝙍𝙀𝙀
║◦${prefix}what 𝙁𝙍𝙀𝙀
║◦${prefix}how 𝙁𝙍𝙀𝙀
║◦${prefix}rate 𝙁𝙍𝙀𝙀
║◦${prefix}cry 𝙁𝙍𝙀𝙀
║◦${prefix}kill 𝙁𝙍𝙀𝙀
║◦${prefix}hug 𝙁𝙍𝙀𝙀
║◦${prefix}pat 𝙁𝙍𝙀𝙀
║◦${prefix}lick 𝙁𝙍𝙀𝙀 
║◦${prefix}kiss 𝙁𝙍𝙀𝙀
║◦${prefix}bite 𝙁𝙍𝙀𝙀
║◦${prefix}yeet 𝙁𝙍𝙀𝙀
║◦${prefix}bully 𝙁𝙍𝙀𝙀
║◦${prefix}bonk 𝙁𝙍𝙀𝙀
║◦${prefix}wink 𝙁𝙍𝙀𝙀
║◦${prefix}poke 𝙁𝙍𝙀𝙀
║◦${prefix}nom 𝙁𝙍𝙀𝙀
║◦${prefix}slap 𝙁𝙍𝙀𝙀
║◦${prefix}smile 𝙁𝙍𝙀𝙀 
║◦${prefix}wave 𝙁𝙍𝙀𝙀
║◦${prefix}awoo 𝙁𝙍𝙀𝙀
║◦${prefix}blush 𝙁𝙍𝙀𝙀
║◦${prefix}smug 𝙁𝙍𝙀𝙀
║◦${prefix}glomp 𝙁𝙍𝙀𝙀 
║◦${prefix}happy 𝙁𝙍𝙀𝙀
║◦${prefix}dance 𝙁𝙍𝙀𝙀
║◦${prefix}cringe 𝙁𝙍𝙀𝙀
║◦${prefix}cuddle 𝙁𝙍𝙀𝙀
║◦${prefix}highfive 𝙁𝙍𝙀𝙀 
║◦${prefix}shinobu 𝙁𝙍𝙀𝙀
║◦${prefix}handhold 𝙁𝙍𝙀𝙀
║◦${prefix}spank 𝙁𝙍𝙀𝙀
║◦${prefix}tickle 𝙁𝙍𝙀𝙀
║◦${prefix}avatar 𝙁𝙍𝙀𝙀
║◦${prefix}feed 𝙁𝙍𝙀𝙀
║◦${prefix}fox_girl 𝙁𝙍𝙀𝙀
║◦${prefix}gecg 𝙁𝙍𝙀𝙀
║◦${prefix}checkme 𝙁𝙍𝙀𝙀
║◦${prefix}sound1 - sound161 𝙁𝙍𝙀𝙀
╰⟢
`}

global.stalkermenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Stalker* ❱
║◦${prefix}igstalk 𝙁𝙍𝙀𝙀
║◦${prefix}tiktokstalk 𝙁𝙍𝙀𝙀
║◦${prefix}mlstalk 𝙁𝙍𝙀𝙀
║◦${prefix}npmstalk 𝙁𝙍𝙀𝙀
║◦${prefix}ghstalk 𝙁𝙍𝙀𝙀
╰⟢
`}

global.stickermenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Sticker* ❱
║◦${prefix}goose 𝙁𝙍𝙀𝙀
║◦${prefix}woof 𝙁𝙍𝙀𝙀
║◦${prefix}8ball 𝙁𝙍𝙀𝙀
║◦${prefix}lizard 𝙁𝙍𝙀𝙀
║◦${prefix}meow 𝙁𝙍𝙀𝙀
║◦${prefix}gura 𝙁𝙍𝙀𝙀
║◦${prefix}doge 𝙁𝙍𝙀𝙀
║◦${prefix}patrick 𝙁𝙍𝙀𝙀
║◦${prefix}lovestick 𝙁𝙍𝙀𝙀
║◦${prefix}telestick 𝙁𝙍𝙀𝙀
╰⟢
`}

global.databasemenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Database* ❱
║◦${prefix}setcmd 𝙁𝙍𝙀𝙀
║◦${prefix}delcmd 𝙁𝙍𝙀𝙀
║◦${prefix}listcmd 𝙁𝙍𝙀𝙀
║◦${prefix}lockcmd 𝙁𝙍𝙀𝙀
║◦${prefix}addmsg 𝙁𝙍𝙀𝙀
║◦${prefix}delmsg 𝙁𝙍𝙀𝙀
║◦${prefix}getmsg 𝙁𝙍𝙀𝙀
║◦${prefix}listmsg 𝙁𝙍𝙀𝙀
╰⟢
`}

global.aimenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *OpenAI* ❱
║◦${prefix}openai 𝙁𝙍𝙀𝙀
║◦${prefix}dalle 𝙁𝙍𝙀𝙀
║◦${prefix}ai 𝙁𝙍𝙀𝙀
║◦${prefix}remini 𝙁𝙍𝙀𝙀
╰⟢
`}

global.bugmenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Bug & War* ❱
║◦${prefix}amountbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}pmbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}delaybug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}docubug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}unlimitedbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}bombug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}lagbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}trollybug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}gcbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}delaygcbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}laggcbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}bomgcbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}unlimitedgcbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}trollygcbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}docugcbug 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}verif 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}banv1 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}banv2 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}banv3 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}banv4 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}banv5 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}banv6 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}unbanv1 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}unbanv2 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}unbanv3 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}unbanv4 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
║◦${prefix}unbanv5 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
╰⟢
`}

global.randphotomenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Random Photo* ❱
║◦${prefix}aesthetic 𝙁𝙍𝙀𝙀
║◦${prefix}coffee 𝙁𝙍𝙀𝙀
║◦${prefix}wikimedia 𝙁𝙍𝙀𝙀
║◦${prefix}wallpaper 𝙁𝙍𝙀𝙀
║◦${prefix}art 𝙁𝙍𝙀𝙀
║◦${prefix}bts 𝙁𝙍𝙀𝙀
║◦${prefix}dogwoof 𝙁𝙍𝙀𝙀
║◦${prefix}catmeow 𝙁𝙍𝙀𝙀
║◦${prefix}lizardpic 𝙁𝙍𝙀𝙀
║◦${prefix}goosebird 𝙁𝙍𝙀𝙀
║◦${prefix}8ballpool 𝙁𝙍𝙀𝙀
║◦${prefix}cosplay 𝙁𝙍𝙀𝙀
║◦${prefix}hacker 𝙁𝙍𝙀𝙀
║◦${prefix}cyber 𝙁𝙍𝙀𝙀
║◦${prefix}gamewallpaper 𝙁𝙍𝙀𝙀
║◦${prefix}islamic 𝙁𝙍𝙀𝙀
║◦${prefix}jennie 𝙁𝙍𝙀𝙀
║◦${prefix}jiso 𝙁𝙍𝙀𝙀
║◦${prefix}satanic 𝙁𝙍𝙀𝙀
║◦${prefix}justina 𝙁𝙍𝙀𝙀
║◦${prefix}cartoon 𝙁𝙍𝙀𝙀
║◦${prefix}pentol 𝙁𝙍𝙀𝙀
║◦${prefix}cat 𝙁𝙍𝙀𝙀
║◦${prefix}kpop 𝙁𝙍𝙀𝙀
║◦${prefix}exo 𝙁𝙍𝙀𝙀
║◦${prefix}lisa 𝙁𝙍𝙀𝙀
║◦${prefix}space 𝙁𝙍𝙀𝙀
║◦${prefix}car 𝙁𝙍𝙀𝙀
║◦${prefix}technology 𝙁𝙍𝙀𝙀
║◦${prefix}bike 𝙁𝙍𝙀𝙀
║◦${prefix}shortquote 𝙁𝙍𝙀𝙀
║◦${prefix}antiwork 𝙁𝙍𝙀𝙀
║◦${prefix}hacking 𝙁𝙍𝙀𝙀
║◦${prefix}boneka 𝙁𝙍𝙀𝙀
║◦${prefix}rose 𝙁𝙍𝙀𝙀
║◦${prefix}ryujin 𝙁𝙍𝙀𝙀
║◦${prefix}ulzzangboy 𝙁𝙍𝙀𝙀
║◦${prefix}ulzzanggirl 𝙁𝙍𝙀𝙀
║◦${prefix}wallml 𝙁𝙍𝙀𝙀
║◦${prefix}wallphone 𝙁𝙍𝙀𝙀
║◦${prefix}mountain 𝙁𝙍𝙀𝙀
║◦${prefix}goose 𝙁𝙍𝙀𝙀
║◦${prefix}profilepic 𝙁𝙍𝙀𝙀
║◦${prefix}couplepp 𝙁𝙍𝙀𝙀
║◦${prefix}programming 𝙁𝙍𝙀𝙀
║◦${prefix}pubg 𝙁𝙍𝙀𝙀
║◦${prefix}blackpink 𝙁𝙍𝙀𝙀
║◦${prefix}randomboy 𝙁𝙍𝙀𝙀  
║◦${prefix}randomgirl 𝙁𝙍𝙀𝙀
║◦${prefix}hijab 𝙁𝙍𝙀𝙀  
║◦${prefix}chinese 𝙁𝙍𝙀𝙀
║◦${prefix}indo 𝙁𝙍𝙀𝙀
║◦${prefix}japanese 𝙁𝙍𝙀𝙀
║◦${prefix}korean 𝙁𝙍𝙀𝙀
║◦${prefix}malay 𝙁𝙍𝙀𝙀
║◦${prefix}thai 𝙁𝙍𝙀𝙀
║◦${prefix}vietnamese 𝙁𝙍𝙀𝙀
╰⟢
`}

global.randvideomenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Random Video* ❱
║◦${prefix}tiktokgirl 𝙁𝙍𝙀𝙀
║◦${prefix}tiktoknukthy 𝙁𝙍𝙀𝙀
║◦${prefix}tiktokkayes 𝙁𝙍𝙀𝙀
║◦${prefix}tiktokpanrika 𝙁𝙍𝙀𝙀
║◦${prefix}tiktoknotnot 𝙁𝙍𝙀𝙀
║◦${prefix}tiktokghea 𝙁𝙍𝙀𝙀
║◦${prefix}tiktoksantuy 𝙁𝙍𝙀𝙀
║◦${prefix}tiktokbocil 𝙁𝙍𝙀𝙀
╰⟢
`}

global.photooxymenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *PhotoOxy Maker* ❱
║◦${prefix}shadow 𝙁𝙍𝙀𝙀 
║◦${prefix}write 𝙁𝙍𝙀𝙀 
║◦${prefix}romantic 𝙁𝙍𝙀𝙀 
║◦${prefix}burnpaper 𝙁𝙍𝙀𝙀
║◦${prefix}smoke 𝙁𝙍𝙀𝙀 
║◦${prefix}narutobanner 𝙁𝙍𝙀𝙀 
║◦${prefix}love 𝙁𝙍𝙀𝙀 
║◦${prefix}undergrass 𝙁𝙍𝙀𝙀
║◦${prefix}doublelove 𝙁𝙍𝙀𝙀 
║◦${prefix}coffecup 𝙁𝙍𝙀𝙀
║◦${prefix}underwaterocean 𝙁𝙍𝙀𝙀
║◦${prefix}smokyneon 𝙁𝙍𝙀𝙀
║◦${prefix}starstext 𝙁𝙍𝙀𝙀
║◦${prefix}rainboweffect 𝙁𝙍𝙀𝙀
║◦${prefix}balloontext 𝙁𝙍𝙀𝙀
║◦${prefix}metalliceffect 𝙁𝙍𝙀𝙀
║◦${prefix}embroiderytext 𝙁𝙍𝙀𝙀
║◦${prefix}flamingtext 𝙁𝙍𝙀𝙀
║◦${prefix}stonetext 𝙁𝙍𝙀𝙀
║◦${prefix}writeart 𝙁𝙍𝙀𝙀
║◦${prefix}summertext 𝙁𝙍𝙀𝙀
║◦${prefix}wolfmetaltext 𝙁𝙍𝙀𝙀
║◦${prefix}nature3dtext 𝙁𝙍𝙀𝙀
║◦${prefix}rosestext 𝙁𝙍𝙀𝙀
║◦${prefix}naturetypography 𝙁𝙍𝙀𝙀
║◦${prefix}quotesunder 𝙁𝙍𝙀𝙀
║◦${prefix}shinetext 𝙁𝙍𝙀𝙀
╰⟢
`}

global.ephoto360menu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Ephoto360 Maker* ❱
║◦${prefix}glitchtext 𝙁𝙍𝙀𝙀
║◦${prefix}writetext 𝙁𝙍𝙀𝙀
║◦${prefix}advancedglow 𝙁𝙍𝙀𝙀
║◦${prefix}typographytext 𝙁𝙍𝙀𝙀
║◦${prefix}pixelglitch 𝙁𝙍𝙀𝙀
║◦${prefix}neonglitch 𝙁𝙍𝙀𝙀
║◦${prefix}flagtext 𝙁𝙍𝙀𝙀
║◦${prefix}flag3dtext 𝙁𝙍𝙀𝙀
║◦${prefix}deletingtext 𝙁𝙍𝙀𝙀
║◦${prefix}blackpinkstyle 𝙁𝙍𝙀𝙀
║◦${prefix}glowingtext 𝙁𝙍𝙀𝙀
║◦${prefix}underwatertext 𝙁𝙍𝙀𝙀
║◦${prefix}logomaker 𝙁𝙍𝙀𝙀
║◦${prefix}cartoonstyle 𝙁𝙍𝙀𝙀
║◦${prefix}papercutstyle 𝙁𝙍𝙀𝙀
║◦${prefix}watercolortext 𝙁𝙍𝙀𝙀
║◦${prefix}effectclouds 𝙁𝙍𝙀𝙀
║◦${prefix}blackpinklogo 𝙁𝙍𝙀𝙀
║◦${prefix}gradienttext 𝙁𝙍𝙀𝙀
║◦${prefix}summerbeach 𝙁𝙍𝙀𝙀
║◦${prefix}luxurygold 𝙁𝙍𝙀𝙀
║◦${prefix}multicoloredneon 𝙁𝙍𝙀𝙀
║◦${prefix}sandsummer 𝙁𝙍𝙀𝙀
║◦${prefix}galaxywallpaper 𝙁𝙍𝙀𝙀
║◦${prefix}1917style 𝙁𝙍𝙀𝙀
║◦${prefix}makingneon 𝙁𝙍𝙀𝙀
║◦${prefix}royaltext 𝙁𝙍𝙀𝙀
║◦${prefix}freecreate 𝙁𝙍𝙀𝙀
║◦${prefix}galaxystyle 𝙁𝙍𝙀𝙀
║◦${prefix}lighteffects 𝙁𝙍𝙀𝙀
╰⟢
`}

global.nsfwmenu = (prefix) => {
return `𝙊𝙒𝙉𝙀𝙍 = For Owner
𝙂𝙍𝙊𝙐𝙋 = For Group
𝙁𝙍𝙀𝙀 = For Free User
𝙋𝙍𝙀𝙈𝙄𝙐𝙈 = For Premium User

╭──• ❰ *Anime NSFW* ❱
║◦${prefix}hentai 𝙁𝙍𝙀𝙀
║◦${prefix}gifhentai 𝙁𝙍𝙀𝙀
║◦${prefix}gifblowjob 𝙁𝙍𝙀𝙀
║◦${prefix}hentaivid 𝙁𝙍𝙀𝙀
║◦${prefix}hneko 𝙁𝙍𝙀𝙀
║◦${prefix}nwaifu 𝙁𝙍𝙀𝙀
║◦${prefix}animespank 𝙁𝙍𝙀𝙀
║◦${prefix}trap 𝙁𝙍𝙀𝙀
║◦${prefix}gasm 𝙁𝙍𝙀𝙀
║◦${prefix}ahegao 𝙁𝙍𝙀𝙀
║◦${prefix}ass 𝙁𝙍𝙀𝙀
║◦${prefix}bdsm 𝙁𝙍𝙀𝙀
║◦${prefix}blowjob 𝙁𝙍𝙀𝙀
║◦${prefix}cuckold 𝙁𝙍𝙀𝙀
║◦${prefix}cum 𝙁𝙍𝙀𝙀
║◦${prefix}milf 𝙁𝙍𝙀𝙀
║◦${prefix}eba 𝙁𝙍𝙀𝙀
║◦${prefix}ero 𝙁𝙍𝙀𝙀
║◦${prefix}femdom 𝙁𝙍𝙀𝙀
║◦${prefix}foot 𝙁𝙍𝙀𝙀
║◦${prefix}gangbang 𝙁𝙍𝙀𝙀
║◦${prefix}glasses 𝙁𝙍𝙀𝙀
║◦${prefix}jahy 𝙁𝙍𝙀𝙀
║◦${prefix}masturbation 𝙁𝙍𝙀𝙀
║◦${prefix}manga 𝙁𝙍𝙀𝙀
║◦${prefix}neko-hentai 𝙁𝙍𝙀𝙀
║◦${prefix}neko-hentai2 𝙁𝙍𝙀𝙀
║◦${prefix}nsfwloli 𝙁𝙍𝙀𝙀
║◦${prefix}orgy 𝙁𝙍𝙀𝙀
║◦${prefix}panties 𝙁𝙍𝙀𝙀 
║◦${prefix}pussy 𝙁𝙍𝙀𝙀
║◦${prefix}tentacles 𝙁𝙍𝙀𝙀
║◦${prefix}thighs 𝙁𝙍𝙀𝙀
║◦${prefix}yuri 𝙁𝙍𝙀𝙀
║◦${prefix}zettai 𝙁𝙍𝙀𝙀
╰⟢
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})