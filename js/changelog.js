const buttonChangeLog = document.querySelector('#change-log');

const changeLogClick = () => {
    const informationBlock = document.querySelector('.write-box');
    const footer = document.querySelector('.copy');
            informationBlock.style.display = "none";
            footer.style.display = "none";

        const changeNewElement = document.createElement('div');
        changeNewElement.setAttribute('id', 'changelog-description');
        const textH1 = document.createElement('h1');
        textH1.setAttribute('id', 'textH1')
        textH1.innerHTML = 'to jest tekst';
        const dotRed = document.createElement('div');
        const dotYellow = document.createElement('div');
        const dotGreen = document.createElement('div');
        dotRed.setAttribute('id', 'dotRed');
        document.body.appendChild(dotRed);
        dotYellow.setAttribute('id', 'dotYellow');
        dotGreen.setAttribute('id', 'dotGreen');
        document.body.appendChild(dotGreen);
        document.body.appendChild(dotYellow);
        document.body.appendChild(textH1);
        document.body.appendChild(changeNewElement);
        buttonChangeLog.disabled = true;

            // console.log(changeNewElement);
}
const windowScrollHidden = () => {
    const changeDesc = document.querySelector('#changelog-description');
    let yposChangeLog = window.pageYOffset;
    // console.log(yposChangeLog);

        if (yposChangeLog > 50) {
            changeDesc.style.display = 'none'
            textH1.style.display = 'none';
            dotRed.style.display = 'none';
            dotYellow.style.display = 'none';
            dotGreen.style.display = 'none';
        }

        

}



buttonChangeLog.addEventListener('click', changeLogClick);
window.addEventListener('scroll', windowScrollHidden);
