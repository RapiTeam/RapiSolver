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

<div id="mensaje2" class="alert alert-success " style="display: none">
            <strong> <p class="padd-top" id="mensaje"></p></strong>
</div>

<br>

<div class="container">
<div>
<div id="labelCrearUsuario"><h2>Registrar Reserva</h2></div><br>
<form id="formulario" >
		<div class="form-group">
			<label >Descripcion:</label> <br><textarea  class="form-control " name="comentarios" rows="10" cols="40" v-model="reserva.note">Escribe aquí tus comentarios</textarea>   
		</div>
        <div class="form-group" >
			<label >Fecha:</label><br>
           <input class="form-control" type="date" name="fecha" v-model="reserva.fecha" min="2018-01-01">
		</div>
         <button v-on:click.prevent="post" class="btn btn-primary">Agregar</button>
	</form>
</div>
<div class="map"> 
<gmap-map
  :center="{lat:coordinatesPeru.lat, lng:coordinatesPeru.lng}"
  :zoom="7"
  style="min-width:420px;min-height:500px"
   @click="updateCoordinates"
>
 <gmap-marker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @drag="updateCoordinates" />
</gmap-map>
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
            config:{
                headers:{
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            },
            coordinatesPeru:{
                lat:-12.0431800,
                lng:-77.0282400
                
            },
            markers: [{
                position: {
                    lat: -12.0431800,
                    lng: -77.0282400
                }
            }],
             reserva:{
                 servicioId:"",
                 usuarioId:"",
                 supplierId:"",
                 fecha:"",
                 note:""
             },
             detalles:null

        }
    },
    created(){
        this.$getLocation({})
        .then(coordinates =>
        {
            this.coordinates = coordinates;
        });
    },
  mounted(){
        this.getDetalles();
  },  
  methods:{
      updateCoordinates(location) {
        this.markers[0].position.lat = location.latLng.lat();
        this.markers[0].position.lng = location.latLng.lng();

        },
        rapi:function(){
			window.location.href="/Principal/"+this.$route.params.id2
        },
        buscarServicio:function(){
			window.location.href="/listarServicios/"+this.$route.params.id2
        },
        publicarServicio:function(){
			window.location.href="/agregarServicio/"+this.$route.params.id2
         },
        buscarPersonas:function(){
			window.location.href="/buscarPersonas/"+this.$route.params.id2
        },
        miperfil:function(){
			window.location.href="/miPerfil/"+this.$route.params.id2
        },
        async getDetalles(){
            var _this=this
            await axios.
                get("https://localhost:5001/api/servicedetails/"+this.$route.params.id)
                    .then(response=>{
                        console.log(response.data)
                        this.detalles=response.data;                        
                    })
                    .catch(
                        function(error){
                            console.log(error)
                            axios.get("https://rapisolverapi.herokuapp.com/api/servicedetails/"+_this.$route.params.id)
                                 .then(response=>{
                                     console.log(response.data)
                                     _this.detalles=response.data;  
                                 })
                        }
                    )
        },
        post:async function(){
            var _this=this
            
            document.getElementById('spinner').style.display ='block'
            axios.post('https://localhost:5001/api/reservations',{
                servicioId: parseInt(this.detalles[0].servicioId),
                usuarioId: parseInt(this.$route.params.id2),
                note: this.reserva.note,
                supplierId: parseInt(this.detalles[0].supplierId),
                fecha: this.reserva.fecha,
                ubicacionLatitud: this.markers[0].position.lat,
                ubicacionLongitud: this.markers[0].position.lng
            }, this.config).then(function(data){
                document.getElementById('spinner').style.display ='none'
                document.getElementById('mensaje2').style.display ='block'
                document.getElementById('mensaje').innerHTML = 'Se agregó la reserva con exito.';
                document.getElementById("formulario").reset();
                console.log(data);
            }).catch(
                function(error){
                    console.log(error);
                    axios.post('https://rapisolverapi.herokuapp.com/api/reservations',{
                        servicioId: _this.detalles[0].servicioId,
                        usuarioId: parseInt(_this.$route.params.id2),
                        note: _this.reserva.note,
                        supplierId: _this.detalles[0].supplierId,
                        fecha: _this.reserva.fecha,
                        ubicacionLatitud: _this.markers[0].position.lat,
                        ubicacionLongitud: _this.markers[0].position.lng
                    }, _this.config).then(function(data){
                        document.getElementById('spinner').style.display ='none'
                        document.getElementById('mensaje2').style.display ='block'
                        document.getElementById('mensaje').innerHTML = 'Se agregó la reserva con exito.';
                        document.getElementById("formulario").reset();
                        console.log(data);
                    })
                }
            )
            
        },
        salir:function(){
         window.location.href="/Inicio"
        }
  }

}
</script>

<style>
#formulario {
    margin-top:20px;
}
.map{
    margin-top:20px;
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
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  
  margin: 0 auto;
}
.container{
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>