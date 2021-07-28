// Remove no-js class

$('html').removeClass('no-js');

window.scroll({
    behavior: 'smooth'
});

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const cookieBanner = document.querySelector('#cookie-banner');
const hasCookieConsent = getCookie('cookies-consent');

if (!hasCookieConsent) {
    cookieBanner.classList.remove('hidden');
}

const consentCta = cookieBanner.querySelector('#consent-cookies');

consentCta.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
    setCookie('cookies-consent', 1, 365);
});

document.getElementById("linkedin").onclick = function () {
    window.open("https://www.linkedin.com/in/emil-kjærgaard-eybye", "_blank");
};

document.getElementById("github").onclick = function () {
    window.open("https://github.com/Emil-Ey", "_blank");
}; 
 
document.getElementById("pro1").onclick = function () {
    window.open("https://github.com/Emil-Ey/Emil-Ey.github.io", "_blank");
};

document.getElementById("pro2").onclick = function () {
    window.open("https://rotundo.dk", "_blank");
};

document.getElementById("pro3").onclick = function () {
    window.open("https://eybye-todo.xyz/", "_blank");
};

document.getElementById("pro4").onclick = function () {
    window.open("https://github.com/Emil-Ey/ToDoList", "_blank");
};

document.getElementById("pro5").onclick = function () {
    window.open("https://travelbuddy.one/", "_blank");
};

document.getElementById("pro6").onclick = function () {
    window.open("https://github.com/Emil-Ey/TravelBuddy", "_blank");
};

document.getElementById("cv").onclick = function () {
    window.open("https://emil-ey.github.io/CV.pdf", "_blank");
};
