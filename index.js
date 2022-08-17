//wait for page to load  to launch slogan animation
const body = document.querySelector('body');
const hide = document.querySelector('#hide');
const video = document.querySelector('#myVideo');
const svg = document.querySelector('svg');
const loader = document.querySelector('#preloader');

window.addEventListener('load', async () => {
    svg.style.display = 'none';
    hide.removeAttribute("class");
    loader.setAttribute("class", "slideTop");
    setTimeout(async () => {
        loader.style.display = "none";
        const dataSpyList = document.querySelector('[data-bs-spy="scroll"]');
        bootstrap.ScrollSpy.getInstance(dataSpyList).refresh();
        const Slogan = document.createElement('div');
        sloganparent.appendChild(Slogan);
        Slogan.classList.add('slogan');
        const h4 = document.createElement('h4');
        const h2 = document.createElement('h2');
        Slogan.appendChild(h4);
        Slogan.appendChild(h2);
        h4.classList.add('text-center');
        h2.classList.add('text-center');
        h2.style.color = '#1a1a1ab9';
        h4.innerText = 'Make It Stand out';
        h2.innerText = 'Fuse It with Sound';
        await removeSlogan();
        const iframes = document.querySelectorAll("iframe");
        iframes[3].setAttribute('src', 'https://bandcamp.com/EmbeddedPlayer/track=1268156198/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/');
        iframes[4].setAttribute('src', 'https://bandcamp.com/EmbeddedPlayer/track=2116063547/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/');
        iframes[5].setAttribute('src', 'https://bandcamp.com/EmbeddedPlayer/track=3614794773/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/');
    }, 900)
});

// fadeout slogan video / fadein unmutemutebutton video
const sloganparent = document.querySelector('#home');
const unmuteMuteButton = document.querySelector('#unmuteMuteButton');
const videoControls = document.querySelector('#videoControls');
const muteDiv = document.querySelector('#muteDiv');

async function removeSlogan() {
    const slogan = document.querySelector('.slogan');
    const fadeOut = (delay) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                slogan.classList.add('sloganOut');
                resolve()
            }, delay);

        })
    };
    async function delayedRemoval() {
        setTimeout(() => {
            sloganparent.removeChild(slogan);
            return 'done'
        }, 800)
    };
    async function addUnmuteButton() {
        unmuteMuteButton.classList.add('turnVolOn');
        unmuteMuteButton.src = "img/vol up.png";
    };
    await fadeOut(3500);
    await delayedRemoval();
    await addUnmuteButton();
};

// Make mute appear central video mute button
muteDiv.addEventListener('mousemove', () => {
    videoControls.style.display = 'block';
    setTimeout(() => {
        videoControls.style.display = 'none';
    }, 3000)
});


// muteDiv addEventListener
muteDiv.addEventListener('click', () => {
    if (!video.muted) {
        muteDiv.classList.remove('muteDivOn');
        sloganparent.classList.remove('controlsPosition');
        sloganparent.classList.add('elementsPosition');
        unmuteMuteButton.src = "img/vol mute.png";
        unmuteMuteButton.classList.add('turnVolOn');
        videoControls.style.display = 'block';
        setTimeout(() => {
            videoControls.style.display = 'none';
            unmuteMuteButton.src = "";
            unmuteMuteButton.classList.remove('turnVolOn');
            muteDiv.classList.add('muteDivOn');
        }, 5000)
    } else {
        muteDiv.classList.remove('muteDivOn');
        sloganparent.classList.remove('controlsPosition');
        sloganparent.classList.add('elementsPosition');
        unmuteMuteButton.src = "img/vol up.png";
        unmuteMuteButton.classList.add('turnVolOn');
        videoControls.style.display = 'block';
        setTimeout(() => {
            videoControls.style.display = 'none';
            unmuteMuteButton.src = "";
            unmuteMuteButton.classList.remove('turnVolOn');
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
        unmuteMuteButton.classList.remove('turnVolOn');
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
        unmuteMuteButton.classList.remove('turnVolOn');
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
});


// Keyboard play/pause video
const preventSpacebar = (e) => {
    if (e.code == "Space") {
        e.preventDefault();
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
};

window.addEventListener('keydown', preventSpacebar);



// video progressbar 
progress.addEventListener('click', (e) => {
    video.currentTime = Math.floor(video.duration * (e.layerX / (controlsWrap.offsetWidth * 96 / 100)));
    progressBAr.style.width = Math.floor((e.layerX / (controlsWrap.offsetWidth * 96 / 100)) * 100) + '%';
});

video.addEventListener('timeupdate', () => {
    if (!progress.getAttribute('max')) {
        progress.setAttribute(
            'max', video.duration
        );
    }
    progress.value = video.currentTime;
    progressBAr.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
});


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
            unmuteMuteButton.classList.remove('turnVolOn');
            sloganparent.classList.remove('elementsPosition');
            sloganparent.classList.add('controlsPosition');
            muteDiv.classList.remove('muteDivOff');
            muteDiv.classList.add('muteDivOn');
        }
    }
});

