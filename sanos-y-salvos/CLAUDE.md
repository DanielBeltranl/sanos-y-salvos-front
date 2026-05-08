
* Descripcion del proyeto

Pagina de reporte y busqueda de mascotas. Se puede reportar la perdida de una mascota o una posible mascota perdida. Posee un motor de coincidencias capaz de avisar al creador de un reporte la existencia de una posible coincidecia con otro.

* Arquitectura

Se usara una arquitectura por capas, modelo - vista -controlador

* Estructura de carpetas

src -> context -> view_name -> model-folder (logica de negocio, si una logica requiere mas de una funcion para ser orquestada, crear sub carpetas con todos los archivos necesarios para mantener el orden de la aplicacion), view (debe contener internamente donde se guarden todos sus componentes y un archivo a nivel raiz, con el nombre de la vista donde se invoquen), controller (integracion de la vista con la loga de negocios)

* Tecnologias

React, talwind, axios, react-router 

* Orden de trabajo:

Cada vez que se genere un componente, debes preguntar si requiere consumir o enviar datos a una api o no. De ser si, debes crear la vista y el componente con una perspectiva de posterior integracion con una api, ya sea para enviar o recibir datos segun la respuesta del usuario 

TODAS LAS VISTAS DEBEN SER 100% RESPONSIVAS, es decir, debes procurar que tengan las medidas correctas tanto para moviles, tablets, como navegadores.

