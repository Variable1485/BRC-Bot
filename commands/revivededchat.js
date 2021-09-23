const talkedRecently = new Set();
           
module.exports = {
	data: new SlashCommandBuilder()
		.setName('revivededchat')
		.setDescription('This only works on the main BRC server (Temp)'),
	async execute(interaction) {
		await interaction.reply('<@890528060510715905>');
	},