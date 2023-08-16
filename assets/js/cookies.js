// Verifica o consentimento dos cookies ao carregar a página
window.addEventListener('load', checkCookieConsent);

// Verifica se o usuário já aceitou os cookies
function checkCookieConsent() {
    var consent = localStorage.getItem('cookie_consent');
    if (consent != 'true') {

        showCookieBanner();
    }
}

// Exibe o banner de consentimento de cookies
function showCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    banner.style.display = 'flex';
}

// Oculta o banner de consentimento de cookies
function hideCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    banner.style.display = 'none';
}

// Define o consentimento dos cookies
function setCookieConsent() {
    localStorage.setItem('cookie_consent', 'true');
    hideCookieBanner();
}

// Event listener para o botão "Aceitar"
document.getElementById('cookie-accept').addEventListener('click', setCookieConsent);
