import { AppStore, CouchData, User } from "./MasterStore";
import PouchDB from 'pouchdb'

const leftStreamerVid: HTMLIFrameElement = document.querySelector('#leftStreamerVideo')
const rightStreamerVid: HTMLIFrameElement = document.querySelector('#rightStreamerVideo')
const switchButton: HTMLElement = document.querySelector('#switchButton');
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
	tagRename('#leftVotes', data.leftUser.ratingAudience+' votes')
	tagRename('#rightVotes', data.rightUser.ratingAudience+' votes')
	tagRename('#songTitle', data.songName)
})


voteLeft.onclick = (e) => {
	e.preventDefault()
	e.stopPropagation()
	if(!notVoted) {
		return false
  }
	store.pouch.upsert('game', (doc) => {
		const data = doc as unknown as CouchData
		data.leftUser.ratingAudience++
		return data
	})
	disableLinks()
	return false
}
voteRight.onclick = (e) => {
	e.preventDefault()
	e.stopPropagation()
	if(!notVoted) {
		return false
	}
	store.pouch.upsert('game', (doc) => {
		const data = doc as unknown as CouchData
		data.rightUser.ratingAudience++
		return data
	})
	disableLinks()
	return false
}

let p2 = false
switchButton.addEventListener("click", function() {
	p2 = !p2
	console.log('switching')
	if(p2) {
		contestant1.style.display = 'none'
		contestant2.style.display = 'flex'
		leftStreamerVid.src = ''
		rightStreamerVid.src = store.couchData.rightUser.streamUrl
	}
	else {
		contestant2.style.display = 'none'
		contestant1.style.display = 'flex'
		rightStreamerVid.src = ''
		leftStreamerVid.src = store.couchData.leftUser.streamUrl
	}
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