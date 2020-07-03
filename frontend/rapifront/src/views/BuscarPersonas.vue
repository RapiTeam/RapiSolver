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
    <a class="navbar-brand" id="logo" href="#" v-on:click.prevent="viñeta">RapiSolver</a>
     <div id="navbarNavDropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                   <a class="nav-link" href="" v-on:click.prevent="miperfil">Mi perfil</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#"  v-on:click.prevent="post">Publicar Servicio</a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="" v-on:click.prevent="post2">Buscar Servicio</a>
                </li>
               <li class="nav-item">
                  <a class="nav-link" href="" v-on:click.prevent="">Buscar Proveedor</a>
               </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="" v-on:click.prevent="salir" class="btn btn-info btn-lg" > <span class="glyphicon glyphicon-log-out"></span> Salir </a>
                </li>
            </ul>
        </div>
  
</nav>

<input type="text" id="myInput"  v-on:keyup="myFunction" placeholder="Buscar por nombres">

<table id="myTable">
  <tr class="header" style="background-color:#fed136">
    <th ></th>
    <th >Nombre</th>
    <th >Apellido</th>
    <th >Género</th>
    <th >Edad</th>
    <th >Detalle</th>
  </tr>
  <div class="loader" id="spinner" style="display: block"></div>
 <tbody >
				<tr v-for="supplier in suppliers" :key="supplier.supplierId">
                <td ><img src="../assets/img_avatar.png" alt="Avatar" width="50px" height="50px"></td>
                <td >{{supplier.name}}</td>
								<td >{{supplier.lastName}}</td>
								<td >{{supplier.genger}}</td>
								<td >{{supplier.age}}</td>
                <td><a :href="'/perfil/' + supplier.supplierId +'/'+ id2" class="btn btn-primary">Ver perfil</a></td>														
					</tr>
</tbody>
</table>




</body>
</html>
</template>

<script>
import axios from 'axios'
export default {
  data(){
        return{
      suppliers:null,
      id2:this.$route.params.id
			
        }
    },
    mounted(){
        this.getSuppliers();
    },
  methods:{
        post:function(){
            window.location.href="/agregarServicio/"+this.$route.params.id
        },
        post2:function(){
            window.location.href="/listarServicios/"+this.$route.params.id
        },
        viñeta:function(){
            window.location.href="/Principal/"+this.$route.params.id
        },
        miperfil:function(){
			window.location.href="/miPerfil/"+this.$route.params.id
        },
        myFunction:function(){
           var input, filter, table, tr, td, i, txtValue;
           input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");

  
          for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[1];
              if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
               }
             }
           }
        } ,
        async getSuppliers(){
            var _this=this
            await axios.
                get('https://localhost:5001/api/suppliers')
                    .then(response=>{
                       document.getElementById('spinner').style.display ='none'
                        this.suppliers=response.data
                    })
                    .catch(
                       function(error){
                         console.log(error)
                         axios.get('https://rapisolverapi.herokuapp.com/api/suppliers')
                              .then(response=>{
                                document.getElementById('spinner').style.display ='none'
                                _this.suppliers=response.data
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
#myInput {
  background-image: url('/css/searchicon.png'); 
  background-position: 10px 12px; 
  background-repeat: no-repeat; 
  width: 60%;
  font-size: 15px; 
  padding: 12px 20px 12px 40px; 
  border: 1px solid #ddd; 
  margin-bottom: 12px; 
  margin-left: 271px; 
  margin-top: 40px;
  
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  
  margin: 0 auto;
  margin-left: 180%;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#myTable {
  border-collapse: collapse; 
  width: 60%; 
  border: 1px solid #ddd; 
  font-size: 18px; 
  margin: 0 auto
}

#myTable th, #myTable td {
  text-align: left; 
  padding: 12px; 
}

#myTable tr {
  border-bottom: 1px solid #ddd;
}

#myTable tr.header, #myTable tr:hover {
  background-color: #f1f1f1;
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
    background-color: #343a40!important;
    border-color: #343a40!important;
}


body {
  background: #007bff;
  background: linear-gradient(to right, #f1e784, #faf8ee);
}
.btn-info {
    color: #fff;
    background-color: #fed136;
    border-color: #fed136;
}

</style>