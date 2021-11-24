const { SlashCommandBuilder } = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Invite Link for db8bot'),
    async execute(interaction) {
        require('../telemetry').telemetry(__filename, interaction)
        const embed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .setTimestamp()
            .setFooter(`Invite Link for ${interaction.client.config.NAME}`)
            .addField('Invite link:', `[Here](${interaction.client.config.INVLINK}) | Thanks for inviting ${interaction.client.config.NAME}!`)
        interaction.reply({ embeds: [embed] })
    }
}
