
async function start() {
    const tabs = chrome.tabs.query({
        currentWindow: true,
        url: "https://www.google.com/search*"
    }).then(tabs => {
        ids = tabs.map(tab => tab.id);
        chrome.tabs.remove(ids);
    });
}


chrome.commands.onCommand.addListener(() => {
    const tabs = chrome.tabs.query({
        currentWindow: true,
        url: "https://www.google.com/search*"
    }).then(tabs => {
        ids = tabs.map(tab => tab.id);
        chrome.tabs.remove(ids);
    });
});