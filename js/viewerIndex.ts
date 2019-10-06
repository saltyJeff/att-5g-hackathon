import { AppStore, CouchData, User } from "./MasterStore";
import PouchDB from 'pouchdb'

const leftStreamerVid: HTMLIFrameElement = document.querySelector('#leftStreamerVideo')
const rightStreamerVid: HTMLIFrameElement = document.querySelector('#rightStreamerVideo')

const voteLeft: HTMLButtonElement = document.querySelector('#voteLeft')
const voteRight: HTMLButtonElement = document.querySelector('#voteRight')

const store = new AppStore((data) => {
	if(leftStreamerVid.src != data.leftUser.streamUrl) {
		leftStreamerVid.src = data.leftUser.streamUrl
	}
	if(rightStreamerVid.src != data.rightUser.streamUrl) {
		rightStreamerVid.src = data.rightUser.streamUrl
	}
})


voteLeft.onclick = () => {
	store.pouch.upsert('game', (doc) => {
		const data = doc as unknown as CouchData
		data.leftUser.ratingAudience++
		return data
	})
}
voteRight.onclick = () => {
	store.pouch.upsert('game', (doc) => {
		const data = doc as unknown as CouchData
		data.rightUser.ratingAudience--
		return data
	})
}