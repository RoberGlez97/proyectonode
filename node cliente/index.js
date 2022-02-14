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



}