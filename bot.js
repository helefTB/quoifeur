const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // Le préfixe que vous avez choisi pour les commandes

client.on('message', message => {
  if (message.author.bot) return; // Le bot ne répondra pas à ses propres messages
  if (!message.content.startsWith(prefix)) { // Vérifie si le message commence par le préfixe des commandes
    const words = message.content.split(' ');
    const lastWord = words[words.length - 1].toLowerCase();
    if (lastWord === 'quoi') { // Vérifie si le dernier mot est "quoi"
      message.channel.send('feur');
    }
  }
});

client.login('MTA4NjcyMzkzNjM0MDk1MTA5MA.GqPWi_.1UqiMZXVTGShGPe20NoI7L_1uyo8YVKEYJCMdU'); // Remplacez "votre_token" par le token de votre bot Discord
