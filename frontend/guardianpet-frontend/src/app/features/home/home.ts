import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../core/services/auth.service';
import { MascotaService, Mascota } from '../../core/api/pet.service';
import { RecordService, RecordItem } from '../../core/api/record.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  private auth = inject(AuthService);
  private petsApi = inject(MascotaService);
  private recordApi = inject(RecordService);

  me?: User;
  mascotas: Mascota[] = [];
  seleccionada?: Mascota;
  historial: RecordItem[] = [];
  cargando = false;

  ngOnInit() {
    // si quieres refrescar /me:
    this.auth.me().subscribe({ next: u => this.me = u, error: () => (this.me = undefined) });
    this.cargarMisMascotas();
  }

  cargarMisMascotas() {
    this.cargando = true;
    this.petsApi.listMine().subscribe({
      next: (list) => {
        this.mascotas = list || [];
        this.seleccionada = this.mascotas[0];
        if (this.seleccionada) this.cargarHistorial(this.seleccionada.id);
      },
      complete: () => (this.cargando = false)
    });
  }

  seleccionarMascota(m: Mascota) {
    this.seleccionada = m;
    this.historial = []; // limpia la lista
    this.recordApi.listAll().subscribe({
      next: (resp) => {
        // si tu backend devuelve paginado { items, total, ... } usa items; si no, usa resp
        const items = Array.isArray(resp) ? resp : (resp?.items ?? []);
        this.historial = items.filter((r: any) => Number(r.mascota_id_fk) === Number(m.id));
      }
    });
  }

  cargarHistorial(mascotaId: number) {
    this.recordApi.listByPet(mascotaId).subscribe({
      next: (items) => (this.historial = items || [])
    });
  }

  iniciales(nombre: string) {
    return (nombre || '').split(' ').filter(Boolean).slice(0,2).map(p => p[0]?.toUpperCase()).join('');
  }
}
