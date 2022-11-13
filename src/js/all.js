const navbar = document.getElementById('navbar');
const banner = document.getElementById('banner');
const intro = document.getElementById('intro');
const cta = document.getElementById('cta');
const description = document.getElementById('description');
const level = document.getElementById('level');
const register = document.getElementById('register');
const rule = document.getElementById('rule');
const h1 = document.getElementsByTagName('h1')[0];
const navbarText = document.querySelectorAll('.navbar__main > a');
const navbarButton = document.querySelectorAll('.navbar__button > span');
const navbarMain = document.querySelector('.navbar__main');
const registerButton = document.getElementById('registerBtn');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const optionsRegister= {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const navbarDark = new IntersectionObserver(changeNavbarDark, options);
const navbarLight = new IntersectionObserver(changeNavbarLight, options);
const navbarLightRegister = new IntersectionObserver(changeNavbarLight, optionsRegister);
const registerBtnShow = new IntersectionObserver(btnShow, optionsRegister);
const registerBtnNotShow = new IntersectionObserver(btnNotShow, optionsRegister);

navbarDark.observe(intro);
registerBtnNotShow.observe(intro);
navbarDark.observe(description);
registerBtnShow.observe(description);
navbarDark.observe(level);
registerBtnShow.observe(level);
navbarLight.observe(banner);
registerBtnNotShow.observe(banner);
navbarLight.observe(cta);
registerBtnNotShow.observe(cta);
navbarLightRegister.observe(register);
registerBtnNotShow.observe(register);
navbarLight.observe(rule);
registerBtnShow.observe(rule);

function changeNavbarDark (entries) {
    entries.forEach(function(each, index) {
        if (each.isIntersecting) {
            navbar.style.backgroundColor = "#201F1D";
            if (window.innerWidth >= 768) {
                navbarText.forEach((i) => {
                    i.style.color = "#E3E3E3";
                });
            }
            navbarText.forEach((i) => {
                i.style.color = "#E3E3E3";
            });
            navbarButton.forEach((i) => {
                i.style.backgroundColor = "#E3E3E3";
            });
            navbarMain.style.backgroundColor = "#201F1D";
            h1.style.color = "#E3E3E3";
        }
    })
}

function changeNavbarLight (entries) {
    entries.forEach(function(each, index) {
        if (each.isIntersecting) {
            navbar.style.backgroundColor = "#E3E3E3";
            navbarText.forEach((i) => {
                i.style.color = "#201F1D";
            });
            navbarButton.forEach((i) => {
                i.style.backgroundColor = "#201F1D";
            });
            navbarMain.style.backgroundColor = "#E3E3E3";
            h1.style.color = "#201F1D";
        }
    })
}

function changeNavbarLightRegister (entries) {
    entries.forEach(function(each, index) {
        if (each.isIntersecting) {
            navbar.style.backgroundColor = "#E3E3E3";
            navbarText.forEach((i) => {
                i.style.color = "#201F1D";
            });
            navbarButton.forEach((i) => {
                i.style.backgroundColor = "#201F1D";
            });
            navbarMain.style.backgroundColor = "#E3E3E3";
            h1.style.color = "#201F1D";
        }
    })
}

function btnNotShow (entries) {
    entries.forEach(function(each, index) {
        if (each.isIntersecting) {
            registerButton.style.display = "none";
        }
    })
}

function btnShow (entries) {
    entries.forEach(function(each, index) {
        if (each.isIntersecting) {
            registerButton.style.display = "block";
        }
    })
}
