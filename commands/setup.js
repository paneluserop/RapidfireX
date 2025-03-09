const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'setup',
  description: 'Set the announcement channel',
  execute(message, args) {
    if (!message.guild) {
      return message.reply('This command can only be used in a server (guild).');
    }

    if (!message.member.permissions.has('MANAGE_GUILD')) {
      return message.reply('You do not have permission to set the announcement channel.');
    }

    const channel = message.mentions.channels.first();

    if (!channel) {
      const embed = new EmbedBuilder()
        .setColor('#0099ff') 
        .setAuthor({
          name: 'Mention Channel',
          iconURL: 'https://cdn.discordapp.com/attachments/1300829409292587078/1348213955977416775/IMG_20250309_140846_990.jpg?ex=67cea597&is=67cd5417&hm=ffe0e5f05059d253e9404d54693f604af9282de49b3b29c12283d163c670de32&',
          url: 'https://discord.gg/8JkTHpsz4k'
        })
        .setDescription(`Please mention a channel for announcements.\n\n**Usage : ** \`<prefix>setup #channel\``)
        .setTimestamp();

      message.reply({ embeds: [embed] });
    } else {
 
      const dataPath = path.join(__dirname, '../data/announcementChannels.json');
      let serverData = {};

      try {
        serverData = require(dataPath);
      } catch (err) {
        console.error('Error reading server data:', err);
      }

 
      serverData[message.guild.id] = channel.id;

     
      fs.writeFileSync(dataPath, JSON.stringify(serverData, null, 2), 'utf-8');

      console.log(`Announcement channel set to: ${channel.name}`);

      const embed = new EmbedBuilder()
        .setColor('#0099ff') 
        .setAuthor({
          name: 'Channel Sucessfully set',
          iconURL: 'https://cdn.discordapp.com/attachments/1300829409292587078/1348213956199583765/IMG_20250309_140839_880.jpg?ex=67cea597&is=67cd5417&hm=3bd3363526baf63326b6138e5b140c66579fe71706adfc8238011b0298891e85&',
          url: 'https://discord.gg/8JkTHpsz4k'
        })
        .setDescription(`Announcement channel has been set to ${channel}`)
        .setTimestamp();

      message.reply({ embeds: [embed] });
    }
  },
};
