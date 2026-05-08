import { useState } from 'react'
import { useNavigate } from 'react-router'
import type { ReporteCreateForm } from '../model/reporteCreateSchema'
import { crearReporte } from '../model/reporteCreateApi'

export function useCrearReporteController() {
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  const goBack = () => navigate('/dashboard')

  const onSubmit = async (data: ReporteCreateForm) => {
    await crearReporte({
      idUsuario: 1, // TODO: obtener del contexto de autenticación
      estado: 'ACTIVO',
      fotoMascota: data.fotoMascota ?? '',
      tipoReporte: data.tipoReporte,
      tipoMascota: data.tipoMascota,
      nombreMascota: data.nombreMascota,
      color: data.color,
      tamano: data.tamano,
      raza: data.raza,
      descripcion: data.descripcion,
      direccion: data.direccion,
      sexo: data.sexo,
    })

    setSuccess(true)
    setTimeout(() => navigate('/dashboard'), 2200)
  }

  return { onSubmit, goBack, success }
}
