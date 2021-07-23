require('colors');

module.exports = async(client, interaction) => {
    const commandName = interaction.commandName;
    const command = client.slashCommands.get(commandName);
    try{
        if(command.run) {
            command.run(client, interaction)
        }else{
            interaction.reply(command.reply)
        };
    }catch(err){
        console.log(`${err}`.red);
        interaction.reply({content: "This interaction failed! Please try again later or report a bug.", ephemeral: true})
    };
}