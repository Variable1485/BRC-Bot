const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows the help section')
		,
	async execute(interaction) {
		interaction.reply(`/server: Gives server info in the server you are in\n/user: Gives you user information\n/ping: Checks if the bot is online\n/help: This screen!\n/bot: Gives you information about the bot\n/donate: Gives you the patreon link\n/game: Gives you information about BRC\n/invite: Gives you the bot's invite link\n/revivededchat: Currently Doesn't work\n/whoismlg6531: ???`);
},
};