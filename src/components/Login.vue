<template>
<div>
    <form class="form-container" onsubmit="return validation()">
		<p id="Error"></p>
		<h3>Form Login</h3>
		<div class="form-grup">
			<label for="user">Username</label><br>
			<input type="text" name="user" placeholder="username" id="user">
			<i class="fa fa-times u_times"></i>
			<i class="fa fa-check u_check"></i>
		</div>
		<div class="form-grup">
			<label for="password">Password</label><br>
			<input type="password" name="password" placeholder="Password" id="pass">
			<i class="fa fa-times p_times"></i>
			<i class="fa fa-check p_check"></i>
		</div>
		<div class="form-grup">
			<input type="submit" name="login-btn" value="Login">
		</div>
	</form>
</div>
</template>

<style>
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        background: linear-gradient(to right, #9999ff, #80ffff);
    }

    .form-container{
        background-color: white;
        width: 300px;
        margin: 50px auto;
        box-shadow: 0px 3px 7px 3px rgba(0,0,0,0.2);
    }

    #error{
        color: red;
        text-align: center;
    }

    .form-container h3{
        text-align: center;
        padding: 8px;
    }

    .form-grup{
        padding: 8px;
    }

    input[type=text], input[type=password]{
        padding: 8px;
        width: 100%;
        border: 1px solid lightgray;
        border-radius: 4px;
    }

    input[type=text]:focus, input[type=password]:focus{
        outline: 0;
    }

    input[type=submit]{
        background-color: #3399ff;
        width: 25%;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        padding: 8px;
        border: none;
        margin-left: 0px;
    }

    .form-grup .fa{
        position: absolute;
        top: 50%;
        right: 8%;
        display: none;
    }

    .fa-times{
        color: red;
    }

    .fa-check{
        color: green;
    }
</style>

<script>
    export default {
        name: 'Login'
    }
</script>
