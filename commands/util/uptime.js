module.exports = {
    name: "uptime",
    category: "info",
    aliases: [""],
    cooldown: 10,
    usage: "uptime",
    description: "Returns the duration on how long the Bot is online",

    run: async (client, message, args, user, text, prefix) => {
        function duration(ms) { 
            const sec = Math.floor(ms / 1000 % 60).toString();
            const min = Math.floor(ms / (60*1000) % 60).toString();
            const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
            const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
            return `\`${days} Days\`, \`${hrs} Hours\`, \`${min} Minutes\`, \`${sec} Seconds\``
        }
        message.reply(`:white_check_mark: **${client.user.username}** is since ${duration(client.uptime)} online`);
    }
}