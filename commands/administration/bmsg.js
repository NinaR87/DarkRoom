const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")

module.exports = {
  name: "bmsg",
  category: "Administração",
  cooldown: 5,
  usage: "bmsg",
  description: "Envia uma mensagem informando o denunciante que a punição foi aplicada",

  run: async (client, message, args, text, prefix) => {
    let conteudo = message.content.split(' ');
    let user = message.mentions.users.first();
    let arroba_or_id = conteudo[2];

    console.log(arroba_or_id)

    if(user === undefined) {
      var user_id = arroba_or_id.substring(3, 21);
    } else {
      var user_id = user.id
    }

    let msg = "O membro que desrespeitou as regras foi banido do server"

  
    const embed = new MessageEmbed()
    embed.setTitle(`Sua denuncia foi aceita por ${message.author.tag}`)
         .setDescription(msg)
         //.setImage(user.displayAvatarURL())
         .setColor(config.color)
         .setTimestamp()
         //.setFooter(message.author.username, message.author.displayAvatarURL())

    client.users.cache.get(user_id).send({embed})
  }
}