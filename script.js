/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
	if(video.paused || video.ended){
		video.play();
	}else {
		video.pause();
	}
}

function changeToggleButton() {
	toggle.innterHTML = video.paused ? "►" : "❚ ❚"
}

function changeProgress(){
	let progressPercent = (video.currentTime/video.duration)*100;
	progressBar.style.flexBasis = `${progressPercent}%`;
}

function scrub(e){
	let scrubTime = (e.offsetX?progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

function handleSlider(){
	video[this.name] = this.value;
}

function skip() {
	video.currentTime += +this.dataset.skip;
}


toggleButton.addEventListener("click",togglePlay);
video.addEventListener("click",togglePlay);
video.addEventListener("play",changeToggleButton);
video.addEventListener("pause",changeToggleButton);
video.addEventListener("timeupdate",changeProgress);



ranges.forEach((slider)=>{
	slider.addEventListener("change",handleSlider);
});

skipButtons.forEach((btn)=>{
	btn.addEventListener("click",skip);
});

let mousedown = false;

progress.addEventListener("click",scrub);
progress.addEventListener("mousedown",()=>{mousedown = true;}));
progress.addEventListener("click",(e)=>mousedown && scrub(e));
progress.addEventListener("click",()=>{mousedown=false}));

ranges.forEach((slider)=>{
	slider.addEventListener("change",handleSlider);
});

document.addEventListener("keydown",(e)=>{
	if(e.code==="Space"){
		togglePlay();
	}
});
















