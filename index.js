

// sample and gallery linkButton
const linkButtons = document.querySelectorAll('.linkButton')

for (let button of linkButtons) {
    button.addEventListener('pointerdown', () => {
        button.style.backgroundColor = '#000';
        button.style.color = '#fff';
        button.style.borderRadius = '5%';
        button.style.borderColor = "#fff"

    })
};
for (let button of linkButtons) {
    button.addEventListener('pointerup', () => {
        button.style.backgroundColor = '#000';
        button.style.color = '#fff';

    })
};



//wait for video to load first frame to launch slogan animation
const Slogan = document.querySelector('#slogan');
const video = document.querySelector('#myVideo');
const h2 = document.querySelector('#slogan>h2');
const h4 = document.querySelector('#slogan>h4');
const loader = document.querySelector('#preloader');

video.addEventListener('loadeddata',()=>{
    loader.style.display= "none";
    Slogan.classList.add('slogan');
    h2.classList.remove('d-none');
    h4.classList.remove('d-none')
})

// fadeout message video / fadein unmutemutebutton video
const slogan = document.querySelector('.slogan');
const sloganparent = document.querySelector('.introVideo');
const unmuteMuteButton = document.querySelector('#unmuteMuteButton');
const videoControls = document.querySelector('#videoControls');
const muteDiv = document.querySelector('#muteDiv');

const fadeOut = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            Slogan.classList.add('sloganOut');
            resolve()
        }, delay);

    })
};

async function delayedRemoval() {
    setTimeout(() => {
        sloganparent.removeChild(Slogan)
        return 'done'
    }, 800)
};


async function addUnmuteButton() {
    unmuteMuteButton.src = "img/vol up.png";
    unmuteMuteButton.classList.add('volUp');
};

async function removeSlogan() {
    await fadeOut(3000);
    await delayedRemoval();
    await addUnmuteButton();
};

removeSlogan();

muteDiv.addEventListener('mousemove', () => {
    videoControls.style.display = 'block';
    setTimeout(() => {
        videoControls.style.display = 'none';
    }, 3000)
})


// muteDiv addEventListener
muteDiv.addEventListener('click', () => {
    if (!video.muted) {
        muteDiv.classList.remove('muteDivOn');
        sloganparent.classList.remove('controlsPosition');
        sloganparent.classList.add('elementsPosition');
        unmuteMuteButton.src = "img/vol mute.png";
        unmuteMuteButton.classList.add('volUp');
        videoControls.style.display = 'block';
        setTimeout(() => {
            videoControls.style.display = 'none';
            unmuteMuteButton.src = "";
            unmuteMuteButton.classList.remove('volUp');
            muteDiv.classList.add('muteDivOn');
        }, 5000)
    } else {
        muteDiv.classList.remove('muteDivOn');
        sloganparent.classList.remove('controlsPosition');
        sloganparent.classList.add('elementsPosition');
        unmuteMuteButton.src = "img/vol up.png";
        unmuteMuteButton.classList.add('volUp');
        videoControls.style.display = 'block';
        setTimeout(() => {
            videoControls.style.display = 'none';
            unmuteMuteButton.src = "";
            unmuteMuteButton.classList.remove('volUp');
            muteDiv.classList.add('muteDivOn');
        }, 5000)
    }

});

unmuteMuteButton.addEventListener('click', function () {
    const saveVol = video.volume;
    if (!video.muted) {
        video.muted = true;
        volRange.value = "0";
        muteUnmute.src = "img/vol mute.png";
        unmuteMuteButton.src = "";
        unmuteMuteButton.classList.remove('volUp');
        videoControls.style.display = 'block';
        sloganparent.classList.remove('elementsPosition');
        sloganparent.classList.add('controlsPosition');
        muteDiv.classList.remove('muteDivOff');
        muteDiv.classList.add('muteDivOn');
        setTimeout(() => {
            videoControls.style.display = 'none';
        }, 5000)
    } else {
        video.muted = false;
        volRange.value = saveVol;
        muteUnmute.src = "img/vol up.png";
        unmuteMuteButton.src = "";
        unmuteMuteButton.classList.remove('volUp');
        videoControls.style.display = 'block';
        sloganparent.classList.remove('elementsPosition');
        sloganparent.classList.add('controlsPosition');
        muteDiv.classList.remove('muteDivOff');
        muteDiv.classList.add('muteDivOn');
        setTimeout(() => {
            videoControls.style.display = 'none';
        }, 5000)

    }

});


// video controls 
const controlsWrap = document.querySelector('#controlsWrap');

controlsWrap.addEventListener('mouseover', () => {
    videoControls.style.display = 'block';
});

controlsWrap.addEventListener('mousemove', () => {
    videoControls.style.display = 'block';
});

