function listener () {
	if(document.getElementById('price_basic')
		.innerHTML === '$199.99')
    {
        document.getElementById('price_basic')
		.innerHTML = '$19.99'
        document.getElementById('price_professional')
		.innerHTML = '$24.99'
        document.getElementById('price_master')
		.innerHTML = '$39.99'
    }
    else{
        document.getElementById('price_basic')
		.innerHTML = '$199.99'
        document.getElementById('price_professional')
		.innerHTML = '$249.99'
        document.getElementById('price_master')
		.innerHTML = '$399.99'
    }
}