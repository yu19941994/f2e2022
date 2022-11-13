const bannerGreenX = document.querySelector('.banner__area--greenX');
const bannerTextPad = document.querySelector('.banner__longtext--pad');
const bannerTextTop = document.querySelector('.banner__longtext--top');
const bannerTextBottom = document.querySelector('.banner__longtext--bottom');
const bannerTitle = document.querySelector('.banner__img > h2:nth-of-type(2)');

const bannerImgTop = document.querySelector('.banner__img--top');
const bannerImgTriangleTop = document.querySelector('.banner__main > img:nth-of-type(1)');
const bannerImgTriangleBottom = document.querySelector('.banner__main > img:nth-of-type(2)');
const bannerGreenY = document.querySelector('.banner__area--greenY');
const bannerImg = document.querySelector('.banner__img');
const bannerImgBottom = document.querySelector('.banner__img--bottom > img');
const bannerBoxLight = document.querySelector('.banner__box--light');

const optionsBanner = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const bannerDetect = new IntersectionObserver(bannerDetectHandler, optionsBanner);
// const bannerReDetect = new IntersectionObserver(bannerReDetectHandler, optionsBanner);

bannerDetect.observe(intro);
// bannerReDetect.observe(intro);

function bannerDetectHandler (entries) {
    entries.forEach(function(each, index) {
        if (each.isIntersecting) {
            window.addEventListener('wheel', (e) => {
                if (e.deltaY < 0) {
                    bannerGreenX.classList.remove('fade-out-left');
                    bannerTextPad.classList.remove('fade-out-left');
                    bannerTextTop.classList.remove('fade-out-left');
                    bannerTextBottom.classList.remove('fade-out-right');
                    bannerTitle.classList.remove('fade-out-right');

                    bannerImgTop.classList.remove('fade-out-top');
                    bannerImgTriangleTop .classList.remove('fade-out-top');
                    bannerImgTriangleBottom .classList.remove('fade-out-top');
                    bannerGreenY .classList.remove('fade-out-top');
                    bannerImg .classList.remove('fade-out-top');
                    bannerImgBottom.classList.remove('fade-out-top');
                    bannerBoxLight.classList.remove('fade-out-top');
                } else {
                    bannerGreenX.classList.add('fade-out-left');
                    bannerTextPad.classList.add('fade-out-left');
                    bannerTextTop.classList.add('fade-out-left');
                    bannerTextBottom.classList.add('fade-out-right');
                    bannerTitle.classList.add('fade-out-right');

                    bannerImgTop.classList.add('fade-out-top');
                    bannerImgTriangleTop .classList.add('fade-out-top');
                    bannerImgTriangleBottom .classList.add('fade-out-top');
                    bannerGreenY .classList.add('fade-out-top');
                    bannerImg .classList.add('fade-out-top');
                    bannerImgBottom.classList.add('fade-out-top');
                    bannerBoxLight.classList.add('fade-out-top');
                }
            })
        }
    })
}

// function bannerReDetectHandler (entries) {
//     entries.forEach(function(each, index) {
//         if (each.isIntersecting) {
//             window.addEventListener('wheel', (e) => {
//                 console.log(e.deltaY)
//             })
//         }
//     })
// }