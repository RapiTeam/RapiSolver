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
      <a class="nav-link" href="http://localhost:8080/Inicio">Iniciar sesión</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">¿Quienes somos?</a>
    </li>
  </ul>
</nav>

<div class="grid-container">
  <div class="item1"><p>
<a class="text" id="texto"> Publica tus servicios</a>
</p>
<a class="text" id="texto"> Ahorra tiempo y gana</a>
<p>
   <a class="text" id="texto">dinero</a>
</p></div>
  <div class="item2">2</div>
  <div class="item3">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="text" id ="texto2"> Registrate Ahora </a>
    </nav>
    </div>  
</div>

  </body>
  </html>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body {
  background: #007bff;
  background: linear-gradient(to right, #f1e784, #faf8ee);
}

.card-signin .card-body {
  padding: 2rem;
}


#ImagenLogo{
	width:400px;
    height:250px;
    border-radius:150px;
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
#texto{
   color:black;
   font-size:200%;
   font: italic bold 40px/40px Georgia, serif;
}
#texto2{
   color: white;
   font-size:200%;
   font: italic bold 40px/40px Georgia, serif;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  background-color:linear-gradient(to right, #f1e784, #faf8ee);
  padding: 10px;
}

.grid-container > div {
  background-color: linear-gradient(to right, #f1e784, #faf8ee);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item1 {
  grid-area: 1 / 1 / span 10 / span 2;
}
.item2 {
  grid-area: 11 / 1 / span 10 / span 2;
}
.item3 {
  grid-area: 1 / 3 / span 20 / span 2;
}
</style>
