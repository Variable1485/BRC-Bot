const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info.')
		,
	async execute(interaction) {
		interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nCreated at: ${interaction.guild.createdAt}\nAFK channel: ${interaction.guild.afkChannel}\nRules channel: ${interaction.guild.rulesChannel}`);
},
};