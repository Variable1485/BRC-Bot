const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with a users info.')
		.addUserOption(option => option.setName('target').setDescription('User to describe')
			.setRequired(true)),
	async execute(interaction) {
	const user = interaction.options.getUser('target');
		await interaction.reply(`Your tag: ${user.tag}\nYour id: ${user.id}\nCreated at: ${user.createdAt}`);
	},
};
