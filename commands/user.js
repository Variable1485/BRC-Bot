const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with a users info.')
		.addUserOption(option => option.setName('target').setDescription('User to describe')
			.setRequired(true)),
	async execute(interaction) {
	const user = interaction.options.getUser('target');
	if (user) return interaction.reply(`Tag: ${user.tag}\nID: ${user.id}\nCreated at: ${user.createdAt}`);
	},
};
