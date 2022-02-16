window.onload = function(){

    document.getElementById("submit1").onclick = function(){
        this.disabled = true;

        //Paso 1: crear el objeto XMLHttpRequest
        let usuario; //variable que va a almacenar el objeto
        if(window.XMLHttpRequest){
            usuario = new XMLHttpRequest();
        }
        else{
            usuario = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Paso 2: crear la peticion de datos
        //Parámetros: el verbo, la direccion del recurso
        usuario.open('GET',"http://localhost:3000/usuarios");

        //Paso 3: crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
        usuario.addEventListener('load',function(datos){
            let respuesta = JSON.parse(datos.target.response);
            document.getElementById("submit1").disabled = false;
            var formulario= document.getElementById("formu");
            var valor=formulario.id_usuario.value;

            
        for (let i = 0; i < respuesta.length; i++) {
            
            document.getElementById("submit2").disabled=false;
               for (const dato in respuesta[i]) {
                  
                if (respuesta[i][dato]==valor){
                    var camponombre=respuesta[i].nombre;
                    var campoapellido1=respuesta[i].apellido1;
                    var campoapellido2=respuesta[i].apellido2;
                    var campofecha=respuesta[i].fecha_alta
                    var campopass=respuesta[i].pass;
                    var campoadministrador=respuesta[i].administrador;
                    formulario.nombre.value=camponombre;
                    formulario.apellido1.value=campoapellido1;
                    formulario.apellido2.value=campoapellido2;
                    formulario.alta.value=campofecha;
                    formulario.password.value=campopass;
                    formulario.administrador.value=campoadministrador;

                }
           
            }
            
        }    
    

           

/*
            for (const key in respuesta) {  //mostramos cada objeto
                console.log(respuesta[key])
            }
        

            for (const key in respuesta) { //mostramos los valores de cada objeto
                for (const dato in respuesta[key]) {
                    console.log(respuesta[key][dato]);
                }
              
            }
*/
        
        });

        //Paso 4: enviar la peticion
        usuario.send();

      
    }



 //mostrar todos los usuarios
    document.getElementById("allusuarios").onclick = function(){
        

        //Paso 1: crear el objeto XMLHttpRequest
        let usuario1; //variable que va a almacenar el objeto
        if(window.XMLHttpRequest){
            usuario1 = new XMLHttpRequest();
        }
        else{
            usuario1 = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Paso 2: crear la peticion de datos
        //Parámetros: el verbo, la direccion del recurso
        usuario1.open('GET',"http://localhost:3000/usuarios");

        //Paso 3: crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
        usuario1.addEventListener('load',function(datos){
            let respuesta1 = JSON.parse(datos.target.response);
            
            
        

            var botoncito=document.getElementById("allusuarios");

            botoncito.onclick= function(){

                if(document.getElementsByClassName("userrdiv").length==0){//Si no he creado los div los creo

                    var divv;
                    var bodyy=document.body;
                    bodyy.className=("hola")
                    var textoo="";
                    var pe;
                    textoo.className=("usuarioo")
                    for (const key in respuesta1) {
                        pe=document.createElement("p");
                        pe.className=("usuarioo")
                        divv=document.createElement("div");
                        divv.className=("userrdiv")
                        
                        for (const dato in respuesta1[key]) {
                            
                            

                            if (dato==("administrador")){
                                textoo=respuesta1[key][dato] ;
                                pe.innerHTML+=dato + ": " + textoo + "<br>";
                            }
                            
                            else{
                                textoo=respuesta1[key][dato] ;
                                pe.innerHTML+=dato + ": " +textoo + " || ";
                            }
                        }
                        
                        divv.appendChild(pe);
                        var divprinci=document.querySelector(".contenedorinfo");
                        divprinci.appendChild(divv)
                        bodyy.appendChild(divprinci);
                    }
                }
                else{//Si estan creados los borro

                    var dyv= document.getElementsByClassName("contenedorinfo")[0];
                    dyv.innerHTML="";
                    
                    //Borrar los div con la clase userdiv
                }
            }
            
/*
            for (const key in respuesta) {  //mostramos cada objeto
                console.log(respuesta[key])
            }
        

            for (const key in respuesta) { //mostramos los valores de cada objeto
                for (const dato in respuesta[key]) {
                    console.log(respuesta[key][dato]);
                }
              
            }
*/
        
        });

        //Paso 4: enviar la peticion
        usuario1.send();

      
    }




    document.getElementById("submit2").onclick = function(){
        this.disabled=true;
        

        //Paso 1: crear el objeto XMLHttpRequest
        let vehiculos; //variable que va a almacenar el objeto
        if(window.XMLHttpRequest){
            vehiculos = new XMLHttpRequest();
        }
        else{
            vehiculos = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //Paso 2: crear la peticion de datos
        //Parámetros: el verbo, la direccion del recurso
        var formulario1= document.getElementById("formu1");
        var valorvehiculo=formulario1.idvehiculo.value;//menos uno para que no falle y ponga el siguiente en vez de el que es

        vehiculos.open('GET',"http://localhost:3000/vehiculos");

        
       

        //Paso 3: crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
        vehiculos.addEventListener('load',function(datos){
            let respuestaa = JSON.parse(datos.target.response);
            console.log(respuestaa)
            
         
        for (let i = 0; i < respuestaa.length; i++) {
            
            document.getElementById("submit2").disabled=false;
               for (const dato in respuestaa[i]) {
                  
                if (respuestaa[i][dato]==valorvehiculo){
    
                    console.log("hola");
                    var campoidusuario=respuestaa[i].id_usuario;
                    var campomarca=respuestaa[campoidusuario].marca;
                    var campomodelo=respuestaa[campoidusuario].modelo;
                    var campomatricula=respuestaa[campoidusuario].matricula
                    var campocombustible=respuestaa[campoidusuario].combustible;
                    var campotipomotor=respuestaa[campoidusuario].tipo_motor;
                    formulario1.id_usuario.value=campoidusuario;
                    formulario1.marca.value=campomarca;
                    formulario1.modelo.value=campomodelo;
                    formulario1.matricula.value=campomatricula;
                    formulario1.combustible.value=campocombustible;
                    formulario1.tipo_motor.value=campotipomotor;
                }
               
            }
            
        }    

            


           

/*
            for (const key in respuesta) {  //mostramos cada objeto
                console.log(respuesta[key])
            }
        

            for (const key in respuesta) { //mostramos los valores de cada objeto
                for (const dato in respuesta[key]) {
                    console.log(respuesta[key][dato]);
                }
              
            }
*/
        
        });

        //Paso 4: enviar la peticion
        vehiculos.send();

      
    }
   


document.getElementById("submit3").onclick = function(){
    this.disabled=true;
    

    //Paso 1: crear el objeto XMLHttpRequest
    let servicios; //variable que va a almacenar el objeto
    if(window.XMLHttpRequest){
        servicios = new XMLHttpRequest();
    }
    else{
        servicios = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //Paso 2: crear la peticion de datos
    //Parámetros: el verbo, la direccion del recurso
    var formulario2= document.getElementById("formu2");
    var valorservicio=formulario2.id_servicio.value;

    servicios.open('GET',"http://localhost:3000/servicios");

    
   

    //Paso 3: crear la funcion para manejar los datos que me llegan (se asocia al evento LOAD)
    servicios.addEventListener('load',function(datos){
        let respuestaaa = JSON.parse(datos.target.response);
        console.log(respuestaaa)
        
     
    for (let i = 0; i < respuestaaa.length; i++) {
        
        document.getElementById("submit3").disabled=false;
           for (const dato in respuestaaa[i]) {
              
            if (respuestaaa[i][dato]==valorservicio){

                console.log("hola");
                var campoidvehiculo=respuestaaa[i].id_vehiculo;
                var campomatricula=respuestaaa[i].matricula;
                var camposervicio=respuestaaa[i].servicio;
                var campoultima=respuestaaa[i].ultima_revision;
                var campoproxima=respuestaaa[i].proxima_revision;
                var campocomentarios=respuestaaa[i].comentarios;
                formulario2.id_vehiculo.value=campoidvehiculo;
                formulario2.matricula.value=campomatricula;
                formulario2.servicio.value=camposervicio;
                formulario2.ultima_revision.value=campoultima;
                formulario2.proxima_revision.value=campoproxima;
                formulario2.comentarios=campocomentarios;
                
            }
           
        }
        
    }    

        


       

/*
        for (const key in respuesta) {  //mostramos cada objeto
            console.log(respuesta[key])
        }
    

        for (const key in respuesta) { //mostramos los valores de cada objeto
            for (const dato in respuesta[key]) {
                console.log(respuesta[key][dato]);
            }
          
        }
*/
    
    });

    //Paso 4: enviar la peticion
    servicios.send();

  
}
    let bmapa= document.getElementById("mapa")
    bmapa.style.setProperty("display","none")
    document.getElementById("Bmapa").onclick= function(){
        let bmapa= document.getElementById("mapa")
        let stylo = window.getComputedStyle(bmapa);
        stylo =stylo.getPropertyValue("display");

        if(stylo=="none"){
            bmapa.style.setProperty("display","block")
        }
        else{
            bmapa.style.setProperty("display","none")
        }
    }


}


