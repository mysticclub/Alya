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
Crea un *Sub-Bot* con tu número utilizando *#qr* o *#code*

• :･ﾟ⊹˚• \`『 Menú Download 』\` •˚⊹:･ﾟ•

❍ Comandos de descargas para varios archivos.
ᰔᩚ *#tiktok • #tt*
> ✦ Descarga videos de TikTok.
ᰔᩚ *#mediafire • #mf*
> ✦ Descargar un archivo de MediaFire.
ᰔᩚ *#pinvid • #pinvideo* + [enlacé]
> ✦ Descargar vídeos de Pinterest. 
ᰔᩚ *#mega • #mg* + [enlacé]
> ✦ Descargar un archivo de MEGA.
ᰔᩚ *#play • #play2*
> ✦ Descarga música/video de YouTube.
ᰔᩚ *#ytmp3 • #ytmp4*
> ✦ Descarga música/video de YouTube mediante url.
ᰔᩚ *#fb • #facebook*
> ✦ Descarga videos de Facebook.
ᰔᩚ *#twitter • #x* + [Link]
> ✦ Descargar un video de Twitter/X
ᰔᩚ *#ig • #instagram*
> ✦ Descarga contenido de Instagram.
ᰔᩚ *#tts • #tiktoks* + [busqueda]
> ✦ Buscar videos de tiktok 
ᰔᩚ *#terabox • #tb* + [enlace]
> ✦ Descargar archivos por Terabox.
ᰔᩚ *#gdrive • #drive* + [enlace]
> ✦ Descargar archivos por Google Drive.
ᰔᩚ *#ttimg • #ttmp3* + <url>
> ✦ Descarga fotos/audios de tiktok. 
ᰔᩚ *#gitclone* + <url> 
> ✦ Descarga un repositorio de github.
ᰔᩚ *#xvideosdl*
> ✦ Descarga videos porno de (Xvideos). 
ᰔᩚ *#xnxxdl*
> ✦ Descarga videos porno de (xnxx).
ᰔᩚ *#apk • #modapk*
> ✦ Descarga un apk de Aptoide.
ᰔᩚ *#tiktokrandom • #ttrandom*
> ✦ Descarga un video aleatorio de tiktok.
ᰔᩚ *#npmdl • #npmdownloader*
> ✦ Descarga paquetes de NPMJs.
ᰔᩚ *#animelinks • #animedl*
> ✦ Descarga Links disponibles de descargas.'


  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menudl', 'menudownload', 'menudescargas'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}