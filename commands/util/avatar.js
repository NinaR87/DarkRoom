const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")

module.exports = {
  name: "avatar",
  category: "Utilidades",
  cooldown: 5,
  usage: "avatar",
  description: "Mostra o avatar de um usuário",

  run: async (client, message, args, text, prefix) => {

    let user = message.mentions.users.first() || message.author
    
    const embed = new MessageEmbed()
    
    embed.setTitle(`Avatar de ${user.tag}`)
         .setDescription(`Clique **[aqui](${user.displayAvatarURL()})** para baixar a imagem!`)
         .setImage(user.displayAvatarURL())
         .setColor(config.color)
         .setTimestamp()
         .setFooter(message.author.username, message.author.displayAvatarURL())

    message.channel.send({embed})
    //message.channel.send(user.displayAvatarURL()); 
  }
}