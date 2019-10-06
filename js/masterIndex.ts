import { AppStore } from "./MasterStore";

const karaokeVid: HTMLIFrameElement = document.querySelector('#karaokeVid')
const countdown: HTMLHeadingElement = document.querySelector('#countDown')

function txt(elemId: string, elemVal: string) {
	document.getElementById(elemId).textContent = elemVal
}

const store = new AppStore((doc) => {
	// document.querySelector('#pouchdump').textContent = 
	// 	JSON.stringify(doc, null, 2)
	const delta = store.couchData.startTime - Date.now()
	if(delta > 0) {
		karaokeVid.src = ""
	}
	txt('leftUserName', store.couchData.leftUser.name)
	txt('leftUserUserRating', store.couchData.leftUser.ratingAudience+'')
	txt('leftUserWatsonRating', store.couchData.leftUser.ratingWatson+'')

	txt('rightUserName', store.couchData.rightUser.name)
	txt('rightUserUserRating', store.couchData.rightUser.ratingAudience+'')
	txt('rightUserWatsonRating', store.couchData.rightUser.ratingWatson+'')
})
const interval = setInterval(() => {
	const delta = store.couchData.startTime - Date.now()
	if(delta < 0) {
		countdown.style.display = "none"
		if(store.couchData.karaokeUrl != karaokeVid.src) {
			console.log('setting url: ', store.couchData.karaokeUrl)
			karaokeVid.src = store.couchData.karaokeUrl
		}
	}
	else {
		countdown.style.display = "block"
		countdown.textContent = 'Starting in: ' + (delta / 1000) + ' s'
	}
}, 100)
;(window as any).store = store
