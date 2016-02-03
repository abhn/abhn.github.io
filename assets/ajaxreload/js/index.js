var elements = document.getElementsByTagName('a');

for(var i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function () {
        var xmlObj = new XMLHttpRequest();
        xmlObj.addEventListener('load', function() {
            var res = this.responseText;
            var main = document.getElementById('main');
            main.innerHTML = res;
        });

        getHash(function(hash) {
            var url = hash;
            url = 'http://nagekar.com/assets/ajaxreload' + url;
            console.log(url);
            xmlObj.open('GET', url);
            xmlObj.send();
            window.history.pushState('', '', url);
        });

    }
}

function getHash(callback) {
    window.onhashchange = function() {
        if(window.location.hash == '') {
            window.location = 'http://' + window.location.host + '/template2';
        }
        callback(window.location.hash.substr(1));
    }
}