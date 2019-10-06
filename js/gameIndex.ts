import { AppStore, CouchData, User } from "./MasterStore";
import PouchDB from 'pouchdb'

const store = new AppStore(() => {})

function idVal(id: string): string {
	return (document.getElementById(id) as HTMLInputElement).value
}
function getStream(name: string): string {
	return `https://player.twitch.tv/?channel=${name}`
}
document.getElementById('startGameButton').onclick = () => {
	const output: CouchData = {
		_id: 'game',
		leftUser: {
			name: idVal('leftName'),
			streamUrl: getStream(idVal('leftName')),
			ratingAudience: 0,
			ratingWatson: 0
		},
		rightUser: {
			name: idVal('rightName'),
			streamUrl: getStream(idVal('rightName')),
			ratingAudience: 0,
			ratingWatson: 0
		},
		songName: idVal('songName'),
		karaokeUrl: idVal('karaokeUrl'),
		startTime: Date.now() + 5 * 1000
	}
	store.pouch.get('game')
		.then((g) => {
			output._rev = g._rev
			store.pouch.put(output)
		})
}
