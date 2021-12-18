const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Gives you the bots invite link!')
		,
	async execute(interaction) {
		interaction.reply(`Use the link! https://discord.com/api/oauth2/authorize?client_id=874979172768940062&permissions=8&scope=bot%20applications.commands`);
},
};