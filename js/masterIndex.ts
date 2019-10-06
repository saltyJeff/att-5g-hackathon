import { AppStore } from "./MasterStore";

const karaokeVid: HTMLVideoElement = document.querySelector('#karaokeVid')
const countdown: HTMLHeadingElement = document.querySelector('#countDown')
const store = new AppStore((doc) => {
	document.querySelector('#pouchdump').textContent = 
		JSON.stringify(doc, null, 2)
	if(karaokeVid.src != doc.karaokeUrl && doc.karaokeUrl != '?') {
		karaokeVid.src = doc.karaokeUrl
	}
})
setInterval(() => {
	const delta = store.couchData.startTime - Date.now()
	if(delta < 0) {
		countdown.style.display = "none"
		if(!karaokeVid.paused && !karaokeVid.ended) {
			karaokeVid.play()
		}
	}
	else {
		countdown.textContent = 'Starting in: ' + (delta / 1000) + ' s'
	}
}, 100)
;(window as any).store = store
