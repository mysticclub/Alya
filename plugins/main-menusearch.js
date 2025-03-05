import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[userId];
    let name = conn.getName(userId);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;

    let txt = `
Hola! Soy  *${botname}*
Aquí tienes la lista de comandos
╭┈ ↷
│ᰔᩚ Cliente » @${userId.split('@')[0]}
│❀ Modo » Publico
│✦ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sub Bot')}
│ⴵ Activada » ${uptime}
│✰ Usuarios » ${totalreg}
│✧ Comandos » ${totalCommands}
│🜸 Baileys » Multi Device
╰─────────────────