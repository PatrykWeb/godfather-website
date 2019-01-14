let colorBlack = '#000000';
let defaultColorNav = "hsla(0, 0%, 0%, 0.74)";

// Sekcja nav

function scrollNav() {
    let navAnimate = document.getElementById('animateNav');
    let labelMain = document.getElementById('labelMain');
    let labelForum = document.getElementById('labelForum');
    let labelDiscord = document.getElementById('labelDiscord');
    let labelOnline = document.getElementById('labelOnline');
    let logoPyamid = document.querySelector('.logo-img');
    let iconFb = document.querySelector('.icon-fb');
    let ypos = window.pageYOffset;
    console.log(ypos);
        if(ypos > 200) {
            navAnimate.style.height = 60 + "px";
            labelMain.style.display = "none";
            labelForum.style.display = "none";
            labelDiscord.style.display = "none";
            labelOnline.style.display = "none";
            logoPyamid.style.width = 65 + "px";
            logoPyamid.style.marginTop = 3 + "px";
            iconFb.style.marginTop = 20 + "px";
            navAnimate.style.backgroundColor = colorBlack;
        } else {
            navAnimate.style.height = 80 + "px";
            labelMain.style.display = "block";
            labelForum.style.display = "block";
            labelDiscord.style.display = "block";
            labelOnline.style.display = "block";
            logoPyamid.style.width = 80 + "px";
            navAnimate.style.backgroundColor = defaultColorNav;
            iconFb.style.marginTop = 30 + "px";

        }
};
//koniec sekcji nav

//sekcja okna głównego

const windowScroll = () => {
    let windowStart = document.querySelector('.write-box');
    let copyWindowStart = document.querySelector('.copy');
    let yposMain = window.pageYOffset;

        if(yposMain > 400) {
            windowStart.style.display = 'none';
            copyWindowStart.style.display = 'none';
    } else {
        windowStart.style.display = 'block';
        copyWindowStart.style.display = 'block';
    }
};

//koniec sekcji okna głównego

const windowInformation = () => {
    let windowInfLeft = document.querySelector('.slide-box');
    let windowInfRight = document.querySelector('.slide-box3');
    let windowInfBottom = document.querySelector('.slide-box2');
    let posWinInf = window.pageYOffset;

        if(posWinInf > 250) {
            windowInfLeft.style.display = "none";
            windowInfRight.style.display = "none";
            windowInfBottom.style.display = "none";
        }
        if(posWinInf > 450) {
            windowInfLeft.style.display = "block";
            windowInfRight.style.display = "block";
            windowInfBottom.style.display = "block";
        }

};




window.addEventListener('scroll', scrollNav);
window.addEventListener('scroll', windowScroll);
window.addEventListener('scroll', windowInformation);