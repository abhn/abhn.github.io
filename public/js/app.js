document.addEventListener('click', function(e) {
    if(e.target['hash']) {
    
        // grab the hash
        targetURL = e.target['hash'].substr(1);
        xmlObj = new XMLHttpRequest();
    
        // on return of data
        xmlObj.addEventListener('load', function(resp) {
            // change the entire DOM
            document.open();
            document.write(resp.srcElement.responseText);
            document.close();
            
            // push the new URL into the address bar
            window.history.pushState('', '', resp.srcElement.responseURL);
        });
        
        xmlObj.open('GET', targetURL);
        xmlObj.send();
    }
});
