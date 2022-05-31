const fs = require('fs');

module.exports = async (client) => {
    const command_files = fs.readdirSync(`./commands/slash_commands/`).filter(file => file.endsWith('.js'));

    for (const cmd in client.application.commands.cache) {
        if (Object.hasOwnProperty.call(client.application.commands.cache, cmd)) {
            const element = client.application.commands.cache[cmd];
            element.delete(cmd).then(console.log)
        }
    }
/*
    for(const file of command_files){
        const slashCommand = require(`../commands/slash_commands/${file}`);
        if(slashCommand.command){
            await client.slashCommands.set(slashCommand.command.name, slashCommand);
            if(slashCommand.id && await client.application.commands.cache.get(slashCommand.id)){
                if(slashCommand.permissions){
                    await client.application.commands.edit(slashCommand.id, slashCommand.command);
                    await client.application.permissions.set({ command: slashCommand.id, permissions: slashCommand.premissions})
                }else{
                    await client.application.commands.edit(slashCommand.id, slashCommand.command);
                };
            }else{
                let new_cmd = await client.application.commands.create(slashCommand.command);
                console.log(new_cmd.id, new_cmd.name)
            }
        } else {
            continue;
        }
    }*/
}