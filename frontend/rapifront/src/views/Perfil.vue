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
<br>
<div class="container">
  <div class="card">
    <div class="front">
      <img src="../assets/img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="back">
      <h1>{{perfil.name}}<span>{{perfil.lastName}}</span></h1>
      <ul id="ui1">
        <li id="l1">{{perfil.state}}</li>
        <li id="l2">{{perfil.city}}</li>
        <li id="l3">{{perfil.address}}</li>
        </ul>
    </div>
    </div>
  </div>

  <br>

<div class="loader" id="spinner" style="display: block"></div>

<button class="tablink" @click="openPage('Contact', this, 'blue')" id="btn1">Recomendaciones</button>
<button class="tablink" @click="openPage('About', this, 'orange')" id="btn2">Servicios</button>


<div id="Contact" class="tabcontent">
	<form id="formulario" >
		
        <div class="form-group" >
          <div class="container-fluid gedf-wrapper" id="grupo3">
        <div class="row">
           
            <div class="col-md-2 gedf-main">

                <!--- \\\\\\\Post-->
                <div class="card gedf-card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Crea una recomendacion</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div class="form-group">
                                    <label class="sr-only" for="message">post</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="Escribe tu comentario." v-model="recommendation.note"></textarea>
                                </div>
                              <div class="form-group">
                                <label >Puntaje:</label><br>
                                   <select class="browser-default custom-select form-control col-lg-3 col-md-3 col-xs-12" v-model="recommendation.mark" >
                                   <option value='' selected>Seleccion el Puntaje</option>
                                   <option value="1">1</option>
                                   <option value="2">2</option>
                                   <option value="3">3</option>
                                  <option value="4">4</option>
                                   <option value="5">5</option>
                                 </select>
                                </div>

                            </div>
                           
                        </div>
                        <div class="btn-toolbar justify-content-between">
                            <div class="btn-group">
                              
                                <button v-on:click.prevent="post" class="btn btn-primary" :disabled="recommendation.mark.length==''">Agregar</button>
                            </div>
                          
                        </div>
                    </div>
                </div>
                <!-- Post /////-->
                <br>
                <!--- \\\\\\\Post-->
                <div class="card gedf-card" v-for="recomendacion in recomendaciones" :key="recomendacion.recommendationId" id="cardRecomendacion" >
                    <div class="card-header" >
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">{{recomendacion.userName}}</div>
                                    <div class="h7 text-muted">Puntaje:  {{recomendacion.mark}}</div>
                                </div>
                            </div>
                            <div>
                              
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        
                        <a class="card-link" href="#">
                            <h5 class="card-title"> Comentario:{{recomendacion.note}}</h5>
                        </a>

                       
                    </div>
                   
                </div>

 


            </div>
           
        </div>
    </div>
		
		</div>
        
        
	</form>
    <br>

</div>

<div id="About" class="tabcontent">
 <div class="card" id="cardServicio"  v-for="servicio in servicios" :key="servicio.servicioId">
  <h1 id="h1name">{{servicio.name}}</h1>
  <p class="price" >{{servicio.cost}}	S/</p>
  <p class="description" >{{servicio.description}}</p>
  <p><button v-on:click.prevent="contactar(servicio.servicioId)">Contactar</button></p>
