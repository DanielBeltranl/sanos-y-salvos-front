import { useState, useEffect } from 'react'
import type { PerfilUsuario, ReporteResumen } from '../model/perfilTypes'
import { perfilMock, reportesDelUsuarioMock } from '../model/perfilMock'

export function usePerfilController() {
  const [perfil, setPerfil] = useState<PerfilUsuario | null>(null)
  const [reportes, setReportes] = useState<ReporteResumen[]>([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // TODO: reemplazar con llamadas al API
    // 1. Obtener el id y email desde el token de Supabase (localStorage o contexto de auth)
    // 2. GET /usuarios/:id  → ApiUsuario → mapApiUsuarioToPerfil(data, email)
    // 3. GET /reportes?idUsuario=:id → ReporteResumen[]
    setPerfil(perfilMock)
    setReportes(reportesDelUsuarioMock)
    setCargando(false)
  }, [])

  return { perfil, reportes, cargando }
}
