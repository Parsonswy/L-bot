const SporadicShowOfL = {
	lCount: 0,

	if: (event) => true,

	on: async (event) => {
		SporadicShowOfL.lCount += (event.content.match(/l/gmi) || []).length;

		if (SporadicShowOfL.lCount >= global.l.getConfig().getLReactionThreshold()) {
			SporadicShowOfL.lCount -= global.l.getConfig().getLReactionThreshold();
			await event.react(global.l.getConfig().getLReactionEmote());
		}
	}
}

module.exports = SporadicShowOfL;