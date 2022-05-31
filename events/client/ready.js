const slashCommandManager = require('../../managers/slashCommandManager')

require('colors')

module.exports = async(client) => {
    console.log(
    `\n##############################`.rainbow +
    `\n${client.user.tag} logged in!`.red.underline + 
    `\n${client.commands.size} commands loaded,`.green +
    `\n${client.events.size} events loaded`.green +
    `\n\n${client.guilds.cache.reduce((a,b) => a + b.memberCount, 0)} users in`.gray +
    `\n${client.guilds.cache.size} guild(s)`.gray +
    `\n______________________________\n`.rainbow
    )
    
    slashCommandManager(client)
    
    console.info("hi")
    console.warn("warining!")
    console.error("error!", )
    console.table(client.commands)
}