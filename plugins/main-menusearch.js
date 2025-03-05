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
• :･ﾟ⊹˚• \`『 Menu-Search 』\` •˚⊹:･ﾟ•

❍ Comandos para realizar búsquedas en distintas plataformas.
ᰔᩚ *#tiktoksearch • #tiktoks*
> ✦ Buscador de videos de tiktok.
ᰔᩚ *#tweetposts*
> ✦ Buscador de posts de Twitter/X.
ᰔᩚ *#ytsearch • #yts*
> ✦ Realiza búsquedas de Youtube.
ᰔᩚ *#githubsearch*
> ✦ Buscador de usuarios de GitHub.
ᰔᩚ *#cuevana • #cuevanasearch*
> ✦ Buscador de películas/series por Cuevana.
ᰔᩚ *#google*
> ✦ Realiza búsquedas por Google.
ᰔᩚ *#pin • #pinterest*
> ✦ Buscador de imagenes de Pinterest.
ᰔᩚ *#imagen • #image*
> ✦ buscador de imagenes de Google.
ᰔᩚ *#animesearch • #animess*
> ✦ Buscador de animes de tioanime.
ᰔᩚ *#animei • #animeinfo*
> ✦ Buscador de capítulos de #animesearch.
ᰔᩚ *#infoanime*
> ✦ Buscador de información de anime/manga.
ᰔᩚ *#hentaisearch • #searchhentai*
> ✦ Buscador de capítulos hentai.
ᰔᩚ #xnxxsearch • #xnxxs*
> ✦ Buscador de vídeos de Xnxx.
ᰔᩚ *#xvsearch • #xvideossearch*
> ✦ Buscador de vídeos de Xvideos.
ᰔᩚ *#pornhubsearch • #phsearch*
> ✦ Buscador de videos de Pornhub.
ᰔᩚ *#npmjs*
> ✦ Buscandor de npmjs.
