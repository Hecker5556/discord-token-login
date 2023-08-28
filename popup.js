document.getElementById('save').addEventListener('click', function() {
    var token = document.getElementById('token').value;
    chrome.storage.local.set({token: token}, function() {
        console.log('Token is ' + token);
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currentTab = tabs[0];
            chrome.tabs.update(currentTab.id, {url: "https://discord.com/login"});
        });
        window.close();
    });
});
