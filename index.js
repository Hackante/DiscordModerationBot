const Discord = require('discord.js');
const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
]});

client.commands = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();

['eventManager', 'commandManager', 'slashCommandManager'].forEach(manager => {
    require(`./managers/${manager}`)(client);
});

client.login(process.env.DISCORD_TOKEN)