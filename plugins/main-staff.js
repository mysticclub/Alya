let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ Seishiro Nagi 
> 🜸 Rol » *Creador*
> ✧ wa.me/51920227615

❒ *Colaboradores:*

ᰔᩚ Angel
> 🜸 Rol » *Developer*
> ✧ wa.me/50368471855

ᰔᩚ Niño Piña
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/WillZek

✧ Niki's
> 🜸 Rol » *Mod*
> ✧ Wa.me/50240447765

ᰔᩚ Alter knight 
> 🜸 Rol » *mod*
> ✧ Wa.me/50765554540

ᰔᩚ 
> 🜸 Rol » 
> ✧ 
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak)
}

handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler