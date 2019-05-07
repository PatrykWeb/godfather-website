const preloaderEl = document.querySelector('.preloader');

// window.addEventListener('load', function() {
//     preloaderEl.classList.add('preloader-hidding');
//     preloaderEl.classList.add('preloader-hidden');
// });

setTimeout(function() {
     preloaderEl.classList.add('preloader-hidding');
     preloaderEl.classList.add('preloader-hidden');
}, 3000);
