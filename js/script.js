function trello(){

	var inpForm = document.createElement("input");
	var saveBoton = document.createElement("button");
	var textBoton = document.createTextNode("Guardar");

	// clases
	inpForm.setAttribute("id","valor");
	inpForm.setAttribute("placeholder", "Agregar texto")
	inpForm.classList.add("input","form-control");
	saveBoton.classList.add("boton-guardar", "btn", "btn-default");


	// nodos hijos
	box.appendChild(inpForm);
	box.appendChild(saveBoton);
	saveBoton.appendChild(textBoton);

	// agregar focus pq ya esta en html

	document.getElementById("valor").focus();

	saveBoton.addEventListener('click', function(){ //guardar

		var list = document.getElementById('valor').value;
		document.getElementById('valor').value = "";

		if(list == "" || list == null){
		alert("Debes ingresar un texto");
		return; 
		}

		var divTarea = document.getElementById('contiene'); //inputs
		var col = document.createElement('div');
		var text = document.createElement('h4');
		var textTarea = document.createTextNode(list);
		var insertar = document.createElement('a')
		var textNuevo = document.createTextNode("Añadir Tarjeta");
		

		//clases nuevas

		col.classList.add("col-xs-3","col-ms-3","col-md-3");
		text.setAttribute('class','name-list');


		//nodo
		divTarea.appendChild(col);
		col.appendChild(text);
		text.appendChild(textTarea);
		col.appendChild(insertar);
		insertar.appendChild(textNuevo);



   		insertar.addEventListener('click', function(){

		   	var txtArea = document.createElement('textarea');
		   		
		   	txtArea.classList.add("form-control", "estilo");
		   	txtArea.setAttribute("placeholder", "Agregar texto")
				
			text.appendChild(txtArea);
			txtArea.focus(); //focus en textarea

   		});
	
	});

}
   		
        
        
        //NO ME FUNCIONO AGREGAR EL BOTOS AÑADIR :( PARA HACER ALGO EXTRA)
   		/*var nuevoBoton = document.createElement("button");
        nuevoBoton.addEventListener("click", function () {
           
        var nuevoBoton= document.createTextNode("Añadir");
		insertar.appendChild(nuevoBoton);
		nuevoBoton.classList.add("btn", "btn-success", "d-block");       
                
		var txtArea = document.createElement("div");
        txtArea= document.createTextNode("").value;
       
       	col.appendChild(txtArea);
        col.appendChild(insertar);



        });*/
   		//OTRA FUNCION PAL BOTON
   		//text.addEventListener('click', function(){

   			//var guardaBoton = document.createElement("button");
   			/*guardaBoton.classList.add("boton-guardar", "btn", "btn-default");
   			text.appendChild(guardaBoton);

   			
   		});*/

