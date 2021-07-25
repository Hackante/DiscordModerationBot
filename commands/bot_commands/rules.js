const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "rules",
    description: "Sends the rules",
    run: async ( client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription(
            `\`\`\`markdown\n
# DISCORD\`\`\`
            **1. Follow the [Discord Terms of Service](https://discordapp.com/terms)**
            >   be at least 13 years old
            >   don't distribute any kind of cheat or hack programms or utility
            **2. Follow the [Discord Communuty Guidlines](https://discordapp.com/guidlines)**
            >   No doxxing, harrassment or encouraging self harassment
            >   No spamming, phishing or scamming
            >   No child or revenge porn, gore/animal cruelty || NSFW content ONLY in specified channels
            >   No sharing pirated content
            
            \`\`\`markdown
# GENERAL ETIQUETTE\`\`\`
            1. No Trolling
            2. No Discussing Offensive/Controversial Material 
            3. No Elitism 
            4. Respect the Server Staff
            5. No Incitement 
            6. No Punishment Evasion
            7. No Inappropriate User Profiles 
            8. Ask the Staff before Advertising
            9. Only speak english or german
            
            \`\`\`markdown
# BAN APPEAL\`\`\`
            **[Submit a request for unbanning](https://banappeal.com)**`)
            .setColor('BLURPLE')
        message.channel.send({embeds:[embed]})
    }
}