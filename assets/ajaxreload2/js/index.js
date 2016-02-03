var elements = document.getElementsByTagName('a'); // grab all hyperlinks

for(var i = 0, len = elements.length; i < len; i++) { // for every hyperlink
    elements[i].onclick = function () { //
        var xmlObj = new XMLHttpRequest();
        xmlObj.addEventListener('load', function() {
            var res = this.responseText;
            var main = document.getElementById('main');
            main.innerHTML = res;
        });

        getHash(function(hash) {
            var url = hash;
            url = 'http://nagekar.com/assets/ajaxreload2' + url;
            console.log(url);
            xmlObj.open('GET', url);
            xmlObj.send();
            window.history.pushState('', '', url); // update the address bar for url sharing (optional)
        });

    }
}

function getHash(callback) {
    window.onhashchange = function() {
        if(window.location.hash == '') { // in case the page clicked is index
            window.location = 'http://' + window.location.host + '/template2';
        }
        callback(window.location.hash.substr(1)); // get the hash and drop the first character
    }
}