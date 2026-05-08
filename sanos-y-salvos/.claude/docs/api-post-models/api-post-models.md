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

que


* Estructura de envio de reporte

REPORTE POST OBJECT

{
idUsuario: number;
tipoReporte: 'PERDIDO' | 'AVISTADO';
tipoMascota: PERRO | GATO | OTRO
nombreMascota: string;
color: string;
tamano: 'PEQUENO' | 'MEDIANO' | 'GRANDE';
raza: string;
descripcion: string;
direccion: string;. t
estado: string;
sexo: 'MACHO' | 'HEMBRA';
fotoMascota: string;
}
