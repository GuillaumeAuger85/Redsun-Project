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
        // bigRounds[i].style.textDecoration = "none";
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
        scrollToTop.classList.add("scrollToTop")
    } else {
        scrollToTop.classList.remove("scrollToTop")
    }
};

window.addEventListener("scroll", scrollFunc);


scrollToTop.addEventListener('click', function backToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(backToTop);
        window.scrollTo(0, c - c / 10);
    }
});