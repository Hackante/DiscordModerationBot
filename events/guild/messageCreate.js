const { Collection } = require("discord.js");

const cooldowns = new Map();

module.exports = (client, message) => {
    let prefix = process.env.PREFIX;

    // Don't listen to bot messages and messages that don't start with the prefix
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    let commandName = args.shift().toLowerCase();

    let command = client.commands.get(commandName) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Collection());
    }

    let currentTime = Date.now();
    let timestamps = cooldowns.get(command.name);
    let cooldownAmount = (command.cooldown) * 1000 || 0;

    if(timestamps.has(message.author.id)) {
        let expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if(currentTime < expirationTime) {
            let timeLeft = (expirationTime - currentTime) / 1000;
            return message.channel.reply({content:`This command is currently at cooldown. You can use it again in ${timeLeft.toFixed(1)} seconds. Or at <t:${timeLeft * 1000}:T>!`})
        };
    };

    timestamps.set(message.author.id, currentTime);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    if(command){
        command.run(client, message, args);
    };
}