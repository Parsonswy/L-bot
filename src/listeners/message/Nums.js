const msPerHour = 3600000;
function getCurrentUTCEpoch() {
	const now = new Date();
  const utcDate = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  ));
  return utcDate;
}

function ceilToNearestHour(timestamp) {
  return Math.ceil(timestamp / msPerHour) * msPerHour;
}

const Nums = {

	if: (event) => event.content.trim().startsWith('.nums'),

	on: async (event) => {
		let [,intervals = 6, offset=0] = event.content.trim().split(' ');
		const now = getCurrentUTCEpoch();

		if (typeof intervals === 'string' && intervals.trim() == 'help') {
			await event.channel.send('`.nums [intervals: how many timeslots you want; IE 4 times] [offset: number of hours from now to start the times; IE 2 hours from now]`');
			return;
		}

		intervals = parseInt(intervals, 10);
		offset = parseInt(offset, 10);

		if (intervals > 10 || offset > 12 || isNaN(intervals) || isNaN(offset)) {
			await event.channel.send('Nice try, <:brogrammer:983524835768557598>.');
			return;
		} else if (intervals < 1 || offset < 0) {
			await event.channel.send('Nice try, <:brogrammer:983524835768557598>.');
			return;
		}

		const hourOffset = offset  * msPerHour;
		await event.channel.send(`<@${global.l.getNumsPingGroup()}>`);
		for (let i=0; i<intervals; i++) {
			const epochSeconds = now.getTime() + (i * msPerHour + hourOffset);
			const epochSecondsToTheNextHour = ceilToNearestHour(epochSeconds, 7) / 1000;
			const message = await event.channel.send(`<t:${epochSecondsToTheNextHour}>`);
			await message.react(global.l.getConfig().getNumsReactionEmote())
		}
	}
}

module.exports = Nums;