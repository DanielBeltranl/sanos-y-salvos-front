import { useNavigate } from 'react-router'
import type { NotificacionUI, NotificationStatus } from '../../model/notificacionTypes'

const ESTADO_CONFIG: Record<NotificationStatus, { label: string; cardClass: string; badgeClass: string; dotClass: string }> = {
  PENDIENTE: {
    label: 'Nueva',
    cardClass: 'border-l-4 border-l-[#0f52ba] bg-white',
    badgeClass: 'bg-blue-50 text-[#0f52ba]',
    dotClass: 'bg-[#0f52ba]',
  },
  LEIDA: {
    label: 'Leída',
    cardClass: 'bg-white opacity-70',
    badgeClass: 'bg-slate-100 text-slate-500',
    dotClass: 'bg-slate-300',
  },
  ERROR: {
    label: 'Error',
    cardClass: 'border-l-4 border-l-red-400 bg-white',
    badgeClass: 'bg-red-50 text-red-600',
    dotClass: 'bg-red-400',
  },
}

function formatFecha(iso: string): string {
  const fecha = new Date(iso)
  const ahora = new Date()
  const diffMs = ahora.getTime() - fecha.getTime()
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDias === 0) return 'Hoy'
  if (diffDias === 1) return 'Ayer'
  if (diffDias < 7) return `Hace ${diffDias} días`
  return fecha.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })
}

interface Props {
  notificacion: NotificacionUI
}

export function NotificacionCard({ notificacion }: Props) {
  const navigate = useNavigate()
  const config = ESTADO_CONFIG[notificacion.estado]
  const navegable = notificacion.estado !== 'ERROR'

  return (
    <div
      role={navegable ? 'button' : undefined}
      onClick={navegable ? () => navigate(`/reportes/${notificacion.idCoincidencia}`) : undefined}
      className={`rounded-2xl border border-slate-100 shadow-sm p-4 flex gap-3 ${config.cardClass} ${navegable ? 'cursor-pointer active:scale-[0.98] transition-transform' : ''}`}
    >
      <div className="mt-1 shrink-0">
        <span className={`w-2.5 h-2.5 rounded-full block ${config.dotClass}`} />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <span className={`text-[10px] font-bold font-manrope px-2 py-0.5 rounded-full shrink-0 ${config.badgeClass}`}>
            {config.label}
          </span>
          <span className="text-[10px] font-inter text-slate-400 shrink-0">
            {formatFecha(notificacion.fechaCreacion)}
          </span>
        </div>

        <p className="text-sm font-inter text-[#191c1e] leading-relaxed">
          {notificacion.descripcion}
        </p>

        {notificacion.mensajeError && (
          <p className="text-xs font-inter text-red-500 bg-red-50 px-3 py-1.5 rounded-lg">
            {notificacion.mensajeError}
          </p>
        )}

        {navegable && (
          <span className="self-start text-xs font-semibold font-manrope text-[#0f52ba]">
            Ver reporte coincidente →
          </span>
        )}
      </div>
    </div>
  )
}
