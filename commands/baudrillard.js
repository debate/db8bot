const { SlashCommandBuilder } = require('@discordjs/builders')
const quotes = require('../quoteFiles/amashQuotes.json')
const translate = require('@vitalets/google-translate-api')
const Discord = require('discord.js')
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('baudrillard')
        .setDescription('Quote by Jean Baudrillard'),
    async execute(interaction) {
        interaction.client.logger.log('info', `baudrillard command used by ${interaction.user.username} Time: ${Date()} Guild: ${interaction.guild.name}`)
        const num = getRandomIntInclusive(1, quotes.length)
        translate(quotes[num].quote, { to: 'en' }).then(res => {
            const quoteSend = new Discord.MessageEmbed()
                .setColor('#ffff00')
                .setTitle(`Quote by ${quotes[num].author}`)
                .setDescription(`"${res.text}"\n-${quotes[num].author}`)
                .setFooter('Disclaimer: This command is purely for satirical purposes. It does not represent the creator, the owner, or the user\'s views.')
            interaction.reply({ embeds: [quoteSend] })
        }).catch(err => {
            console.error(err)
        })
    }
}
