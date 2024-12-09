// components/CapabilityMap.js
import React from 'react';

export default function CapabilityMap() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#4CAF50' }}>Mapa de Capacidades de la Empresa CLARO</h1>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li>
          <strong>Gestión de Infraestructura Energética</strong>
          <ul>
            <li>Supervisión Operativa</li>
            <li>Mantenimiento Preventivo y Correctivo</li>
          </ul>
        </li>
        <li>
          <strong>Tecnología y Automatización</strong>
          <ul>
            <li>Integración de IoT</li>
            <li>Plataformas en la Nube</li>
            <li>Inteligencia Artificial y Analítica</li>
          </ul>
        </li>
        <li>
          <strong>Continuidad del Servicio</strong>
          <ul>
            <li>Gestión de Riesgos Energéticos</li>
            <li>Redundancia Operativa</li>
          </ul>
        </li>
        <li>
          <strong>Atención al Cliente</strong>
          <ul>
            <li>Resolución de Incidencias</li>
            <li>Calidad del Servicio</li>
          </ul>
        </li>
        <li>
          <strong>Capacitación y Gestión del Cambio</strong>
          <ul>
            <li>Programas de Capacitación Técnica</li>
            <li>Gestión del Cambio</li>
          </ul>
        </li>
        <li>
          <strong>Gestión de Recursos y Proveedores</strong>
          <ul>
            <li>Gestión de Proveedores</li>
            <li>Gestión de Recursos</li>
          </ul>
        </li>
        <li>
          <strong>Infraestructura Física</strong>
          <ul>
            <li>Expansión de Radiobases</li>
            <li>Rediseño de Espacios Técnicos</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
