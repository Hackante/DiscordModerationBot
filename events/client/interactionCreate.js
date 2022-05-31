const { Interaction } = require("discord.js")

module.exports = async (client, interaction) => {
    if(interaction.isCommand() === true) {
        let slash = await client.slashCommands.get(interaction.commandName);
        try{
            slash.run(client, interaction);
        }catch{
            interaction.reply(slash.reply)
        }
        
    };
    if(interaction.isButton() === true) {

    };
    if(interaction.isMessageComponent() === true) {

    };
    if(interaction.isSelectMenu() === true) {

    };

}