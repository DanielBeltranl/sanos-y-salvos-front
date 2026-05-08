import { Route, Routes } from 'react-router';
import { MainLayout } from './context/commons/layouts/MainLayout';
import { RolSelectorView } from './context/rolSelectionPage/rolSelectorView.tsx';
import { RegisterView } from './context/registerPage/view/registerView.tsx';
import { DashboardView } from './context/dashboardPage/view/dashboardView.tsx';
import { CrearReporteView } from './context/crearReportePage/view/crearReporteView.tsx';
import { ReporteDetailView } from './context/reporteDetailPage/view/reporteDetailView.tsx';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<RolSelectorView />} />
        <Route path="/register/:userType" element={<RegisterView />} />
      </Route>
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/crear-reporte" element={<CrearReporteView />} />
      <Route path="/reportes/:id" element={<ReporteDetailView />} />
    </Routes>
  );
};
