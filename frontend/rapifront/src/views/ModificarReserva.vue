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
    <a class="navbar-brand" id="logo" href="#" v-on:click.prevent="rapi">RapiSolver</a>
     <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                   <a class="nav-link" href="" v-on:click.prevent="miperfil">Mi perfil</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#"  v-on:click.prevent="publicarServicio">Publicar Servicio</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="" v-on:click.prevent="buscarServicio">Buscar Servicio</a>
                </li>
               <li class="nav-item">
                  <a class="nav-link" href="" v-on:click.prevent="buscarPersonas">Buscar Proveedor</a>
               </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="" v-on:click.prevent="salir" class="btn btn-info btn-lg" style="background-color:#6c757d; border-color:#6c757d" > <span class="glyphicon glyphicon-log-out"></span> Salir </a>
                </li>
            </ul>
        </div>
  
</nav>





</body>
</html>
</template>

<script>
export default {
methods:{
        rapi:function(){
			window.location.href="/Principal/"+this.$route.params.id
        },
        buscarServicio:function(){
			window.location.href="/listarServicios/"+this.$route.params.id
        },
        publicarServicio:function(){
			window.location.href="/agregarServicio/"+this.$route.params.id
    },
    buscarPersonas:function(){
			window.location.href="/buscarPersonas/"+this.$route.params.id
        },
        miperfil:function(){
			window.location.href="/miPerfil/"+this.$route.params.id
        },
        salir:function(){
         window.location.href="/Inicio"
        }
    }
}
</script>

<style>
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
</style>