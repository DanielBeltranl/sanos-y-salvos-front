* Informacion de los perfiles que se pueden enviar por el registro

POST OBJECTS

● PERSONA                                                                                                                                           
{                                                                                                                                                 
"email": "string",
"password": "string",                                                                                                                           
"phone": "long",
"userType": "persona",                                                                                                                          
"name": "string",
"lastName": "string"
}

CLINICA
{
"email": "string",
"password": "string",
"phone": "long",
"userType": "clinica",
"clinicaName": "string",
"address": "string"
}

REFUGIO
{
"email": "string",
"password": "string",
"phone": "long",
"userType": "refugio",
"refugioName": "string",
"adress": "string"
}

* Estructura de envio de reporte

REPORTE POST OBJECT

{
idUsuario: number;
tipoReporte: string;
tipoMascota: string;
nombreMascota: string;
color: string;
tamano: string;
raza: string;
descripcion: string;
direccion: string;
estado: string;
sexo: string;
fotoMascota: string;
}
