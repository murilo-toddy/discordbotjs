module.exports = (client) => {
    client.on('guildMemberAdd', member => {
        let channel = client.channels.cache.get('815226137977552949');
        //channel.send('kkkkk o cara tem 20 anos');
    })
}