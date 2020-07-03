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
  <a class="navbar-brand" id="logo" href="http://localhost:8080/Inicio">RapiSolver</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="http://localhost:8080/Inicio">Inicio Sesion</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">¿Quienes somos?</a>
    </li>
  </ul>
</nav>

    <div id="mensaje2" class="alert alert-success " style="display: none">
            <strong> <p class="padd-top" id="mensaje"></p></strong>
    </div>
    <br>

    <div id="labelCrearUsuario"><h2>Registrar Usuario</h2></div><br>
 
 
	<form id="formulario" v-on:submit.prevent="post" class="form-signin" >
        
		<div class="form-group" >
			<label >Nombre:</label> <input type="text" class="form-control col-lg-3 col-md-3 col-xs-12" placeholder="Ingrese Nombres" v-model="usuario.name" minlength="5" maxlength="40" required pattern="[A-Za-z]+"> 
		</div>
		<div class="form-group" >
			<label >Apellido:</label> <input type="text" class="form-control col-lg-3 col-md-3 col-xs-12" placeholder="Ingrese Apellidos" v-model="usuario.lastName"  minlength="5" maxlength="40" required pattern="[A-Za-z]+">  
		</div>
		<div class="form-group" >
			<label >Email:</label> <input type="email" class="form-control col-lg-3 col-md-3 col-xs-12" placeholder="Ingrese un email" v-model="usuario.email"> 
		</div>
        <div class="form-group" >
			<label >Contraseña::</label> <input type="password" class="form-control col-lg-3 col-md-3 col-xs-12" placeholder="Ingrese una contraseña" v-model="usuario.contraseña" minlength="5" maxlength="40" > 
		</div> 
        <div class="form-group">
            <button  type="submit"  class="btn btn-primary btn-lg">Agregar</button>  
            <br>
            <br>
            <a class="enu" href="/Inicio" style="color:#000000">No , gracias</a>   
        </div>  
	</form>
  <div class="loader" id="spinner" style="display: none"></div>


</body>
</html>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            usuario:{
                 name: "",
                 lastName: "",
                 email: "",
                 phone: "",
                 age: "",
                 genger: "",
                 country: "",
                 state: "",
                 city: "",
                 address: "",
                 contraseña:""
            },
            

        }
    },
    methods:{
         post: function(){
          //Se activa el spinner
            document.getElementById('spinner').style.display ='block'
            //Guarda el this si por si se pierde
            var _this=this
             axios.post('https://localhost:5001/api/customer',{
                name: this.usuario.name,
                 lastName: this.usuario.lastName,
                 email: this.usuario.email,
                 phone: this.usuario.phone,
                 age: 0,
                 gender: this.usuario.genger,
                 country: this.usuario.country,
                 state: this.usuario.state,
                 city: this.usuario.city,
                 address: this.usuario.address,
                 contraseña:this.usuario.contraseña
            }).then(function(data){
                //Si logra conectar con la primera api se apaga el spinner
                document.getElementById('spinner').style.display ='none'
                document.getElementById('mensaje2').style.display ='block'
                 document.getElementById('mensaje').innerHTML = 'Se acaba de registrar con exito , si desea inicie sesion.';
                 document.getElementById("formulario").reset();
                console.log(data);
            }).catch(function(error){
              console.log(error)
              axios.post('https://rapisolverapi.herokuapp.com/api/customer',{
                 name: _this.usuario.name,
                 lastName: _this.usuario.lastName,
                 email: _this.usuario.email,
                 phone: _this.usuario.phone,
                 age: 0,
                 gender: _this.usuario.genger,
                 country: _this.usuario.country,
                 state: _this.usuario.state,
                 city: _this.usuario.city,
                 address: _this.usuario.address,
                 contraseña:_this.usuario.contraseña
              }).then(function(data){
                 document.getElementById('spinner').style.display ='none'
                 document.getElementById('mensaje2').style.display ='block'
                 document.getElementById('mensaje').innerHTML = 'Se acaba de registrar con exito , si desea inicie sesion.';
                 document.getElementById("formulario").reset();
                 console.log(data);
              })
                    
            })
            

        },
        salir:function(){
         window.location.href="/"
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
#labelCrearUsuario{
	position: relative !important;
	left: 30% !important;
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

body {
  background: #007bff;
  background: linear-gradient(to right, #f1e784, #faf8ee);
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
#enu{
  position: relative;
  left: 90px;
}

</style>