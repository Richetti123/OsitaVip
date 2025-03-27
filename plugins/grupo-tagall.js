let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `Instagram: @osita_vip_ ${pesan}`
let teks = `*𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎𝐒 𝐌𝐀𝐍𝐂𝐎𝐒 𝐇𝐈𝐉𝐎𝐒 𝐃𝐄 𝐒𝐔 𝐌𝐀𝐃𝐑𝐄*\n${oi}\n\n*MENCIONES:*\n`
for (let mem of participants) {
teks += `🧸 @${mem.id.split('@')[0]}\n`}
teks += `${wm}`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) } )
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
