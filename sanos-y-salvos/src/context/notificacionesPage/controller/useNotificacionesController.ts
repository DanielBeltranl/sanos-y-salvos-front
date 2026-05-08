import { useState, useEffect } from 'react'
import type { NotificacionUI } from '../model/notificacionTypes'
import { notificacionesMock } from '../model/notificacionMock'

export function useNotificacionesController() {
  const [notificaciones, setNotificaciones] = useState<NotificacionUI[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // TODO: GET /notificaciones?idUsuario=:id
    // El id del usuario se obtiene desde el token de Supabase
    setNotificaciones(notificacionesMock)
    setCargando(false)
  }, [])

  const pendientes = notificaciones.filter(n => n.estado === 'PENDIENTE').length

  return { notificaciones, pendientes, cargando }
}
