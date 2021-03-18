const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")

module.exports = {
  name: "vmsg",
  category: "Administração",
  cooldown: 5,
  usage: "vmsg",
  description: "Envia uma mensagem de verificação para o usuário",

  run: async (client, message, args, text, prefix) => {
    var conteudo = message.content;

    let user = message.mentions.users.first();
    
    // remove o comando base
    conteudo = conteudo.substring(3);
    // remove os espacos
    conteudo = conteudo.trim();
    // remove o metodo
    conteudo = conteudo.substring(5);
    // remove os espacos
    conteudo = conteudo.trim();

    if(user === undefined) {
      var user_id = conteudo.substring(0, 18);
      conteudo = conteudo.substring(19);
    } else {
      var user_id = user.id
      conteudo = conteudo.substring(23)
      console.log(conteudo)
    }

    if(conteudo == "" || conteudo === undefined){
      conteudo = "Gostou do nosso exame? :blush: \n\nEsperamos que sim! :smiling_imp:"
    }
  
    const embed = new MessageEmbed()
    embed.setTitle(`Você foi verificado por ${message.author.tag}`)
         .setDescription(conteudo)
         //.setImage(user.displayAvatarURL())
         .setColor(config.color)
         .setTimestamp()
         //.setFooter(message.author.username, message.author.displayAvatarURL())

    client.users.cache.get(user_id).send({embed})
  }
}