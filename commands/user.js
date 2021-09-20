const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with a users info.')
		.addUserOption(option => option.setName('user').setDescription('User to describe')
			.setRequired(false)),
	async execute(interaction) {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}\nCreated at: ${interaction.user.createdAt}`);
	},
};
