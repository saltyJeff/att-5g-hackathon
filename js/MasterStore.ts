import Pouch from 'pouchdb'

let options = {
	live: true,
	retry: true,
	continuous: true,
	auth: {
		username: 'wathentedightoessinglowe',
		password: 'a44aade3e16923dc1f59ca0207b70b4570dca0c0'
	}
};
export interface User {
	name: string
	ratingAudience: number
	ratingWatson: number,
	streamUrl: string
}

export interface CouchData {
	leftUser: User
	rightUser: User
	songName: string
	karaokeUrl: string
	startTime: number
}

export class AppStore {
	pouch = new Pouch('https://2aeca32c-420b-42c5-96ef-8032e3b74711-bluemix.cloudant.com/karaoke', options)
	couchData: CouchData = {
		leftUser: {
			name: '?',
			ratingAudience: 0,
			ratingWatson: 0,
			streamUrl: ''
		},
		rightUser: {
			name: '?',
			ratingAudience: 0,
			ratingWatson: 0,
			streamUrl: ''
		},
		songName: '?',
		karaokeUrl: '?',
		startTime: Date.now() + 1500
	}
	onPouchUpdate = (couch: CouchData) => {}
	constructor (onPouchUpdate) {
		this.onPouchUpdate = onPouchUpdate
		
		this.pouch.get('game').then((doc) => {
			this.couchData = doc as any
			this.onPouchUpdate(doc as any)
		})

		this.pouch.changes({
			live: true,
			since: 'now'
		}).on('change', (chg) => {
			console.log('changed', chg)
			this.pouch.get('game').then((doc) => {
				this.couchData = doc as any 
				this.onPouchUpdate(doc as any)
			})
		})
	}
}