muteUnmute.addEventListener('mouseover', () => {
    muteUnmute.style.backgroundColor = "#39464ab0";
    rangeWrap.classList.remove('rangeDisplayOff');
    rangeWrap.classList.add('rangeDisplayOn');
    volRange.classList.add('volRangeSlideUp');
});

volWrap.addEventListener('mouseleave', () => {
    muteUnmute.style.backgroundColor = "";
    rangeWrap.classList.add('rangeDisplayOff');
    rangeWrap.classList.remove('rangeDisplayOn');
    volRange.classList.remove('volRangeSlideUp');
});


volRange.addEventListener('input', () => {
    video.volume = volRange.value;
    if (volRange.value == "0") {
        muteUnmute.src = "img/vol mute.png";
    } else {
        video.muted = false;
        muteUnmute.src = "img/vol up.png";
    }
});


// video fullscreen
const fullscreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
if (!fullscreenEnabled) {
    fullscreenPic.style.display = 'none';
};
const scrollDownButton = document.querySelector("#home a");

const handleFullscreen = function () {
    if (isFullScreen()) {
        scrollDownButton.classList.remove('d-none');
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
    }
    else {
        scrollDownButton.classList.add('d-none');
        if (sloganparent.requestFullscreen) sloganparent.requestFullscreen();
        else if (sloganparent.mozRequestFullScreen) sloganparent.mozRequestFullScreen();
        else if (sloganparent.webkitRequestFullScreen) sloganparent.webkitRequestFullScreen();
        else if (sloganparent.msRequestFullscreen) sloganparent.msRequestFullscreen();
    }
};

const isFullScreen = function () {
    return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
};

fullscreenPic.addEventListener('click', function (e) {
    handleFullscreen();
});

sloganparent.addEventListener('dblclick', function (e) {
    unmuteMuteButton.src = "";
    unmuteMuteButton.classList.remove('turnVolOn');
    handleFullscreen();
});

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



//allow space key action then submit and preventDefault space key again 
const submit = document.querySelector('button[type=submit]');
const inputs = document.querySelectorAll('#contact input');
const textarea = document.querySelector('textarea');

for (let input of inputs) {
    input.addEventListener('click', (e) => {
        window.removeEventListener('keydown', preventSpacebar);
    }
    )
};
textarea.addEventListener('click', (e) => {
    window.removeEventListener('keydown', preventSpacebar);
}
);
submit.addEventListener('click', (e) => {
    window.addEventListener('keydown', preventSpacebar);
}
);

//automatically scroll to top when refresh page
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    });
};

// instra/facebookg buttonlink
const bigRounds = document.querySelectorAll('.bigRound');
const squares = document.querySelectorAll('.square');
const rectangles = document.querySelectorAll('.rectangle');
const points = document.querySelectorAll('.point');
const smRounds = document.querySelectorAll('.smRound');


for (let i = 0; i < bigRounds.length; i++) {
    bigRounds[i].addEventListener('mouseenter', () => {
        bigRounds[i].style.borderColor = "#db0202";
        bigRounds[i].style.color = "#db0202";
        squares[i].style.borderColor = "#db0202";
        rectangles[i].style.borderColor = "#db0202";
        points[i].style.borderColor = "#db0202";
        points[i].style.backgroundColor = "#db0202";
        smRounds[i].style.borderColor = "#db0202";
    })
};

for (let i = 0; i < bigRounds.length; i++) {
    bigRounds[i].addEventListener('mouseleave', () => {
        bigRounds[i].style.borderColor = "#fff";
        bigRounds[i].style.color = "#fff";
        squares[i].style.borderColor = "#fff";
        rectangles[i].style.borderColor = "#fff";
        points[i].style.borderColor = "#fff";
        points[i].style.backgroundColor = "#fff";
        smRounds[i].style.borderColor = "#fff";
    })
};


// srcolltotop button
const scrollToTop = document.querySelector("#scrollToTop");

const scrollFunc = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.classList.remove("d-none");
        scrollToTop.classList.add("scrollToTop");
    } else {
        scrollToTop.classList.add("d-none");
        scrollToTop.classList.remove("scrollToTop")
    }
};

window.addEventListener("scroll", scrollFunc);


scrollToTop.addEventListener('click', function backToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }
});

// validate form
(function () {
    'use strict';
    const forms = document.querySelectorAll('.validated-form');
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();





