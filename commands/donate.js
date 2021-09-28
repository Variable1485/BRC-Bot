const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('donate')
		.setDescription('Shows the patreon link!')
		,
	async execute(interaction) {
		interaction.reply(`Here! https://www.patreon.com/BRCHub`);
},
};