const Discord = require("discord.js")
const fs = require("fs")
const config = require("./config.json")
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ]
});

client.config = require("./config.json")
const prefix = "!" // Bot Prefix



client.on('ready', () => {
  console.log(`Bot ready on ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
      console.log("New member !")

      const welcome = new Discord.MessageButton()
        .setCustomId("welcome")
        .setStyle("SECONDARY")
        .setEmoji("👋")

      const Row1 = new Discord.MessageActionRow()
        .addComponents([welcome])

      member.guild.channels.cache.get('CHANNEL_ID').send({
        embeds: [new Discord.MessageEmbed()
          .setTitle(`STRING`)
          .setDescription(`STRING`)
          .setColor("HEX_COLOR")
          .setThumbnail("IMAGE_LINK")
          .setTimestamp()
        ],
        components: [Row1]
      });

      client.on('interactionCreate', interaction => {
        if (!interaction.isButton()) return;
        interaction.reply({
          content: `STRING`,
          ephemeral: true //Pass to false to send message in channel
        })
      });
      })

    client.login(config.BOT_TOKEN);
