const discord = require('discord.js')
const client = new discord.Client

client.on('ready', () => {
    console.log(`Bot active!`)
})

client.on('message', message => {
    if(message.content === '-ip') {
        const embed = new discord.MessageEmbed()
        .setTitle("IdlerEvent.minehut.gg")
        .setImage("https://th.bing.com/th/id/OIP.1gP3DFd4bwBVH_ug8M7LMwHaFj?w=247&h=185&c=7&o=5&pid=1.7")
        .setColor("RANDOM")
        message.channel.send(embed)
    }
})

client.login(process.env.token)