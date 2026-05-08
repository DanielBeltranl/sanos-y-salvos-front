import { useState, useEffect } from 'react';
import type { Reporte } from '../model/reporteTypes';
import reportesMock from '../model/reportesMock.json';
import { filtrarReportesCercanos } from '../model/geoUtils';
import { notificacionesMock } from '../../notificacionesPage/model/notificacionMock';

export interface UserLocation {
  lat: number;
  lng: number;
  accuracyMeters?: number;
}

const DEFAULT_LOCATION: UserLocation = { lat: -33.4489, lng: -70.6693 };
const RADIO_KM = 1;

// Máximo de lecturas a recolectar antes de decidir
const MAX_READINGS = 6;
// Tiempo máximo de espera en ms
const MAX_WAIT_MS = 14000;
// Si obtenemos una lectura con accuracy <= a este valor, la aceptamos de inmediato
const ACCURACY_THRESHOLD_M = 80;

function getBestPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    const readings: GeolocationPosition[] = [];
    let watchId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const finish = () => {
      clearTimeout(timeoutId);
      navigator.geolocation.clearWatch(watchId);
      if (readings.length === 0) {
        reject(new Error('Sin lecturas'));
        return;
      }
      // Elige la lectura con menor radio de incertidumbre
      resolve(readings.reduce((best, curr) =>
        curr.coords.accuracy < best.coords.accuracy ? curr : best
      ));
    };

    watchId = navigator.geolocation.watchPosition(
      pos => {
        readings.push(pos);
        // Si ya es suficientemente precisa, no esperamos más
        if (pos.coords.accuracy <= ACCURACY_THRESHOLD_M) {
          finish();
          return;
        }
        if (readings.length >= MAX_READINGS) finish();
      },
      err => {
        if (readings.length > 0) finish();
        else { clearTimeout(timeoutId); reject(err); }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    timeoutId = setTimeout(finish, MAX_WAIT_MS);
  });
}

export function useDashboardController() {
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
  const [reportesCercanos, setReportesCercanos] = useState<Reporte[]>([]);
  const [cargando, setCargando] = useState(true);
  const [locationStatus, setLocationStatus] = useState<'buscando' | 'ok' | 'fallback'>('buscando');
  const [accuracyMeters, setAccuracyMeters] = useState<number | null>(null);
  const notificaciones = notificacionesMock.filter(n => n.estado === 'PENDIENTE').length;

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationStatus('fallback');
      aplicarUbicacion(DEFAULT_LOCATION);
      return;
    }

    getBestPosition()
      .then(pos => {
        const loc: UserLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracyMeters: Math.round(pos.coords.accuracy),
        };
        setAccuracyMeters(Math.round(pos.coords.accuracy));
        setLocationStatus('ok');
        aplicarUbicacion(loc);
      })
      .catch(() => {
        setLocationStatus('fallback');
        aplicarUbicacion(DEFAULT_LOCATION);
      });
  }, []);

  function aplicarUbicacion(loc: UserLocation) {
    setUserLocation(loc);
    const cercanos = filtrarReportesCercanos(reportesMock as Reporte[], loc.lat, loc.lng, RADIO_KM);
    setReportesCercanos(cercanos);
    setCargando(false);
  }

  return { userLocation, reportesCercanos, cargando, locationStatus, accuracyMeters, notificaciones };
}
