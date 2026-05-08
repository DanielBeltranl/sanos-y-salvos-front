export interface ReporteCreatePayload {
  idUsuario: number;
  tipoReporte: 'PERDIDO' | 'AVISTADO';
  tipoMascota: 'PERRO' | 'GATO' | 'OTRO';
  nombreMascota: string;
  color: string;
  tamano: 'PEQUENO' | 'MEDIANO' | 'GRANDE';
  raza: string;
  descripcion: string;
  direccion: string;
  estado: string;
  sexo: 'MACHO' | 'HEMBRA';
  fotoMascota: string;
}

export async function crearReporte(payload: ReporteCreatePayload): Promise<void> {
  // TODO: reemplazar con llamada real a la API
  // await axios.post('/api/reportes', payload)
  console.log('POST /api/reportes', payload)
}
