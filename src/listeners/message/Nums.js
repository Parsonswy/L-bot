const Nums = {

	if: (event) => event.content.trim() === '.nums',

	on: async (event) => {
		const now = new Date();
		const start = now.getHours() + 1;
		let rounds = 6;
		if (now.getHours() < 4) {
			rounds = 4 - now.getHours();
		}
		const nextHourToday = new Date(`${now.getFullYear()} ${now.getMonth()} ${now.getDate()} ${start}:00:00`);
		
		await event.channel.send(`<@${global.l.getNumsPingGroup()}>`);
		for (let i=0; i<rounds; i++) {
			const epochSeconds = (nextHourToday.getTime() / 1000) + i * 3600;
			const message = await event.channel.send(`<t:${epochSeconds}>`);
			await message.react(global.l.getConfig().getNumsReactionEmote())
		}
 
	}
}

module.exports = Nums;