
function valideKey(evt){
			
	var code = (evt.which) ? evt.which : evt.keyCode;
			
		if(code==8) {
		  return true;
		    }else if(code>=48 && code<=57) {
			  return true;
		} else{ 
			return false;
		}
}


document.addEventListener('DOMContentLoaded', function () {
	
	var suma = 0;

	document.getElementById('producto1').addEventListener('change', function () {
		suma += parseInt(this.value);
		document.getElementById('sumatest').innerHTML = suma;
	});
	document.getElementById('producto2').addEventListener('change', function () {
		suma += parseInt(this.value);
		document.getElementById('sumatest').innerHTML = suma;
	});
	document.getElementById('producto3').addEventListener('change', function () {
		suma += parseInt(this.value);
		document.getElementById('sumatest').innerHTML = suma;
	});
	document.getElementById('producto4').addEventListener('change', function () {
		suma += parseInt(this.value);
		document.getElementById('sumatest').innerHTML = suma;
	});
});
