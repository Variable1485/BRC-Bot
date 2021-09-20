const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot')
		.setDescription('Shows info about the bot')
		,
	async execute(interaction) {
		interaction.reply(`https://embedl.ink/e/y7nqxsvq`);
},
};