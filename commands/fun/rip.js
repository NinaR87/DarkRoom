const { MessageAttachment } = require('discord.js')

//Here the command starts
module.exports = {
    name: "rip",
    category: "fun",
    cooldown: 5,
    usage: "rip",
    description: "insere uma imagem rip aleatória",

    run: async (client, message, args, user, text, prefix) => {
      const numero = Math.floor(Math.random() * (6 - 1)) + 1;
      const attachment = new MessageAttachment(`./assets/${numero}_rip.jpg`)  
      message.channel.send(attachment)
    }
}