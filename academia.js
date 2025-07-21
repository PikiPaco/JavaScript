window.onload = function() {    //Función que se ejecuta al cargar la página.
        // Crear un comentario en el elemento body
        // Situación en h1 para colocar el comentario antes de éste, e inmediatamente después de body.
        const situacion = document.querySelector('h1')
        let comentario = document.createComment('Ejercicio realizado por: Francisco Belver Cano');              
        // Obtener una referencia al nodo padre: body
        var parentBody = situacion.parentNode;
        // Inserta el nuevo comentario antes de h1
        parentBody.insertBefore(comentario, situacion);       
       
        // Cambiar estilo del título principal       
        const tituloPrincipal = document.querySelector('h1');       // Situación en h1. 
        //Cambio de propiedades de presentación con style.setProperty
        tituloPrincipal.style.setProperty('width', '650px');
        tituloPrincipal.style.setProperty('margin', 'auto'); 
        tituloPrincipal.style.setProperty('background', 'green');
        tituloPrincipal.style.setProperty('text-align', 'center');
        tituloPrincipal.style.setProperty('font-weight', 'bold'); 
        tituloPrincipal.style.setProperty('border', '3px solid black');

        // Cambiar diseño de los títulos de las secciones
        let titulosSecciones = document.getElementsByTagName('h2'); // Situación en todos los h2's.
        for (let i = 0; i < titulosSecciones.length; i++) {
            titulosSecciones[i].classList.add('estiloEncabezado');  //Aplicación de clase estiloEncabezado al h2.
            
        }

        //Modificación de título de XXXXXXX a Aula Virtual
        let tituloAula = document.getElementById('aulaVirtual');      //Acceso por id.
        let padreSection = tituloAula.parentElement;              //Acceso al padre del elemento.
        padreSection.children[0].textContent = 'Aula Virtual';  //Cambio de texto de id Aula Virtual.
                        
        // Crear una lista desordenada con el nombre completo
        let nombreCompleto = 'Francisco Jesús Belver Cano'.split(' ');  //Separación de palabras por espacio.
        let profesor = document.getElementById('profesores');   //Acceso por id de profesores.
        let lista = document.createElement('ul');            //Creación de lista desordenada.

        // Creación de elementos de lista para cada palabra del nombre completo.
        nombreCompleto.forEach(palabra => {     
            let item = document.createElement('li');
            // Asignación de estilos al elemento de lista ya creado con palabra.
            item.textContent = palabra;
            item.style.setProperty('text-align', 'left');
            item.style.setProperty('font-style', 'normal');
            item.style.setProperty('font-size', 'medium');
            item.style.setProperty('background', 'white');
            lista.append(item);
        });

        // Asegurarse de que el diseño del elemento con id="profesores" no se vea afectado por estilo de Profesorado
        if (profesor) {
            profesor.appendChild(lista);
    }        
    
        // Crear enlace de FP a distancia
        let enlaceVirtual = document.querySelector('#aulaVirtual');     //Acceso por id.
        let enlace = document.createElement('a');                 //Creación de enlace.
        enlace.innerText = 'FP a Distancia de Andalucía';   //Texto del enlace.
        // Asignación de atributos al enlace.
        enlace.setAttribute('href', 'https://educacionadistancia.juntadeandalucia.es/formacionprofesional/login/index.php');      
        enlace.setAttribute('target', '_blank');
        document.body.append(enlace);   //Inserción del enlace en el body.
        // Obtener una referencia al nodo padre: section
        let parentSection = enlaceVirtual.parentNode;
        // Inserta el nuevo comentario antes de h1
        parentSection.append(enlace, enlaceVirtual); 
    
        // Eliminar filas de alumnos de baja
        let filas = document.querySelectorAll('table tr'); 
        filas.forEach(fila => {
            let celdas = fila.children; 
            for (let i = 0; i < celdas.length; i++) {
                if (celdas[i].textContent.includes('Baja')) {   //Acceso a las celdas de la fila con cada fila recorrida de celdas.
                    fila.remove();  //Eliminación de la fila.                   
                }
            }
        });
    };
    