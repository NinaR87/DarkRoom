const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
require('dotenv').config();

module.exports = {
  name: "help",
  category: "info",
  aliases: ["h", "commandinfo"],
  cooldown: 5,
  usage: "help [Command]",
  description: "Return all commands, or the specific command",

  run: async (client, message, args, user, text, prefix) => {
    if (args[0]) {
      return getCMD(client, message, args[0]);
    } else {
      return getAll(client, message);
    }
  }
}

function getAll(client, message) {
  const embed = new MessageEmbed()
    .setColor(process.env.COLOR)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle("HELP MENU")
    .setFooter(`TO see command descriptions and inforamtion, type: ${process.env.PREFIX}help [CMD NAME]`, client.user.displayAvatarURL())
  const commands = (category) => {
    return client.commands.filter(cmd => cmd.category === category)
      .map(cmd => `\`${cmd.name}\``).join(", ")
  }

  const info = client.categories.map(cat => stripIndents `**__${cat[0].toUpperCase() + cat.slice(1)}__**\n> ${commands(cat)}`)
    .reduce((string, category) => string + "\n" + category);

  return message.channel.send(embed.setDescription(info))
}

function getCMD(client, message, input) {
  const embed = new MessageEmbed()
  const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()))
  if (!cmd) {
    return message.channel.send(embed.setColor("RED").setDescription(`No Information found for command **${input.toLowerCase()}**`));
  }
  if (cmd.name) embed.addField("**Command name**", `\`${cmd.name}\``)
  if (cmd.description) embed.addField("**Description**", `\`${cmd.description}\``);

  if (cmd.aliases) embed.addField("**Aliases**", `\`${cmd.aliases.map(a => `${a}`).join("\`, \`")}\``)
  if (cmd.cooldown) 
    embed.addField("**Cooldown**", `\`${cmd.cooldown} Seconds\``)
  else 
    embed.addField("**Cooldown**", `\`1 Second\``)
 
  if (cmd.usage) {
    embed.addField("**Usage**", `\`${process.env.PREFIX}${cmd.usage}\``);
    embed.setFooter("Syntax: <> = required, [] = optional");
  }

  return message.channel.send(embed.setColor(process.env.COLOR))
}