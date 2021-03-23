const Discord = require('discord.js');

const Configuration = require('./Configuration');
const EventConditions = require('./event-router/Conditions');
const EventRouter = require('./event-router/EventRouter');
const SporadicShowOfL = require('./listeners/message/SporadicShowOfL');

class L {
	getConfig() { return this.config; }

	constructor() {
		try {
			this.config = new Configuration(__dirname + '/../../bot_config.yml');
		} catch(e) {
			console.log(e);
			return;
		}

		// Initialize API bot and wait for it to connect
		this.discord = new Discord.Client();
		this.discord.once('ready', () => {
			console.log('Connected to Discord Gateway');
			console.log(`Join link: ${this.generateJoinLink()}`);
		});

		const MessageRouter = new EventRouter();

		MessageRouter.addRoute(EventConditions.isTextChannelMessage, SporadicShowOfL);

		this.discord.on('message', (m) => MessageRouter.on(m));
		
		this.discord.login(this.config.getDiscordToken());
	}

	generateJoinLink() {
		return `https://discord.com/oauth2/authorize?client_id=${this.config.getDiscordClientId()}&permissions=24636736&scope=bot`;
	}
}

module.exports = L;