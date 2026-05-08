import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import type { Reporte } from '../../dashboardPage/model/reporteTypes'
import reportesMock from '../../dashboardPage/model/reportesMock.json'

export function useReporteDetailController() {
  const { id } = useParams<{ id: string }>()
  const [reporte, setReporte] = useState<Reporte | null>(null)
  const [cargando, setCargando] = useState(true)
  const [noEncontrado, setNoEncontrado] = useState(false)

  useEffect(() => {
    // TODO: GET /reportes/:id
    const found = (reportesMock as Reporte[]).find(r => r.id === Number(id))
    if (found) {
      setReporte(found)
    } else {
      setNoEncontrado(true)
    }
    setCargando(false)
  }, [id])

  return { reporte, cargando, noEncontrado }
}
