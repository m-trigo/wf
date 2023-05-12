function onClick(event) {
    var e = window.e || event;
    if (e.target.tagName !== 'A')
        return;
    document.title = `Web & Flow - ${e.target.innerHTML}`
}

if (document.addEventListener) {
    document.addEventListener('click', onClick, false);

}
else {
    document.attachEvent('onclick', onClick);

}