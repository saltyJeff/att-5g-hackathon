import Peer from 'peerjs';
import Pouch from 'pouchdb'

const context = new AudioContext()
const merger = context.createChannelMerger()
const audioRecorder = new WebAudioRecorder(merger, {})
let options = {
	live: true,
	retry: true,
	continuous: true,
	auth: {
		username: 'wathentedightoessinglowe',
		password: 'a44aade3e16923dc1f59ca0207b70b4570dca0c0'
	}
};
const pouch = new Pouch('https://2aeca32c-420b-42c5-96ef-8032e3b74711-bluemix.cloudant.com/karaoke', options)
//const dest = context.createMediaStreamDestination()
//merger.connect(dest)
merger.connect(context.destination)

audioRecorder.onComplete = function(recorder, blob) {
	console.log('uploading blob')
	fetch(`https://example.com/upload.php`, {method:"POST", body: blob})
		.then(console.log)
}

export class AppStore {
	numPeers = 0
	couchData = {
		leftUser: {
			name: '?',
			ratingAudience: 0,
			ratingWatson: 0
		},
		rightUser: {
			name: '?',
			ratingAudience: 0,
			ratingWatson: 0
		},
		songName: '?',
		karaokeUrl: '?'
	}
	audioStream = new MediaStream()
	peer = new Peer('imdacaptainnow')
	onPouchUpdate = () => {}
	constructor (onPouchUpdate) {
		this.onPouchUpdate = onPouchUpdate
		this.peer.on('connection', (conn) => {
			this.numPeers++
			
			if(this.numPeers > 2) {
				alert('too many peers connected :(')
				return
			}

			console.log('connection')

			// wait for a call
			this.peer.on('call', (mediaConn) => {
				mediaConn.answer()
				mediaConn.on('stream', (stream) => {
					const source = context.createMediaStreamSource(stream)
					const splitter = context.createChannelSplitter()
					
					source.connect(splitter)
					splitter.connect(merger, 0, this.numPeers - 1)
					if(this.numPeers == 2) {
						if(audioRecorder.isRecording()) {
							console.log('cancelled recording')
							audioRecorder.cancelRecording()
						}
						console.log('recording')
						audioRecorder.startRecording()
					}
				})
			})
		})
		this.peer.on('disconnected', () => {
			this.numPeers--
			console.log('cancelled recording')
			audioRecorder.cancelRecording()
		})
		pouch.get('game').then((doc) => {
			this.couchData = doc
			this.onPouchUpdate(doc)
		})

		setInterval(() => {
			pouch.changes({
				since: 'now'
			}).on('change', (chg) => {
				console.log('changed', chg)
				pouch.get('game').then((doc) => {
					this.couchData = doc
					this.onPouchUpdate(doc)
				})
			})
		}, 1000)
		merger.connect(context.destination)
	}
}