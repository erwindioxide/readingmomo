//get url name and set it as API endpoint
let extensionRemove = window.location.href.split('/').pop().replace('.html', '');
let queryRemove = extensionRemove.split('?')[0];
let hashRemove = queryRemove.split('#')[0];
let key = hashRemove;


// create component parent div  and fetch json
const bookListings = document.createElement('data-stein-url');
bookListings.setAttribute("data-stein-url", "https://api.steinhq.com/v1/storages/5fc440c7f62b6004b3eb635a/" + key);
bookListings.classList = "mt-4 px-3"

// create fund cards/modals
bookListings.innerHTML = `
<p>{{bid}}. {{title}} <small>({{author}})</small></p>
  `;

//append component to host page
document.getElementById('bookListingsCont').appendChild(bookListings);