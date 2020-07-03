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
                  <a href="" v-on:click.prevent="salir" class="btn btn-info btn-lg" > <span class="glyphicon glyphicon-log-out"></span> Salir </a>
                </li>
            </ul>
        </div>
  
</nav>
 <div id="mensaje2" class="alert alert-success " style="display: none">
            <strong> <p class="padd-top" id="mensaje"></p></strong>
</div>
<div id="mensaje4" class="alert alert-danger " style="display: none">
            <strong> <p class="padd-top" id="mensaje3"></p><a id="Enlace" href="" v-on:click.prevent="aqui"> aqui</a></strong>
</div>
<br>
<div id="labelCrearUsuario"><h2>Editar Servicio</h2></div><br>
<form id="formulario" v-on:submit.prevent="edit" >
		<div class="form-group" >
			<label >Nombre:</label> <input  type="text" id="lbl1" class="form-control col-lg-3 col-md-3 col-xs-12"  placeholder="Ingrese nombre del servicio"  v-model="servicio.name" minlength="5" maxlength="40" required pattern="[A-Za-z]+" autocomplete="off"> 
		</div>
		<div class="form-group" >
			<label >Descripción:</label> <br><textarea id="lbl2" class="form-control col-lg-3 col-md-3 col-xs-12" name="comentarios" rows="10" cols="40" v-model="servicio.description" minlength="5" maxlength="100" required pattern="[A-Za-z]+">Escribe aquí tus comentarios</textarea>   
		</div>
		<div class="form-group" >
			<label >Costo:</label> <input type="number" id="lbl3" class="form-control col-lg-3 col-md-3 col-xs-12" placeholder="Ingrese el costo del servicio" v-model="servicio.cost" > 
		</div>
        <div class="form-group" >
			<label >Categoría:</label><br>
           <select class="browser-default custom-select form-control col-lg-3 col-md-3 col-xs-12" v-model="servicio.categoryName">
                <option selected >Selección la categoría</option>
                <option  v-for="categoria in categorias" :key="categoria.serviceCategoryId">{{categoria.categoryName}}</option>
            </select>
		</div>
		<div class="form-group" >
			
		</div>
         <button type="submit" class="btn btn-primary">Editar</button>
	</form>
<div class="loader" id="spinner" style="display: block"></div>

</body>
</html>
</template>

<script>
import axios from 'axios'
export default {
  data(){
        return{
            config:{
                headers:{
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            },
            servicio:{
                 name: "",
                 description: "",
                 cost: "",
                 categoryName: ""
            },
            categorias:null,
            serviciobefore:null

        }
    },
    mounted(){
        this.getCategorias();
        this.getServicio();
        
    },
    methods:{
        async getCategorias(){
            var _this=this
            await axios.
                get('https://localhost:5001/api/serviceCategory')
                    .then(response=>{
                        this.categorias=response.data;
                        
                    })
                    .catch(
                        function(error){
                            console.log(error)
                            axios.get('https://rapisolverapi.herokuapp.com/api/serviceCategory')
                                  .then(response=>{
                                      _this.categorias=response.data
                                  })
                        }
                    )
        },
        salir:function(){
         window.location.href="/Inicio"
        },
        async getServicio(){
            var _this=this
            await axios.
                get('https://localhost:5001/api/servicedetails/'+this.$route.params.id2)
                    .then(response=>{
                        this.serviciobefore=response.data;
                        console.log(response.data)
                        document.getElementById('lbl1').value =response.data[0].serviceName;
                        document.getElementById('lbl2').value =response.data[0].description;
                        document.getElementById('lbl3').value =response.data[0].cost;
                      
                    })
                    .catch(
                        function(error){
                            console.log(error)
                            axios.get('https://rapisolverapi.herokuapp.com/api/servicedetails/')
                                  .then(response=>{
                                        document.getElementById('spinner').style.display ='none'
                                        _this.serviciobefore=response.data;
                                        console.log(response.data)
                                        document.getElementById('lbl1').value =response.data[0].serviceName;
                                        document.getElementById('lbl2').value =response.data[0].description;
                                        document.getElementById('lbl3').value =response.data[0].cost;
                                  })
                        }
                    )
             
        },
        post:async function(){

            
        },
        rapi:function(){
            window.location.href="/Principal/"+this.$route.params.id
        },
        buscarServicio:function(){
            window.location.href="/listarServicios/"+this.$route.params.id
        },
        buscarPersonas:function(){
            window.location.href="/buscarPersonas/"+this.$route.params.id
        },
        miperfil:function(){
			window.location.href="/miPerfil/"+this.$route.params.id
        },
        edit:async function(){
            if(this.servicio.categoryName=='Selección la categoría'){
                document.getElementById('mensaje4').style.display ='block'
                document.getElementById('Enlace').style.display ='none'
                document.getElementById('mensaje3').innerHTML = 'Debe Seleccionar una categoria';
            }else{
            document.getElementById('spinner').style.display ='block'
            var _this=this
            await axios.put('https://localhost:5001/api/servicios',{
                 servicioId: parseInt(this.$route.params.id2),
                name: this.servicio.name,
                description: this.servicio.description,
                cost: parseInt(this.servicio.cost),
                categoryName:this.servicio.categoryName
            }, this.config).then(function(data){
                 document.getElementById('mensaje4').style.display ='none'
                document.getElementById('Enlace').style.display ='none'
                document.getElementById('spinner').style.display ='none'
                 document.getElementById('mensaje2').style.display ='block'
                document.getElementById('mensaje').innerHTML = 'Se actualizo su servicio con exito.';
                document.getElementById("formulario").reset();
                console.log(data)
                console.log(data);
            }).catch(
                function(error){
                    console.log(error)
                    axios.put('https://rapisolverapi.herokuapp.com/api/servicios',{
                         servicioId: parseInt(_this.$route.params.id2),
                         name: _this.servicio.name,
                        description: _this.servicio.description,
                        cost: parseInt(_this.servicio.cost),
                        categoryName:_this.servicio.categoryName
                    }, _this.config).then(function(data){
                         document.getElementById('mensaje4').style.display ='none'
                        document.getElementById('Enlace').style.display ='none'
                        document.getElementById('spinner').style.display ='none'
                        document.getElementById('mensaje2').style.display ='block'
                        document.getElementById('mensaje').innerHTML = 'Se actualizo su servicio con exito.';
                        document.getElementById("formulario").reset();
                        console.log(data)
                        console.log(data);
                    })
                }
            )

            }

    }
    }
        
}
</script>

<style>
#formulario {
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
.btn-primary {
    color: #fff;
    background-color: #fed136;
    border-color: #fed136;
}
.btn-info {
    color: #fff;
    background-color: #fed136;
    border-color: #fed136;
}
body{
    background: #007bff;
    background: linear-gradient(to right, #f1e784, #faf8ee);

}
</style>