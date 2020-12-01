// create component parent div
const navbar = document.createElement('div');

//create component
navbar.innerHTML = `
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
<div class="container-fluid d-flex">
		<div class="navbar-brand" href="#">
			<a href="../index.html">	<img src="../img/website-logo.png"/></a>
		</div>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto order-2">
						<li class="nav-item"><a class="nav-link" href="../">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="../index.html#buckets">Book Buckets</a></li>
				</ul>	
		</div>
</div>
</nav>
	`;

//append component to host page
document.getElementById('navbarSet').appendChild(navbar);