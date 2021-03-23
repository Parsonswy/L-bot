const SporadicShowOfL = {
	lCount: 0,

	if: (event) => true,

	on: (event) => {
		SporadicShowOfL.lCount += event.content.match(/l/gi).length;

		if (SporadicShowOfL.lCount >= global.l.getConfig().getLReactionThreshold()) {
			SporadicShowOfL.lCount -= global.l.getConfig().getLReactionThreshold();
			event.react(global.l.getConfig().getLReactionEmote());
		}
	}
}

module.exports = SporadicShowOfL;