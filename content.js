chrome.storage.local.get(['token'], function(result) {
    var token = result.token;
    if (token && !localStorage.getItem('tokenSet')) {
        login(token);
    }
});

function login(token) {
    setInterval(() => {
        document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
        location.reload();
    }, 2500);
}
