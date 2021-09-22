const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whoismlg6531')
		.setDescription('Replies with info about MLG6531'),
	async execute(interaction) {
		await interaction.reply('meh hes a simple dude who likes to get trolled, breaks rules, annoying, wants to keep you busy, etc.');
	},
};