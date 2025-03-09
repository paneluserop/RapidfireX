const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'embed example',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('This is Title')
    .setDescription('Some description here')
    .setThumbnail('https://cdn.discordapp.com/attachments/1300829409292587078/1348213955977416775/IMG_20250309_140846_990.jpg?ex=67cea597&is=67cd5417&hm=ffe0e5f05059d253e9404d54693f604af9282de49b3b29c12283d163c670de32&')
    .addFields(
      { name: 'Field Name ', value: 'Some value here' },
       { name: 'RAPIDFIRE', value: 'ANTIBAN PANELS' },
    )
    .setImage('https://cdn.discordapp.com/attachments/1300829409292587078/1348213955977416775/IMG_20250309_140846_990.jpg?ex=67cea597&is=67cd5417&hm=ffe0e5f05059d253e9404d54693f604af9282de49b3b29c12283d163c670de32&')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here' });

    message.reply({ embeds: [embed] });
  },
};
