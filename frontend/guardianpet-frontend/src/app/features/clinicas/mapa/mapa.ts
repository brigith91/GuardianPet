// src/app/features/clinicas/mapa/mapa.ts
import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { ClinicsService, Clinica } from '../../../core/services/clinics.service';

@Component({
  standalone: true,
  selector: 'app-clinicas-mapa',
  imports: [CommonModule],
  templateUrl: './mapa.html',
  styleUrls: ['./mapa.scss'],
})
export class ClinicasMapaComponent implements OnInit, AfterViewInit {
  private svc = inject(ClinicsService);

  clinics: Clinica[] = [];
  map!: L.Map;

  // guardamos los marcadores por id para encontrarlos rápido
  private markersById = new Map<number, L.Marker>();

  ngOnInit() {
    // Fix de iconos por defecto
    const DefaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    (L.Marker.prototype as any).options.icon = DefaultIcon;

    // Cargar clínicas (tu API paginada devuelve { items: [...] })
    this.svc.getClinicas().subscribe({
      next: (rows) => { this.clinics = rows ?? []; this.plotMarkers(); },
      error: () => { this.plotMarkers(); }
    });
  }

  ngAfterViewInit() {
    this.map = L.map('map', { zoomControl: true }).setView([4.710989, -74.072092], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    setTimeout(() => this.map.invalidateSize(), 0);
  }

  private plotMarkers() {
    if (!this.map) return;

    // limpiar marcadores previos
    this.markersById.forEach(m => m.remove());
    this.markersById.clear();

    if (!this.clinics.length) return;

    const bounds = L.latLngBounds([]);

    for (const c of this.clinics) {
      const lat = Number(c.latitud);
      const lng = Number(c.longitud);
      if (!isFinite(lat) || !isFinite(lng)) continue;

      const marker = L.marker([lat, lng]).addTo(this.map);
      marker.bindPopup(`
        <div><strong>${escapeHtml(c.tienda)}</strong></div>
        <div>${escapeHtml(c.direccion)}</div>
        <div>☎ ${escapeHtml(c.telefono)}</div>
        <div style="margin-top:6px">
          <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}">
            Abrir en Google Maps
          </a>
        </div>
      `);

      this.markersById.set(c.id, marker);
      bounds.extend([lat, lng]);
    }

    if (bounds.isValid()) this.map.fitBounds(bounds.pad(0.2));
    setTimeout(() => this.map.invalidateSize(), 0);
  }

  // ✅ método que llama el template: centra y abre el popup de esa clínica
  focus(c: Clinica) {
    if (!this.map) return;
    const marker = this.markersById.get(c.id);
    if (!marker) return;

    const ll = marker.getLatLng();
    this.map.setView(ll, 15, { animate: true });
    marker.openPopup();
  }
}

function escapeHtml(s: any): string {
  return String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch] as string));
}
