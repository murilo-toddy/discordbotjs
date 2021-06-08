const motivacional = [
    'cabeleleira leila',
    'voce é feio',
    'nada é dificil demais pra quem desiste',
    'nao deixe uma frase motivacional melhorar seu dia de merda',
    'nao deixe para amanha o que vc pode deixar para depois de amanha',
    'eu acredito que vc nao tem potencial',
    'relaxa que seu dia ainda vai piorar'
]

module.exports = function(msg, args) {
    const index = Math.floor(Math.random() * motivacional.length);
    msg.channel.send(motivacional[index]);
};
