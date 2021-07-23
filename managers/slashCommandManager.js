const fs = require('fs');

module.exports = async (client) => {
    const command_files = fs.readdirSync(`./commands/slash_commands/`).filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const slashCommand = require(`../commands/slash_commands/${file}`);
        if(slashCommand.command){
            client.slashCommands.set(slashCommand.command.name, slashCommand);
            if(slashCommand.id && client.application.commands.cache.get(slashCommand.id)){
                if(slashCommand.permissions){
                    await client.application.commands.edit(slashCommand.id, slashCommand.command);
                    await client.application.permissions.set({ command: slashCommand.id, permissions: slashCommand.premissions})
                }else{
                    await client.application.commands.edit(slashCommand.id, slashCommand.command);
                };
            }else{
                await client.application.commands.create(slashCommand.command)
            }
        } else {
            continue;
        }
    }
}