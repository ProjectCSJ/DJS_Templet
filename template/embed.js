const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	defaultPermission: true,
	data: new SlashCommandBuilder()
		.setName('YourCommands')
		.setDescription('YourCommandsDescription'),
	async execute(interaction) {
		const EmbedName = new MessageEmbed()
			.setColor('ColorName/HexColorCode/RANDOM')
			.setAuthor('G Cat Beta Version', 'https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png', 'https://csj.yeyunstudio.com')
			.setTitle('Pong!')
			.setDescription(`延遲${Math.abs(Date.now() - interaction.createdTimestamp)}ms.`)
			.setFooter('Copyright © Project CSJ', 'https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png');
		await interaction.reply({ embeds: [EmbedName] });
	},
};
