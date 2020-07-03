<template>
<html lang="en">
<head>
  <!-- Custom fonts for this template -->
<link href="../static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet"
	type="text/css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
	rel="stylesheet" type="text/css">
<link href='https://fonts.googleapis.com/css?family=Kaushan+Script'
	rel='stylesheet' type='text/css'>
<link
	href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic'
	rel='stylesheet' type='text/css'>
<link
	href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700'
	rel='stylesheet' type='text/css'>

<!-- Custom styles for this template -->
<link href="../static/css/agency.min.css" rel="stylesheet">
</head>
<body>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" id="logo">RapiSolver</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="http://localhost:8080/Inicio">Inicio Sesion</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="http://localhost:8080/Home">¿Quienes somos?</a>
    </li>
  </ul>
</nav>


<div id="mensaje2" class="alert alert-danger" role="alert" style="display: none">
   <strong> <p class="padd-top" id="mensaje"></p></strong>
</div>

<div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="logeo.userName">
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="logeo.userPassword">
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"  v-on:click.prevent="post">Sign in</button>
              <hr class="my-4">
              <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit" v-on:click.prevent="registrar"><i class="fab fa-google mr-2"></i> Sign up</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

<div class="loader" id="spinner" style="display: none"></div>



</body>
</html>

</template>

<script>
import axios from 'axios'
export default {
data(){
	return{
      logeo:{
          userName: "",
          userPassword: ""
      },
      dialog: false,
			usuarios:null

      }
	},
	mounted(){
		this.getUsuarios();
    },
    methods:{
    async getUsuarios(){
            var _this=this
            await axios.
                get('https://localhost:5001/api/rapiusers')
                    .then(response=>{
                        this.usuarios=response.data
                        
                    })
                    .catch(
                      function(error){
                        console.log(error)
                         axios.get('https://rapisolverapi.herokuapp.com/api/rapiusers')
                                .then(response=>{
                                  _this.usuarios=response.data
                                })
                        
                        
                      }
                     
                    )
		},
		post:function(){
      var _this=this
      document.getElementById('spinner').style.display ='block'
            axios.post('https://localhost:5001/api/login',{
                userName: this.logeo.userName,
                userPassword: this.logeo.userPassword
            }).then(function(data){
                console.log(data.data)
                localStorage.setItem('token', data.data.token);
                console.log(localStorage.getItem('token'))
                window.location.href="Principal/"+ data.data.id
            }).catch(function(error){
                 // console.log(error)
                 // document.getElementById('spinner').style.display ='none',
                 // document.getElementById('mensaje2').style.display ='block',
                 // document.getElementById('mensaje').innerHTML = 'Correo electronico o contraseña incorrectos.'
              
                  console.log(error)
                  axios.post('https://rapisolverapi.herokuapp.com/api/login',{
                    userName: _this.logeo.userName,
                    userPassword: _this.logeo.userPassword
                }).then(function(data){
                    console.log(data.data)
                    localStorage.setItem('token', data.data.token);
                    console.log(localStorage.getItem('token'))
                    window.location.href="Principal/"+ data.data.id
                }).catch(function(error){
                    console.log(error)
                    document.getElementById('spinner').style.display ='none',
                    document.getElementById('mensaje2').style.display ='block',
                    document.getElementById('mensaje').innerHTML = 'Correo electronico o contraseña incorrectos.'
                })
            })
		},
		registrar:function(){
		window.location.href="http://localhost:8080/agregarUsuario"
		}
    }
}
</script>

<style>
#formulario {
	position: relative !important;
	left: 30% !important;
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#ImagenLogo{
	width:400px;
    height:250px;
    border-radius:150px;
    position: relative !important;
	left: 30% !important;
    
}

:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #f1e784, #faf8ee);
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #212529;
}

.btn-facebook {
  color: white;
  background-color: #212529;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
#logo {
    color: #fed136;
    font-family: 'Kaushan Script',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
}
#logo {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}

.btn-primary {
    color: #fff;
    background-color: #fed136;
    border-color: #fed136;
}
</style>