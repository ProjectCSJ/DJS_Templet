const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	defaultPermission: true,
	data: new SlashCommandBuilder()
		.setName('YourCommands')
		.setDescription('YourCommandsDescription'),
	async execute(interaction) {
		await interaction.reply();
		console.log('YourCodeHere');
	},
};
