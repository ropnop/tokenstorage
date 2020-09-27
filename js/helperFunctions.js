function logResponse(codeblock, text) {
    document.getElementById(codeblock).innerText = text;
}

function clearCookies() {
    fetch("/api/unsetCookies")
        .then(logResponse('clearResponse', 'Cookies cleared'))
        .catch(console.error)
}

function clearGlobalVar() {
    token = '';
    logResponse('clearResponse', 'Global var cleared!')
}

function clearLocalStorage() {
    localStorage.removeItem('token');
    logResponse('clearResponse', 'localStorage cleared!');
}

function clearSessionStorage() {
    sessionStorage.removeItem('token');
    logResponse('clearResponse', 'sessionStorage cleared!');

}