</div>
</div>




    

	
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
            perfil: { type: Object, default: () => ({}) },
            servicios:null,
            recomendaciones:null,
            recommendation:{
                note:"",
                mark:"",
                usuarioId:"",
                customerId:""
            }
        }
    },
    mounted(){
        this.getPerfil();
        this.getServicios();
        this.getRecomendaciones();
    },
    methods:{
        async getPerfil(){
          var _this=this
            await axios.
                get('https://localhost:5001/api/suppliers/'+this.$route.params.id)
                    .then(response=>{
                        //document.getElementById('spinner').style.display ='none'
                        this.perfil=response.data
                    })
                    .catch(
                      function(error){
                        console.log(error)
                        axios.get('https://rapisolverapi.herokuapp.com/api/suppliers/'+_this.$route.params.id)
                              .then(response=>{
                                  //document.getElementById('spinner').style.display ='none'
                                  _this.perfil=response.data
                              })
                      }
                    )
        },
        salir:function(){
         window.location.href="/Inicio"
        },
        openPage:function(pageName,elmnt,color) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
          tablinks = document.getElementsByClassName("tablink");
          for (i = 0; i < tablinks.length; i++) {
              tablinks[i].style.backgroundColor = "";
            }
           document.getElementById(pageName).style.display = "block";
           elmnt.style.backgroundColor = color;
          },
        async getServicios(){
            var _this=this
            await axios.
                get('https://localhost:5001/api/servicios/searchBySupplier/'+this.$route.params.id)
                    .then(response=>{
                        this.servicios=response.data
                    })
                    .catch(
                      function(error){
                        console.log(error)
                        axios.get('https://rapisolverapi.herokuapp.com/api/servicios/searchBySupplier/'+_this.$route.params.id)
                              .then(response=>{
                                _this.servicios=response.data
                              })
                      }
                    )
        }
        ,
        async getRecomendaciones(){
          var _this=this
            await axios.
                get('https://localhost:5001/api/recommendations/'+this.$route.params.id+'/supplier')
                    .then(response=>{
                        document.getElementById('spinner').style.display ='none'
                        this.recomendaciones=response.data
                    })
                    .catch(
                      function(error){
                        console.log(error)
                        axios.get('https://rapisolverapi.herokuapp.com/api/recommendations/'+_this.$route.params.id+'/supplier')
                             .then(response=>{
                               document.getElementById('spinner').style.display ='none'
                               _this.recomendaciones=response.data
                             })
                      }
                    )
        },
        post:async function(){
          var _this=this
          document.getElementById('spinner').style.display ='block'
          axios.post('https://localhost:5001/api/recommendations',{
                 note:this.recommendation.note,
                 mark:parseInt(this.recommendation.mark),
                 supplierId:parseInt(this.$route.params.id),
                 usuarioId:parseInt(this.$route.params.id2)
          }, this.config).then(function(data){
                document.getElementById('spinner').style.display ='none'
                document.getElementById('mensaje2').style.display ='block'
                document.getElementById('mensaje').innerHTML = 'Su recomendacion se agregó con exito.';
                document.getElementById("formulario").reset();
                console.log(data)
          }).catch(
            function(error){
              console.log(error)
              axios.post('https://rapisolverapi.herokuapp.com/api/recommendations',{
                   note:_this.recommendation.note,
                   mark:parseInt(_this.recommendation.mark),
                   supplierId:parseInt(_this.$route.params.id),
                   usuarioId:parseInt(_this.$route.params.id2)
              }, _this.config).then(function(data){
                  document.getElementById('spinner').style.display ='none'
                  document.getElementById('mensaje2').style.display ='block'
                  document.getElementById('mensaje').innerHTML = 'Su recomendacion se agregó con exito.';
                  document.getElementById("formulario").reset();
                  console.log(data)
              })
            }
          )

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
        contactar:function(num){
         window.location.href="/agregarReserva/"+num+"/"+this.$route.params.id2
        }
    }
    
}

</script>

<style>
#formulario {
	position: relative !important;
	left: 35% !important;
}
#cardRecomendacion{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 590px;
  height: 180px;
  margin: auto;
  text-align: left;
  font-family: arial;
}
.description{
  color: grey;
  font-size: 15px;
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

#h1name{
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: rgb(0, 0, 0);
}
#cardServicio {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 350px;
  height: 215px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #fed136;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
  #btn1 {
        position:absolute;
        right: 25%;
        
    }
   #btn2 {
        position:absolute;
        right: 50%;
        
    }
    
.container {
  width: 600px;
  height: 340px;
  margin: 0 auto; 
  position: relative;
  -webkit-perspective: 1000;
	-moz-perspective: 1000;
	perspective: 1000;
	-webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d; 
  transform-style: preserve-3d;
  -webkit-perspective-origin: right;
  -moz-perspective-origin: right;
  perspective-origin: right;
}
.card {
  width: 600px;
  height: 340px;
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, .7), 0 17px 17px 0 rgba(0, 0, 0, .5);
  position: relative; 
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transform-origin: 100% 0%;
  -moz-transform-origin: 100% 0%;
  -ms-transform-origin: 100% 0%;
  transform-origin: 100% 0%;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d; 
  transform-style: preserve-3d;
  transition: .8s ease-in-out;
}

