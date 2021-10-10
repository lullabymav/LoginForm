const user = document.querySelector('#user');
user.addEventListener('keyup', function(){
	const u_times = document.querySelector('u_times');
	const u_check = document.querySelector('u_check');
	if (user.value.length == 0 || user.value.length < 8) {
		user.style.border = '1px solid red';
		u_times.style.display = 'block';
		u_check.style.display = 'none';
		return false;
	} else {
		user.style.border = '1px solid green';
		u_times.style.display = 'none';
		u_check.style.display = 'block';
	}
})

const pass = document.querySelector('#pass');
pass.addEventListener('keyup', function(){
	const p_times = document.querySelector('p_times');
	const p_check = document.querySelector('p_check');
	if (pass.value.length == 0 || pass.value.length < 8) {
		pass.style.border = '1px solid red';
		p_times.style.display = 'block';
		p_check.style.display = 'none';
		return false;
	} else {
		pass.style.border = '1px solid green';
		p_times.style.display = 'none';
		p_check.style.display = 'block';
	}
})

function change(){
    const pass  = document.getElementById('pass');
    if (pass.type == "password") {
     	pass.type= 'text';
    }else{
     	pass.type= 'password';
     }
}


function validation() {
	if(user.value == 0 || user.value.length < 8) {
		document.getElementById('error').innerHTML = 'Please fill the required fields';
		return false;
	} else if (pass.value == 0 || pass.value.length < 8) {
		document.getElementById('error').innerHTML = 'Please fill the required fields';
		return false;
	} else {
		alert('Succesfully logged in!');
	}
}