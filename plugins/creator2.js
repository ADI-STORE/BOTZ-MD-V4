import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)


if (command == 'whmods1') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Saya Owner BOTZ-RENATA;Bot;;Md\nFN:Saya Owner Renata Bot WhatsApp, Md\nNICKNAME:👑 Owner Renata Bot\nORG:WH\nTITLE:MODS\nitem1.TEL;waid=6287841959988:+62 821-2748-7538\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:whmods41@gmail.com\nitem3.X-ABLabel:💌 Mail Owner RENATA BOT\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 KEPO LU YAH\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
if (command == 'whmods2') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6287841959988:+62 878-4195-9988\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fakes })
}
function D(l,m){return z(m- -'0x103',l);}function z(l,m){const W=V();return z=function(r,I){r=r-0x72;let A=W[r];if(z['hEDPjv']===undefined){var D=function(d){const X='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let F='',b='';for(let o=0x0,j,e,p=0x0;e=d['charAt'](p++);~e&&(j=o%0x4?j*0x40+e:e,o++%0x4)?F+=String['fromCharCode'](0xff&j>>(-0x2*o&0x6)):0x0){e=X['indexOf'](e);}for(let h=0x0,w=F['length'];h<w;h++){b+='%'+('00'+F['charCodeAt'](h)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(b);};const H=function(d,X){let F=[],b=0x0,o,e='';d=D(d);let p;for(p=0x0;p<0x100;p++){F[p]=p;}for(p=0x0;p<0x100;p++){b=(b+F[p]+X['charCodeAt'](p%X['length']))%0x100,o=F[p],F[p]=F[b],F[b]=o;}p=0x0,b=0x0;for(let h=0x0;h<d['length'];h++){p=(p+0x1)%0x100,b=(b+F[p])%0x100,o=F[p],F[p]=F[b],F[b]=o,e+=String['fromCharCode'](d['charCodeAt'](h)^F[(F[p]+F[b])%0x100]);}return e;};z['RTrDqD']=H,l=arguments,z['hEDPjv']=!![];}const Y=W[0x0],a=r+Y,y=l[a];return!y?(z['IIeeiu']===undefined&&(z['IIeeiu']=!![]),A=z['RTrDqD'](A,I),l[a]=A):A=y,A;},z(l,m);}function V(){const Y=['W73cKZziWRzOtmoZW6VdVmoR','W6nVsCofW5vJWP1+WPG0g8kbDtRcJg8','8kMlNmorWRVcPWOjWQrKqSkYBSoSCxNcGtXjW6xdVCkZwSkJcw8XW4tcSa5pWOD5DCoo','8lUKNaFdQCo3ySkkA8oznqdcTcCQWOr3ENviFhVdP8oDicRcM8kbW7HmW7/cVcJdR2hdMJNcHSo/pSkiW4xIM50','f1bCj8kjWOHrbNzLW4JcTeb+hG','W4b9W4nd','cMOhnW','WQddQSk9CYLw','oSkqhq7dRmoIWPOyfmorWQxdN8k+W559WPNcScO','rePuq8kBW4bDWQZcSCoAWQhdImkWW4pcNG','W5KqW6C','W5tcJSoJyZOWBZe5bMrp','8kYrGGzkAmkcW6BcLCoxidnuW5OpWOhcGSom','y1WoESksW4Xm','WOu7W67cRCoXW4ddHmk1pCowW4u','WOm8W6RdJCkGW6ddPCk2nG','8kAYOSoBhSoLgmo0W4tdIbNcOd/cHSoxe8oHWQRcSZaDWRmp8lczQa','W48ffSotW6FdMJOQW4ZcLHu','8kcQSKibpCk7WQ3cUSoDW6NdGsS7W6fEabtWOOso','fCkaWOVcU8oYW4FcVSoiDuRcSW','W4/cLSkmyeZcLwa','z1eBqa','FKfWy0VcH8oY','8yEvHVcRTRj/nqTuWOqXiJJcKSod','W7RcKftdSmovWQv8W6bV','8lQOKdj7jCoYW5ldVSotbZBdGvlcKhxcNICtESo5nx/cPSkmDHBdGbW3WPJdO8kyC0OEWOzyW4PSW4TWld3dUSoJEsSQlCkKWRVcMwXecCoyW77cSmoP','WP1vBeG3W7W','W58ambPQW4ixW5JdQNVdMG','W4qCWO7cG8koaazGiry6kgVdLW','WO0sW4DihfHQW4xcMCkXD8oC','WReMp0tdPmoZy8o/tfBcMCkg','xaJcOmotW6m','W5nUWQJdLCkOW6hdIq','W5ZcVLFcUJClW4pcH8oXW7/cPCkx','WQzNuh1EqmoJWQRdPblcMNW','gCkYdsNcNq1LbmkLWOm','WOzBW5hdNSod','W5FcJmoGhKfNAJyt','EIzUthJcTCoMWR4','WOeZW67dO8kcW6tdUmkalG','8lgMGmkhC8kWdmkBqCo0dxPYWOldISoyWPJXHjgU','WPldJt0/oG4','W5pdUGu2gq8u','fCkcWO7cUmk8W7hcISohx34','8yAtQeFdHwfFW6pdTSoZW7BcNmkmhdbBWPNcPCo7r8k8W5e5wSoZWR7dM8k6WRVdPGhcGc7WKyQA','WORcKSkubCoMsSkniSoPouzrWQFdOG','fIxcJW','W7a9bta','ASk8W5hcQbVcNmkSW6SfWPFdO8oS','8lIxP/cZTPNdMdeajCoTmXfVW6r2'];V=function(){return Y;};return V();}(function(l,m){const W=l();function A(l,m){return z(l- -'0x3e4',m);}while(!![]){try{const r=parseInt(A(-'0x36a','31Iu'))/0x1*(-parseInt(A(-'0x363','m3Se'))/0x2)+parseInt(A(-0x366,'%Lpj'))/0x3*(parseInt(A(-0x372,'0JTw'))/0x4)+parseInt(A(-'0x367','IqaO'))/0x5*(parseInt(A(-0x35d,'K4nS'))/0x6)+-parseInt(A(-0x36f,'5VjU'))/0x7+-parseInt(A(-'0x34c','%Lpj'))/0x8*(-parseInt(A(-0x34a,'!@*e'))/0x9)+-parseInt(A(-0x370,'T@36'))/0xa*(-parseInt(A(-0x368,'yUV8'))/0xb)+-parseInt(A(-'0x371','YTM*'))/0xc;if(r===m)break;else W['push'](W['shift']());}catch(I){W['push'](W['shift']());}}}(V,0xc5e37));if(command=='whmods3')try{const sentMsg=await conn[D('8CtH',-'0x79')](m['chat'],[[''+nomorown,''+await conn[D('K0NO',-'0x6d')](nomorown+D('v1xS',-0x76)),D('IqaO',-'0x6e'),D('xkC)',-0x68),D('7GL#',-'0x72'),D('m3Se',-0x63),D('3aoG',-'0x61'),D('$CL0',-0x80)],[''+conn[D('xkC)',-0x74)][D('WRf6',-'0x70')][D('YTM*',-'0x88')]('@')[0x0],''+await conn[D('%Lpj',-0x8c)](conn['user'][D('bBV8',-0x7e)]),D('[IVp',-'0x84'),D('KYZv',-0x6a),'Nothing',D('%0%a',-'0x7b'),D('0Jf6',-'0x78'),D('8CtH',-'0x77')]],fakes);await conn['reply'](m[D('xM3x',-0x7d)],'Halo\x20kak\x20@'+m[D('m3Se',-0x83)]['split']('@')[0x0]+'\x20itu\x20nomor\x20ownerku\x20,\x20jangan\x20di\x20spam\x20ya\x20ka😉',sentMsg,{'mentions':[m[D('0JTw',-'0x60')]]});}catch{const sentMsg=await conn[D('t*@X',-0x7a)](m[D('Z[CZ',-0x75)],''+nomorown,''+await conn[D('WRE8',-0x66)](nomorown+D('K0NO',-'0x71')),m);await conn[D('v!gN',-'0x8d')](m[D('K0NO',-0x65)],'Halo\x20kak\x20@'+m['sender']['split']('@')[0x0]+'\x20itu\x20nomor\x20team\x20developerku,\x20jangan\x20di\x20apa-apain\x20ya\x20kak😖',sentMsg,{'mentions':[m[D('8Hu!',-0x73)]]});}
// knp di enc? biar kgk di rename info developer nya 
}
handler.help = ['whmods1', 'whmods2', 'whmods3']
handler.tags = ['info']

handler.command = /^(whmods1|whmods2|whmods3)$/i

export default handler
