* ESTOS MODELOS SON REFERENCIAS PARA TRABAJAR. EN FUNCION DE LOS DATOS QUE REQUIERA LA VISTA, SO CONSUMIRAN LOS OBJETOS Y SE DEFINIRA LO QUE SE UTILIZARA EN EN BFF
* LOS VALORES DE LOS OBJETOS CON ENUM, DEBEN RESPETARSE


* Modelo de las notificaciones
* Usar para la creacion de notificaciones

RECEPCION NOTIFICACION

{
id_notificacion: number;
estado_notificacion: NotificationStatus;
descripcion: string;
id_coincidencia: number;
id_usuario: number;
fecha_creacion: Date;
mensajeError: string | null;
}



* Modelo de respuesta de reportes:
* EL ESTADO NO DEBE MANEJARSE DESTE EL FRONTEND
* Usar para las vistas de reportes

RECEPCION REPORTE

{
id: number;
idUsuario: number;
nombreMascota: string;
tipoMascota: string; // Podrías usar 'Perro' | 'Gato' si son fijos
raza: string;
sexo: 'MACHO' | 'HEMBRA';
tamano: 'PEQUENO' | 'MEDIANO' | 'GRANDE';
color: string;
descripcion: string;
fotoMascota: string; // URL
direccion: string;
coordenadas: string; // Formato "-lat, -long"
estado: 'ACTIVO' | 'INACTIVO' | 'RESUELTO';
tipoReporte: 'PERDIDO' | 'AVISTADO';

}