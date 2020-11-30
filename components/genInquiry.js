// create component parent div
const genInq = document.createElement('div');

// set component class

// create the sticky btn and modal component
genInq.innerHTML = `
  <button id="sticky" class="btn rfbtn text-white btn-lg mt-3 sticky" data-toggle="modal" data-target="#inquireform">
  Grab this bucket!
  </button>
  `;

//append component to host page
document.getElementById('genInqBtn').appendChild(genInq);