.logo {
  width: 200px;
  height: 200px;
  position: relative;
  background:
  linear-gradient(45deg, #F5AF69 50%, #F4EED7 50.9%),
  linear-gradient(90deg, #FC5135 50%, #4E203C 50%),
  linear-gradient(-45deg, #F5AF69 50%, #E8D9A0 50.9%), 
  linear-gradient(#FC5135 50%, #4E203C 50%),
  linear-gradient(-45deg, #F5AF69 50%, #E8D9A0 50.9%),
  linear-gradient(90deg, #FC5135 50%, #4E203C 50%),
  linear-gradient(45deg, #FC5135 50%, #F5AF69 50.9%);
  background-size: 50px 50px, 100px 50px, 50px 50px, 200px 100px, 50px 50px, 100px 50px, 50px 50px;
  background-repeat: no-repeat;
  background-position: 0 0, 50px 0px, 150px 0, 0 50px, 0 150px, 50px 150px, 150px 150px;
}
.logo:before {
  content: "";
  position: absolute;
  top: 30px;
  left: 30px;
  width: 140px;
  height: 140px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  background: linear-gradient(45deg, #F4EED7 50%, #E8D9A0 50%);
}
.logo:after {
  content: "";
  position: absolute;
  top: 55px;
  left: 55px;
  width: 90px;
  height: 90px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  background: linear-gradient(45deg, #FC5135 50%, #4E203C 49.9%),
  linear-gradient(-45deg, #F5AF69 50%, transparent 50%),
  linear-gradient(#FC5135 50%, #FC5135 50%),
  linear-gradient(-45deg, #4E203C 50%, transparent 50%);
  background-size: 45px 45px;
  background-repeat: no-repeat;
  background-position: 0 0, 0 45px, 45px 45px, 45px 0;
  border-radius: 0 50% 50% 50%;
}
.logo span {
  display: block;
  background: #4E203C;
  width: 29px;
  height: 32px;
  position: absolute;
  top: 99.5px;
  left: 130px;
  border-radius: 0 50% 50% 0;
}
.logo span:before {
  content: "";
  width: 10px;
  height: 10px;
  background: #E8D9A0;
  border-radius: 50%;
  position: absolute;
  top: 11px;
  left: 10px;
  z-index: 2;
}
.front, .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
.front {
  display:-webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  z-index: 2;
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  font-family: 'Arimo', sans-serif;
}
.container:hover .card {
  -webkit-transform: rotateY(180deg) translateX(100%);
  -moz-transform: rotateY(180deg) translateX(100%);
  -ms-transform: rotateY(180deg) translateX(100%);
  transform: rotateY(180deg) translateX(100%);
  cursor: pointer;
}
#ui1 {
  margin: 0;
  width: 100%;
  list-style: none;
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 0 1%;
}
#ui1:after {
  content: '';
  display: table;
  clear: both;
}

h1 {
  color: #fed136;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1;
  margin-top: 110px;
  text-align: center;
  font-size: 40px;
}
h1 span {
  color: #4E203C;
  display: block;
  font-size: .45em;
  letter-spacing: 3px;
}
h1 i {
  font-style: normal;
  text-transform: none;
  font-family: 'Playfair Display', serif;
}

#l1 {
  width: 31.3333333333%;
  margin: 0 1%;
  float: left;
  padding: 10px;
  border: 2px solid #fed136;
  border-radius: 4px;
  position: relative;
  text-align: center;
  color: #4E203C;
  content: "\f095";
}
#l1:before {
  position: absolute;
  top: -25px;
  left: 50%;
  margin-left: -15px;
  width: 30px;
  height:30px;
  background: #fed136;
  color: white;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  font-family: FontAwesome;
  content: "\f095";
}
#l2 {
  width: 31.3333333333%;
  margin: 0 1%;
  float: left;
  padding: 10px;
  border: 2px solid #fed136;
  border-radius: 4px;
  position: relative;
  text-align: center;
  color: #4E203C;
  content: "\f003";
}
#l2:before {
  position: absolute;
  top: -25px;
  left: 50%;
  margin-left: -15px;
  width: 30px;
  height:30px;
  background: #fed136;
  color: white;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  font-family: FontAwesome;
  content: "\f003";
}
#l3 {
  width: 31.3333333333%;
  margin: 0 1%;
  float: left;
  padding: 10px;
  border: 2px solid #fed136;
  border-radius: 4px;
  position: relative;
  text-align: center;
  color: #4E203C;
  content: "\f0c1";
}
#l3:before {
  position: absolute;
  top: -25px;
  left: 50%;
  margin-left: -15px;
  width: 30px;
  height:30px;
  background: #fed136;
  color: white;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  font-family: FontAwesome;
  content: "\f0c1";
  
}

* {box-sizing: border-box}

/* Set height of body and the document to 100% */
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial;
}

/* Style tab links */
.tablink {
  background-color: #212529;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: 25%;
}

.tablink:hover {
  background-color: #777;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
  color: black;
  display: none;
  padding: 100px 20px;
  height: 100%;
}


#Contact {background-color: white;}
#About {background-color: white;}

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
#grupo3{
    position:absolute;
    left:-35px;


}
</style>