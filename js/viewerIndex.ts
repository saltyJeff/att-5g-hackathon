import { AppStore, CouchData, User } from "./MasterStore";
import PouchDB from 'pouchdb'

const leftStreamerVid: HTMLIFrameElement = document.querySelector('#leftStreamerVideo')
const rightStreamerVid: HTMLIFrameElement = document.querySelector('#rightStreamerVideo')
const btnSwtich1: HTMLElement = document.querySelector('.switch-contestant1');
const btnSwtich2: HTMLElement = document.querySelector('.switch-contestant2');
const contestant1: HTMLElement = document.querySelector('.contestant1');
const contestant2: HTMLElement = document.querySelector('.contestant2');

const voteLeft: HTMLButtonElement = document.querySelector('#voteLeft')
const voteRight: HTMLButtonElement = document.querySelector('#voteRight')

let notVoted = true

function tagRename(tag: string, val: string) {
	document.querySelectorAll(tag).forEach((v) => {
		v.textContent = val
	})
}
let lastData: CouchData = undefined
function meaningfulChange(data: CouchData) {
	if(lastData == undefined) {
		lastData = data
		return true
	}
	return data.startTime != lastData.startTime
	const changed = 
		lastData.karaokeUrl != data.karaokeUrl ||
		lastData.leftUser.streamUrl != data.leftUser.streamUrl ||
		lastData.rightUser.streamUrl != data.rightUser.streamUrl
	lastData = data
	return changed
}
const store = new AppStore((data) => {
	if(meaningfulChange(data)) {
		leftStreamerVid.src = data.leftUser.streamUrl
		rightStreamerVid.src = data.rightUser.streamUrl
		enableLinks()
	}

	tagRename('.unameLeft', data.leftUser.name)
	tagRename('.unameRight', data.rightUser.name)
})


voteLeft.onclick = () => {
	if(!notVoted) {
		return false
	}
	store.pouch.upsert('game', (doc) => {
		const data = doc as unknown as CouchData
		data.leftUser.ratingAudience++
		return data
	})
	disableLinks()
}
voteRight.onclick = () => {
	if(!notVoted) {
		return false
	}
	store.pouch.upsert('game', (doc) => {
		const data = doc as unknown as CouchData
		data.rightUser.ratingAudience++
		return data
	})
	disableLinks()
}


btnSwtich1.addEventListener("click", function() {
	contestant1.style.display = 'none'
	contestant2.style.display = 'block'
})

btnSwtich2.addEventListener("click", function() {
	contestant2.style.display = 'none'
	contestant1.style.display = 'block'
})

function disableLinks () {
	console.log('disabled voting')
	voteLeft.classList.add('disabled')
	voteRight.classList.add('disabled')
	notVoted = false
}
function enableLinks () {
	console.log('enabled voting')
	voteLeft.classList.remove('disabled')
	voteRight.classList.remove('disabled')
	notVoted = true
}