controlsWrap.addEventListener('mouseleave', () => {
    setTimeout(() => {
        videoControls.style.display = 'none';
    }, 5000)
});



const playPause = document.querySelector('#playPause');
const playPausePic = document.querySelector('#playPausePic');
const muteUnmute = document.querySelector('#muteUnmute');
const volRange = document.querySelector('#volRange');
const volWrap = document.querySelector('#volWrap');
const rangeWrap = document.querySelector('#rangeWrap');
const progress = document.querySelector('#progress');
const progressBAr = document.querySelector('#progressBar');
const fullscreenPic = document.querySelector('#fullscreenPic');



// mouse play/pause video
playPausePic.addEventListener('click', function (e) {
    if (video.paused) {
        video.play();
        playPausePic.src = "img/pause.png";
        setTimeout(() => {
            videoControls.style.display = 'none';
        }, 5000)
    } else {
        video.pause();
        playPausePic.src = "img/play.png";
        setTimeout(() => {
            videoControls.style.display = 'none';
        }, 5000)
    }

})


// Keyborad play/pause video
window.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.code)
    if (e.code == "Space") {
        if (video.paused) {
            video.play();
            playPausePic.src = "img/pause.png";
            videoControls.style.display = 'block';
            setTimeout(() => {
                videoControls.style.display = 'none';
            }, 5000)
        } else {
            video.pause();
            playPausePic.src = "img/play.png";
            videoControls.style.display = 'block';
            setTimeout(() => {
                videoControls.style.display = 'none';
            }, 5000)
        }
    }
});


// video progressbar 
progress.addEventListener('click', (e) => {
    console.log(e);
    video.currentTime = Math.floor(video.duration * (e.layerX / (controlsWrap.offsetWidth * 96 / 100)));
    console.log(video.currentTime);
    progressBAr.style.width = Math.floor((e.layerX / (controlsWrap.offsetWidth * 96 / 100)) * 100) + '%';
})

video.addEventListener('timeupdate', () => {
    if (!progress.getAttribute('max')) {
        progress.setAttribute(
            'max', video.duration
        );
    }
    progress.value = video.currentTime;
    progressBAr.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
})


// soundcontrol video
muteUnmute.addEventListener('click', () => {
    const saveVol = video.volume;
    if (!video.muted) {
        video.muted = true;
        volRange.value = "0";
        muteUnmute.src = "img/vol mute.png";
    } else {
        video.muted = false;
        volRange.value = saveVol;
        muteUnmute.src = "img/vol up.png";
        if (unmuteMuteButton.src = "img/vol up.png") {
            unmuteMuteButton.src = "";
            unmuteMuteButton.classList.remove('volUp');
            sloganparent.classList.remove('elementsPosition');
            sloganparent.classList.add('controlsPosition');
            muteDiv.classList.remove('muteDivOff');
            muteDiv.classList.add('muteDivOn');
        }
    }
})

muteUnmute.addEventListener('mouseover', () => {
    muteUnmute.style.backgroundColor = "#39464ab0";
    rangeWrap.classList.remove('rangeDisplayOff');
    rangeWrap.classList.add('rangeDisplayOn');
    volRange.classList.add('volRangeSlideUp');
})

volWrap.addEventListener('mouseleave', () => {
    muteUnmute.style.backgroundColor = "";
    rangeWrap.classList.add('rangeDisplayOff');
    rangeWrap.classList.remove('rangeDisplayOn');
    volRange.classList.remove('volRangeSlideUp');
})


volRange.addEventListener('input', () => {
    video.volume = volRange.value;
    if (volRange.value == "0") {
        muteUnmute.src = "img/vol mute.png";
    } else {
        video.muted = false;
        muteUnmute.src = "img/vol up.png";
    }

})


// video fullscreen
const fullscreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

if (!fullscreenEnabled) {
    fullscreenPic.style.display = 'none';
}

const handleFullscreen = function () {
    if (isFullScreen()) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
    }
    else {
        if (sloganparent.requestFullscreen) sloganparent.requestFullscreen();
        else if (sloganparent.mozRequestFullScreen) sloganparent.mozRequestFullScreen();
        else if (sloganparent.webkitRequestFullScreen) sloganparent.webkitRequestFullScreen();
        else if (sloganparent.msRequestFullscreen) sloganparent.msRequestFullscreen();
    }
}

const isFullScreen = function () {
    return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}

fullscreenPic.addEventListener('click', function (e) {
    handleFullscreen();
});

sloganparent.addEventListener('dblclick', function (e) {
    unmuteMuteButton.src = "";
    unmuteMuteButton.classList.remove('volUp');
    handleFullscreen();
})

// animate div if in viewport
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
});







