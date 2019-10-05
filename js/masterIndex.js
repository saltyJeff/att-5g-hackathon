import { AppStore } from "./MasterStore";

const karaokeVid = document.querySelector('#karaokeVid')

const store = new AppStore((doc) => {
	document.querySelector('#pouchdump').textContent = 
		JSON.stringify(doc, null, 2)
	if(karaokeVid.src != doc.karaokeUrl && doc.karaokeUrl != '?') {
		karaokeVid.src = doc.karaokeUrl
	}
})
