let light = 'Light',
  dark = 'Dark';

document.addEventListener("DOMContentLoaded", event => {
  init();
});

const init = () => {
  const darkSwitchesArray = document.querySelectorAll('.dark-light-switch');
  darkSwitchesArray.forEach(darkSwitch => {
    darkSwitch.innerHTML = getCookie('nightMode') ? light : dark;
    darkSwitch.addEventListener('click', handleNightModeToggle);
  });
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
  const darkSwitchesArray = document.querySelectorAll('.dark-light-switch');
  darkSwitchesArray.forEach(darkSwitch => {
    darkSwitch.innerHTML = getCookie('nightMode') ? light : dark;
  })
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

if (!('doNotTrack' in navigator) || !(navigator.doNotTrack === '1')) {

  let analytics = {};
  analytics["href"] = window.location.href;
  analytics["userAgent"] = navigator.userAgent;
  analytics["width"] = window.innerWidth;
  analytics["height"] = window.innerHeight;
  analytics["referrer"] = document.referrer;
  analytics["platform"] = navigator.platform;
  analytics["timestamp"] = (new Date()).getTime();

  fetch('https://us-central1-custom-analytics-8ffa4.cloudfunctions.net/helloWorld', {
    method: 'post',
    body: JSON.stringify(analytics)
  })
  .catch(err => {
    // console.log(err);
  })
}
