export type NotificationStatus = 'PENDIENTE' | 'LEIDA' | 'ERROR'

// Shape exacto del API
export interface ApiNotificacion {
  id_notificacion: number
  estado_notificacion: NotificationStatus
  descripcion: string
  id_coincidencia: number
  id_usuario: number
  fecha_creacion: string  // ISO 8601 — viene como string desde REST
  mensajeError: string | null
}

// Modelo normalizado para la vista
export interface NotificacionUI {
  id: number
  estado: NotificationStatus
  descripcion: string
  idCoincidencia: number
  fechaCreacion: string
  mensajeError: string | null
}

export function mapApiNotificacion(api: ApiNotificacion): NotificacionUI {
  return {
    id: api.id_notificacion,
    estado: api.estado_notificacion,
    descripcion: api.descripcion,
    idCoincidencia: api.id_coincidencia,
    fechaCreacion: api.fecha_creacion,
    mensajeError: api.mensajeError,
  }
}
