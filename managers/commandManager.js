const fs = require('fs');

module.exports = (client) => {
    const command_files = fs.readdirSync(`./commands/bot_commands/`).filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../commands/bot_commands/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}