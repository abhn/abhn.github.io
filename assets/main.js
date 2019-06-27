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
  const searchInput = document.getElementById('search-field');
  searchInput.addEventListener('change', searchHandler);
  searchInput.addEventListener('keyup', searchHandler);
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

const searchHandler = event => {
  const client = algoliasearch('D5RKJYMID4', '51d2bfe4c599bac051fbc7f7dcf25486');
  const index = client.initIndex('abhnblog');

  const searchResultsContainer = document.getElementById('search-results-container');
  const query = event.target.value;
  if(query.length < 3) {
    searchResultsContainer.innerHTML = '';
    return;
  };

  index.search({ query }, (err, { hits } = {}) => {

    if (err) {
      console.log(err);
      console.log(err.debugData);
      return;
    }

    let results = '';
    if(hits.length === 0) {
      results += 'No results found. Try some other keyword';
    }
    else {
      hits.map(hit => {
        const tags = hit._highlightResult.tags.value.split(', ');
        const tagsWithoutHighlight = hit.tags.split(', ');
        results += `
        <li class="search-list-item">
          <a href="${hit.url}">${hit._highlightResult.title.value}</a> 
          in 
          ${tags.map((tag, i) => {
            return ` <span class="tags-search-results"><a href='/tags#${tagsWithoutHighlight[i]}'>${tag}</a></span>`;
          })}
        </li>`;
      })
    }
    searchResultsContainer.innerHTML = results;
  }); 
}