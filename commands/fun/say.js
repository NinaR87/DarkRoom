module.exports = {
    name: "say",
    category: "fun",
    aliases: ["say", "sayit"],
    cooldown: 2,
    usage: "say <Text>",
    description: "Resends the message",

    run: async (client, message, args, user, text, prefix) => {
        client.channels.cache.get('763848079921119235').send(text);
    }
}