  
const yaml = require('js-yaml');
const fs   = require('fs');

class Configuration {
	getDiscordClientId() { return this.config.discord_client_id; }	
	getDiscordToken() { return this.config.discord_token; }

	getLReactionThreshold() { return this.config.l_reaction_threshold; }
	getLReactionEmote() { return this.config.l_reaction_emote; }
	getNumsReactionEmote() { return this.config.nums_reaction_emote; }
	getNumsPingGroup() { return this.config.nums_ping_group; }

	constructor(configFilePath) {
		this.configFilePath = configFilePath;
		
		if (!this.loadConfigFile()) {
			throw new Error('Unable to load configuration file ' + this.configFilePath, 'utf8');
		}
	}

	loadConfigFile() {
		try {
			this.config = yaml.load(fs.readFileSync(this.configFilePath));
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}

	writeConfigFile() {
		try {
			const config = yaml.dump(this.config);
			fs.writeFileSync(this.configFilePath, config, 'utf8');
			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
};

module.exports = Configuration;