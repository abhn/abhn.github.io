let light = 'Light',
  dark = 'Dark';

document.addEventListener("DOMContentLoaded", event => {
  init();
});

const init = () => {
  const darkSwitch = document.getElementById('dark-light-switch');
  darkSwitch.innerHTML = getCookie('nightMode') ? light : dark;
  darkSwitch.addEventListener('click', handleNightModeToggle);
  checkCookie();
}

const checkCookie = () => {
  if(getCookie('nightMode')) {
    toggle();
  }
}

const handleNightModeToggle = () => {
  if(getCookie('nightMode')) {
    setCookie('nightMode', false, 365);
  } else {
    setCookie('nightMode', true, 365);
  }
  toggle();
}

const toggle = () => {
  const darkSwitch = document.getElementById('dark-light-switch');
  darkSwitch.innerHTML = getCookie('nightMode') ? light : dark;
  document.body.classList.toggle('dark');
}

// https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
function setCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}