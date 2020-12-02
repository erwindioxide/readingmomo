// create component parent div
const genInq = document.createElement('div');

// set component class

// create the sticky btn and modal component
genInq.innerHTML = `
  <a href="https://forms.gle/cjvma9i19XKqzCdc9" id="sticky" class="btn rfbtn text-white btn-lg mt-3 sticky" target="_blank">
  Order now! 🛒
  </a>
  `;

//append component to host page
document.getElementById('genInqBtn').appendChild(genInq);