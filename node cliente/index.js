window.onload = function(){

    document.querySelector("input[type='submit']").onclick = function(){
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
            document.querySelector("input[type='submit']").disabled = false;

            
        
            var formulario= document.getElementById("formu");
            var valor=formulario.id_usuario.value;
            var camponombre=respuesta[valor].nombre;
            var campoapellido1=respuesta[valor].apellido1;
            var campoapellido2=respuesta[valor].apellido2;
            var campofecha=respuesta[valor].fecha_alta
            var campopass=respuesta[valor].pass;
            var campoadministrador=respuesta[valor].administrador;
            formulario.nombre.value=camponombre;
            formulario.apellido1.value=campoapellido1;
            formulario.apellido2.value=campoapellido2;
            formulario.alta.value=campofecha;
            formulario.password.value=campopass;
            formulario.administrador.value=campoadministrador;


           

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
    document.querySelector("input[type='button']").onclick = function(){
        

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
            
            
        

            var botoncito=document.querySelector("input[type='button']");

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





}

