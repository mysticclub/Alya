const handler = async (m, { conn, participants, groupMetadata }) => {
  const { welcome, autolevelup, antiBot, antiBot2, autoAceptar, autoRechazar, autoresponder, modoadmin, reaction, nsfw, detect, antiLink, antiLink2, antitoxic, antiTraba, antifake } = global.db.data.chats[m.chat];
  
  const text = `✨ *CONFIGURACIÓN DEL GRUPO* 
  
◈ Welcome: \`${welcome ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva el mensaje de bienvenida en el grupo.

◈ Autolevelup: \`${autolevelup ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o descativa la subida automática de nivel en el Bot.

◈ Antibot: \`${antiBot ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o descativa la expulsión de un grupo. otros bots no autorizados.

◈ Antisubbots: \`${antiBot2 ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o descativa la expulsión de un grupo a subbots no autorizados.

◈ Autoaceptar: \`${autoAceptar ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva el autoaceptar que acepta automáticamente la solicitud a los números en el grupo.

◈ Autorechazar: \`${autoRechazar ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva el autorechazar que rechaza automáticamente la solicitud a los números en el grupo.

◈ Autoresponder: \`${autoresponder ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa las respuestas automáticas del bot usando la IA de Gemini.

◈ Modoadmin: \`${modoadmin ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* El bot solo responderá a los administradores del grupo.

◈ Reaction: \`${reaction ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva las reacciones en el Bot.

◈ Nsfw: \`${nsfw ? 'Activado' : 'Desactivado'}\` 
> ➨ *Descripción:* Activa o desactiva los comandos +18 en el grupo y no los envia.

◈ Detect: \`${detect ? 'Activado' : 'Desactivado'}\` 
> ➨ *Descripción:* Activa o desactiva las notificaciones de cambios en el grupo.

◈ Antilink: \`${antiLink ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva el bloqueo de enlaces de WhatsApp. 

◈ Antilink2: \`${antiLink2 ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva el bloqueo de enlaces de https. 

◈ Antitoxic: \`${antitoxic ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva el modo anti tóxicos, eliminará mensajes ofensivos.

◈ Antitraba: \`${antiTraba ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva el antitraba eliminara cualquier mensaje con demasiados caracteres y evitará trabas.

◈ antifake: \`${antifake ? 'Activado' : 'Desactivado'}\`
> ➨ *Descripción:* Activa o desactiva el bloqueo de enlaces de WhatsApp.  

> \`✦ Nota: Puedes activar una de estas opciones de esta manera Ejemplo: #antilink\``.trim();

  await conn.sendFile(m.chat, icons, 'yuki.jpg', text, m, true, {
    contextInfo: {
      forwardingScore: 200,
      isForwarded: false,
      externalAdReply: {
        showAdAttribution: true,
        renderLargerThumbnail: false,
        title: packname,
        body: dev,
        mediaType: 1,
        sourceUrl: redes,
        thumbnailUrl: icono
      }
    }
  }, { mentions: [m.sender] });

  m.react(emoji);
};

handler.help = ['configuraciongrupo'];
handler.tags = ['grupo'];
handler.command = ['on', 'off', 'config'];
handler.register = true;
handler.group = true;

export default handler;
